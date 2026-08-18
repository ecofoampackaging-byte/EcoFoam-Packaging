"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductItem } from "@/types";

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenQuote?: (productName: string) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onOpenQuote,
}: ProductDetailModalProps) {
  const router = useRouter();

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.93, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white max-w-3xl w-full rounded-sm shadow-2xl overflow-hidden border border-neutral-200 flex flex-col md:flex-row"
          >
            {/* Left Image Section */}
            <div className="relative md:w-1/2 aspect-square md:aspect-auto bg-neutral-100 border-b md:border-b-0 md:border-r border-neutral-200">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                {product.badges.map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#121212] text-[10px] font-bold uppercase tracking-wider rounded-full shadow-xs"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Details Section */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-2xl text-[#121212] font-normal leading-snug">
                      {product.title}
                    </h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-neutral-400 hover:text-neutral-900 transition-colors p-1 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs text-neutral-600 font-sans leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Product Details Overview */}
                <div className="border-t border-b border-neutral-100 py-3 space-y-2 text-xs font-sans">
                  <h4 className="font-bold text-[10px] tracking-wider text-neutral-800 uppercase">
                    Product Details
                  </h4>

                  <div className="grid grid-cols-2 gap-y-1.5 text-neutral-600">
                    <span className="font-medium text-neutral-400">Capacity:</span>
                    <span className="font-semibold text-neutral-900">{product.specs.capacity}</span>

                    <span className="font-medium text-neutral-400">Material Grade:</span>
                    <span className="font-semibold text-neutral-900">{product.specs.material}</span>

                    <span className="font-medium text-neutral-400">Min. Order (MOQ):</span>
                    <span className="font-semibold text-neutral-900">{product.specs.moq}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    router.push("/contact");
                  }}
                  className="w-full py-3.5 bg-[#121212] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#2b2b2b] transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                >
                  <span>Request Quote For This Model</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
