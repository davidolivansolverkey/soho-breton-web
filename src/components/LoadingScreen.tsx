"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      {/* Ambient glow background */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,0,128,0.15) 0%, transparent 70%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1.2, 1],
          opacity: [0, 0.8, 0.6]
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo con efecto de encendido neón */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.3, 1, 0.7, 1, 0.5, 1],
          }}
          transition={{ 
            duration: 1.2,
            times: [0, 0.1, 0.2, 0.35, 0.5, 0.7, 1],
            ease: "easeOut"
          }}
        >
          <motion.img
            src="/logo-soho.svg"
            alt="SOHO"
            className="h-20 md:h-28 w-auto"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255, 0, 128, 0.8)) drop-shadow(0 0 20px rgba(255, 0, 128, 0.5)) drop-shadow(0 0 40px rgba(255, 0, 128, 0.3))"
            }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
