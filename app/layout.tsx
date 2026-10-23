import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://og-admin-landing.vercel.app"),
  title: "OG-Admin | ERP para Negocios en República Dominicana",
  description:
    "Sistema ERP en la nube para gestionar ventas, inventario, reparaciones con IMEI, caja y clientes. Ideal para tiendas de celulares y PyMEs en RD. Prueba gratis 14 días.",
  keywords: [
    "erp republica dominicana",
    "software punto de venta rd",
    "sistema para tiendas de celulares",
    "software reparacion celulares santo domingo",
    "control de inventario rd",
    "pos republica dominicana",
  ],
  openGraph: {
    title: "OG-Admin - ERP para tu Negocio en RD",
    description:
      "Controla tus ventas, inventario y reparaciones desde un solo lugar.",
    images: [{ url: "/dasboard3.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
