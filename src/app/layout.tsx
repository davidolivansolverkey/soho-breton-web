import type { Metadata, Viewport } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { SITE, getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "SOHO ★ | El Pub de Logroño",
    template: "%s | SOHO ★",
  },
  description: SITE.description,
  applicationName: "SOHO ★",
  keywords:
    "soho, logroño, pub, tardeo, música, cocktails, terraza, bretón de los herreros, discoteca, bar",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "SOHO ★ | El Pub de Logroño",
    description: "El referente del tardeo en Logroño. Hits del momento + temazos del recuerdo.",
    type: "website",
    locale: SITE.locale,
    siteName: "SOHO ★",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOHO ★ | El Pub de Logroño",
    description: "El referente del tardeo en Logroño. Hits del momento + temazos del recuerdo.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: SITE.locationName,
    legalName: SITE.legalName,
    url: baseUrl,
    telephone: SITE.telephone,
    image: `${baseUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      ...SITE.address,
    },
    hasMap:
      "https://maps.google.com/?q=Calle+Breton+de+los+Herreros+28+Logroño",
    sameAs: SITE.sameAs,
    priceRange: "€€",
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
