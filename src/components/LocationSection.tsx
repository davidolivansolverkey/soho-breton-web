"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NeonBeerBottle, NeonCocktailGlass } from "./NeonDecorations";

export default function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      id="ubicacion"
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
          <NeonBeerBottle 
            className="mobile-top-left"
            color="#ffd700"
            size={95}
            delay={0.4}
            style={{ top: '8%', left: '2%' }}
          />
          <NeonCocktailGlass 
            className="mobile-bottom-right"
            color="#00bfff"
            size={85}
            delay={0.7}
            style={{ bottom: '12%', right: '2%' }}
          />
        </>
      )}

      {/* Dividers */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0080]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00bfff]/40 to-transparent" />

      <div className="section-container relative z-10">
        {/* Badge - estilo vintage */}
        <motion.div
          className="flex justify-center"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 2 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="location-badge">
            <div className="location-badge-inner">
              <span className="location-badge-icon">📍</span>
              <span className="location-badge-text">ENCUÉNTRANOS</span>
              <span className="location-badge-icon">📍</span>
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
            <span className="text-white">EN EL CORAZÓN DE</span>
            <br />
            <span className="neon-text-pink">LOGROÑO</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed" style={{ maxWidth: '500px', margin: '0 auto' }}>
            En pleno centro, a dos pasos de todo. El punto de encuentro perfecto para empezar la noche.
          </p>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          className="map-container"
          style={{ maxWidth: '900px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="map-wrapper">
            <iframe
              src="https://maps.google.com/maps?q=Calle+Bret%C3%B3n+de+los+Herreros+28,+Logro%C3%B1o,+La+Rioja,+Spain&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            />
          </div>

          {/* Address Card */}
          <div className="address-card">
            <div className="address-card-content">
              <div className="address-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="address-info">
                <h3 className="address-title">SOHO Bretón</h3>
                <p className="address-text">
                  Calle Bretón de los Herreros, 28<br />
                  26001 Logroño, La Rioja
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Calle+Breton+de+los+Herreros+28+Logroño"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                <span>Cómo llegar</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Terraza Card */}
        <motion.div
          style={{ maxWidth: '900px', margin: '40px auto 0' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="terraza-card">
            <div className="terraza-content">
              <div className="terraza-icon">
                <span>☀️</span>
              </div>
              <div className="terraza-info">
                <h3 className="terraza-title">AMPLIA TERRAZA</h3>
                <p className="terraza-text">
                  Disfruta del buen tiempo en pleno centro de Logroño
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
