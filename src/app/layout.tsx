import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "D'lian Connection | Event Organization, Production House & Immersive Tech",
  description: "Excellence in event organization, production house services, immersive technology, and amusement facilities. D'lian Connection leads the way in creative and tech solutions.",
  keywords: "event organization, production house, immersive tech, amusement facilities, D'lian Connection, events, technology",
  authors: [{ name: "D'lian Connection" }],
  robots: "index, follow",
  icons: {
    icon: "/image/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} bg-background-dark text-white font-sans antialiased`} suppressHydrationWarning>
        <div className="relative min-h-screen bg-background-dark overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />

          <FloatingChat />

          {/* Stardust overlay */}
          <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>
      </body>
    </html>
  );
}
