"use client";

import React from "react";
import Image from "next/image";
import { Eye, Info, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { ProductItem } from "@/types";
import { homepageProducts } from "@/data/products";

interface ProductCollectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onQuickQuoteProduct: (product: ProductItem) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProductCollection({
  onSelectProduct,
  onQuickQuoteProduct,
}: ProductCollectionProps) {
  return (
    <section id="pharma" className="py-20 sm:py-24 bg-[#FBFBF9]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header with smooth reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] block">
            FEATURED PHARMACEUTICAL LINES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] font-normal tracking-tight">
            Our Premium Vessel Collection
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-sans font-light leading-relaxed">
            A curated selection of high performance medical & pharmaceutical containers designed to protect and elevate your product.
          </p>
        </motion.div>

        {/* 3-Card Grid with Staggered Viewport Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8"
        >
          {homepageProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group flex flex-col bg-white p-4 sm:p-5 rounded-sm border border-neutral-200/80 hover:border-neutral-900 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Container with Badges & smooth zoom */}
              <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-neutral-100 shadow-inner border border-neutral-100 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Pill Badges */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 z-10">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-[#121212] text-[9px] font-bold uppercase tracking-wider rounded-full shadow-2xs border border-white/60"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Quick Action Overlay with smooth fade */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <motion.button
                    onClick={() => onSelectProduct(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2.5 bg-white text-[#121212] text-xs font-semibold uppercase tracking-wider rounded-sm shadow-lg hover:bg-neutral-100 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#C5A059]" />
                    <span>View Details</span>
                  </motion.button>
                </div>
              </div>

              {/* Text formatting */}
              <div className="pt-2 pb-1 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-sans font-bold text-xs sm:text-sm tracking-[0.12em] text-[#121212] uppercase mb-1.5 group-hover:text-[#C5A059] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-bold tracking-widest uppercase text-[#967C2F] hover:text-[#121212] transition-colors flex items-center gap-1.5 cursor-pointer group/btn"
                  >
                    <span>SPECIFICATIONS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    MOQ: {product.specs?.moq || "1,000"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
