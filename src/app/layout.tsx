import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gistesy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
