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
  title: "Thorpe Innovation — Desenvolvimento de Software Sob Medida",
  description:
    "Transformamos ideias em software robusto e escalável. Desenvolvimento web, mobile, MVPs e consultoria técnica para empresas que precisam sair do papel com segurança e qualidade.",
  keywords:
    "desenvolvimento de software, software sob medida, MVP, consultoria técnica, arquitetura de sistemas, Porto Digital, Recife",
  authors: [{ name: "Thorpe Innovation" }],
  openGraph: {
    title: "Thorpe Innovation — Desenvolvimento de Software Sob Medida",
    description:
      "Transformamos ideias em software robusto e escalável. Do conceito ao produto em produção.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
