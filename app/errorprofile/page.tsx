"use client";

import React from "react";
import { useState } from "react";

export default function FacebookLogin() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center justify-center font-sans pt-30">
      <main className="flex flex-col lg:flex-row items-center justify-between w-full max-w-245 px-4 pb-20 lg:pb-40">
        {/* Left Side: Branding */}
        <h1 className="text-center text-gray-400 text-2xl">
          Profile don&apos;t exist
        </h1>
      </main>

      {/* Footer (Simplified Example) */}
      <footer className="w-full bg-white flex justify-center pt-8 pb-12">
        <div className="max-w-245 w-full px-4 text-xs text-gray-500 leading-relaxed">
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2">
            <span>English (US)</span>
            <span className="hover:underline cursor-pointer">Español</span>
            <span className="hover:underline cursor-pointer">
              Português (Brasil)
            </span>
            <span className="hover:underline cursor-pointer">
              Français (France)
            </span>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Sign Up</span>
            <span>Log In</span>
            <span>Messenger</span>
            <span>Facebook Lite</span>
            <span>Video</span>
            <span>Places</span>
            <span>Games</span>
            <span>Marketplace</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
