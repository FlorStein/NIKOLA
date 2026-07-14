import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikola | Cuadros y objetos aesthetic",
  description:
    "Portfolio de Nikola, marca de cuadros, prints y objetos de decoracion aesthetic en San Isidro, Buenos Aires.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
