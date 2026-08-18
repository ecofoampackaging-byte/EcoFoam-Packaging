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
    default: "EcoForm Packaging | Premium Medicine & Pharmaceutical Bottles",
    template: "%s | EcoForm Packaging",
  },
  description:
    "Factory direct spot quick delivery medicine bottles, frosted, clear & amber vessels for pharmaceuticals, tablets, syrups, and nutraceuticals.",
  keywords: [
    "EcoForm Packaging",
    "Medicine Bottles",
    "Pharmaceutical Bottles",
    "Nutraceutical Bottles",
    "Capsule Jars",
    "Syrup Bottles",
    "Amber Glass Medicine Bottles",
    "Frosted Pharma Vessels",
    "NMN Bottles",
  ],
  icons: {
    icon: "/images/logo-mark.png",
    shortcut: "/images/logo-mark.png",
    apple: "/images/logo-mark.png",
  },
  authors: [{ name: "EcoForm Packaging" }],
  openGraph: {
    title: "EcoForm Packaging | Premium Medicine & Pharma Bottles",
    description:
      "Factory direct spot quick delivery medicine bottles, frosted, amber, and clear vessels.",
    siteName: "EcoForm Packaging",
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
