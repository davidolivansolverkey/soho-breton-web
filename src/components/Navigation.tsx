"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Galería", href: "#galeria" },
  { name: "Música", href: "#musica" },
  { name: "Encuéntranos", href: "#ubicacion" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the home page
  const isHomePage = pathname === "/";

  // Function to get the correct href for navigation items
  const getNavHref = (href: string) => {
    if (isHomePage) {
      return href; // Use anchor links on home page
    }
    return `/${href}`; // Redirect to home page with anchor
  };

  useEffect(() => {
    // Show nav after delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    
    // Scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Barra de navegación fija */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/30" 
            : "bg-transparent"
        } ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            {/* Logo SVG */}
            <Link href="/" className="block">
              <img 
                src="/logo-soho.svg" 
                alt="SOHO" 
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={getNavHref(item.href)}
                  className="text-sm lg:text-base uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Retro Style - Solo Desktop */}
            <div className="hidden md:block">
              <Link
                href={getNavHref("#ubicacion")}
                className="retro-btn-pink"
              >
                <span>Visítanos</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={getNavHref(item.href)}
            className="text-2xl font-bold uppercase tracking-wider text-white hover:text-[#ff0080] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
