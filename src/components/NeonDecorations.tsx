"use client";

import { motion } from "framer-motion";

// Botella de cerveza neón - Detallada
export const NeonBeerBottle = ({ 
  className = "", 
  color = "#ff0080",
  size = 80,
  delay = 0,
  style = {}
}: { 
  className?: string; 
  color?: string;
  size?: number;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className={`neon-decoration ${className}`}
    style={style}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, delay }}
  >
    <svg 
      width={size} 
      height={size * 1.6} 
      viewBox="0 0 50 80" 
      fill="none"
      className="neon-beer-bottle"
      style={{ 
        filter: `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color}) drop-shadow(0 0 16px ${color}) drop-shadow(0 0 32px ${color}40)`,
      }}
    >
      {/* Chapa/Tapa */}
      <path d="M18 3 L18 6 L32 6 L32 3" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="20" y1="3" x2="20" y2="6" stroke={color} strokeWidth="1" opacity="0.6" />
      <line x1="25" y1="3" x2="25" y2="6" stroke={color} strokeWidth="1" opacity="0.6" />
      <line x1="30" y1="3" x2="30" y2="6" stroke={color} strokeWidth="1" opacity="0.6" />
      
      {/* Cuello de la botella */}
      <path d="M20 6 L20 20 Q20 24 18 26 L14 32" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M30 6 L30 20 Q30 24 32 26 L36 32" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Cuerpo de la botella */}
      <path d="M14 32 L14 68 Q14 74 20 74 L30 74 Q36 74 36 68 L36 32" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Etiqueta detallada */}
      <rect x="16" y="40" width="18" height="24" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="18" y="42" width="14" height="8" rx="1" stroke={color} strokeWidth="1" fill="none" opacity="0.7" />
      <line x1="19" y1="54" x2="31" y2="54" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="19" y1="58" x2="28" y2="58" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="19" y1="61" x2="26" y2="61" stroke={color} strokeWidth="1" opacity="0.4" />
      
      {/* Brillo/reflejo */}
      <path d="M17 35 L17 65" stroke={color} strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M33 45 L33 55" stroke={color} strokeWidth="0.5" opacity="0.2" strokeLinecap="round" />
      
      {/* Nivel de líquido */}
      <path d="M16 50 Q25 48 34 50" stroke={color} strokeWidth="1" opacity="0.4" fill="none" />
    </svg>
  </motion.div>
);

// Copa de cocktail Martini - Detallada
export const NeonCocktailGlass = ({ 
  className = "", 
  color = "#00bfff",
  size = 70,
  delay = 0,
  style = {}
}: { 
  className?: string; 
  color?: string;
  size?: number;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className={`neon-decoration ${className}`}
    style={style}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, delay }}
  >
    <svg 
      width={size} 
      height={size * 1.15} 
      viewBox="0 0 60 70" 
      fill="none"
      className="neon-cocktail-glass"
      style={{ 
        filter: `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color}) drop-shadow(0 0 16px ${color}) drop-shadow(0 0 32px ${color}40)`,
      }}
    >
      {/* Borde superior de la copa */}
      <line x1="4" y1="8" x2="56" y2="8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Copa triangular */}
      <path d="M6 8 L30 48 L54 8" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Línea del líquido */}
      <path d="M14 20 L30 40 L46 20" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
      
      {/* Tallo */}
      <line x1="30" y1="48" x2="30" y2="58" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Base ovalada */}
      <ellipse cx="30" cy="62" rx="14" ry="4" stroke={color} strokeWidth="2.5" fill="none" />
      
      {/* Aceituna con palillo */}
      <line x1="38" y1="4" x2="38" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="38" cy="18" r="5" stroke={color} strokeWidth="2" fill="none" />
      <circle cx="38" cy="18" r="1.5" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      
      {/* Reflejo decorativo */}
      <path d="M10 12 L20 28" stroke={color} strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    </svg>
  </motion.div>
);

// Vinilo/Disco - Muy detallado
export const NeonVinyl = ({ 
  className = "", 
  color = "#9b59b6",
  size = 100,
  delay = 0,
  style = {}
}: { 
  className?: string; 
  color?: string;
  size?: number;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className={`neon-decoration ${className}`}
    style={style}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, delay }}
  >
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 80 80" 
      fill="none"
      className="neon-vinyl"
      style={{ 
        filter: `drop-shadow(0 0 5px ${color}) drop-shadow(0 0 10px ${color}) drop-shadow(0 0 20px ${color}) drop-shadow(0 0 40px ${color}40)`,
      }}
    >
      {/* Círculo exterior */}
      <circle cx="40" cy="40" r="38" stroke={color} strokeWidth="2" fill="none" />
      
      {/* Surcos del vinilo - múltiples círculos */}
      <circle cx="40" cy="40" r="35" stroke={color} strokeWidth="0.5" fill="none" opacity="0.4" />
      <circle cx="40" cy="40" r="32" stroke={color} strokeWidth="0.5" fill="none" opacity="0.35" />
      <circle cx="40" cy="40" r="29" stroke={color} strokeWidth="0.5" fill="none" opacity="0.3" />
      <circle cx="40" cy="40" r="26" stroke={color} strokeWidth="0.5" fill="none" opacity="0.3" />
      <circle cx="40" cy="40" r="23" stroke={color} strokeWidth="0.5" fill="none" opacity="0.25" />
      <circle cx="40" cy="40" r="20" stroke={color} strokeWidth="0.5" fill="none" opacity="0.2" />
      
      {/* Etiqueta central */}
      <circle cx="40" cy="40" r="14" stroke={color} strokeWidth="2" fill="none" />
      
      {/* Detalles de la etiqueta */}
      <circle cx="40" cy="40" r="11" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5" />
      <text x="40" y="38" textAnchor="middle" fill={color} fontSize="5" fontFamily="Arial" opacity="0.7">SOHO</text>
      <text x="40" y="44" textAnchor="middle" fill={color} fontSize="3" fontFamily="Arial" opacity="0.5">BRETÓN</text>
      
      {/* Agujero central */}
      <circle cx="40" cy="40" r="3" stroke={color} strokeWidth="2" fill="none" />
      
      {/* Brillo reflectante */}
      <path d="M55 25 Q62 32 58 42" stroke={color} strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />
      <path d="M22 55 Q28 60 35 58" stroke={color} strokeWidth="0.8" fill="none" opacity="0.2" strokeLinecap="round" />
    </svg>
  </motion.div>
);

// Copa de vino - Detallada
export const NeonWineGlass = ({ 
  className = "", 
  color = "#ff0080",
  size = 65,
  delay = 0,
  style = {}
}: { 
  className?: string; 
  color?: string;
  size?: number;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className={`neon-decoration ${className}`}
    style={style}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, delay }}
  >
    <svg 
      width={size} 
      height={size * 1.4} 
      viewBox="0 0 50 70" 
      fill="none"
      className="neon-wine-glass"
      style={{ 
        filter: `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color}) drop-shadow(0 0 16px ${color}) drop-shadow(0 0 32px ${color}40)`,
      }}
    >
      {/* Borde superior */}
      <ellipse cx="25" cy="5" rx="14" ry="3" stroke={color} strokeWidth="2" fill="none" />
      
      {/* Copa curva */}
      <path d="M11 5 Q9 20 15 32 Q20 38 25 40" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M39 5 Q41 20 35 32 Q30 38 25 40" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Nivel del vino */}
      <path d="M14 18 Q25 22 36 18" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M16 14 Q25 16 34 14" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
      
      {/* Tallo elegante */}
      <line x1="25" y1="40" x2="25" y2="56" stroke={color} strokeWidth="2" strokeLinecap="round" />
      
      {/* Base */}
      <ellipse cx="25" cy="62" rx="12" ry="4" stroke={color} strokeWidth="2" fill="none" />
      
      {/* Reflejo en la copa */}
      <path d="M15 10 L17 25" stroke={color} strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    </svg>
  </motion.div>
);

// Auriculares DJ - Muy detallados
export const NeonHeadphones = ({ 
  className = "", 
  color = "#00bfff",
  size = 80,
  delay = 0,
  style = {}
}: { 
  className?: string; 
  color?: string;
  size?: number;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className={`neon-decoration ${className}`}
    style={style}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, delay }}
  >
    <svg 
      width={size} 
      height={size * 0.85} 
      viewBox="0 0 80 68" 
      fill="none"
      className="neon-headphones"
      style={{ 
        filter: `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color}) drop-shadow(0 0 16px ${color}) drop-shadow(0 0 32px ${color}40)`,
      }}
    >
      {/* Diadema principal */}
      <path d="M10 38 Q10 10 40 10 Q70 10 70 38" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Diadema interior (acolchado) */}
      <path d="M18 36 Q18 18 40 18 Q62 18 62 36" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
      
      {/* Auricular izquierdo - carcasa exterior */}
      <rect x="2" y="32" width="18" height="28" rx="6" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Auricular izquierdo - almohadilla */}
      <rect x="5" y="35" width="12" height="22" rx="4" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Detalles del auricular izquierdo */}
      <line x1="7" y1="40" x2="15" y2="40" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="7" y1="44" x2="15" y2="44" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="7" y1="48" x2="15" y2="48" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="7" y1="52" x2="15" y2="52" stroke={color} strokeWidth="1" opacity="0.4" />
      
      {/* Auricular derecho - carcasa exterior */}
      <rect x="60" y="32" width="18" height="28" rx="6" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Auricular derecho - almohadilla */}
      <rect x="63" y="35" width="12" height="22" rx="4" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Detalles del auricular derecho */}
      <line x1="65" y1="40" x2="73" y2="40" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="65" y1="44" x2="73" y2="44" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="65" y1="48" x2="73" y2="48" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="65" y1="52" x2="73" y2="52" stroke={color} strokeWidth="1" opacity="0.4" />
      
      {/* Conexión cable (lado izquierdo) */}
      <path d="M11 60 L11 65 Q11 68 14 68" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
    </svg>
  </motion.div>
);

// Bola de discoteca - Muy detallada
export const NeonDiscoBall = ({ 
  className = "", 
  color = "#ffd700",
  size = 75,
  delay = 0,
  style = {}
}: { 
  className?: string; 
  color?: string;
  size?: number;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className={`neon-decoration ${className}`}
    style={style}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, delay }}
  >
    <svg 
      width={size} 
      height={size * 1.25} 
      viewBox="0 0 60 75" 
      fill="none"
      className="neon-disco-ball"
      style={{ 
        filter: `drop-shadow(0 0 5px ${color}) drop-shadow(0 0 10px ${color}) drop-shadow(0 0 20px ${color}) drop-shadow(0 0 40px ${color}40)`,
      }}
    >
      {/* Gancho/soporte */}
      <path d="M27 2 Q30 0 33 2" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Cable */}
      <line x1="30" y1="2" x2="30" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      
      {/* Enganche */}
      <circle cx="30" cy="14" r="2" stroke={color} strokeWidth="1.5" fill="none" />
      
      {/* Bola principal */}
      <circle cx="30" cy="40" r="22" stroke={color} strokeWidth="2.5" fill="none" />
      
      {/* Líneas horizontales (bandas) */}
      <ellipse cx="30" cy="24" rx="18" ry="5" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
      <ellipse cx="30" cy="32" rx="21" ry="6" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <ellipse cx="30" cy="40" rx="22" ry="6" stroke={color} strokeWidth="1.2" fill="none" opacity="0.7" />
      <ellipse cx="30" cy="48" rx="21" ry="6" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <ellipse cx="30" cy="56" rx="18" ry="5" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
      
      {/* Líneas verticales (meridianos) */}
      <path d="M30 18 L30 62" stroke={color} strokeWidth="0.8" opacity="0.4" />
      <path d="M18 22 Q12 40 18 58" stroke={color} strokeWidth="0.8" opacity="0.35" fill="none" />
      <path d="M42 22 Q48 40 42 58" stroke={color} strokeWidth="0.8" opacity="0.35" fill="none" />
      
      {/* Cuadrados/espejos (destellos) */}
      <rect x="24" y="30" width="4" height="4" rx="0.5" stroke={color} strokeWidth="1" fill="none" opacity="0.8" />
      <rect x="32" y="34" width="4" height="4" rx="0.5" stroke={color} strokeWidth="1" fill="none" opacity="0.7" />
      <rect x="20" y="42" width="4" height="4" rx="0.5" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <rect x="36" y="44" width="4" height="4" rx="0.5" stroke={color} strokeWidth="1" fill="none" opacity="0.7" />
      <rect x="28" y="50" width="4" height="4" rx="0.5" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      
      {/* Reflejos de luz saliendo */}
      <line x1="52" y1="35" x2="58" y2="30" stroke={color} strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
      <line x1="8" y1="45" x2="2" y2="48" stroke={color} strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
      <line x1="50" y1="50" x2="56" y2="55" stroke={color} strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    </svg>
  </motion.div>
);

// Nota musical simple - Más elaborada
export const NeonMusicNote = ({ 
  className = "", 
  color = "#ffd700",
  size = 50,
  delay = 0,
  style = {}
}: { 
  className?: string; 
  color?: string;
  size?: number;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className={`neon-decoration ${className}`}
    style={style}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay }}
  >
    <svg 
      width={size} 
      height={size * 1.3} 
      viewBox="0 0 40 52" 
      fill="none"
      className="neon-music-note"
      style={{ 
        filter: `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color}) drop-shadow(0 0 16px ${color}) drop-shadow(0 0 32px ${color}40)`,
      }}
    >
      {/* Barra vertical */}
      <line x1="28" y1="8" x2="28" y2="40" stroke={color} strokeWidth="3" strokeLinecap="round" />
      
      {/* Banderín doble */}
      <path d="M28 8 Q38 12 32 18 Q38 22 28 26" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Óvalo de la nota (más elaborado) */}
      <ellipse cx="18" cy="42" rx="10" ry="7" stroke={color} strokeWidth="2.5" fill="none" transform="rotate(-15, 18, 42)" />
      
      {/* Brillo interior */}
      <ellipse cx="16" cy="40" rx="4" ry="2.5" stroke={color} strokeWidth="1" fill="none" opacity="0.4" transform="rotate(-15, 16, 40)" />
    </svg>
  </motion.div>
);
