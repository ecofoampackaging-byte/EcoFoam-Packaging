"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import SampleModal from "@/components/SampleModal";
import ProductDetailModal from "@/components/ProductDetailModal";
import PageTransition from "@/components/PageTransition";
import { CatalogProduct, ProductItem } from "@/types";
import { fullProductCatalog } from "@/data/products";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);
  const [selectedProductTitle, setSelectedProductTitle] = useState<string | undefined>(undefined);

  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Recommended");
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFilter = (item: string, setFn: React.Dispatch<React.SetStateAction<string[]>>) => {
    setFn((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return fullProductCatalog.filter((item) => {
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(item.material)) {
        return false;
      }
      if (selectedFinishes.length > 0 && !selectedFinishes.includes(item.finish)) {
        return false;
      }
      if (selectedColors.length > 0 && !selectedColors.includes(item.color)) {
        return false;
      }
      return true;
    });
  }, [selectedMaterials, selectedFinishes, selectedColors]);

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.min(2, Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)));

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleInquire = (title: string) => {
    setSelectedProductTitle(title);
    setQuoteOpen(true);
  };

  const convertToProductItem = (item: CatalogProduct): ProductItem => ({
    id: item.id,
    title: item.title,
    category: item.category,
    description: item.description,
    image: item.image,
    badges: item.badges,
    specs: item.specs,
  });

  return (
    <div className="min-h-screen bg-[#FBFBF9] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      <Navbar
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenSample={() => setSampleOpen(true)}
      />

      <PageTransition>
        <main className="flex-grow">
          {/* Product Page Hero */}
          <section className="relative w-full h-[380px] sm:h-[440px] flex items-center justify-center overflow-hidden bg-[#5E8E87]">
            <Image
              src="/images/ecofoam-nutra-hero.jpg"
              alt="EcoFoam Medicine & Pharmaceutical Bottle Solutions"
              fill
              priority
              className="object-cover filter brightness-[0.92] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 max-w-2xl mx-auto px-6 py-10 bg-white/90 backdrop-blur-md text-center shadow-lg border border-white/40">
              <h1 className="font-serif text-3xl sm:text-4xl text-[#121212] tracking-tight font-normal mb-3">
                MEDICINE & PHARMACEUTICAL BOTTLES
              </h1>
              <p className="text-neutral-700 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-md mx-auto">
                Precision-engineered pharmaceutical, medicine, capsule, and nutraceutical bottles. Certified medical-grade collection designed for maximum formula stability.
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Sidebar */}
              <aside className="lg:col-span-3 space-y-8 pr-4 border-r border-neutral-200/80">
                <div>
                  <h3 className="font-sans font-bold text-xs tracking-[0.15em] text-[#121212] uppercase mb-6">
                    REFINE SELECTION
                  </h3>
                </div>

                <div className="space-y-3">
                  <h4 className="font-sans font-semibold text-xs text-neutral-900 mb-2">
                    Material
                  </h4>
                  {["High-Clarity Glass", "Acrylic Bottles", "Pharma Grade Glass"].map((mat) => (
                    <label
                      key={mat}
                      className="flex items-center space-x-2.5 text-xs text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleFilter(mat, setSelectedMaterials)}
                        className="w-3.5 h-3.5 rounded-xs accent-[#121212] border-neutral-300"
                      />
                      <span>{mat}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="font-sans font-semibold text-xs text-neutral-900 mb-2">
                    Finish
                  </h4>
                  {["Frosted Finish", "Clear Gloss", "Matte Smooth"].map((fin) => (
                    <label
                      key={fin}
                      className="flex items-center space-x-2.5 text-xs text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFinishes.includes(fin)}
                        onChange={() => toggleFilter(fin, setSelectedFinishes)}
                        className="w-3.5 h-3.5 rounded-xs accent-[#121212] border-neutral-300"
                      />
                      <span>{fin}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="font-sans font-semibold text-xs text-neutral-900 mb-2">
                    Color
                  </h4>
                  {["Flint (Clear)", "Amber Glass", "Opaque White / Amber"].map((col) => (
                    <label
                      key={col}
                      className="flex items-center space-x-2.5 text-xs text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(col)}
                        onChange={() => toggleFilter(col, setSelectedColors)}
                        className="w-3.5 h-3.5 rounded-xs accent-[#121212] border-neutral-300"
                      />
                      <span>{col}</span>
                    </label>
                  ))}
                </div>
              </aside>

              {/* Right Side Grid */}
              <div className="lg:col-span-9 space-y-6">
                <div className="flex items-center justify-between text-xs text-neutral-600 pb-4 border-b border-neutral-200">
                  <span>Showing {paginatedProducts.length} of {filteredProducts.length} products</span>

                  <div className="flex items-center space-x-2">
                    <span className="uppercase text-[11px] tracking-wider font-semibold text-neutral-800">
                      SORT BY:
                    </span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-transparent font-medium text-neutral-900 focus:outline-none cursor-pointer"
                    >
                      <option value="Recommended">Recommended</option>
                      <option value="Newest">Newest First</option>
                      <option value="Capacity">Capacity</option>
                    </select>
                  </div>
                </div>

                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2"
                >
                  <AnimatePresence mode="popLayout">
                    {paginatedProducts.map((item) => (
                      <motion.div
                        layout
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        whileHover={{ y: -6 }}
                        className="group bg-white flex flex-col justify-between p-4 border border-neutral-200/80 hover:border-neutral-900 shadow-xs hover:shadow-xl transition-all duration-300 rounded-sm"
                      >
                        <div>
                          <div className="relative aspect-square w-full bg-neutral-100 mb-4 overflow-hidden rounded-xs border border-neutral-100">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute top-2.5 left-2.5 flex gap-1 flex-wrap z-10">
                              {item.badges.map((b) => (
                                <span
                                  key={b}
                                  className="px-2 py-0.5 bg-white/95 text-[9px] uppercase tracking-wider font-semibold text-neutral-800 rounded-xs shadow-2xs border border-neutral-200"
                                >
                                  {b}
                                </span>
                              ))}
                            </div>
                          </div>

                          <h4 className="font-serif font-medium text-sm text-[#121212] mb-1 group-hover:text-[#C5A059] transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-neutral-500 font-sans mb-4">
                            {item.subtext}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                          <button
                            onClick={() => handleInquire(item.title)}
                            className="text-xs font-bold tracking-widest uppercase text-[#967C2F] hover:text-[#121212] transition-colors flex items-center space-x-1 cursor-pointer group/inq"
                          >
                            <span>INQUIRE</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/inq:translate-x-1 transition-transform" />
                          </button>
                          <button
                            onClick={() => setDetailProduct(convertToProductItem(item))}
                            className="text-[11px] font-medium text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
                          >
                            Details
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-16 space-y-3">
                    <p className="text-sm text-neutral-500 font-sans">
                      No products matched your selected filters.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedMaterials([]);
                        setSelectedFinishes([]);
                        setSelectedColors([]);
                      }}
                      className="text-xs text-[#967C2F] underline uppercase font-bold"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}

                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-2 pt-10">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => {
                        setCurrentPage(prev => Math.max(prev - 1, 1));
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 text-xs text-neutral-400 hover:text-neutral-900 border border-neutral-200 rounded-sm flex items-center justify-center disabled:opacity-40 cursor-pointer"
                    >
                      ‹
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setCurrentPage(pageNum);
                          window.scrollTo({ top: 300, behavior: 'smooth' });
                        }}
                        className={`w-8 h-8 text-xs font-bold rounded-sm flex items-center justify-center cursor-pointer transition-all ${currentPage === pageNum
                          ? "bg-[#121212] text-white shadow-xs"
                          : "border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                          }`}
                      >
                        {pageNum}
                      </button>
                    ))}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => {
                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 text-xs text-neutral-400 hover:text-neutral-900 border border-neutral-200 rounded-sm flex items-center justify-center disabled:opacity-40 cursor-pointer"
                    >
                      ›
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenSample={() => setSampleOpen(true)}
      />

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        preselectedProduct={selectedProductTitle}
      />
      <SampleModal isOpen={sampleOpen} onClose={() => setSampleOpen(false)} />
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onOpenQuote={(name) => {
          setSelectedProductTitle(name);
          setQuoteOpen(true);
        }}
      />
    </div>
  );
}
