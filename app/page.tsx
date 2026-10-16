import type { Metadata } from "next";
import {
  Check,
  ChevronDown,
  FileText,
  HandCoins,
  Link2,
  MessageCircle,
  Package,
  ScanLine,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Truck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "OG-Admin | Sistema para tiendas de celulares y reparaciones en República Dominicana",
  description:
    "Ventas, caja, control de IMEI, órdenes de reparación con seguimiento para el cliente y facturación NCF y e-CF en un solo sistema en la nube.",
};

const WHATSAPP = "18297470508";
const wa = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const whatsappDemo = wa("Hola, quiero agendar una demo de OG-Admin");
const whatsappPrueba = wa(
  "Hola, quiero iniciar mi prueba gratis de 14 días de OG-Admin",
);

const pains = [
  "La caja no cuadra y nadie sabe por qué.",
  "Equipos de clientes sin registro: reclamos por rayones, piezas o accesorios.",
  "Clientes llamando todo el día: “¿ya está mi teléfono?”",
  "Ventas a crédito en un cuaderno y deudas que se olvidan.",
  "Un inventario en Excel que nunca coincide con lo que hay en vitrina.",
  "La facturación electrónica de la DGII sin saber por dónde empezar.",
];

const features = [
  {
    icon: ShoppingCart,
    title: "Punto de venta ágil",
    text: "Cobra con código de barras o búsqueda, en efectivo, tarjeta, transferencia o crédito, e imprime el ticket al instante.",
  },
  {
    icon: Wallet,
    title: "Caja que cuadra",
    text: "Apertura y cierre por turno, arqueo con la diferencia y justificación obligatoria. Sabes quién cobró qué.",
  },
  {
    icon: ScanLine,
    title: "Control de IMEI",
    text: "Sigue cada equipo desde la compra hasta la venta y su garantía. Consulta el historial de un IMEI en segundos.",
  },
  {
    icon: Wrench,
    title: "Órdenes de reparación",
    text: "Recibe el equipo con fotos, diagnóstico, cotización aprobada, repuestos, técnico asignado y garantía.",
  },
  {
    icon: Link2,
    title: "Seguimiento para tu cliente",
    text: "Tu cliente ve el estado de su reparación desde un link y recibe un correo cuando su equipo está listo.",
  },
  {
    icon: FileText,
    title: "Facturación fiscal",
    text: "Comprobantes con NCF y facturación electrónica e-CF. Te acompañamos en la configuración.",
  },
  {
    icon: HandCoins,
    title: "Cuentas por cobrar",
    text: "Crédito con límite por cliente, abonos aplicados a cada factura y recibos de pago que puedes reimprimir.",
  },
  {
    icon: Package,
    title: "Inventario con alertas",
    text: "Existencias en tiempo real y avisos cuando un producto se está agotando.",
  },
  {
    icon: Truck,
    title: "Compras y proveedores",
    text: "Registra compras con sus IMEI y deja que el sistema calcule el costo promedio de cada producto.",
  },
  {
    icon: TrendingUp,
    title: "Reportes de utilidad real",
    text: "Ventas, costos, mano de obra, gastos y margen por periodo, sin hojas de Excel.",
  },
  {
    icon: ShieldCheck,
    title: "Roles y permisos",
    text: "El empleado solo ve lo que necesita: cobra, atiende reparaciones y consulta IMEI. Las métricas son tuyas.",
  },
  {
    icon: Users,
    title: "Base de clientes",
    text: "Teléfono, correo, RNC o cédula y crédito autorizado de cada cliente en un solo lugar.",
  },
];

const repairSteps = [
  {
    title: "Recibes el equipo",
    text: "Marca, modelo, IMEI, accesorios y estado físico, con fotos para evitar reclamos.",
  },
  {
    title: "Diagnóstico y cotización",
    text: "El técnico diagnostica, defines mano de obra y repuestos, y el cliente aprueba.",
  },
  {
    title: "Reparación con historial",
    text: "Cada cambio de estado queda registrado con fecha, usuario y nota.",
  },
  {
    title: "Aviso al cliente",
    text: "Cuando está listo, el cliente recibe un correo con el link para ver su estado.",
  },
  {
    title: "Factura y entrega",
    text: "Facturas con un solo precio por pieza y entregas el equipo.",
  },
  {
    title: "Garantía registrada",
    text: "La garantía queda en el sistema y se imprime en el ticket.",
  },
];

// Capturas del sistema: pon los archivos en /public/screens y agrégalos aquí.
// Mientras la lista esté vacía, la galería no se muestra.
const screens: { src: string; title: string; text: string }[] = [
  // { src: "/screens/reparaciones.png", title: "Órdenes de reparación", text: "Estados, fotos, técnico y garantía." },
];

// Cuando tu primera clienta lo autorice, pon aquí su cita real:
// { quote: "…", author: "Nombre, Negocio" }
const testimonial: { quote: string; author: string } | null = null;

const plans = [
  {
    name: "Básico",
    monthly: 1500,
    lifetime: 45000,
    users: "Hasta 2 usuarios",
    extras: ["Todos los módulos", "Configuración inicial incluida"],
    featured: false,
  },
  {
    name: "Profesional",
    monthly: 2500,
    lifetime: 75000,
    users: "Hasta 5 usuarios",
    extras: [
      "Todos los módulos",
      "Configuración inicial incluida",
      "Capacitación de tu equipo",
    ],
    featured: true,
  },
  {
    name: "Empresarial",
    monthly: 5000,
    lifetime: 100000,
    users: "Usuarios ilimitados",
    extras: [
      "Todos los módulos",
      "Configuración y capacitación",
      "Soporte prioritario",
    ],
    featured: false,
  },
];

// Pon en false para ocultar el pago único de la página
const showLifetime = true;

const faqs = [
  {
    q: "¿Es difícil de aprender?",
    a: "El empleado trabaja con cuatro pantallas: venta, cobros, órdenes de servicio e IMEI. Hacemos la configuración inicial contigo y capacitamos a tu equipo.",
  },
  {
    q: "¿Necesito instalar algo?",
    a: "No. Funciona desde el navegador, con tus datos en la nube, e imprime tickets en impresoras térmicas.",
  },
  {
    q: "¿Tiene facturación electrónica?",
    a: "Sí: NCF y e-CF. Para emitir e-CF cada negocio necesita su certificado digital y la autorización de la DGII. Te orientamos en el proceso y dejamos el sistema configurado.",
  },
  {
    q: "¿Cómo pago la suscripción?",
    a: "Por transferencia a una cuenta bancaria local. Subes tu comprobante desde el sistema y tu cuenta se activa cuando lo validamos.",
  },
  {
    q: "¿Puedo probarlo antes de pagar?",
    a: "Sí. Tienes 14 días de prueba, sin tarjeta.",
  },
  {
    q: "¿Sirve para otros tipos de negocio?",
    a: "Está pensado para tiendas de venta y reparación de celulares y electrónicos. Si vendes productos con inventario, también puedes usarlo para ventas, caja y cuentas por cobrar.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Aviso DGII: bórralo o actualízalo después del 15 de noviembre de 2026 */}
      <div className="bg-amber-400 px-4 py-2 text-center text-sm font-medium text-blue-950">
        La DGII dio plazo hasta el 15 de noviembre de 2026 a los pequeños
        negocios para implementar la facturación electrónica.{" "}
        <a href="#faq" className="underline">
          Prepárate con OG-Admin
        </a>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-bold text-white">
              OG
            </div>
            <span className="text-2xl font-bold">OG-Admin</span>
          </div>
          <div className="hidden gap-8 text-gray-600 md:flex">
            <a href="#funciones" className="hover:text-gray-900">
              Funciones
            </a>
            <a href="#reparaciones" className="hover:text-gray-900">
              Reparaciones
            </a>
            <a href="#precios" className="hover:text-gray-900">
              Precios
            </a>
            <a href="#faq" className="hover:text-gray-900">
              Preguntas
            </a>
          </div>
          <a
            href={whatsappPrueba}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-600"
          >
            Prueba gratis
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-20 text-center">
          <p className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm text-blue-100">
            Hecho en República Dominicana para tiendas de venta y reparación de
            celulares
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Controla tu tienda de celulares:
            <br className="hidden md:block" /> ventas, IMEI, caja y reparaciones
            en un solo sistema
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-blue-100 md:text-xl">
            OG-Admin reemplaza el cuaderno y el Excel con un sistema en la nube
            que cuadra tu caja, registra cada equipo que recibes y emite tus
            comprobantes fiscales.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <a
              href={whatsappDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-10 py-4 text-lg font-semibold text-blue-950 hover:bg-gray-100"
            >
              Agendar demo gratis
            </a>
            <a
              href="#precios"
              className="rounded-2xl border border-white/60 px-10 py-4 text-lg font-semibold hover:bg-white/10"
            >
              Ver planes y precios
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-200">
            {[
              "14 días de prueba, sin tarjeta",
              "Configuración inicial incluida",
              "Facturación NCF y e-CF",
            ].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check size={16} /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto max-w-5xl px-6">
          <img
            src="/ogdashboard.png"
            alt="Panel de OG-Admin con ventas, caja y utilidad del negocio"
            className="mx-auto rounded-t-3xl border border-white/20 shadow-2xl"
          />
        </div>
      </section>

      {/* Problemas */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            ¿Te suena familiar?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pains.map((pain) => (
              <div
                key={pain}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-700"
              >
                {pain}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-lg font-medium text-blue-800">
            OG-Admin está hecho para resolver exactamente esto.
          </p>
        </div>
      </section>

      {/* Funciones */}
      <section id="funciones" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Todo lo que tu tienda necesita, en un solo lugar
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-gray-600">
            Cada módulo habla con los demás: una venta mueve el inventario, la
            caja y los reportes al mismo tiempo.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 p-7 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reparaciones */}
      <section
        id="reparaciones"
        className="scroll-mt-24 bg-blue-950 py-20 text-white"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Una reparación, de punta a punta
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-blue-200">
            Menos llamadas de “¿ya está?”, menos reclamos y cada equipo
            controlado desde que entra hasta que se entrega.
          </p>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repairSteps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 font-bold">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-blue-100">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Galería (solo aparece cuando agregas capturas) */}
      {screens.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Así se ve por dentro
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {screens.map((screen) => (
                <figure key={screen.src}>
                  <img
                    src={screen.src}
                    alt={screen.title}
                    className="rounded-2xl border border-gray-200 shadow-lg"
                  />
                  <figcaption className="mt-3">
                    <p className="font-semibold">{screen.title}</p>
                    <p className="text-sm text-gray-600">{screen.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nació en una tienda real */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Nació en una tienda real
          </h2>
          <p className="text-lg text-gray-700">
            OG-Admin se construyó junto a una tienda de venta y reparación de
            celulares en República Dominicana y se perfeccionó con su uso
            diario: cada función responde a un problema que se vive en el
            mostrador.
          </p>
          {testimonial && (
            <figure className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
              <blockquote className="text-lg italic text-gray-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 font-semibold text-gray-800">
                {testimonial.author}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Elige el plan ideal para tu negocio
          </h2>
          <p className="mb-12 text-gray-600">
            14 días de prueba gratis. Sin tarjeta y sin compromiso.
          </p>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border-2 bg-white p-8 text-left ${
                  plan.featured
                    ? "border-blue-600 shadow-xl md:scale-105"
                    : "border-gray-200"
                }`}
              >
                {plan.featured && (
                  <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Más elegido
                  </span>
                )}
                <h3 className="mb-1 text-2xl font-bold">{plan.name}</h3>
                <p className="mb-5 text-sm text-gray-500">{plan.users}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">
                    RD${plan.monthly.toLocaleString("es-DO")}
                  </span>
                  <span className="text-gray-500"> /mes</span>
                </div>
                <ul className="mb-8 space-y-2 text-sm text-gray-700">
                  {plan.extras.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-green-600"
                      />
                      {item}
                    </li>
                  ))}
                  {showLifetime && (
                    <li className="flex items-start gap-2 text-gray-500">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-gray-400"
                      />
                      Pago único disponible: RD$
                      {plan.lifetime.toLocaleString("es-DO")} (cupos limitados)
                    </li>
                  )}
                </ul>
                <a
                  href={whatsappPrueba}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-2xl bg-blue-600 py-4 text-center font-semibold text-white hover:bg-blue-700"
                >
                  Iniciar prueba gratis
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {item.q}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-4xl font-bold">
            Ordena tu tienda antes del cierre de este mes
          </h2>
          <p className="mb-10 text-xl text-blue-100">
            Te mostramos el sistema con tus propios productos y te dejamos
            listo para vender y facturar.
          </p>
          <a
            href={whatsappDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-green-500 px-12 py-5 text-xl font-semibold hover:bg-green-600"
          >
            Agendar mi demo gratis
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-10 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} OG-Admin · Hecho en República Dominicana
        </p>
        <p className="mt-2">
          <a
            href={whatsappDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Escríbenos por WhatsApp
          </a>
        </p>
      </footer>

      {/* WhatsApp flotante */}
      <a
        href={whatsappDemo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-6 right-6 rounded-full bg-green-500 p-4 text-white shadow-2xl transition-transform hover:scale-110"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}