"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0 w-full h-full md:hidden"
        style={{
          backgroundImage: "url('/hero-background-mobile.svg')",
          backgroundSize: "auto 200%",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Background Image - Desktop */}
      <div 
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{
          backgroundImage: "url('/hero-background.svg')",
          backgroundSize: "auto 160%",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Scanlines / Trama overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.15) 2px,
              rgba(0, 0, 0, 0.15) 4px
            )
          `,
          backgroundSize: '100% 4px',
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10,10,10,0.4) 100%)',
        }}
      />

      {/* Cartel Neón "En el corazón de Logroño" - Solo móvil (arriba) */}
      <div 
        className={`absolute top-32 left-1/2 -translate-x-1/2 z-20 md:hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        style={{ transitionDelay: '0.3s' }}
      >
        <div className="neon-sign-container">
          <div className="neon-sign-frame neon-sign-screws">
            <span className="neon-sign-text">En el corazón de Logroño</span>
          </div>
        </div>
      </div>

      <div className="section-container relative z-10 text-center pt-24 md:pt-32 flex flex-col items-center gap-6 md:gap-9">
        {/* Cartel Neón - Solo desktop (centrado con el contenido) */}
        <div 
          className={`hidden md:block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="neon-sign-container">
            <div className="neon-sign-frame neon-sign-screws">
              <span className="neon-sign-text">En el corazón de Logroño</span>
            </div>
          </div>
        </div>

        {/* Main Logo - SOHO SVG */}
        <div
          className={`flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{ transitionDelay: '0.6s' }}
        >
          <img 
            src="/logo-soho.svg" 
            alt="SOHO" 
            className="h-24 md:h-36 lg:h-44 w-auto neon-logo-animation"
          />
        </div>

        {/* Subtitle - Hits */}
        <p
          className={`text-lg md:text-2xl font-light tracking-wide mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.9s' }}
        >
          <span className="neon-text-blue">Hits del momento</span>
          {" "}<span className="text-white/70 mx-2">+</span>{" "}
          <span className="text-[#ff0080]" style={{ 
            textShadow: '0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink)' 
          }}>Temazos del recuerdo</span>
        </p>

      </div>

      {/* Botón Cómo llegar - Posicionado en la parte inferior */}
      <div
        className={`absolute bottom-28 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: '1.2s' }}
      >
        <a href="#ubicacion" className="british-road-sign group">
          <span className="british-road-sign-arrow animate-bounce-x">➤</span>
          <span className="british-road-sign-text">Cómo llegar</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1.5s' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#ff0080] rounded-full mt-2 scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
