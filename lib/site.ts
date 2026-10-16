export const isProd = process.env.SITE_ENV === "production";

/** Public origin, e.g. https://ethanzhou.dev — set SITE_URL at build time. */
export const siteOrigin = (process.env.SITE_URL ?? "https://ops.dappergentsocks.com").replace(/\/$/, "");

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Absolute URL of the site root, including basePath, with trailing slash. */
export const siteUrl = `${siteOrigin}${basePath}/`;

/** Prefix a public-folder path with basePath (static export does not do this for plain <a>/<img>). */
export const asset = (path: string) => `${basePath}${path}`;

export const person = {
  name: "Ethan Zhou",
  legalName: "Tianhao Zhou",
  title: "Full-stack Engineer",
  city: "Melbourne",
  email: "tianhao.zhou219@gmail.com",
  linkedin: "https://www.linkedin.com/in/tianhao-zhou-5853a277/",
  github: "https://github.com/htuohz",
  description:
    "Ethan Zhou, full-stack engineer in Melbourne. Legacy modernisation, data migration and platform integrations with React, TypeScript, Node.js, PostgreSQL and AWS.",
};
