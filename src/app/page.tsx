"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCollection from "@/components/ProductCollection";
import ValueProps from "@/components/ValueProps";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import SampleModal from "@/components/SampleModal";
import ProductDetailModal from "@/components/ProductDetailModal";
import PageTransition from "@/components/PageTransition";
import { ProductItem } from "@/types";

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);
  const [preselectedQuote, setPreselectedQuote] = useState<string | undefined>(undefined);

  const handleOpenQuote = (productName?: string) => {
    setPreselectedQuote(productName);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      {/* Navbar */}
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
        onOpenSample={() => setSampleOpen(true)}
      />

      {/* Animated Route Content */}
      <PageTransition>
        <main className="flex-grow">
          {/* Hero */}
          <Hero
            onExploreClick={() => {
              const el = document.getElementById("pharma");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Product Collection */}
          <ProductCollection
            onSelectProduct={(product) => setDetailProduct(product)}
            onQuickQuoteProduct={(product) => handleOpenQuote(product.title)}
          />

          {/* Value Props */}
          <ValueProps />
        </main>
      </PageTransition>

      {/* Footer */}
      <Footer
        onOpenQuote={() => handleOpenQuote()}
        onOpenSample={() => setSampleOpen(true)}
      />

      {/* Modals */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        preselectedProduct={preselectedQuote}
      />

      <SampleModal
        isOpen={sampleOpen}
        onClose={() => setSampleOpen(false)}
      />

      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onOpenQuote={(name) => handleOpenQuote(name)}
      />
    </div>
  );
}
