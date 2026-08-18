"use client";

import React from "react";
import { SlidersHorizontal, Globe, Edit3, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ValueProps() {
  const values = [
    {
      icon: SlidersHorizontal,
      title: "PRECISION MANUFACTURING",
      description:
        "State-of-the-art facilities ensuring exact tolerances and flawless finishes for every medical & pharma unit.",
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
        "Collaborative engineering to create bespoke molds and finishes that perfectly align with your brand identity.",
      details: ["3D Rapid Prototyping", "Bespoke Mold Development", "Custom Silk Screen & Foil"],
    },
  ];

  return (
    <section id="quality" className="py-20 sm:py-24 bg-[#FBFBF9] border-t border-black/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white p-8 sm:p-10 rounded-sm border border-neutral-200/80 hover:border-[#121212] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-12 h-12 rounded-sm bg-[#F5F3EF] flex items-center justify-center mb-6 group-hover:bg-[#121212] group-hover:text-white transition-colors duration-300 shadow-2xs"
                  >
                    <IconComponent className="w-5 h-5 text-neutral-800 group-hover:text-[#C5A059] transition-colors" />
                  </motion.div>

                  <h3 className="font-sans font-bold text-xs sm:text-sm tracking-[0.15em] text-[#121212] uppercase mb-3 flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans font-light mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-neutral-100 space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center text-xs text-neutral-600 font-sans"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
