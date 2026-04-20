import type { Metadata } from "next";
import { Cormorant_Garamond, Cormorant_SC, Pinyon_Script, Lora } from "next/font/google";
import { Toaster } from "sonner";
import { WatercolorFilters } from "@/components/illustrations/WatercolorFilters";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap"
});

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-sc",
  display: "swap"
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap"
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
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
      className={`${cormorant.variable} ${cormorantSC.variable} ${pinyon.variable} ${lora.variable}`}
    >
      <body>
        <WatercolorFilters />
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#FBF9F4",
              border: "1px solid #5A6B3E",
              color: "#3A4A2E",
              fontFamily: "var(--font-lora), serif"
            }
          }}
        />
      </body>
    </html>
  );
}
