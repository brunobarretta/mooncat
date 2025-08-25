import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const gistesy = localFont({
  src: "../assets/fonts/Gistesy.ttf",
  variable: "--font-gistesy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moon Cat - Medicina Felina Especializada e Integrativa 🐈‍⬛",
  description: "Clínica Veterinária Especializada em Gatos em Indaiatuba",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={gistesy.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}