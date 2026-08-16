"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, CheckCircle, Truck } from "lucide-react";
import { sampleBoxes } from "@/data/company";

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SampleModal({ isOpen, onClose }: SampleModalProps) {
  const [selectedSet, setSelectedSet] = useState("ecoform-box");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white max-w-xl w-full rounded-sm shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header matching dark charcoal theme with official logo */}
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
                EVALUATION KIT
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-white">
                Order EcoForm Sample Kit
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
            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              Select a sample kit below. All evaluation boxes include material ASTM D6400 compostability specs and shock absorption test reports.
            </p>

            {/* Radio Box options matching exact image */}
            <div className="space-y-3">
              {sampleBoxes.map((box) => {
                const isSelected = selectedSet === box.id;
                return (
                  <label
                    key={box.id}
                    className={`flex items-start p-4 border rounded-md cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "border-[#14181B] bg-white ring-1 ring-[#14181B]"
                        : "border-neutral-200 bg-white hover:bg-neutral-50"
                    }`}
                  >
                    {/* Radio indicator circle */}
                    <div className="mt-0.5 flex-shrink-0">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected
                            ? "border-[#14181B] bg-[#14181B]"
                            : "border-neutral-300 bg-white"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="sampleBox"
                        value={box.id}
                        checked={isSelected}
                        onChange={() => setSelectedSet(box.id)}
                        className="sr-only"
                      />
                    </div>

                    <div className="ml-3.5 flex-1 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm font-bold text-[#14181B]">
                          {box.name}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider bg-[#14181B] text-white px-2.5 py-0.5 rounded-full font-bold">
                          {box.tag}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                        {box.items}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Input Fields */}
            <div className="space-y-3 pt-2">
              <input
                type="text"
                required
                placeholder="Recipient Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full text-xs sm:text-sm p-3.5 bg-neutral-50/50 border border-neutral-300 rounded-md focus:outline-none focus:border-[#14181B] placeholder-neutral-400 font-sans"
              />
              <input
                type="email"
                required
                placeholder="Business Email *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full text-xs sm:text-sm p-3.5 bg-neutral-50/50 border border-neutral-300 rounded-md focus:outline-none focus:border-[#14181B] placeholder-neutral-400 font-sans"
              />
              <input
                type="text"
                required
                placeholder="Shipping Street Address *"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full text-xs sm:text-sm p-3.5 bg-neutral-50/50 border border-neutral-300 rounded-md focus:outline-none focus:border-[#14181B] placeholder-neutral-400 font-sans"
              />
            </div>

            {/* Action button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#14181B] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#252A2E] transition-all flex items-center justify-center space-x-2 shadow-xs"
            >
              <Truck className="w-4 h-4" />
              <span>DISPATCH ECOFOAM SAMPLE BOX</span>
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-2xl text-[#14181B]">
              Sample Order Confirmed
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
              Your EcoForm evaluation kit has been dispatched. Tracking number will be sent to <span className="font-semibold text-neutral-900">{form.email}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#14181B] text-white text-xs tracking-wider uppercase font-medium rounded-sm"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
