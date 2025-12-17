"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NeonHeadphones, NeonDiscoBall } from "./NeonDecorations";

export default function MusicSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      id="musica"
      className="relative overflow-hidden"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-[#1DB954]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#ff0080]/5 rounded-full blur-3xl" />
      
      {/* Neon Decorations */}
      {isInView && (
        <>
          <NeonHeadphones 
            className="hide-mobile"
            color="#00bfff"
            size={100}
            delay={0.4}
            style={{ top: '8%', left: '2%' }}
          />
          <NeonDiscoBall 
            className="hide-mobile"
            color="#ffd700"
            size={90}
            delay={0.7}
            style={{ bottom: '10%', right: '2%' }}
          />
        </>
      )}

      {/* Dividers */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1DB954]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0080]/40 to-transparent" />

      <div className="section-container relative z-10">
        {/* Badge - estilo vintage */}
        <motion.div
          className="flex justify-center"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="music-badge">
            <div className="music-badge-inner">
              <span className="music-badge-icon">🎵</span>
              <span className="music-badge-text">LA MÚSICA</span>
              <span className="music-badge-icon">🎵</span>
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
            <span className="neon-text-pink">HITS DEL MOMENTO</span>
            <br />
            <span className="text-white">+ </span>
            <span className="neon-text-blue">TEMAZOS DEL RECUERDO</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed" style={{ maxWidth: '550px', margin: '0 auto' }}>
            Nuestros DJs mezclan lo mejor de cada década para crear 
            una atmósfera que te hará bailar toda la noche.
          </p>
        </motion.div>

        {/* Spotify Embed Widget */}
        <motion.div
          className="spotify-embed-container"
          style={{ maxWidth: '700px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="spotify-embed-wrapper">
            <iframe 
              src="https://open.spotify.com/embed/playlist/7BL8iZJsAJeaa3agSJl381?utm_source=generator&theme=0"
              width="100%" 
              height="452" 
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="spotify-iframe"
            />
          </div>
          
          {/* Spotify CTA */}
          <div className="spotify-cta">
            <a 
              href="https://open.spotify.com/playlist/0vknKlPbeQIbccCDYPGJiv"
              target="_blank"
              rel="noopener noreferrer"
              className="spotify-open-btn"
            >
              <svg className="spotify-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span>Abrir en Spotify</span>
            </a>
          </div>
        </motion.div>

        {/* DJ Sessions Card */}
        <motion.div
          className="mt-16"
          style={{ maxWidth: '700px', margin: '60px auto 0' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="dj-sessions-card">
            {/* Borde superior con gradiente */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff0080] via-[#00bfff] to-[#1DB954]" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
              {/* Vinyl Icon */}
              <div className="vinyl-icon">
                <div className="vinyl-disc">
                  <div className="vinyl-label">
                    <span>DJ</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left flex-1">
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="text-white">DJ SESSIONS</span>{" "}
                  <span className="text-[#ff0080]">EVERY NIGHT</span>
                </h3>
                <p className="text-gray-400 mb-5 text-sm md:text-base leading-relaxed">
                  Nuestros DJs residentes y artistas invitados crean la 
                  banda sonora perfecta para cada noche.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="music-tag pink">JUE - MAR</span>
                  <span className="music-tag blue">LIVE DJs</span>
                  <span className="music-tag green">HITS & CLASSICS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
