import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "SOHO ★ | El Pub de Logroño",
  description: "SOHO - El referente del tardeo en Logroño. Hits del momento + temazos del recuerdo. Bretón de los Herreros 28, Logroño. Música de los 80s, 90s y actual.",
  keywords: "soho, logroño, pub, tardeo, música, cocktails, terraza, bretón de los herreros, discoteca, bar",
  openGraph: {
    title: "SOHO ★ | El Pub de Logroño",
    description: "El referente del tardeo en Logroño. Hits del momento + temazos del recuerdo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
