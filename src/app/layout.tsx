import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Bodoni_Moda, Special_Elite } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap"
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bodoni",
  display: "swap"
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-elite",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Fernanda & Raphael — 10 anos de casados",
  description:
    "Save our date · 29 de agosto · New York · Aniversário de 10 anos de casados de Fernanda & Raphael",
  openGraph: {
    title: "Fernanda & Raphael — 10 anos de casados",
    description: "29 de agosto · New York",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${allura.variable} ${cormorant.variable} ${bodoni.variable} ${specialElite.variable}`}
    >
      <body>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#FBF7EE",
              border: "1px solid #2E3A8A",
              color: "#2E3A8A",
              fontFamily: "var(--font-cormorant), serif"
            }
          }}
        />
      </body>
    </html>
  );
}
