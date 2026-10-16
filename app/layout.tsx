import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import { isProd, person, siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${person.name} | ${person.title}`;
const ogDescription =
  "Selected engineering work by Ethan Zhou: legacy modernisation, data migration and order automation.";

export const metadata: Metadata = {
  // Trailing slash matters: relative URLs below resolve against this, so basePath is kept.
  metadataBase: new URL(siteUrl),
  title,
  description: person.description,
  alternates: { canonical: "./" },
  robots: isProd ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "./",
    title,
    description: ogDescription,
    images: [{ url: "./og.png", width: 1200, height: 630, alt: `${person.name}, ${person.title} in ${person.city}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: ogDescription,
    images: ["./og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2F4F1" },
    { media: "(prefers-color-scheme: dark)", color: "#13202D" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  alternateName: person.legalName,
  jobTitle: person.title,
  url: siteUrl,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: person.city, addressCountry: "AU" },
  sameAs: [person.linkedin, person.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
