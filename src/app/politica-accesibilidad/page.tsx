"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PoliticaAccesibilidad() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#ff0080] opacity-[0.07] blur-[120px]" />
        <div className="absolute top-[50%] right-[5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-[#00bfff] opacity-[0.07] blur-[100px]" />
      </div>

      <Navigation />
      
      <main className="relative z-10 legal-page-content">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/" className="text-gray-500 hover:text-[#ff0080] transition-colors text-sm">
              Inicio
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-white text-sm">Política de Accesibilidad</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Política de Accesibilidad
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            Nuestro compromiso con la accesibilidad web
          </p>

          {/* Content */}
          <div className="space-y-10 max-w-4xl">
            
            {/* Compromiso */}
            <section className="legal-section">
              <h2 className="legal-title">Nuestro Compromiso</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed">
                  En SOHO Logroño estamos comprometidos a garantizar la accesibilidad digital para personas con diversas capacidades. Continuamente mejoramos la experiencia de usuario para todos y aplicamos los estándares de accesibilidad pertinentes.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  Nos esforzamos por garantizar que nuestro sitio web sea accesible para el mayor número posible de personas, independientemente de su tecnología o capacidades.
                </p>
              </div>
            </section>

            {/* Estándares */}
            <section className="legal-section">
              <h2 className="legal-title">Estándares de Accesibilidad</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Trabajamos para cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, nivel AA, establecidas por el World Wide Web Consortium (W3C). Estas pautas explican cómo hacer que el contenido web sea más accesible para personas con discapacidades.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  También nos adherimos al Real Decreto 1112/2018, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público, como referencia de buenas prácticas.
                </p>
              </div>
            </section>

            {/* Medidas */}
            <section className="legal-section">
              <h2 className="legal-title">Medidas de Accesibilidad Implementadas</h2>
              <p className="text-gray-500 mb-6">Acciones que hemos tomado para mejorar la accesibilidad</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="legal-card">
                  <div className="text-3xl mb-4">⌨️</div>
                  <h3 className="text-white font-semibold mb-3">Navegación por Teclado</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nuestro sitio web puede navegarse completamente utilizando únicamente el teclado, permitiendo a usuarios que no pueden usar un ratón acceder a todo el contenido.
                  </p>
                </div>

                <div className="legal-card">
                  <div className="text-3xl mb-4">🎨</div>
                  <h3 className="text-white font-semibold mb-3">Contraste de Colores</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Utilizamos combinaciones de colores con suficiente contraste para facilitar la lectura a personas con dificultades visuales o daltonismo.
                  </p>
                </div>

                <div className="legal-card">
                  <div className="text-3xl mb-4">📱</div>
                  <h3 className="text-white font-semibold mb-3">Diseño Responsive</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    El sitio web se adapta a diferentes tamaños de pantalla y dispositivos, incluyendo lectores de pantalla y otras tecnologías de asistencia.
                  </p>
                </div>

                <div className="legal-card">
                  <div className="text-3xl mb-4">🔤</div>
                  <h3 className="text-white font-semibold mb-3">Texto Alternativo</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Todas las imágenes incluyen texto alternativo descriptivo para usuarios que utilizan lectores de pantalla.
                  </p>
                </div>

                <div className="legal-card">
                  <div className="text-3xl mb-4">📝</div>
                  <h3 className="text-white font-semibold mb-3">Estructura Semántica</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Utilizamos HTML semántico con encabezados jerárquicos, listas y landmarks para facilitar la navegación con tecnologías de asistencia.
                  </p>
                </div>

                <div className="legal-card">
                  <div className="text-3xl mb-4">🔍</div>
                  <h3 className="text-white font-semibold mb-3">Texto Redimensionable</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    El texto puede ampliarse hasta un 200% sin pérdida de contenido o funcionalidad.
                  </p>
                </div>
              </div>
            </section>

            {/* Tecnologías de Asistencia */}
            <section className="legal-section">
              <h2 className="legal-title">Compatibilidad con Tecnologías de Asistencia</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Nuestro sitio web está diseñado para ser compatible con las siguientes tecnologías de asistencia:
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="text-[#1DB954]">✓</span>
                    <span>Lectores de pantalla (JAWS, NVDA, VoiceOver)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#1DB954]">✓</span>
                    <span>Software de ampliación de pantalla</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#1DB954]">✓</span>
                    <span>Software de reconocimiento de voz</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#1DB954]">✓</span>
                    <span>Dispositivos de entrada alternativos</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Limitaciones Conocidas */}
            <section className="legal-section">
              <h2 className="legal-title">Limitaciones Conocidas</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed mb-4">
                  A pesar de nuestros esfuerzos por garantizar la accesibilidad del sitio web, puede haber algunas limitaciones. A continuación se describen las limitaciones conocidas:
                </p>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff0080] mt-1">•</span>
                    <span><strong className="text-white">Contenido de terceros:</strong> Algunos contenidos incrustados de plataformas de terceros (como mapas o redes sociales) pueden no ser completamente accesibles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff0080] mt-1">•</span>
                    <span><strong className="text-white">Contenido antiguo:</strong> Algún contenido más antiguo puede no cumplir completamente con todos los estándares de accesibilidad actuales.</span>
                  </li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-4">
                  Trabajamos continuamente para identificar y solucionar estas limitaciones.
                </p>
              </div>
            </section>

            {/* Accesibilidad del Local */}
            <section className="legal-section">
              <h2 className="legal-title">Accesibilidad del Local Físico</h2>
              <div className="legal-card bg-gradient-to-br from-[#ff0080]/5 to-transparent border-[#ff0080]/20">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Además de la accesibilidad digital, en SOHO Logroño también nos preocupamos por la accesibilidad física de nuestro local:
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="text-[#ff0080]">★</span>
                    <span>Acceso a nivel de calle sin escalones</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#ff0080]">★</span>
                    <span>Espacios amplios para movilidad</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#ff0080]">★</span>
                    <span>Personal disponible para asistencia</span>
                  </li>
                </ul>
                <p className="text-gray-500 text-sm mt-4">
                  Si tienes necesidades específicas de accesibilidad, te recomendamos contactarnos antes de tu visita para que podamos prepararnos adecuadamente.
                </p>
              </div>
            </section>

            {/* Feedback */}
            <section className="legal-section">
              <h2 className="legal-title">Tu Feedback es Importante</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Nos tomamos muy en serio los comentarios sobre la accesibilidad de nuestro sitio web. Si encuentras alguna barrera de accesibilidad o tienes sugerencias para mejorar, por favor contacta con nosotros:
                </p>
                <div className="flex flex-col gap-2 mb-4">
                  <p className="text-gray-300">
                    <span className="text-[#ff0080]">Teléfono:</span> 941 236 361
                  </p>
                  <p className="text-gray-300">
                    <span className="text-[#ff0080]">Dirección:</span> Calle Mercaderes, 5, 26001 Logroño (La Rioja)
                  </p>
                </div>
                <p className="text-gray-500 text-sm">
                  Intentamos responder a los comentarios sobre accesibilidad en un plazo de 5 días hábiles.
                </p>
              </div>
            </section>

            {/* Fecha de actualización */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                Esta Política de Accesibilidad fue actualizada por última vez el 17 de diciembre de 2025.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

