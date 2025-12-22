export const SITE = {
  name: "SOHO ★",
  legalName: "MAVICOL BAR SL",
  locationName: "SOHO Bretón",
  description:
    "SOHO - El referente del tardeo en Logroño. Hits del momento + temazos del recuerdo. Bretón de los Herreros 28, Logroño. Música de los 80s, 90s y actual.",
  locale: "es_ES",
  address: {
    streetAddress: "Calle Bretón de los Herreros, 28",
    postalCode: "26001",
    addressLocality: "Logroño",
    addressRegion: "La Rioja",
    addressCountry: "ES",
  },
  telephone: "+34 941 236 361",
  sameAs: ["https://www.instagram.com/sohobreton/"],
} as const;

export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_URL ||
    "";

  // VERCEL_URL viene sin protocolo.
  const withProtocol =
    raw && !raw.startsWith("http") ? `https://${raw}` : raw;

  const fallback =
    process.env.NODE_ENV === "production"
      ? "https://sohobreton.es"
      : "http://localhost:3000";

  return (withProtocol || fallback).replace(/\/+$/, "");
}

export function absoluteUrl(pathname: string) {
  const base = getSiteUrl();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
