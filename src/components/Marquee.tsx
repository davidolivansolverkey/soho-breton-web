"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-[#080808] border-t border-b border-white/5" style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="text-[#ff0080]/15 text-2xl md:text-4xl font-bold uppercase tracking-widest mx-8"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            SOHO ★ LOGROÑO ★ TARDEO ★ HITS ★ 80s ★ 90s ★ COPAS ★ TERRAZA ★
          </span>
        ))}
      </motion.div>
    </div>
  );
}

