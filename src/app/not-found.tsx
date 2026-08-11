"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      <Navbar onOpenQuote={() => {}} onOpenSample={() => {}} />

      <main className="flex-grow flex items-center justify-center py-24 px-4 text-center">
        <div className="max-w-md space-y-6">
          <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
            ERROR 404
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#121212] font-normal">
            Page Not Found
          </h1>
          <p className="text-neutral-600 text-xs sm:text-sm font-sans font-light leading-relaxed">
            The glass vessel or page specification you are looking for does not exist or has been relocated.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-block px-7 py-3 bg-[#121212] text-white text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#2b2b2b] transition-all"
            >
              Return to Home Page
            </Link>
          </div>
        </div>
      </main>

      <Footer onOpenQuote={() => {}} onOpenSample={() => {}} />
    </div>
  );
}
