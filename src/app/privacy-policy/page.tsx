"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import SampleModal from "@/components/SampleModal";
import PageTransition from "@/components/PageTransition";
import { companyContact } from "@/data/company";
import {
  ShieldCheck,
  Lock,
  FileText,
  Code,
  Copyright,
  Mail,
  PhoneCall,
  MapPin,
  ArrowLeft,
  CheckCircle2,
  Globe2,
  Sparkles,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBF9] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      {/* Navbar */}
      <Navbar
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenSample={() => setSampleOpen(true)}
      />

      <PageTransition>
        <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 space-y-8">
          {/* Top Breadcrumb */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-xs text-neutral-500 hover:text-[#121212] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header Banner - Rich Cream Styling */}
          <div className="bg-[#FAF4EA] p-8 sm:p-12 rounded-sm border border-[#E5DCCB] space-y-4 relative overflow-hidden shadow-xs">
            <div className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.25em] text-[#967C2F] uppercase">
              <ShieldCheck className="w-4 h-4 text-[#967C2F]" />
              <span>LEGAL & DATA GOVERNANCE</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#121212] font-normal tracking-tight">
              Privacy Policy & Terms
            </h1>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-sans font-light max-w-2xl">
              EcoForm Packaging Solutions is committed to safeguarding client data, B2B inquiry details, and intellectual property across our global packaging operations.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-neutral-600 border-t border-[#E5DCCB]/80">
              <span className="pt-2">Effective Date: August 2024</span>
              <span className="pt-2">•</span>
              <span className="pt-2">Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
            </div>
          </div>

          {/* Key Ownership & Development Highlights Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Copyright Card */}
            <div className="bg-white p-6 rounded-sm border border-neutral-200/90 shadow-xs flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#121212] text-[#C5A059] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Copyright className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="inline-block px-2 py-0.5 bg-[#FAF4EA] text-[#967C2F] text-[10px] font-bold tracking-wider uppercase rounded-xs">
                  COPYRIGHT NOTICE
                </span>
                <p className="text-sm font-bold text-[#121212]">
                  Copyright issued by EcoForm Packaging
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  All trademarks, structural designs, product catalog specifications, and brand assets are protected under applicable copyright laws.
                </p>
              </div>
            </div>

            {/* Developer Credit Card */}
            <div className="bg-white p-6 rounded-sm border border-neutral-200/90 shadow-xs flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#FAF4EA] text-[#967C2F] flex items-center justify-center flex-shrink-0 border border-[#E5DCCB] mt-0.5">
                <Code className="w-5 h-5 text-[#967C2F]" />
              </div>
              <div className="space-y-1">
                <span className="inline-block px-2 py-0.5 bg-neutral-100 text-neutral-700 text-[10px] font-bold tracking-wider uppercase rounded-xs">
                  PLATFORM ENGINEERING
                </span>
                <p className="text-sm font-bold text-[#121212] flex items-center space-x-1.5">
                  <span>Developed by</span>
                  <span className="text-[#967C2F] font-extrabold text-base">LogicPulse</span>
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Engineered with modern web architecture for high performance, responsive navigation, and B2B security by LogicPulse.
                </p>
              </div>
            </div>
          </div>

          {/* Main Policy Content Sections */}
          <div className="bg-white p-8 sm:p-12 rounded-sm border border-neutral-200/80 shadow-xs space-y-10 text-neutral-700 text-sm leading-relaxed font-sans">
            {/* Section 1: Data Collection */}
            <section className="space-y-3 border-b border-neutral-100 pb-8">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#121212]">
                <FileText className="w-4 h-4 text-[#C5A059]" />
                <h2>1. Information We Collect</h2>
              </div>
              <p className="text-neutral-600 font-light">
                When you interact with the EcoForm Packaging platform, request custom glass packaging quotes, or submit sample kit requests, we collect necessary business details to fulfill your inquiries:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <li className="flex items-start space-x-2 text-xs text-neutral-700 bg-[#FBFBF9] p-3 rounded border border-neutral-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                  <span>Full Name, Business Designation & Company Name</span>
                </li>
                <li className="flex items-start space-x-2 text-xs text-neutral-700 bg-[#FBFBF9] p-3 rounded border border-neutral-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                  <span>Corporate Email Address (<a href={`mailto:${companyContact.email}`} className="text-[#121212] underline">{companyContact.email}</a>)</span>
                </li>
                <li className="flex items-start space-x-2 text-xs text-neutral-700 bg-[#FBFBF9] p-3 rounded border border-neutral-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                  <span>Contact Phone Number ({companyContact.phone})</span>
                </li>
                <li className="flex items-start space-x-2 text-xs text-neutral-700 bg-[#FBFBF9] p-3 rounded border border-neutral-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                  <span>Delivery Address for Sample Swatch Kits & Freight</span>
                </li>
              </ul>
            </section>

            {/* Section 2: Data Usage */}
            <section className="space-y-3 border-b border-neutral-100 pb-8">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#121212]">
                <Lock className="w-4 h-4 text-[#C5A059]" />
                <h2>2. How Data Is Utilized</h2>
              </div>
              <p className="text-neutral-600 font-light">
                We strictly utilize corporate information for legitimate packaging business operations:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-neutral-600">
                <li>Formulating bulk wholesale quotes and custom mold estimates</li>
                <li>Shipping evaluation sample kits to verified corporate addresses</li>
                <li>Providing technical quality compliance certificates (ISO 15378 standard)</li>
                <li>Updating clients regarding batch manufacturing & dispatch status</li>
              </ul>
            </section>

            {/* Section 3: Intellectual Property & Copyright */}
            <section className="space-y-4 border-b border-neutral-100 pb-8">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#121212]">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <h2>3. Copyright & Platform Engineering</h2>
              </div>
              <div className="bg-[#FAF4EA] p-6 rounded-sm border border-[#E5DCCB] space-y-3 text-xs text-neutral-800">
                <div className="flex items-start space-x-3">
                  <Copyright className="w-4 h-4 text-[#967C2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#121212] font-bold">Copyright Statement:</strong>
                    <p className="mt-1 text-neutral-700 leading-relaxed font-light">
                      <strong>Copyright issued by EcoForm Packaging.</strong> All website content, high-resolution product imagery, glass manufacturing specifications, and branding elements are strictly copyrighted by EcoForm Packaging. Any unauthorized duplication or distribution without written consent is strictly prohibited.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-[#E5DCCB]/80">
                  <Code className="w-4 h-4 text-[#967C2F] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#121212] font-bold">Developer Credits:</strong>
                    <p className="mt-1 text-neutral-700 leading-relaxed font-light">
                      This web application was <strong>Developed by LogicPulse</strong>. LogicPulse specializes in building modern, ultra-responsive digital web solutions tailored for B2B enterprises.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Data Security */}
            <section className="space-y-3 border-b border-neutral-100 pb-8">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#121212]">
                <Globe2 className="w-4 h-4 text-[#C5A059]" />
                <h2>4. Data Confidentiality & Non-Disclosure</h2>
              </div>
              <p className="text-neutral-600 font-light">
                EcoForm Packaging enforces strict technical standards to ensure confidentiality. We never sell, rent, or trade customer contact details or structural product specs to third-party advertisers.
              </p>
            </section>

            {/* Section 5: Contact Legal */}
            <section className="space-y-4 pt-2">
              <h2 className="font-serif text-2xl text-[#121212] font-normal">
                Contact Our Legal & Compliance Team
              </h2>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                For questions regarding this Privacy Policy, copyright permissions, or corporate data inquiries, please reach out to our office:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 bg-[#FAF4EA] rounded border border-[#E5DCCB] space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#967C2F] font-bold text-[10px] uppercase">
                    <Mail className="w-3.5 h-3.5" />
                    <span>EMAIL SUPPORT</span>
                  </div>
                  <a href={`mailto:${companyContact.email}`} className="font-bold text-[#121212] hover:underline block break-all">
                    {companyContact.email}
                  </a>
                </div>

                <div className="p-4 bg-[#FAF4EA] rounded border border-[#E5DCCB] space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#967C2F] font-bold text-[10px] uppercase">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>PHONE INQUIRY</span>
                  </div>
                  <a href={`tel:${companyContact.rawPhone}`} className="font-bold text-[#121212] hover:underline block">
                    {companyContact.phone}
                  </a>
                </div>

                <div className="p-4 bg-[#FAF4EA] rounded border border-[#E5DCCB] space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#967C2F] font-bold text-[10px] uppercase">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>HEAD OFFICE</span>
                  </div>
                  <p className="font-semibold text-neutral-800 leading-tight">
                    {companyContact.locality}, {companyContact.city}, {companyContact.state}
                  </p>
                </div>
              </div>
            </section>
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

