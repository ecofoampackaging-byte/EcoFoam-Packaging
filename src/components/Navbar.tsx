"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenSample: () => void;
}

export default function Navbar({ onOpenQuote, onOpenSample }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-black/5 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <span className="font-serif text-2xl sm:text-[1.65rem] font-normal tracking-tight text-[#121212]">
              EcoFoam Packaging
            </span>
          </Link>

          {/* Desktop Navigation with Animated Sliding Active Line */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs tracking-wider transition-colors relative py-2 ${
                    isActive
                      ? "text-[#121212] font-semibold"
                      : "text-neutral-600 hover:text-[#121212]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#121212]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenSample}
              className="px-5 py-2 text-xs font-medium tracking-wide text-neutral-800 bg-white border border-neutral-300 rounded-sm hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-200"
            >
              Order Sample
            </button>

            <button
              onClick={onOpenQuote}
              className="px-5 py-2 text-xs font-medium tracking-wide text-white bg-[#121212] rounded-sm hover:bg-[#2a2a2a] transition-all duration-200 shadow-xs"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-[#FBFBF9] border-b border-neutral-200 px-6 pt-4 pb-6 space-y-4"
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-1 ${
                  pathname === link.href
                    ? "text-[#121212] font-bold border-l-2 border-[#121212] pl-2"
                    : "text-neutral-700 hover:text-[#121212]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-neutral-200 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSample();
              }}
              className="w-full py-2.5 text-xs font-medium text-center border border-neutral-800 text-neutral-900 rounded-sm hover:bg-neutral-100"
            >
              Order Sample
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 text-xs font-medium text-center bg-[#121212] text-white rounded-sm hover:bg-[#2a2a2a]"
            >
              Request Quote
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
