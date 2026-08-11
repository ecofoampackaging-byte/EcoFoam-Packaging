"use client";

import React from "react";
import Link from "next/link";
import { companyContact } from "@/data/company";
import { Mail, PhoneCall, MapPin, Code } from "lucide-react";

interface FooterProps {
  onOpenQuote: () => void;
  onOpenSample: () => void;
}

export default function Footer({ onOpenQuote, onOpenSample }: FooterProps) {
  return (
    <footer className="bg-[#FAF4EA] border-t border-[#E5DCCB] pt-16 pb-12 transition-colors">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E5DCCB]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-normal tracking-tight text-[#121212]">
                EcoFoam Packaging Solutions
              </span>
            </Link>
            <p className="text-neutral-700 text-xs sm:text-sm font-sans leading-relaxed max-w-md font-light">
              Providing minimalist, high-end glass and foam packaging solutions that embody
              transparency, purity, and structural integrity.
            </p>

            {/* Copyright and Developer Info Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#F4ECE1] border border-[#DECDB8] rounded-sm text-xs text-neutral-800">
                <span className="font-medium text-[#121212]">
                  © {new Date().getFullYear()} EcoFoam Packaging. Copyright issued by EcoFoam Packaging.
                </span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white/90 border border-[#DECDB8] rounded-sm text-xs text-neutral-800 shadow-xs">
                <Code className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Developed by <strong className="text-neutral-900 font-bold">LogicPulse</strong></span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-sans font-bold text-xs tracking-[0.15em] text-[#121212] uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-700 font-sans">
              <li>
                <Link href="/" className="hover:text-[#121212] hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#121212] hover:underline transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#121212] hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#121212] hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#121212] hover:underline transition-colors font-semibold text-[#967C2F]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Contact Column */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="font-sans font-bold text-xs tracking-[0.15em] text-[#121212] uppercase">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-xs text-neutral-700 font-sans">
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <a
                  href={`mailto:${companyContact.email}`}
                  className="hover:text-[#121212] hover:underline transition-colors font-medium text-neutral-900"
                >
                  {companyContact.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                <a
                  href={`tel:${companyContact.rawPhone}`}
                  className="hover:text-[#121212] hover:underline transition-colors font-medium text-neutral-900"
                >
                  {companyContact.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <a
                  href={companyContact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#121212] transition-colors leading-relaxed"
                >
                  {companyContact.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick action bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600 font-sans">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>ISO 15378 Certified</span>
            <span>•</span>
            <span>Type I & III Glass</span>
            <span>•</span>
            <span>GMP Compliant</span>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:underline text-[#121212] font-semibold">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenSample}
              className="px-3.5 py-2 border border-neutral-400 bg-white/80 rounded-sm text-[#121212] hover:bg-white transition-all text-xs font-medium cursor-pointer"
            >
              Order Sample Kit
            </button>
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 bg-[#121212] text-white rounded-sm hover:bg-[#2b2b2b] transition-all text-xs font-medium cursor-pointer shadow-xs"
            >
              Request Bulk Pricing
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
