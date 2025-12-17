"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a]">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0080]/40 to-transparent" />

      {/* Main Footer Content */}
      <div className="section-container" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
        <div className="flex flex-col items-center text-center">
          
          {/* Logo SOHO */}
          <Link href="/" className="inline-block" style={{ marginBottom: '2.5rem' }}>
            <img 
              src="/logo-soho.svg" 
              alt="SOHO" 
              className="h-16 md:h-20 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Tagline */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed" style={{ maxWidth: '400px', marginBottom: '3rem' }}>
            El referente del tardeo en Logroño.<br />
            Hits del momento + temazos del recuerdo.
          </p>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/sohobreton/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-footer-btn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@sohobreton</span>
          </a>

          {/* Address */}
          <div className="text-gray-600 text-sm" style={{ marginTop: '3rem' }}>
            <p>Calle Bretón de los Herreros, 28 · 26001 Logroño, La Rioja</p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
            <Link 
              href="/aviso-legal" 
              className="text-gray-500 hover:text-[#ff0080] text-xs md:text-sm transition-colors"
            >
              Aviso Legal
            </Link>
            <Link 
              href="/politica-privacidad" 
              className="text-gray-500 hover:text-[#ff0080] text-xs md:text-sm transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link 
              href="/politica-cookies" 
              className="text-gray-500 hover:text-[#ff0080] text-xs md:text-sm transition-colors"
            >
              Política de Cookies
            </Link>
            <Link 
              href="/politica-accesibilidad" 
              className="text-gray-500 hover:text-[#ff0080] text-xs md:text-sm transition-colors"
            >
              Accesibilidad
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-gray-600" style={{ marginTop: '3.5rem', paddingTop: '2.5rem' }}>
          <p>© {currentYear} SOHO Logroño · Bebe con responsabilidad</p>
        </div>
      </div>

      {/* Kit Digital Section */}
      <div className="kit-digital-section">
        <div className="section-container">
          <div className="kit-digital-container">
            <img 
              src="/images/kit-digital.png" 
              alt="Financiado por la Unión Europea - NextGenerationEU - Gobierno de España - Plan de Recuperación, Transformación y Resiliencia" 
              className="kit-digital-image"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
