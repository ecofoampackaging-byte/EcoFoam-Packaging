"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import SampleModal from "@/components/SampleModal";
import PageTransition from "@/components/PageTransition";
import { CheckCircle, MapPin, PhoneCall, Mail, ExternalLink, Copy, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { companyContact } from "@/data/company";

export default function ContactPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    details: "",
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

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
        <main className="flex-grow flex flex-col">
          {/* Hero Banner Section matching Homepage Hero */}
          <section className="relative w-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden bg-[#EBE7DF]">
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ scale: 1.06, opacity: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src="/images/ecofoam-hero-pharma.jpg"
                alt="EcoFoam Packaging Contact & Production"
                fill
                priority
                className="object-cover object-center filter brightness-[0.96] contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-black/35" />
            </motion.div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full py-12">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="max-w-2xl bg-white/95 backdrop-blur-md p-8 sm:p-10 shadow-2xl border border-white/60 rounded-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A059] via-[#121212] to-[#C5A059]" />

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#F5F3EF] border border-[#E5DCCB] rounded-full mb-3 text-[10px] font-bold tracking-[0.2em] uppercase text-[#967C2F]"
                >
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  <span>OFFICIAL HEADQUARTERS & DIRECT INQUIRY</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-serif text-3xl sm:text-4xl text-[#121212] tracking-tight font-normal mb-3"
                >
                  Connect with EcoForm Packaging.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed font-light"
                >
                  Speak directly with our technical packaging engineers to discuss custom tooling, bulk spot delivery, or sample kit dispatches.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 space-y-12">
            {/* Quick Contact Cards with Framer Motion hover */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phone Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-6 sm:p-7 rounded-sm border border-neutral-200 shadow-xs hover:shadow-xl space-y-4 hover:border-[#121212] transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-[#121212] text-white flex items-center justify-center">
                    <PhoneCall className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <button
                    onClick={() => handleCopy(companyContact.rawPhone, "phone")}
                    className="text-neutral-400 hover:text-neutral-900 text-xs flex items-center space-x-1 cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copied === "phone" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Direct Phone Support
                  </p>
                  <a
                    href={`tel:${companyContact.rawPhone}`}
                    className="text-base sm:text-lg font-bold text-[#121212] hover:underline block pt-1"
                  >
                    {companyContact.phone}
                  </a>
                  <p className="text-xs text-neutral-500 pt-1 font-light">
                    Mon - Sat, 9:00 AM - 7:00 PM IST
                  </p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-6 sm:p-7 rounded-sm border border-neutral-200 shadow-xs hover:shadow-xl space-y-4 hover:border-[#121212] transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-[#121212] text-white flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <button
                    onClick={() => handleCopy(companyContact.email, "email")}
                    className="text-neutral-400 hover:text-neutral-900 text-xs flex items-center space-x-1 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied === "email" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Email Inquiries
                  </p>
                  <a
                    href={`mailto:${companyContact.email}`}
                    className="text-base sm:text-lg font-bold text-[#121212] hover:underline block pt-1"
                  >
                    {companyContact.email}
                  </a>
                  <p className="text-xs text-neutral-500 pt-1 font-light">
                    Guaranteed response within 4 hours
                  </p>
                </div>
              </motion.div>

              {/* Address Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-6 sm:p-7 rounded-sm border border-neutral-200 shadow-xs hover:shadow-xl space-y-4 hover:border-[#121212] transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-[#121212] text-white flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <a
                    href={companyContact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 text-xs flex items-center space-x-1"
                    title="Open in Google Maps"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Manufacturing Facility
                  </p>
                  <p className="text-xs text-neutral-800 pt-1 leading-relaxed font-light">
                    {companyContact.address}
                  </p>
                </div>
              </motion.div>
            </div>

          {/* 2 Column Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-sm border border-neutral-200/80 shadow-xs">
              <h2 className="font-serif text-2xl text-[#121212] font-normal mb-8">
                Send Direct Inquiry
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
                    Thank you, <span className="font-bold text-neutral-900">{form.fullName}</span>. Your requirements have been submitted to EcoForm Packaging. We will contact <span className="font-bold text-neutral-900">{form.email}</span> within 4 business hours. You can also reach us directly at <a href={`mailto:${companyContact.email}`} className="font-bold underline text-[#121212]">{companyContact.email}</a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-[#121212] text-white text-xs tracking-wider uppercase font-semibold rounded-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Corporate Headquarters Details with Interactive Google Map */}
            <div className="lg:col-span-5 space-y-6">
              {/* Plant / HQ Card */}
              <div className="bg-white p-8 rounded-sm border border-neutral-200/80 shadow-xs space-y-6">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#C5A059] block mb-1">
                    PRIMARY MANUFACTURING & HQ
                  </span>
                  <h3 className="font-serif text-2xl text-[#121212] font-normal">
                    EcoForm Packaging Solutions
                  </h3>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  <div className="flex items-start space-x-3 text-neutral-700">
                    <MapPin className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-900">Registered Plant Address:</p>
                      <p className="text-neutral-600 leading-relaxed">{companyContact.address}</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed iframe with live pinpoint of Sector 44 Noida / Chhalera */}
                <div className="relative w-full h-[280px] rounded-sm overflow-hidden border border-neutral-200 shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.123456789!2d77.3400!3d28.5500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a5a5a5a5a5%3A0x123456789abcdef!2sSector%2044%2C%20Noida%2C%20Uttar%20Pradesh%20201303!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EcoForm Packaging Location Map"
                    className="w-full h-full grayscale-[20%] contrast-[1.05]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-neutral-100 text-xs">
                  <a
                    href={companyContact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#121212] font-semibold hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                  <a
                    href={`tel:${companyContact.rawPhone}`}
                    className="inline-flex items-center text-neutral-600 font-medium hover:text-[#121212]"
                  >
                    <PhoneCall className="w-3 h-3 mr-1 text-[#C5A059]" />
                    <span>{companyContact.phone}</span>
                  </a>
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
