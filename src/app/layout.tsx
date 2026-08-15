import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EcoFoam Packaging Solutions | Excellence in Glass Packaging",
    template: "%s | EcoFoam Packaging",
  },
  description:
    "Premium acrylic bottles packaging solutions for pharmaceuticals, cosmetics, and nutraceuticals. Defined by clarity, structural integrity, and minimalist luxury.",
  keywords: [
    "Glass Packaging",
    "EcoFoam Packaging",
    "Pharmaceutical Glass",
    "Cosmetic Jars",
    "Amber Bottles",
    "Frosted Glass Vessels",
    "Type I Borosilicate",
  ],
  authors: [{ name: "EcoFoam Packaging Solutions" }],
  openGraph: {
    title: "EcoFoam Packaging Solutions | Excellence in Glass Packaging",
    description:
      "Precision-engineered glass vessels for pharmaceutical, cosmetic, and nutraceutical applications.",
    siteName: "EcoFoam Packaging Solutions",
    type: "website",
    locale: "en_US",
    },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-[#FBFBF9] text-[#121212] antialiased selection:bg-[#C5A059] selection:text-white">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
