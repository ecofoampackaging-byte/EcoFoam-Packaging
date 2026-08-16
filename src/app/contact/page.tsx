"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import SampleModal from "@/components/SampleModal";
import PageTransition from "@/components/PageTransition";
import { CheckCircle, MapPin, PhoneCall, Mail, ExternalLink, Copy, Check } from "lucide-react";
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
        <main className="flex-grow max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16 space-y-12">
          {/* Page Hero Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] block">
              OFFICIAL CONTACT & HEADQUARTERS
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#121212] tracking-tight">
              Connect with EcoForm Packaging.
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed max-w-xl mx-auto font-light">
              Speak directly with our technical packaging engineers to discuss custom tooling, bulk spot delivery, or sample kit dispatches.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-sm border border-neutral-200 shadow-xs space-y-4 hover:border-[#121212] transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#121212] text-white flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <button
                  onClick={() => handleCopy(companyContact.rawPhone, "phone")}
                  className="text-neutral-400 hover:text-neutral-900 text-xs flex items-center space-x-1"
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
                  className="text-lg font-bold text-[#121212] hover:underline block pt-1"
                >
                  {companyContact.phone}
                </a>
                <p className="text-xs text-neutral-500 pt-1">
                  Mon - Sat, 9:00 AM - 7:00 PM IST
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-sm border border-neutral-200 shadow-xs space-y-4 hover:border-[#121212] transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#121212] text-white flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={() => handleCopy(companyContact.email, "email")}
                  className="text-neutral-400 hover:text-neutral-900 text-xs flex items-center space-x-1"
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
                  Official Email Address
                </p>
                <a
                  href={`mailto:${companyContact.email}`}
                  className="text-base font-bold text-[#121212] hover:underline block pt-1 break-all"
                >
                  {companyContact.email}
                </a>
                <p className="text-xs text-neutral-500 pt-1">
                  Guaranteed response within 4 hours
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-sm border border-neutral-200 shadow-xs space-y-4 hover:border-[#121212] transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#121212] text-white flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <a
                  href={companyContact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#121212] text-xs flex items-center space-x-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Office Location
                </p>
                <p className="text-xs font-semibold text-[#121212] pt-1 leading-snug">
                  {companyContact.locality}, {companyContact.city}
                </p>
                <p className="text-xs text-neutral-500 pt-1">
                  {companyContact.state} {companyContact.pincode}, India
                </p>
              </div>
            </div>
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
