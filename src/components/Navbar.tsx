"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pt-6 pb-2 flex items-center justify-between">
      {/* Brand Logo */}
      <Link
        href="/"
        className="text-[16px] sm:text-[17px] font-medium tracking-tight text-white hover:opacity-90 transition-opacity"
      >
        Liquid Brokers
      </Link>

      {/* Center Nav Links (Desktop) */}
      <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[13px] sm:text-[13.5px] font-normal text-zinc-300">
        <Link href="#about" className="hover:text-white transition-colors">
          About
        </Link>
        <div className="group relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          <span>Trading</span>
          <ChevronDown className="w-3 h-3 text-zinc-400 group-hover:text-white transition-colors duration-200" />
        </div>
        <Link href="#contact" className="hover:text-white transition-colors">
          Contact
        </Link>
        <Link href="#faq" className="hover:text-white transition-colors">
          FAQ
        </Link>
        <div className="group relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          <span>ENG</span>
          <ChevronDown className="w-3 h-3 text-zinc-400 group-hover:text-white transition-colors duration-200" />
        </div>
      </nav>

      {/* Right Actions (Desktop) */}
      <div className="hidden md:flex items-center space-x-5">
        <button
          type="button"
          className="text-[13px] sm:text-[13.5px] font-normal text-zinc-200 hover:text-white transition-colors cursor-pointer px-2 py-1"
        >
          Login
        </button>
        <button
          type="button"
          className="rounded-full bg-white text-black font-medium text-[13px] sm:text-[13.5px] px-5 py-1.5 hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
        >
          Sign up
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-16 z-40 p-6 rounded-2xl glass-card border border-white/10 flex flex-col space-y-4 shadow-2xl backdrop-blur-2xl">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-zinc-200 hover:text-white py-1"
          >
            About
          </Link>
          <div className="flex items-center justify-between text-sm font-medium text-zinc-200 py-1">
            <span>Trading</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
          </div>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-zinc-200 hover:text-white py-1"
          >
            Contact
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-zinc-200 hover:text-white py-1"
          >
            FAQ
          </Link>
          <div className="flex items-center justify-between text-sm font-medium text-zinc-200 py-1">
            <span>Language: ENG</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              className="w-full py-2 text-center text-xs font-medium text-zinc-200 rounded-lg hover:bg-white/5"
            >
              Login
            </button>
            <button
              type="button"
              className="w-full py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
