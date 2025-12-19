"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { NeonWineGlass, NeonMusicNote } from "./NeonDecorations";

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Cargar el script de EmbedSocial
  useEffect(() => {
    if (document.getElementById("EmbedSocialHashtagScript")) return;
    
    const script = document.createElement("script");
    script.id = "EmbedSocialHashtagScript";
    script.src = "https://embedsocial.com/cdn/ht.js";
    document.head.appendChild(script);
  }, []);

  return (
    <section
      ref={ref}
      id="galeria"
      className="relative overflow-hidden"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff0080]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00bfff]/5 rounded-full blur-3xl" />
      
      {/* Neon Decorations */}
      {isInView && (
        <>
          <NeonWineGlass 
            className="mobile-top-right"
            color="#E1306C"
            size={80}
            delay={0.5}
            style={{ top: '12%', right: '3%' }}
          />
          <NeonMusicNote 
            className="mobile-bottom-left"
            color="#833AB4"
            size={70}
            delay={0.8}
            style={{ bottom: '15%', left: '3%' }}
          />
        </>
      )}

      {/* Dividers - estilo consistente con otras secciones */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0080]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00bfff]/40 to-transparent" />

      <div className="section-container relative z-10">
        {/* Badge Social - estilo vintage con toque Instagram */}
        <motion.div
          className="flex justify-center"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 2 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="social-badge">
            <div className="social-badge-inner">
              <svg 
                className="social-badge-icon" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="social-badge-text">SOCIAL</span>
              <svg 
                className="social-badge-icon" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center"
          style={{ marginBottom: '50px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", marginBottom: '24px' }}
          >
            <span className="neon-text-pink">SÍGUENOS</span>
            <br />
            <span className="text-white">EN </span>
            <span className="neon-text-blue">INSTAGRAM</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed" style={{ maxWidth: '500px', margin: '0 auto' }}>
            No te pierdas ni un momento. Todas las noches, eventos y vibraciones en nuestro perfil.
          </p>
        </motion.div>

        {/* EmbedSocial Instagram Widget */}
        <motion.div
          className="instagram-feed-container"
          style={{ maxWidth: '100%', margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div 
            className="embedsocial-hashtag" 
            data-ref="af7ad5dcae74f223d7ead87bd3fa4d552013ca1b"
          >
            <a 
              className="feed-powered-by-es feed-powered-by-es-slider-img es-widget-branding" 
              href="https://embedsocial.com/social-media-aggregator/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram widget"
            >
              <img 
                src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" 
                alt="EmbedSocial"
              />
              <div className="es-widget-branding-text">Instagram widget</div>
            </a>
          </div>
        </motion.div>

        {/* Instagram CTA Button */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="https://www.instagram.com/sohobreton/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-instagram-btn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Seguir @sohobreton</span>
          </a>
          
          <p className="text-gray-500 text-sm mt-4">
            Dale follow y etiquétanos en tus stories
          </p>
        </motion.div>
      </div>
    </section>
  );
}
