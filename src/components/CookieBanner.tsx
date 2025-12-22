"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(() => {
    if (typeof window === "undefined") return false;
    return Boolean(localStorage.getItem("cookieConsent"));
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 50);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: true,
      preferences: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    closeBanner();
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: false,
      preferences: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    closeBanner();
  };

  const closeBanner = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      setShowFloatingButton(true);
    }, 300);
  };

  const openBanner = () => {
    setShowFloatingButton(false);
    setIsVisible(true);
    setTimeout(() => setIsAnimating(true), 50);
  };

  return (
    <>
      {/* Floating Cookie Button */}
      {showFloatingButton && (
        <button
          onClick={openBanner}
          className="fixed bottom-6 left-6 z-[99] w-14 h-14 rounded-full bg-[#1a1a1a] border-2 border-white/20 shadow-xl shadow-black/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#ff0080] hover:shadow-[#ff0080]/30 group"
          aria-label="Configuración de cookies"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">🍪</span>
        </button>
      )}

      {/* Cookie Banner */}
      {isVisible && (
        <div 
          className={`fixed bottom-0 left-0 right-0 z-[100] transition-all duration-300 ${
            isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <div className="relative bg-[#0a0a0a] border-t-2 border-white/10">
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0080]/30 to-transparent" />
            
            <div className="section-container">
              <div style={{ paddingTop: '28px', paddingBottom: '28px' }}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                  
                  {/* Content */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border-2 border-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🍪</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="text-white font-bold text-base md:text-lg mb-1"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                      >
                        Utilizamos Cookies
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Usamos cookies propias y de terceros para mejorar tu experiencia.{" "}
                        <Link 
                          href="/politica-cookies" 
                          className="text-[#ff0080] hover:text-white underline underline-offset-2 transition-colors"
                        >
                          Más información
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-row items-center gap-3 lg:flex-shrink-0">
                    <button onClick={handleAcceptNecessary} className="retro-btn-outline">
                      Solo necesarias
                    </button>
                    <button onClick={handleAcceptAll} className="retro-btn-pink">
                      Aceptar todas
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
