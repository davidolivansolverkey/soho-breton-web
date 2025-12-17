"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PoliticaCookies() {
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
            <span className="text-white text-sm">Política de Cookies</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Política de Cookies
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            Información detallada sobre el uso de cookies en nuestro sitio web
          </p>

          {/* Content */}
          <div className="space-y-10 max-w-4xl">
            
            {/* ¿Qué son las Cookies? */}
            <section className="legal-section">
              <h2 className="legal-title">¿Qué son las Cookies?</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas nuestro sitio web. Estas cookies nos permiten recordar tus preferencias, analizar el tráfico del sitio y personalizar tu experiencia.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  En SOHO Logroño, utilizamos cookies para mejorar la funcionalidad de nuestro sitio web y proporcionarte una mejor experiencia de usuario. Esta política explica qué tipos de cookies utilizamos y cómo puedes gestionarlas.
                </p>
              </div>
            </section>

            {/* Tipos de Cookies */}
            <section className="legal-section">
              <h2 className="legal-title">Tipos de Cookies que Utilizamos</h2>
              <p className="text-gray-500 mb-6">Clasificación según su finalidad y duración</p>
              
              <div className="space-y-6">
                <div className="legal-card border-l-4 border-l-[#1DB954]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold">Cookies Necesarias</h3>
                    <span className="text-xs bg-[#1DB954]/20 text-[#1DB954] px-3 py-1 rounded-full">Siempre activas</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar. Incluyen cookies que permiten funciones básicas como la navegación por las páginas y el acceso a áreas seguras del sitio web.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium text-gray-400 mb-2">Ejemplos:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Cookies de sesión para mantener tu sesión activa</li>
                      <li>Cookies de seguridad para proteger contra ataques</li>
                      <li>Cookies de funcionalidad básica del sitio</li>
                    </ul>
                  </div>
                </div>

                <div className="legal-card border-l-4 border-l-[#00bfff]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold">Cookies Analíticas</h3>
                    <span className="text-xs bg-[#00bfff]/20 text-[#00bfff] px-3 py-1 rounded-full">Opcionales</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Estas cookies nos permiten analizar cómo utilizas nuestro sitio web, qué páginas visitas más frecuentemente y cómo llegas a nuestro sitio. Esta información nos ayuda a mejorar la funcionalidad y el contenido del sitio.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium text-gray-400 mb-2">Ejemplos:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Google Analytics para estadísticas de visitas</li>
                      <li>Análisis de comportamiento del usuario</li>
                      <li>Métricas de rendimiento del sitio</li>
                    </ul>
                  </div>
                </div>

                <div className="legal-card border-l-4 border-l-[#9b59b6]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold">Cookies de Preferencias</h3>
                    <span className="text-xs bg-[#9b59b6]/20 text-[#9b59b6] px-3 py-1 rounded-full">Opcionales</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Estas cookies permiten que el sitio web recuerde información que cambia la forma en que se comporta o se ve, como tu idioma preferido o la región en la que te encuentras.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium text-gray-400 mb-2">Ejemplos:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Preferencias de idioma</li>
                      <li>Configuraciones de accesibilidad</li>
                      <li>Preferencias de visualización</li>
                    </ul>
                  </div>
                </div>

                <div className="legal-card border-l-4 border-l-[#ff0080]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold">Cookies de Marketing</h3>
                    <span className="text-xs bg-[#ff0080]/20 text-[#ff0080] px-3 py-1 rounded-full">Opcionales</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Estas cookies se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar anuncios que sean relevantes y atractivos para el usuario individual.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium text-gray-400 mb-2">Ejemplos:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Publicidad personalizada</li>
                      <li>Seguimiento de campañas publicitarias</li>
                      <li>Análisis de efectividad de marketing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Duración de las Cookies */}
            <section className="legal-section">
              <h2 className="legal-title">Duración de las Cookies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">Cookies de Sesión</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Se eliminan automáticamente cuando cierras el navegador. Se utilizan para mantener tu sesión activa durante la navegación.
                  </p>
                </div>
                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">Cookies Persistentes</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Permanecen en tu dispositivo hasta que las elimines manualmente o expiren. Se utilizan para recordar tus preferencias.
                  </p>
                </div>
              </div>
            </section>

            {/* Gestión de Cookies */}
            <section className="legal-section">
              <h2 className="legal-title">Gestión de Cookies</h2>
              <p className="text-gray-500 mb-6">Cómo puedes controlar y gestionar las cookies</p>
              
              <div className="space-y-6">
                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">1. Configuración del Navegador</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envíe una cookie. Sin embargo, si rechazas las cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium text-gray-400 mb-2">Cómo configurar cookies en tu navegador:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                      <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                      <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                      <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                    </ul>
                  </div>
                </div>

                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">2. Herramientas de Terceros</h3>
                  <p className="text-gray-400 leading-relaxed">
                    También puedes utilizar herramientas de terceros para gestionar las cookies, como extensiones del navegador que te permiten controlar qué cookies se instalan en tu dispositivo.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies de Terceros */}
            <section className="legal-section">
              <h2 className="legal-title">Cookies de Terceros</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Nuestro sitio web puede utilizar servicios de terceros que instalan cookies en tu dispositivo. Estos servicios incluyen:
                </p>
                <div className="mt-4">
                  <h4 className="text-white font-medium mb-2">Google Analytics</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Utilizamos Google Analytics para analizar el tráfico de nuestro sitio web. Google Analytics utiliza cookies para recopilar información sobre cómo utilizas nuestro sitio. Para más información, visita la{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#ff0080] hover:underline">
                      Política de Privacidad de Google
                    </a>.
                  </p>
                </div>
              </div>
            </section>

            {/* Contacto */}
            <section className="legal-section">
              <h2 className="legal-title">Información de Contacto</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Si tienes alguna pregunta sobre nuestra Política de Cookies o sobre el uso de cookies en nuestro sitio web, no dudes en contactar con nosotros:
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-300">
                    <span className="text-[#ff0080]">Teléfono:</span> 941 236 361
                  </p>
                  <p className="text-gray-300">
                    <span className="text-[#ff0080]">Dirección:</span> Calle Mercaderes, 5, 26001 Logroño (La Rioja)
                  </p>
                </div>
              </div>
            </section>

            {/* Fecha de actualización */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                Esta Política de Cookies fue actualizada por última vez el 17 de diciembre de 2025.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

