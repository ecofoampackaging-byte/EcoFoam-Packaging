"use client";

import React from "react";
import Image from "next/image";
import { Eye, Info } from "lucide-react";
import { ProductItem } from "@/types";
import { homepageProducts } from "@/data/products";

interface ProductCollectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onQuickQuoteProduct: (product: ProductItem) => void;
}

export default function ProductCollection({
  onSelectProduct,
  onQuickQuoteProduct,
}: ProductCollectionProps) {
  return (
    <section id="pharma" className="py-20 bg-[#FBFBF9]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] font-normal mb-4">
            Our Premium Vessel Collection
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-sans font-light leading-relaxed">
            A curated selection of high performance plastic & acrylic containers designed to protect and elevate your product.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {homepageProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-transparent overflow-hidden"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-neutral-100 shadow-sm border border-black/5">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Pill Badges */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#121212] text-[10px] font-medium uppercase tracking-wider rounded-full shadow-xs border border-white/40"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="px-4 py-2 bg-white text-[#121212] text-xs font-medium uppercase tracking-wider rounded-sm shadow-md hover:bg-neutral-100 transition-all flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View Details
                  </button>
                </div>
              </div>

              {/* Text formatting */}
              <div className="pt-5 pb-2">
                <h3 className="font-sans font-bold text-xs sm:text-sm tracking-[0.15em] text-[#121212] uppercase mb-2">
                  {product.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans font-normal mb-3">
                  {product.description}
                </p>

                <div className="flex items-center space-x-4 text-xs font-medium text-neutral-500">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-[#121212] underline underline-offset-4 hover:text-[#C5A059] transition-colors flex items-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5 text-[#C5A059]" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
