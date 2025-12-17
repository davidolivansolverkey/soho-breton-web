# SOHO ★ Logroño - Landing Page

Landing page para SOHO, el pub de referencia del tardeo en Logroño con inspiración del Soho londinense.

## 🌟 Características

- **Diseño Neón**: Efectos de luz neón con colores rosa y azul característicos
- **Animaciones Fluidas**: Transiciones y animaciones con Framer Motion
- **Estética Graffiti**: Elementos visuales inspirados en el arte urbano
- **Responsive**: Diseño adaptado para móviles, tablets y desktop
- **Tema Oscuro**: Ambiente nocturno que refleja la esencia del local

## 🛠️ Tecnologías

- **Next.js 16** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura

```
src/
├── app/
│   ├── globals.css     # Estilos globales y efectos neón
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página principal
├── components/
│   ├── Navigation.tsx      # Barra de navegación
│   ├── HeroSection.tsx     # Sección principal con logo
│   ├── AboutSection.tsx    # Sobre nosotros
│   ├── GallerySection.tsx  # Galería de fotos
│   ├── MusicSection.tsx    # Sección de música
│   ├── LocationSection.tsx # Ubicación y horarios
│   ├── Footer.tsx          # Pie de página
│   └── LoadingScreen.tsx   # Pantalla de carga
└── public/
    └── images/         # Imágenes del pub
```

## 🖼️ Imágenes

Para añadir imágenes reales del pub:

1. Coloca las imágenes en `public/images/`
2. Las imágenes de la galería se nombran: `gallery-1.jpg`, `gallery-2.jpg`, etc.
3. Reemplaza los placeholders en `GallerySection.tsx`

### Efectos de imagen recomendados:
- Fotos en blanco y negro con overlays de color
- Graffiti o trazos superpuestos
- Filtros que mantengan la estética neón

## 🎨 Colores del Tema

```css
--neon-pink: #ff0080;
--neon-blue: #00bfff;
--neon-yellow: #ffd700;
--neon-purple: #9b59b6;
--background: #0a0a0a;
```

## 📍 Información del Local

**SOHO Logroño**
- 📍 Bretón de los Herreros 28, Logroño
- 🕐 Jueves a Martes (Miércoles cerrado)
- 🎵 Música 80s, 90s y actual
- ☀️ Tardeo con terraza

## 📱 Redes Sociales

- Instagram: @soholobreton
- Facebook: /soholobreton

---

Desarrollado con ❤️ para SOHO Logroño
