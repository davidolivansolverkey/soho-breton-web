import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: `Información legal y términos de uso de ${SITE.name} Logroño.`,
  alternates: {
    canonical: "/aviso-legal",
  },
};

export default function AvisoLegal() {
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
            <span className="text-white text-sm">Aviso Legal</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Aviso Legal
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            Información legal y términos de uso de SOHO Logroño
          </p>

          {/* Content */}
          <div className="space-y-10 max-w-4xl">
            
            {/* Información de la Empresa */}
            <section className="legal-section">
              <h2 className="legal-title">Información de la Empresa</h2>
              <div className="legal-card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[#ff0080] font-semibold mb-2">Razón Social</h3>
                    <p className="text-gray-300">MAVICOL BAR SL</p>
                    <p className="text-gray-500 text-sm mt-1">(Comercialmente: Mavicol Bar)</p>
                  </div>
                  <div>
                    <h3 className="text-[#ff0080] font-semibold mb-2">CIF</h3>
                    <p className="text-gray-300">B26297812</p>
                  </div>
                  <div>
                    <h3 className="text-[#ff0080] font-semibold mb-2">Domicilio Social</h3>
                    <p className="text-gray-300">Calle Mercaderes, 5</p>
                    <p className="text-gray-300">26001 Logroño (La Rioja)</p>
                  </div>
                  <div>
                    <h3 className="text-[#ff0080] font-semibold mb-2">Contacto</h3>
                    <p className="text-gray-300">Teléfono: 941 236 361</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-[#ff0080] font-semibold mb-2">Actividad</h3>
                    <p className="text-gray-300">Servicios de hostelería y restauración</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Condiciones de Uso */}
            <section className="legal-section">
              <h2 className="legal-title">Condiciones de Uso</h2>
              
              <div className="space-y-6">
                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">1. Aceptación de las Condiciones</h3>
                  <p className="text-gray-400 leading-relaxed">
                    El acceso y uso de este sitio web implica la aceptación expresa y plena de todas las condiciones y términos incluidos en este Aviso Legal.
                  </p>
                </div>

                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">2. Uso del Sitio Web</h3>
                  <p className="text-gray-400 leading-relaxed">
                    El usuario se compromete a utilizar el sitio web de conformidad con la ley, la moral, las buenas costumbres y el orden público. El usuario se abstendrá de utilizar el sitio web con fines o efectos ilícitos, prohibidos o lesivos de los derechos e intereses de terceros.
                  </p>
                </div>

                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">3. Propiedad Intelectual</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, enlaces, contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de MAVICOL BAR SL o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.
                  </p>
                </div>

                <div className="legal-card">
                  <h3 className="text-white font-semibold mb-3">4. Responsabilidad</h3>
                  <p className="text-gray-400 leading-relaxed">
                    MAVICOL BAR SL no se hace responsable de los daños y perjuicios que se pudieran derivar de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo del sistema electrónico, motivadas por causas ajenas a la empresa.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitación de Responsabilidad */}
            <section className="legal-section">
              <h2 className="legal-title">Limitación de Responsabilidad</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed">
                  MAVICOL BAR SL se compromete a realizar sus mejores esfuerzos para garantizar la disponibilidad y continuidad del sitio web y de los servicios. Sin embargo, no puede garantizar la ausencia de errores ni que la disponibilidad del servicio sea permanente e ininterrumpida.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  En ningún caso MAVICOL BAR SL será responsable por los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por el uso o la imposibilidad de uso del sitio web o de los contenidos, salvo en los supuestos previstos por la normativa vigente.
                </p>
              </div>
            </section>

            {/* Legislación Aplicable */}
            <section className="legal-section">
              <h2 className="legal-title">Legislación Aplicable</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed">
                  Las presentes condiciones se rigen por la legislación española. Para cualquier litigio que pudiera surgir relacionado con el sitio web o la actividad que en él se desarrolla serán competentes los Juzgados y Tribunales de La Rioja, salvo que la ley establezca otra jurisdicción obligatoria.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  En caso de que alguna de las estipulaciones contenidas en este Aviso Legal sea declarada nula, se procederá a la eliminación o sustitución de la misma. En tal caso, dicha declaración no afectará a la validez del resto de las estipulaciones.
                </p>
              </div>
            </section>

            {/* Modificaciones */}
            <section className="legal-section">
              <h2 className="legal-title">Modificaciones</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed">
                  MAVICOL BAR SL se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través del mismo como la forma en la que éstos aparezcan presentados o localizados en su sitio web.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  Asimismo, se reserva el derecho de modificar las presentes condiciones cuando lo considere oportuno, así como el uso del sitio web.
                </p>
              </div>
            </section>

            {/* Contacto */}
            <section className="legal-section">
              <h2 className="legal-title">Información de Contacto</h2>
              <div className="legal-card">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Para cualquier consulta relacionada con este Aviso Legal o con el sitio web, puede contactar con nosotros:
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
                Este Aviso Legal fue actualizado por última vez el 17 de diciembre de 2025.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

