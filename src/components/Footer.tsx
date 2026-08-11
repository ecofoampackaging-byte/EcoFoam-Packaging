"use client";

import React from "react";
import Link from "next/link";

interface FooterProps {
  onOpenQuote: () => void;
  onOpenSample: () => void;
}

export default function Footer({ onOpenQuote, onOpenSample }: FooterProps) {
  return (
    <footer className="bg-[#FBFBF9] border-t border-black/10 pt-16 pb-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-200">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-normal tracking-tight text-[#121212]">
                EcoFoam Packaging Solutions
              </span>
            </Link>
            <p className="text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed max-w-md font-light">
              Providing minimalist, high-end glass packaging solutions that embody
              transparency, purity, and structural integrity.
            </p>
            <p className="text-neutral-400 text-xs font-sans pt-2">
              © 2024 EcoFoam Packaging Solutions. Excellence in Glass Craftsmanship.
            </p>
          </div>

          {/* Company Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans font-bold text-xs tracking-[0.15em] text-[#121212] uppercase">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 font-sans">
              <li>
                <Link href="/about" className="hover:text-[#121212] transition-colors">
                  Technical Specifications
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#121212] transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#121212] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans font-bold text-xs tracking-[0.15em] text-[#121212] uppercase">
              LEGAL & SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 font-sans">
              <li>
                <Link href="/contact" className="hover:text-[#121212] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#121212] transition-colors">
                  Global Logistics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#121212] transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick action bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-sans">
          <div className="flex items-center space-x-6">
            <span>ISO 15378 Certified</span>
            <span>•</span>
            <span>Type I & III Glass</span>
            <span>•</span>
            <span>GMP Compliant</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenSample}
              className="px-3 py-1.5 border border-neutral-300 rounded-sm text-[#121212] hover:bg-neutral-100 transition-all"
            >
              Order Sample Kit
            </button>
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-1.5 bg-[#121212] text-white rounded-sm hover:bg-[#2b2b2b] transition-all"
            >
              Request Bulk Pricing
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
