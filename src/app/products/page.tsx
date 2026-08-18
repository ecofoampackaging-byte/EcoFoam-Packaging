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
import { ArrowRight, Eye, Sparkles, Search, X, Check, SlidersHorizontal, ChevronDown, RotateCcw, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);
  const [selectedProductTitle, setSelectedProductTitle] = useState<string | undefined>(undefined);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const itemsPerPage = 6;

  const toggleFilter = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedMaterials([]);
    setSelectedFinishes([]);
    setSelectedColors([]);
    setCurrentPage(1);
  };

  const activeFiltersCount =
    (searchQuery ? 1 : 0) +
    selectedMaterials.length +
    selectedFinishes.length +
    selectedColors.length;

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return fullProductCatalog.filter((item) => {
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.subtext.toLowerCase().includes(q) ||
          item.material.toLowerCase().includes(q) ||
          item.specs.capacity.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Material
      if (selectedMaterials.length && !selectedMaterials.includes(item.material)) {
        return false;
      }

      // Finish
      if (selectedFinishes.length && !selectedFinishes.includes(item.finish)) {
        return false;
      }

      // Color
      if (selectedColors.length && !selectedColors.includes(item.color)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedMaterials, selectedFinishes, selectedColors]);

  // Counts helper
  const getCount = (key: "material" | "finish" | "color", val: string) => {
    return fullProductCatalog.filter((item) => item[key] === val).length;
  };

  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "Newest") return list.reverse();
    if (sortBy === "Capacity") {
      return list.sort((a, b) => parseInt(a.specs.capacity) - parseInt(b.specs.capacity));
    }
    return list;
  }, [filteredProducts, sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(start, start + itemsPerPage);
  }, [sortedProducts, currentPage]);

  const handleInquire = (productTitle: string) => {
    setSelectedProductTitle(productTitle);
    setQuoteOpen(true);
  };

  const convertToProductItem = (cat: CatalogProduct): ProductItem => ({
    id: cat.id,
    title: cat.title,
    category: cat.category,
    description: cat.description,
    image: cat.image,
    badges: cat.badges,
    specs: cat.specs,
  });

  return (
    <div className="min-h-screen bg-[#FBFBF9] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      <Navbar
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenSample={() => setSampleOpen(true)}
      />

      <PageTransition>
        <main className="flex-grow">
          {/* Product Page Hero Banner with smooth entrance */}
          <section className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center overflow-hidden bg-[#5E8E87]">
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ scale: 1.06, opacity: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src="/images/ecofoam-nutra-hero.jpg"
                alt="EcoFoam Medicine & Pharmaceutical Bottle Solutions"
                fill
                priority
                className="object-cover filter brightness-[0.92] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative z-10 max-w-2xl mx-auto px-8 py-10 sm:py-12 bg-white/95 backdrop-blur-md text-center shadow-2xl border border-white/60 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A059] via-[#121212] to-[#C5A059]" />

              <motion.span
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] block mb-2"
              >
                OFFICIAL CATALOG & DIRECT ORDER
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-serif text-3xl sm:text-4xl text-[#121212] tracking-tight font-normal mb-3"
              >
                MEDICINE & PHARMACEUTICAL BOTTLES
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-neutral-700 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-md mx-auto"
              >
                Precision-engineered pharmaceutical, medicine, capsule, and nutraceutical bottles. Certified medical-grade collection designed for maximum formula stability.
              </motion.p>
            </motion.div>
          </section>

          {/* Content Section */}
          <section className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
            {/* Mobile Filter Toggle Button */}
            <div className="lg:hidden mb-6 flex items-center justify-between bg-white p-4 rounded-lg border border-neutral-200 shadow-xs">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900"
              >
                <Filter className="w-4 h-4 text-[#C5A059]" />
                <span>Filters & Search</span>
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#121212] text-white text-[10px] flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-semibold text-[#967C2F] hover:underline"
                >
                  Reset All
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Modern Refine Selection Sidebar */}
              <aside
                className={`lg:col-span-3 space-y-6 ${
                  mobileFiltersOpen ? "block" : "hidden lg:block"
                } lg:sticky lg:top-28 transition-all`}
              >
                <div className="bg-white p-6 sm:p-7 rounded-xl border border-neutral-200/90 shadow-xs space-y-6">
                  {/* Sidebar Header with Active Counter & Reset */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-[#C5A059]" />
                      <h3 className="font-sans font-bold text-xs tracking-[0.18em] text-[#121212] uppercase">
                        REFINE SELECTION
                      </h3>
                      {activeFiltersCount > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-[#121212] text-white text-[10px] font-bold">
                          {activeFiltersCount}
                        </span>
                      )}
                    </div>

                    {activeFiltersCount > 0 && (
                      <button
                        onClick={clearAllFilters}
                        className="text-[11px] font-semibold text-[#967C2F] hover:text-[#121212] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    )}
                  </div>

                  {/* Realtime Search Input */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      placeholder="Search bottles, capacity..."
                      className="w-full pl-9 pr-8 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs placeholder:text-neutral-400 focus:outline-none focus:border-[#121212] focus:bg-white transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-800 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Material Filter with Custom Checkboxes & Counts */}
                  <div className="space-y-3 pt-1">
                    <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-neutral-900">
                      Material
                    </h4>
                    <div className="space-y-1.5">
                      {["High-Clarity Glass", "Acrylic Bottles", "Pharma Grade Glass"].map((mat) => {
                        const isChecked = selectedMaterials.includes(mat);
                        const count = getCount("material", mat);
                        return (
                          <button
                            key={mat}
                            onClick={() => toggleFilter(mat, setSelectedMaterials)}
                            className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-all cursor-pointer text-left ${
                              isChecked
                                ? "bg-[#FAF4EA] text-[#121212] font-semibold border border-[#E5DCCB]"
                                : "text-neutral-600 hover:bg-neutral-50"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`w-4 h-4 rounded-sm flex items-center justify-center transition-all ${
                                  isChecked
                                    ? "bg-[#121212] text-white"
                                    : "border border-neutral-300 bg-white"
                                }`}
                              >
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span>{mat}</span>
                            </div>
                            <span className="text-[10px] text-neutral-400 font-normal">
                              ({count})
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Finish Filter with Custom Checkboxes */}
                  <div className="space-y-3 pt-3 border-t border-neutral-100">
                    <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-neutral-900">
                      Finish
                    </h4>
                    <div className="space-y-1.5">
                      {["Frosted Finish", "Clear Gloss", "Matte Smooth"].map((fin) => {
                        const isChecked = selectedFinishes.includes(fin);
                        const count = getCount("finish", fin);
                        return (
                          <button
                            key={fin}
                            onClick={() => toggleFilter(fin, setSelectedFinishes)}
                            className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-all cursor-pointer text-left ${
                              isChecked
                                ? "bg-[#FAF4EA] text-[#121212] font-semibold border border-[#E5DCCB]"
                                : "text-neutral-600 hover:bg-neutral-50"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`w-4 h-4 rounded-sm flex items-center justify-center transition-all ${
                                  isChecked
                                    ? "bg-[#121212] text-white"
                                    : "border border-neutral-300 bg-white"
                                }`}
                              >
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span>{fin}</span>
                            </div>
                            <span className="text-[10px] text-neutral-400 font-normal">
                              ({count})
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Color Filter with Visual Swatches */}
                  <div className="space-y-3 pt-3 border-t border-neutral-100">
                    <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-neutral-900">
                      Color & Tone
                    </h4>
                    <div className="space-y-1.5">
                      {[
                        { name: "Flint (Clear)", swatch: "bg-sky-100 border border-sky-300" },
                        { name: "Amber Glass", swatch: "bg-amber-700" },
                        { name: "Opaque White / Amber", swatch: "bg-neutral-100 border border-neutral-300" },
                      ].map((col) => {
                        const isChecked = selectedColors.includes(col.name);
                        const count = getCount("color", col.name);
                        return (
                          <button
                            key={col.name}
                            onClick={() => toggleFilter(col.name, setSelectedColors)}
                            className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-all cursor-pointer text-left ${
                              isChecked
                                ? "bg-[#FAF4EA] text-[#121212] font-semibold border border-[#E5DCCB]"
                                : "text-neutral-600 hover:bg-neutral-50"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${col.swatch} shadow-2xs`} />
                              <span>{col.name}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] text-neutral-400 font-normal">
                                ({count})
                              </span>
                              {isChecked && (
                                <div className="w-4 h-4 rounded-full bg-[#121212] text-white flex items-center justify-center">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Right Side Products Content */}
              <div className="lg:col-span-9 space-y-6">
                {/* Active Filter Badges Bar */}
                {activeFiltersCount > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap items-center gap-2 p-3 bg-white rounded-lg border border-neutral-200/80 shadow-2xs text-xs"
                  >
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mr-1">
                      Active:
                    </span>

                    {searchQuery && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-md font-medium text-xs">
                        Search: &quot;{searchQuery}&quot;
                        <button onClick={() => setSearchQuery("")} className="hover:text-black cursor-pointer">
                          <X className="w-3 h-3 ml-0.5" />
                        </button>
                      </span>
                    )}

                    {selectedMaterials.map((mat) => (
                      <span key={mat} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF4EA] text-neutral-900 border border-[#E5DCCB] rounded-md font-medium text-xs">
                        {mat}
                        <button onClick={() => toggleFilter(mat, setSelectedMaterials)} className="hover:text-black cursor-pointer">
                          <X className="w-3 h-3 ml-0.5" />
                        </button>
                      </span>
                    ))}

                    {selectedFinishes.map((fin) => (
                      <span key={fin} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF4EA] text-neutral-900 border border-[#E5DCCB] rounded-md font-medium text-xs">
                        {fin}
                        <button onClick={() => toggleFilter(fin, setSelectedFinishes)} className="hover:text-black cursor-pointer">
                          <X className="w-3 h-3 ml-0.5" />
                        </button>
                      </span>
                    ))}

                    {selectedColors.map((col) => (
                      <span key={col} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF4EA] text-neutral-900 border border-[#E5DCCB] rounded-md font-medium text-xs">
                        {col}
                        <button onClick={() => toggleFilter(col, setSelectedColors)} className="hover:text-black cursor-pointer">
                          <X className="w-3 h-3 ml-0.5" />
                        </button>
                      </span>
                    ))}

                    <button
                      onClick={clearAllFilters}
                      className="ml-auto text-xs font-semibold text-[#967C2F] hover:underline cursor-pointer"
                    >
                      Clear All
                    </button>
                  </motion.div>
                )}

                {/* Top Sort & Count Bar */}
                <div className="flex items-center justify-between text-xs text-neutral-600 pb-4 border-b border-neutral-200">
                  <span>
                    Showing <strong className="text-neutral-900">{paginatedProducts.length}</strong> of {filteredProducts.length} products
                  </span>

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

                {/* Modern Luxury Product Cards Grid */}
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 pt-2"
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
                        whileHover={{ y: -8 }}
                        className="group bg-white rounded-xl p-4 sm:p-5 border border-neutral-200/80 hover:border-neutral-900 shadow-xs hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                      >
                        {/* Top Accent Line on Hover */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A059] via-[#121212] to-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                        <div>
                          {/* Image Container with Glass Badges & Smooth Zoom */}
                          <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100/70 mb-4 border border-neutral-100">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                            />

                            {/* Luxury Glass Badges */}
                            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                              {item.badges.map((b) => (
                                <span
                                  key={b}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider text-neutral-800 rounded-full shadow-xs border border-white/70"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#10785A]" />
                                  {b}
                                </span>
                              ))}
                            </div>

                            {/* Quick Action Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-10">
                              <button
                                onClick={() => setDetailProduct(convertToProductItem(item))}
                                className="px-4 py-2 bg-white text-neutral-900 text-xs font-semibold uppercase tracking-wider rounded-md shadow-xl hover:bg-neutral-100 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
                              >
                                <Eye className="w-4 h-4 text-[#C5A059]" />
                                <span>Quick Specs</span>
                              </button>
                            </div>
                          </div>

                          {/* Category Tag & Volume Tag */}
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#967C2F]">
                              {item.category}
                            </span>
                            <span className="text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                              {item.specs?.capacity || "150ml"}
                            </span>
                          </div>

                          {/* Product Title */}
                          <h4 className="font-serif font-semibold text-base text-[#121212] group-hover:text-[#967C2F] transition-colors leading-snug mb-1.5 line-clamp-2">
                            {item.title}
                          </h4>

                          {/* Subtext description */}
                          <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed mb-4 line-clamp-2">
                            {item.subtext}
                          </p>
                        </div>

                        {/* Modern Action Footer */}
                        <div className="pt-3.5 border-t border-neutral-100 flex items-center justify-between gap-2.5">
                          <button
                            onClick={() => handleInquire(item.title)}
                            className="flex-1 py-2.5 px-3.5 bg-[#121212] hover:bg-[#C5A059] text-white text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer group/inq"
                          >
                            <span>Inquire Now</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/inq:translate-x-1 transition-transform" />
                          </button>
                          <button
                            onClick={() => setDetailProduct(convertToProductItem(item))}
                            className="py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-900 text-[11px] font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer flex items-center gap-1"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Details</span>
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
