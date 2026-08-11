"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Boundary caught error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FBFBF9] flex items-center justify-center py-24 px-4 text-center">
      <div className="max-w-md space-y-6 bg-white p-10 border border-neutral-200 shadow-md rounded-sm">
        <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
          SYSTEM NOTICE
        </span>
        <h1 className="font-serif text-3xl text-[#121212] font-normal">
          An Unexpected Error Occurred
        </h1>
        <p className="text-neutral-600 text-xs font-sans font-light leading-relaxed">
          Our application encountered a temporary glitch. Please try refreshing or returning to the home page.
        </p>
        <div className="pt-4 flex items-center justify-center space-x-3">
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-[#121212] text-white text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#2b2b2b] transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-2.5 border border-neutral-300 text-neutral-800 text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-neutral-50 transition-all"
          >
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
