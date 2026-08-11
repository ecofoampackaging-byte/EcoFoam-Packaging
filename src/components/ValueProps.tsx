"use client";

import React from "react";
import { SlidersHorizontal, Globe, Edit3, CheckCircle2 } from "lucide-react";

export default function ValueProps() {
  const values = [
    {
      icon: SlidersHorizontal,
      title: "PRECISION MANUFACTURING",
      description:
        "State-of-the-art facilities ensuring exact tolerances and flawless finishes for every unit.",
      details: ["±0.05mm Micro-Tolerance", "ISO 15378 Cleanroom Standards", "Automated Optical Inspection"],
    },
    {
      icon: Globe,
      title: "GLOBAL LOGISTICS",
      description:
        "Streamlined supply chain solutions delivering your packaging securely and on schedule, worldwide.",
      details: ["Buffer Inventory Options", "Climate-Controlled Freight", "DDP Global Delivery"],
    },
    {
      icon: Edit3,
      title: "CUSTOM DESIGN SERVICES",
      description:
        "Collaborative engineering to create bespoke molds that perfectly align with your brand identity.",
      details: ["3D Rapid Prototyping", "Bespoke Mold Development", "Custom Silk Screen & Gold Foil"],
    },
  ];

  return (
    <section id="quality" className="py-16 bg-[#FBFBF9] border-t border-black/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-sm border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-[#121212] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-sans font-bold text-xs sm:text-sm tracking-[0.15em] text-[#121212] uppercase mb-3">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 space-y-1.5">
                  {item.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center text-[11px] text-neutral-500 font-sans"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#C5A059] mr-1.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
