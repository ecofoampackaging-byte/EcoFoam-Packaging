"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import SampleModal from "@/components/SampleModal";
import ProductDetailModal from "@/components/ProductDetailModal";
import PageTransition from "@/components/PageTransition";
import { ProductItem } from "@/types";
import { companyPillars, companyStats, globalHubs } from "@/data/company";
import { ShieldCheck, Recycle, PenTool, ArrowRight } from "lucide-react";

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
                alt="EcoFoam Glass Cleanroom Packaging Laboratory"
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
                  EXCELLENCE IN GLASS
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.2] font-normal text-[#121212] mb-5 tracking-tight">
                  Purity. Integrity. Transparency.
                </h1>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans mb-8">
                  Premium glass packaging solutions for pharmaceuticals, cosmetics, and nutraceuticals. Elevate your brand with uncompromising quality and minimalist design.
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

          {/* Stats Strip */}
          <section className="bg-[#F5F3EF] border-b border-black/5 py-10">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
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
          </section>

          {/* The EcoFoam Standard Section */}
          <section className="py-20 bg-[#FBFBF9]">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] font-normal">
                  The EcoFoam Standard
                </h2>
                <p className="text-neutral-600 text-sm font-sans font-light leading-relaxed">
                  Engineered for perfection, designed for impact. Our commitment to quality ensures every vessel meets the highest industry standards.
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
                      src="/images/frosted-pharma.png"
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
                      src="/images/clear-nutra.png"
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
                    src="/images/frosted-pharma.png"
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

          {/* Global Hubs */}
          <section className="py-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
                GLOBAL FOOTPRINT
              </span>
              <h2 className="font-serif text-3xl text-[#121212]">
                Innovation Facilities & Hubs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {globalHubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-sm border border-neutral-200 text-center space-y-3 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-[#121212] font-bold font-serif text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-[#121212]">
                    {hub.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans">
                    {hub.role}
                  </p>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#967C2F] pt-2">
                    {hub.location}
                  </span>
                </div>
              ))}
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
