"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#EBE7DF]">
      {/* Background Image with gentle subtle breathing animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/ecofoam-hero-pharma.jpg"
          alt="EcoFoam Medicine & Pharmaceutical Bottle Packaging"
          fill
          priority
          className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* Top subtle brand watermark */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 w-full text-center z-10 pointer-events-none px-4"
      >
        <p className="text-[#121212]/45 text-lg sm:text-2xl lg:text-3xl font-serif tracking-[0.25em] font-light">
          Factory direct sales spot quick delivery
        </p>
      </motion.div>

      {/* Floating Hero Content Box with smooth staggered entrance */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="w-full max-w-lg bg-white/95 backdrop-blur-md p-8 sm:p-12 shadow-2xl border border-white/60 rounded-sm transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A059] via-[#121212] to-[#C5A059]" />

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#F5F3EF] border border-[#E5DCCB] rounded-full mb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#967C2F]"
          >
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>CERTIFIED PHARMACEUTICAL VESSELS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.2] font-normal text-[#121212] mb-5 tracking-tight"
          >
            Excellence in Medicine & Pharma Packaging
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans mb-8 font-light"
          >
            Precision-engineered medical-grade bottles for pharmaceuticals, tablets, syrups, drops, and nutraceutical applications. Defined by optical purity, UV barrier protection, and certified structural integrity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-4"
          >
            <motion.button
              onClick={onExploreClick}
              whileHover={{ scale: 1.025, backgroundColor: "#2b2b2b" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#121212] text-white text-xs tracking-wider uppercase font-medium rounded-sm transition-all duration-300 shadow-md group cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
