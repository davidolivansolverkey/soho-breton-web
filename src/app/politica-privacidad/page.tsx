import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad y protección de datos personales en ${SITE.name} Logroño.`,
  alternates: {
    canonical: "/politica-privacidad",
  },
};

export default function PoliticaPrivacidad() {
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
            <span className="text-white text-sm">Política de Privacidad</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Política de Privacidad
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            Protección de datos personales y privacidad en SOHO Logroño
          </p>

          {/* Content */}
          <div className="space-y-10 max-w-4xl">
            
            {/* Compromiso */}
            <section className="legal-section">
              <h2 className="legal-title">Compromiso con la Privacidad</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed">
                  En SOHO Logroño, nos tomamos muy en serio la protección de tu privacidad y datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos tu información personal cuando utilizas nuestro sitio web y servicios.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  Cumplimos estrictamente con el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y la Ley Orgánica de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD) de España.
                </p>
              </div>
            </section>

            {/* Responsable del Tratamiento */}
            <section className="legal-section">
              <h2 className="legal-title">Responsable del Tratamiento</h2>
              <div className="legal-card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[#ff0080] font-semibold mb-2">Razón Social</h3>
                    <p className="text-gray-300">MAVICOL BAR SL</p>
                  </div>
                  <div>
                    <h3 className="text-[#ff0080] font-semibold mb-2">CIF</h3>
                    <p className="text-gray-300">B26297812</p>
                  </div>
                  <div>
                    <h3 className="text-[#ff0080] font-semibold mb-2">Domicilio</h3>
                    <p className="text-gray-300">Calle Mercaderes, 5</p>
                    <p className="text-gray-300">26001 Logroño (La Rioja)</p>
                  </div>
                  <div>
                    <h3 className="text-[#ff0080] font-semibold mb-2">Contacto</h3>
                    <p className="text-gray-300">Teléfono: 941 236 361</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Datos que Recopilamos */}
            <section className="legal-section">
              <h2 className="legal-title">Datos Personales que Recopilamos</h2>
              <p className="text-gray-500 mb-6">Tipos de información que podemos recopilar de ti</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">1. Datos de Identificación</h3>
                  <p className="text-gray-500 text-sm mb-3">Información básica para identificarte y contactar contigo:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Nombre y apellidos</li>
                    <li>• Número de teléfono</li>
                    <li>• Dirección de correo electrónico</li>
                  </ul>
                </div>

                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">2. Datos de Navegación</h3>
                  <p className="text-gray-500 text-sm mb-3">Información técnica sobre tu uso del sitio web:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Dirección IP</li>
                    <li>• Tipo de navegador y dispositivo</li>
                    <li>• Páginas visitadas y tiempo de permanencia</li>
                    <li>• Cookies y tecnologías similares</li>
                  </ul>
                </div>

                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">3. Datos de Comunicación</h3>
                  <p className="text-gray-500 text-sm mb-3">Información de las comunicaciones que mantenemos:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Consultas y solicitudes de información</li>
                    <li>• Comentarios y valoraciones</li>
                    <li>• Comunicaciones de servicio al cliente</li>
                  </ul>
                </div>

                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">4. Datos de Reservas</h3>
                  <p className="text-gray-500 text-sm mb-3">Información relacionada con servicios solicitados:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Fecha y hora de reservas</li>
                    <li>• Número de personas</li>
                    <li>• Requisitos especiales</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalidad del Tratamiento */}
            <section className="legal-section">
              <h2 className="legal-title">Finalidad del Tratamiento</h2>
              <p className="text-gray-500 mb-6">Para qué utilizamos tus datos personales</p>
              
              <div className="space-y-4">
                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-2">1. Prestación de Servicios</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Para gestionar y prestar los servicios que solicitas, incluyendo reservas, confirmaciones y atención al cliente.
                  </p>
                </div>

                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-2">2. Comunicación</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Para responder a tus consultas, solicitudes de información y proporcionarte atención al cliente.
                  </p>
                </div>

                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-2">3. Mejora de Servicios</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Para analizar el uso de nuestro sitio web y mejorar nuestros servicios y experiencia de usuario.
                  </p>
                </div>

                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-2">4. Cumplimiento Legal</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Para cumplir con las obligaciones legales y regulatorias aplicables.
                  </p>
                </div>
              </div>
            </section>

            {/* Derechos */}
            <section className="legal-section">
              <h2 className="legal-title">Tus Derechos</h2>
              <p className="text-gray-500 mb-6">Derechos que te asisten según la normativa de protección de datos</p>
              
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Como titular de los datos personales, tienes derecho a:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#1DB954] mt-1">✓</span>
                    <div>
                      <p className="text-white font-medium">Derecho de Acceso</p>
                      <p className="text-gray-500 text-sm">Conocer qué datos tenemos sobre ti</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1DB954] mt-1">✓</span>
                    <div>
                      <p className="text-white font-medium">Derecho de Rectificación</p>
                      <p className="text-gray-500 text-sm">Corregir datos inexactos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1DB954] mt-1">✓</span>
                    <div>
                      <p className="text-white font-medium">Derecho de Supresión</p>
                      <p className="text-gray-500 text-sm">Solicitar la eliminación de tus datos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1DB954] mt-1">✓</span>
                    <div>
                      <p className="text-white font-medium">Derecho de Oposición</p>
                      <p className="text-gray-500 text-sm">Oponerte al tratamiento de tus datos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1DB954] mt-1">✓</span>
                    <div>
                      <p className="text-white font-medium">Derecho de Limitación</p>
                      <p className="text-gray-500 text-sm">Limitar el tratamiento de tus datos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1DB954] mt-1">✓</span>
                    <div>
                      <p className="text-white font-medium">Derecho de Portabilidad</p>
                      <p className="text-gray-500 text-sm">Recibir tus datos en formato estructurado</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mt-6">
                  Para ejercer cualquiera de estos derechos, puedes contactar con nosotros a través del teléfono <strong className="text-white">941 236 361</strong> o en nuestra dirección: <strong className="text-white">Calle Mercaderes, 5, 26001 Logroño (La Rioja)</strong>.
                </p>
              </div>
            </section>

            {/* Medidas de Seguridad */}
            <section className="legal-section">
              <h2 className="legal-title">Medidas de Seguridad</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed mb-6">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Medidas Técnicas</h4>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• Encriptación de datos en tránsito</li>
                      <li>• Acceso seguro con HTTPS</li>
                      <li>• Firewalls y sistemas de seguridad</li>
                      <li>• Copias de seguridad regulares</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-3">Medidas Organizativas</h4>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• Políticas de acceso y confidencialidad</li>
                      <li>• Formación del personal</li>
                      <li>• Auditorías regulares</li>
                      <li>• Procedimientos de incidentes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Transferencias Internacionales */}
            <section className="legal-section">
              <h2 className="legal-title">Transferencias Internacionales</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed">
                  Tus datos personales se procesan principalmente en España y en la Unión Europea. En caso de que sea necesario realizar transferencias internacionales a países que no proporcionen un nivel adecuado de protección, implementaremos las garantías apropiadas.
                </p>
                <p className="text-gray-500 text-sm mt-4 italic">
                  Nota: Actualmente no realizamos transferencias internacionales de datos personales fuera del Espacio Económico Europeo.
                </p>
              </div>
            </section>

            {/* Contacto */}
            <section className="legal-section">
              <h2 className="legal-title">Información de Contacto</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Si tienes alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales, puedes contactar con nosotros:
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-300">
                    <span className="text-[#ff0080]">Teléfono:</span> 941 236 361
                  </p>
                  <p className="text-gray-300">
                    <span className="text-[#ff0080]">Dirección:</span> Calle Mercaderes, 5, 26001 Logroño (La Rioja)
                  </p>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  También puedes presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#ff0080] hover:underline">Agencia Española de Protección de Datos (AEPD)</a> si consideras que el tratamiento de tus datos personales no se ajusta a la normativa vigente.
                </p>
              </div>
            </section>

            {/* Fecha de actualización */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                Esta Política de Privacidad fue actualizada por última vez el 17 de diciembre de 2025.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

