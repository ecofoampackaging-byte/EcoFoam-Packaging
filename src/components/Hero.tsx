"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#EBE7DF]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/client-marble-display.png"
          alt="EcoForm Packaging Bottles"
          fill
          priority
          className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Top subtle brand watermark matching reference image text */}
      <div className="absolute top-6 w-full text-center z-10 pointer-events-none">
        <p className="text-[#121212]/40 text-xl sm:text-2xl lg:text-3xl font-serif tracking-[0.25em] font-light">
          Factory direct sales spot quick delivery
        </p>
      </div>

      {/* Floating Hero Content Box */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full py-16 lg:py-24">
        <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm p-8 sm:p-12 shadow-xl border border-neutral-100 rounded-none sm:rounded-sm transition-all duration-300">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.25] font-normal text-[#121212] mb-6 tracking-tight">
            Excellence in Plastic & Acrylic Packaging
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans mb-8">
            Precision-engineered plastic & acrylic bottles for pharmaceutical, cosmetic, and
            nutraceutical applications. Defined by clarity, structural integrity,
            and minimalist luxury.
          </p>

          <div>
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#121212] text-white text-xs tracking-wider font-medium rounded-sm hover:bg-[#2b2b2b] transition-all duration-300 shadow-md"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
