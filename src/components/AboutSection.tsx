"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NeonVinyl, NeonCocktailGlass } from "./NeonDecorations";

const features = [
  {
    icon: "🎵",
    title: "Música que Marca",
    description: "Los mejores hits de los 80s, 90s y lo más actual. DJ sessions que no paran.",
    color: "#ff0080",
  },
  {
    icon: "🍸",
    title: "Cócteles Premium",
    description: "Las mejores copas y cócteles de autor preparados por expertos.",
    color: "#00bfff",
  },
  {
    icon: "☀️",
    title: "Terraza Increíble",
    description: "El mejor tardeo en nuestra amplia terraza en el corazón de Logroño.",
    color: "#ffd700",
  },
  {
    icon: "✨",
    title: "Ambiente Único",
    description: "Inspiración londinense con neones, arte urbano y vibraciones únicas.",
    color: "#9b59b6",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      id="nosotros"
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
          <NeonVinyl 
            className="mobile-top-right"
            color="#9b59b6"
            size={120}
            delay={0.5}
            style={{ top: '10%', right: '3%' }}
          />
          <NeonCocktailGlass 
            className="mobile-bottom-left"
            color="#ff0080"
            size={85}
            delay={0.8}
            style={{ bottom: '15%', left: '2%' }}
          />
        </>
      )}

      {/* Dividers */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0080]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00bfff]/40 to-transparent" />

      <div className="section-container relative z-10">
        {/* Vintage Badge - Sobre Nosotros */}
        <motion.div
          className="flex justify-center"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="vintage-badge">
            <div className="vintage-badge-inner">
              <span className="vintage-badge-text">★ SOBRE NOSOTROS ★</span>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center"
          style={{ marginBottom: '80px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", marginBottom: '32px' }}
          >
            <span className="neon-text-pink">EL REFERENTE</span>
            <br />
            <span className="text-white">DEL TARDEO EN </span>
            <span className="neon-text-blue">LOGROÑO</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed" style={{ maxWidth: '600px', margin: '0 auto' }}>
            En el corazón de Logroño, SOHO trae la esencia del mítico barrio londinense. 
            Un espacio donde los neones brillan y cada noche es inolvidable.
          </p>
        </motion.div>

        {/* Features - Bento Grid Style */}
        <div 
          className="grid gap-4 md:gap-5"
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div 
                className="feature-card"
                style={{
                  '--feature-color': feature.color,
                } as React.CSSProperties}
              >
                {/* Icon */}
                <div className="feature-card-icon">
                  <span>{feature.icon}</span>
                </div>
                
                {/* Content */}
                <div className="feature-card-content">
                  <h3 className="feature-card-title">{feature.title}</h3>
                  <p className="feature-card-desc">{feature.description}</p>
                </div>

                {/* Hover glow */}
                <div 
                  className="feature-card-glow"
                  style={{ background: `radial-gradient(circle at 0% 50%, ${feature.color}15 0%, transparent 50%)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote con comillas superpuestas */}
        <motion.div
          style={{ marginTop: '100px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="relative" style={{ maxWidth: '650px', margin: '0 auto' }}>
            {/* Comilla izquierda grande */}
            <span 
              className="absolute -top-8 -left-4 md:-top-10 md:-left-6 text-7xl md:text-9xl font-serif select-none pointer-events-none"
              style={{ 
                color: '#ff0080',
                opacity: 0.25,
                lineHeight: 1,
              }}
            >
              "
            </span>
            
            {/* Comilla derecha grande */}
            <span 
              className="absolute -bottom-12 -right-4 md:-bottom-16 md:-right-6 text-7xl md:text-9xl font-serif select-none pointer-events-none"
              style={{ 
                color: '#ff0080',
                opacity: 0.25,
                lineHeight: 1,
              }}
            >
              "
            </span>
            
            <p className="text-xl md:text-2xl font-light italic text-white/80 leading-relaxed text-center px-8">
              El lugar donde cada noche es diferente, pero la buena música 
              <span className="text-[#ff0080] not-italic font-semibold"> siempre </span> 
              está presente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
