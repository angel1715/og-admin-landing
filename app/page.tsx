"use client";

export default function OGAdminLanding() {
  const whatsappDemo =
    "https://wa.me/18297470508?text=Hola%20quiero%20agendar%20una%20demo%20de%20OG-Admin";
  const whatsappPrueba =
    "https://wa.me/18297470508?text=Hola%20quiero%20iniciar%20mi%20prueba%20gratis%20de%2014%20d%C3%ADas";

  const plans = {
    basico: { name: "Básico", monthly: 1500, lifetime: 45000 },
    profesional: { name: "Profesional", monthly: 2500, lifetime: 75000 },
    empresarial: { name: "Empresarial", monthly: 5000, lifetime: 100000 },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              OG
            </div>
            <h1 className="text-2xl font-bold text-gray-900">OG-Admin</h1>
          </div>
          <div className="hidden md:flex gap-8 text-gray-600">
            <a href="#beneficios" className="hover:text-gray-900">
              Beneficios
            </a>
            <a href="#precios" className="hover:text-gray-900">
              Precios
            </a>
            <a href="#testimonios" className="hover:text-gray-900">
              Testimonios
            </a>
            <a href="#faq" className="hover:text-gray-900">
              FAQ
            </a>
          </div>
          <a
            href={whatsappPrueba}
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-medium"
          >
            Prueba Gratis 14 días
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Deja de perder dinero
            <br />
            por descontrol en tu negocio
          </h1>
          <p className="text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
            OG-Admin es el ERP en la nube que te da control total de ventas,
            inventario, reparaciones, caja y clientes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#precios"
              className="bg-white text-blue-950 hover:bg-gray-100 px-10 py-4 rounded-2xl text-lg font-semibold"
            >
              Ver Planes y Precios
            </a>
            <a
              href={whatsappDemo}
              target="_blank"
              className="border border-white/60 hover:bg-white/10 px-10 py-4 rounded-2xl text-lg font-semibold"
            >
              Agendar Demo Gratis
            </a>
          </div>
          <p className="text-sm mt-6 text-blue-200">
            14 días de prueba gratis • Sin tarjeta
          </p>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Así luce tu negocio con OG-Admin
          </h2>
          <img
            src="/ogdashboard.png"
            alt="Dashboard OG-Admin"
            className="rounded-3xl shadow-2xl mx-auto border"
          />
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Lo que vas a ganar
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              [
                "Control Real de Caja",
                "Sabe exactamente cuánto dinero entra y sale cada día",
              ],
              [
                "Reparaciones sin Errores",
                "Gestión completa con IMEI Tracker para evitar fraudes",
              ],
              [
                "Inventario sin Pérdidas",
                "Alertas automáticas y control en tiempo real",
              ],
              ["Clientes y Cobros", "Gestiona créditos y reduce morosos"],
              [
                "Reportes Inteligentes",
                "Métricas claras para tomar mejores decisiones",
              ],
              [
                "Ahorro de Tiempo",
                "Automatiza tareas repetitivas y enfócate en vender más",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-xl mb-4 text-blue-700">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Historias reales
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="italic text-lg text-gray-700">
                "Gracias a OG-Admin ahora controlo mejor mis reparaciones y sé
                exactamente cuánto gano cada semana. Recomendado 100%."
              </p>
              <p className="mt-6 font-semibold text-gray-700">
                — María López, TechRepair RD
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="italic text-lg text-gray-700">
                "El sistema es muy intuitivo. Me ahorró muchas horas de trabajo
                manual y ya no pierdo piezas en inventario."
              </p>
              <p className="mt-6 font-semibold text-gray-700">
                — Carlos Méndez, Celulares del Este
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Elige el plan ideal para ti
          </h2>
          <p className="text-gray-600 mb-12">
            14 días de prueba gratis • Sin compromiso
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(plans).map(([key, plan]) => (
              <div
                key={key}
                className={`border-2 rounded-3xl p-8 ${key === "profesional" ? "border-blue-600 scale-105 bg-white shadow-lg" : "border-gray-200 bg-white"}`}
              >
                <h3 className="text-2xl font-bold mb-1 text-gray-700">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-700">
                    RD${plan.monthly}
                  </span>
                  <span className="text-gray-500"> /mes</span>
                </div>
                <div className="mb-8 text-sm text-gray-600">
                  Pago único:{" "}
                  <span className="font-semibold">
                    RD${plan.lifetime.toLocaleString("es-ES")}
                  </span>
                </div>
                <a
                  href={whatsappPrueba}
                  target="_blank"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold"
                >
                  Iniciar Prueba Gratis
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-8 text-left max-w-3xl mx-auto">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">
                ¿Es complicado aprender a usarlo?
              </h4>
              <p className="text-gray-600">
                No. La mayoría de usuarios lo dominan en menos de 2 días.
                Incluimos onboarding personalizado.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">
                ¿Funciona para cualquier tipo de negocio?
              </h4>
              <p className="text-gray-600">
                Sí. Aunque es muy fuerte en reparación de celulares, sirve para
                tiendas, servicios técnicos y cualquier PyME.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">
                ¿Tiene facturación electrónica?
              </h4>
              <p className="text-gray-600">
                Sí, compatible con los requisitos de la DGII.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            ¿Estás listo para profesionalizar tu negocio?
          </h2>
          <p className="text-xl mb-10">
            Comienza hoy con 14 días gratis y toma el control total.
          </p>
          <a
            href={whatsappPrueba}
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 px-12 py-5 rounded-2xl text-xl font-semibold"
          >
            Empezar Prueba Gratis Ahora →
          </a>
        </div>
      </section>

      {/* WhatsApp Flotante */}
      <a
        href={whatsappDemo}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl text-3xl hover:scale-110 transition-all"
      >
        💬
      </a>
    </div>
  );
}
