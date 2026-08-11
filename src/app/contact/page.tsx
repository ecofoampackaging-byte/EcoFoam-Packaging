"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import SampleModal from "@/components/SampleModal";
import PageTransition from "@/components/PageTransition";
import { CheckCircle, MapPin, Factory, PhoneCall } from "lucide-react";

export default function ContactPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      {/* Navbar */}
      <Navbar
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenSample={() => setSampleOpen(true)}
      />

      <PageTransition>
        <main className="flex-grow max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16 space-y-12">
          {/* Page Hero Header */}
          <div className="max-w-3xl space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#121212] tracking-tight">
              Connect with Elegance.
            </h1>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              Whether you require bespoke structural design, technical specifications, or global logistics coordination, our specialists are available to architect your packaging solution.
            </p>
          </div>

          {/* 2 Column Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-sm border border-neutral-200/80 shadow-xs">
              <h2 className="font-serif text-2xl text-[#121212] font-normal mb-8">
                Direct Inquiry
              </h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full text-xs py-3 px-0 bg-transparent border-b border-neutral-300 focus:border-[#121212] focus:outline-none placeholder-neutral-400 font-sans"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        placeholder="Organization Ltd."
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full text-xs py-3 px-0 bg-transparent border-b border-neutral-300 focus:border-[#121212] focus:outline-none placeholder-neutral-400 font-sans"
                      />
                    </div>
                  </div>

                  {/* Corporate Email */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                      CORPORATE EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full text-xs py-3 px-0 bg-transparent border-b border-neutral-300 focus:border-[#121212] focus:outline-none placeholder-neutral-400 font-sans"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                      PROJECT DETAILS
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your structural requirements..."
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="w-full text-xs py-3 px-0 bg-transparent border-b border-neutral-300 focus:border-[#121212] focus:outline-none placeholder-neutral-400 font-sans resize-none"
                    />
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setSampleOpen(true)}
                      className="w-full sm:w-auto px-6 py-3 border border-neutral-300 text-[#121212] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-neutral-50 transition-all text-center"
                    >
                      Request a Sample
                    </button>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-[#121212] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#2b2b2b] transition-all text-center shadow-xs"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#121212]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-neutral-900">{form.fullName}</span>. Your requirements have been submitted to our technical specialists. We will contact <span className="font-bold text-neutral-900">{form.email}</span> within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#121212] text-white text-xs font-medium uppercase tracking-wider rounded-sm"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-sm overflow-hidden border border-neutral-200 shadow-xs bg-white space-y-1 p-1">
                <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden">
                  <Image
                    src="/images/frosted-pharma.png"
                    alt="EcoFoam Packaging Glass Collection"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-xs">
                      Global Headquarters
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1">
                  <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden">
                    <Image
                      src="/images/hero-glass.png"
                      alt="Glass packaging bottles"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden">
                    <Image
                      src="/images/clear-nutra.png"
                      alt="Nutraceutical jars"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-sm border border-neutral-200/80 shadow-xs space-y-6">
                <h3 className="font-serif text-2xl text-[#121212] font-normal border-b border-neutral-100 pb-4">
                  Global Reach
                </h3>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>HEADQUARTERS</span>
                  </div>
                  <p className="text-xs font-semibold text-neutral-900">
                    1200 Glassworks Avenue
                  </p>
                  <p className="text-xs text-neutral-600">
                    Milan, MI 20121, Italy
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    <Factory className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>MANUFACTURING PLANTS</span>
                  </div>
                  <p className="text-xs text-neutral-700">
                    Dresden, Germany
                  </p>
                  <p className="text-xs text-neutral-700">
                    Lyon, France
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>GLOBAL SUPPORT</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-500">EU & UK</span>
                    <span className="font-bold text-neutral-900">+39 02 1234 5678</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-500">Americas</span>
                    <span className="font-bold text-neutral-900">+1 800 555 0199</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenSample={() => setSampleOpen(true)}
      />

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <SampleModal isOpen={sampleOpen} onClose={() => setSampleOpen(false)} />
    </div>
  );
}
