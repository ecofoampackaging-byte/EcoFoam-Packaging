"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import SampleModal from "@/components/SampleModal";
import ProductDetailModal from "@/components/ProductDetailModal";
import PageTransition from "@/components/PageTransition";
import { ProductItem } from "@/types";
import { companyPillars, companyStats } from "@/data/company";
import { ShieldCheck, Recycle, PenTool, ArrowRight } from "lucide-react";

const globalCountries = [
  { name: "India", flag: "🇮🇳" },
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "France", flag: "🇫🇷" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Switzerland", flag: "🇨🇭" },
];

export default function AboutPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);

  const pillarsWithIcons = [
    { ...companyPillars[0], icon: ShieldCheck },
    { ...companyPillars[1], icon: Recycle },
    { ...companyPillars[2], icon: PenTool },
    { ...companyPillars[3], icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBF9] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      <Navbar
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenSample={() => setSampleOpen(true)}
      />

      <PageTransition>
        <main className="flex-grow">
          {/* Distinct Hero Section for About Us Page */}
          <section className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-[#EBE7DF]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/about-hero.png"
                alt="EcoForm Packaging Solutions"
                fill
                priority
                className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="absolute top-6 w-full text-center z-10 pointer-events-none">
              <p className="text-[#121212]/40 text-xl sm:text-2xl lg:text-3xl font-serif tracking-[0.25em] font-light">
                Factory direct sales spot quick delivery
              </p>
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full py-16 lg:py-24">
              <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm p-8 sm:p-12 shadow-xl border border-neutral-100 rounded-none sm:rounded-sm transition-all duration-300">
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] block mb-3">
                  EXCELLENCE IN ACRYLIC BOTTLES
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.2] font-normal text-[#121212] mb-5 tracking-tight">
                  Purity. Integrity. Transparency.
                </h1>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans mb-8">
                  Premium acrylic bottles packaging solutions for pharmaceuticals, cosmetics, and nutraceuticals. Elevate your brand with uncompromising quality and minimalist design.
                </p>

                <div>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-[#121212] text-white text-xs tracking-wider uppercase font-medium rounded-sm hover:bg-[#2b2b2b] transition-all duration-300 shadow-md group"
                  >
                    <span>Explore Catalog</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Stats & Continuous Moving Country Flags Strip */}
          <section className="bg-[#F5F3EF] border-b border-black/5 py-10 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {companyStats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
                      {stat.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuous Moving Country Flags Ticker (Left to Right) */}
            <div className="relative w-full border-t border-neutral-200/80 pt-6 overflow-hidden">
              <div className="flex w-max">
                <motion.div
                  className="flex items-center space-x-6 shrink-0 pr-6"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 75,
                  }}
                >
                  {[...globalCountries, ...globalCountries, ...globalCountries, ...globalCountries].map((country, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-white/90 border border-neutral-300/80 rounded-full text-xs font-semibold text-neutral-800 shadow-2xs hover:border-neutral-900 transition-all cursor-default"
                    >
                      <span className="text-base leading-none">{country.flag}</span>
                      <span className="tracking-wide text-neutral-800">{country.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Acrylic Bottles Manufacturing Showcase Section */}
          <section className="py-20 bg-white border-b border-neutral-200/80">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Visual Banner */}
                <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden border border-neutral-200 shadow-lg group">
                  <Image
                    src="/images/about-factory.png"
                    alt="EcoForm Precision Acrylic Bottles Manufacturing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#121212] text-[9px] font-bold uppercase tracking-wider rounded-full shadow-xs inline-block mb-1">
                      PRECISION PMMA ACRYLIC
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-white">
                      Crystal Glass Clarity with Shatterproof Durability
                    </h3>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] block mb-2">
                      CORE MANUFACTURING CAPABILITY
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] font-normal leading-tight">
                      Engineered Acrylic Bottles for Health, Pharma & Luxury Brands
                    </h2>
                  </div>

                  <p className="text-neutral-600 text-sm leading-relaxed font-sans font-light">
                    At <strong>EcoForm Packaging</strong>, we specialize in high-precision acrylic (PMMA) bottle manufacturing. Designed to replicate the heavy, refractive elegance of crystal glass while offering superior shatter resistance, lightweight portability, and flawless chemical stability.
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-[#FBFBF9] rounded-sm border border-neutral-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-[#121212] uppercase tracking-wider">
                        Double-Wall Insulation
                      </h4>
                      <p className="text-[11px] text-neutral-600 leading-relaxed font-light">
                        Dual-layer acrylic walls that preserve thermal stability and shield volatile botanical and pharmaceutical compounds from degradation.
                      </p>
                    </div>

                    <div className="p-4 bg-[#FBFBF9] rounded-sm border border-neutral-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-[#121212] uppercase tracking-wider">
                        Custom Silk-Screen & Gold Foil
                      </h4>
                      <p className="text-[11px] text-neutral-600 leading-relaxed font-light">
                        Direct high-definition silk-screen printing, metallic hot-stamping, and graduation scales tailored to brand requirements.
                      </p>
                    </div>

                    <div className="p-4 bg-[#FBFBF9] rounded-sm border border-neutral-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-[#121212] uppercase tracking-wider">
                        Heavy-Base Luxury Feel
                      </h4>
                      <p className="text-[11px] text-neutral-600 leading-relaxed font-light">
                        Weighted bottom profile delivering the luxurious hand-feel of prestige perfume and cosmetic glass bottles with zero breakage risk.
                      </p>
                    </div>

                    <div className="p-4 bg-[#FBFBF9] rounded-sm border border-neutral-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-[#121212] uppercase tracking-wider">
                        Factory Direct Spot Delivery
                      </h4>
                      <p className="text-[11px] text-neutral-600 leading-relaxed font-light">
                        Readily available stock molds and custom runs with ultra-low MOQs and rapid fulfillment for immediate market launch.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center space-x-4">
                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#121212] text-white text-xs tracking-wider uppercase font-semibold rounded-sm hover:bg-[#2b2b2b] transition-all shadow-xs group"
                    >
                      <span>View Acrylic Catalog</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      onClick={() => setSampleOpen(true)}
                      className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 text-[#121212] text-xs tracking-wider uppercase font-semibold rounded-sm hover:bg-neutral-100 transition-all cursor-pointer"
                    >
                      Request Acrylic Sample
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The EcoForm Standard Section */}
          <section className="py-20 bg-[#FBFBF9]">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] font-normal">
                  The EcoForm Standard
                </h2>
                <p className="text-neutral-600 text-sm font-sans font-light leading-relaxed">
                  Engineered for perfection, designed for impact. Our acrylic and glass vessels undergo rigorous optical and pressure testing to ensure flawless performance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillarsWithIcons.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-8 rounded-sm border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-9 h-9 rounded-md bg-neutral-100 text-neutral-800 flex items-center justify-center">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3 className="font-sans font-bold text-xs tracking-[0.15em] text-[#121212] uppercase">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-600 leading-relaxed font-sans font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Industries We Serve Section */}
          <section className="py-20 bg-[#FBFBF9] border-t border-neutral-200/80">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] font-normal mb-2">
                    Industries We Serve
                  </h2>
                  <p className="text-neutral-600 text-sm font-sans font-light">
                    Tailored packaging solutions across diverse sectors.
                  </p>
                </div>

                <Link
                  href="/products"
                  className="px-5 py-2.5 bg-[#F5F3EF] border border-neutral-300 text-[#121212] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-neutral-200 transition-all self-start sm:self-auto"
                >
                  VIEW ALL SECTORS
                </Link>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 relative h-[300px] sm:h-[340px] rounded-sm overflow-hidden group shadow-sm border border-neutral-200">
                    <Image
                      src="/images/client-health-beige.png"
                      alt="Pharma Glass Containers"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#121212] text-[9px] font-bold uppercase tracking-wider rounded-full">
                        TYPE I & III GLASS
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                      <h3 className="font-serif text-2xl font-normal">
                        Pharma Glass
                      </h3>
                      <p className="text-xs text-neutral-200 max-w-md font-sans">
                        Ensuring chemical stability and protecting sensitive formulations with our premium amber and clear vials.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative h-[300px] sm:h-[340px] rounded-sm overflow-hidden group shadow-sm border border-neutral-200">
                    <Image
                      src="/images/client-teal-nmn.png"
                      alt="Cosmetic Jars"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                      <h3 className="font-serif text-2xl font-normal">
                        Cosmetic Jars
                      </h3>
                      <Link
                        href="/products"
                        className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white transition-colors pt-1"
                      >
                        <span>EXPLORE</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px] sm:h-[340px] w-full rounded-sm overflow-hidden group shadow-sm border border-neutral-200">
                  <Image
                    src="/images/client-marble-display.png"
                    alt="Nutraceutical Packaging Containers"
                    fill
                    className="object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
                    <h3 className="font-serif text-3xl font-normal">
                      Nutraceuticals
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-200 max-w-lg font-sans">
                      Robust, protective, and visually striking containers designed for premium supplements and vitamins.
                    </p>
                    <div>
                      <Link
                        href="/products"
                        className="px-5 py-2.5 bg-white/90 text-[#121212] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-white transition-all inline-block shadow-sm"
                      >
                        VIEW SOLUTIONS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </PageTransition>

      <Footer
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenSample={() => setSampleOpen(true)}
      />

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <SampleModal isOpen={sampleOpen} onClose={() => setSampleOpen(false)} />
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onOpenQuote={() => setQuoteOpen(true)}
      />
    </div>
  );
}
