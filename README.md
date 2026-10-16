# Ethan Zhou portfolio

Single-page portfolio built with Next.js (App Router) as a fully static export.

## Develop

Requires Node.js 20.9+ (`.nvmrc` pins 22; run `nvm use` first).

```bash
npm install
npm run dev        # http://localhost:3000/portfolio-preview/
```

## Build

The build output goes to `out/`. Two environment variables control where it will be served:

| Variable   | Preview (default)                     | Production                  |
|------------|---------------------------------------|-----------------------------|
| `SITE_ENV` | anything other than `production`      | `production`                |
| `SITE_URL` | `https://ops.dappergentsocks.com`     | `https://tianhaozhou.com`     |

- Preview builds are served under `/portfolio-preview`, marked `noindex`, and `robots.txt` disallows everything.
- Production builds are served from the domain root, indexable, with a sitemap.

```bash
SITE_ENV=production SITE_URL=https://tianhaozhou.com npm run build
npm run preview    # serves out/ locally
```

## Content still to fill

Search `app/page.tsx` for `<Fill>`: three values are marked and render highlighted until replaced. A production build fails while any remain.

## Photo

Put a square photo at `public/ethan-zhou.webp` and it appears in the header automatically.

## Deploy (GitHub Actions)

Every push to `master` (or a manual run from the Actions tab) runs `.github/workflows/deploy.yml`: `npm ci`, typecheck, build, then `rsync -az --delete out/` over SSH.

Repository **variables** (Settings → Secrets and variables → Actions → Variables):

| Variable   | Value                                                                  |
|------------|------------------------------------------------------------------------|
| `SITE_ENV` | `preview` (default) or `production`                                    |
| `SITE_URL` | `https://ops.dappergentsocks.com` for preview, `https://tianhaozhou.com` for production |

`SITE_ENV` also picks the target: `/srv/portfolio` for production, `/srv/portfolio-preview` otherwise. Each deploy is uploaded to `releases/<UTC time>-<sha>/`, then the `current` symlink is switched to it; the newest 5 releases are kept, so rolling back is re-pointing `current`. A production build fails while any `<Fill>` placeholder remains.

Repository **secrets**:

| Secret            | Value                                                                    |
|-------------------|--------------------------------------------------------------------------|
| `VPS_HOST`        | Droplet IP or hostname                                                   |
| `VPS_USER`        | `deploy`, a dedicated user (not the one running the Shopify/YunExpress service) |
| `VPS_SSH_KEY`     | Private key whose public half is in `/home/deploy/.ssh/authorized_keys`  |
| `VPS_KNOWN_HOSTS` | Output of `ssh-keyscan -t ed25519 <host>`, so the runner verifies the server |

### Caddy

Live in `/etc/caddy/Caddyfile` on the VPS (back it up and run `caddy validate` before reloading):

```
tianhaozhou.com {
  root * /srv/portfolio/current
  encode zstd gzip
  try_files {path} {path}/index.html =404
  header X-Content-Type-Options nosniff
  header /_next/static/* Cache-Control "public, max-age=31536000, immutable"
  file_server
}

www.tianhaozhou.com {
  redir https://tianhaozhou.com{uri} 308
}
```

The old preview path, inside the `ops.dappergentsocks.com` block, now only redirects:

```
handle_path /portfolio-preview* {
  redir https://tianhaozhou.com{uri} 308
}
```

To serve a preview build again, set `SITE_ENV=preview` and restore a `route /portfolio-preview/*` block rooted at `/srv/portfolio-preview/current`.
