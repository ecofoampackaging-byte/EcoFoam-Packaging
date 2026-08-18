"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle, Calculator, Send } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedProduct,
}: QuoteModalProps) {
  const [foamType, setFoamType] = useState(preselectedProduct || "Amber Glass Medicine Bottles (UV-Shield)");
  const [density, setDensity] = useState("150ml (Standard Tablets & Capsules)");
  const [quantity, setQuantity] = useState(5000);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", notes: "" });

  useEffect(() => {
    if (preselectedProduct) {
      setFoamType(preselectedProduct);
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const getEstimatedUnitCost = () => {
    let base = 0.45;
    if (foamType.includes("Amber") || foamType.includes("Frosted")) base += 0.25;
    if (quantity > 10000) base *= 0.82;
    else if (quantity > 5000) base *= 0.90;
    return base.toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white max-w-xl w-full rounded-sm shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header matching dark theme with official logo */}
        <div className="bg-[#14181B] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 shrink-0">
              <Image
                src="/images/logo-mark.png"
                alt="EcoForm Packaging"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 block font-sans font-bold">
                INSTANT B2B QUOTATION
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-white">
                Request Medicine Bottle Quote
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                  Bottle Category
                </label>
                <select
                  value={foamType}
                  onChange={(e) => setFoamType(e.target.value)}
                  className="w-full text-xs p-3.5 bg-neutral-50/50 border border-neutral-300 rounded-md focus:ring-1 focus:ring-[#14181B] focus:border-[#14181B] focus:outline-none"
                >
                  <option>Amber Glass Medicine Bottles (UV-Shield)</option>
                  <option>Ultra-Clear NMN & Supplement Bottles</option>
                  <option>Frosted Pharmaceutical Tablet Bottles</option>
                  <option>Matte Black Light-Barrier Capsule Bottles</option>
                  <option>Frosted Pharma Ointment & Balm Jars</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                  Capacity & Neck Specification
                </label>
                <select
                  value={density}
                  onChange={(e) => setDensity(e.target.value)}
                  className="w-full text-xs p-3.5 bg-neutral-50/50 border border-neutral-300 rounded-md focus:ring-1 focus:ring-[#14181B] focus:border-[#14181B] focus:outline-none"
                >
                  <option>50ml - 100ml (Liquid Syrups & Drops)</option>
                  <option>120ml - 150ml (Standard Tablets & Capsules)</option>
                  <option>200ml - 250ml (Bulk Pills & Liquids)</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
                  Production Order Quantity
                </label>
                <span className="text-xs font-bold text-[#14181B]">
                  {quantity.toLocaleString()} Units
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-[#14181B] cursor-pointer"
              />
            </div>

            {/* Price Estimator Box */}
            <div className="bg-neutral-100/70 p-4 rounded-md border border-neutral-200/80 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-sm bg-neutral-200/80 flex items-center justify-center text-[#14181B]">
                  <Calculator className="w-4 h-4 text-[#14181B]" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">
                    ESTIMATED WHOLESALE RATE
                  </p>
                  <p className="text-sm font-bold text-[#14181B]">
                    ${getEstimatedUnitCost()} / unit (EXW)
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Total Est. Order</p>
                <p className="text-sm font-serif font-bold text-[#14181B]">
                  ${(Number(getEstimatedUnitCost()) * quantity).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your Full Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full text-xs p-3.5 bg-neutral-50/50 border border-neutral-300 rounded-md focus:outline-none focus:border-[#14181B]"
              />
              <input
                type="email"
                required
                placeholder="Work Email Address *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full text-xs p-3.5 bg-neutral-50/50 border border-neutral-300 rounded-md focus:outline-none focus:border-[#14181B]"
              />
            </div>

            <input
              type="text"
              placeholder="Company / Brand Name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full text-xs p-3.5 bg-neutral-50/50 border border-neutral-300 rounded-md focus:outline-none focus:border-[#14181B]"
            />

            <button
              type="submit"
              className="w-full py-3.5 bg-[#14181B] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#252A2E] transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SUBMIT MEDICINE BOTTLE QUOTE REQUEST</span>
            </button>
          </form>
        ) : (
          <div className="p-10 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-2xl text-[#14181B]">
              Quotation Request Received
            </h4>
            <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-neutral-900">{form.name}</span>. An EcoForm Packaging account manager will review your specifications for <span className="font-bold">{foamType}</span> and contact <span className="font-bold">{form.email}</span> within 4 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 bg-[#14181B] text-white text-xs tracking-wider uppercase font-medium rounded-sm"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
