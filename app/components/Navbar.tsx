"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export interface NavbarProps {
  onOpenDemo?: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#162523]/90 backdrop-blur-md border-b border-[#293D39] shadow-lg py-3"
          : "bg-transparent border-b border-transparent py-5"
      } text-white`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center font-serif text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            O
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base tracking-tight text-white">
              Oasis ATS
            </span>
            <span className="text-[10px] font-mono tracking-widest text-emerald-300 uppercase">
              Talent Cloud
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-white/90">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenDemo}
            className="text-xs font-semibold text-white/90 hover:text-white transition-colors px-3 py-2 cursor-pointer"
          >
            Log In
          </button>
          <button
            onClick={onOpenDemo}
            className="group inline-flex items-center gap-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>Book Demo</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-black/40 backdrop-blur-md text-emerald-300 border border-white/20"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#162523]/95 backdrop-blur-xl border-b border-[#293D39] px-6 py-6 space-y-4 shadow-2xl">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#CDE5E0] hover:text-white py-1"
          >
            Features
          </a>
          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#CDE5E0] hover:text-white py-1"
          >
            Solutions
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#CDE5E0] hover:text-white py-1"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#CDE5E0] hover:text-white py-1"
          >
            FAQ
          </a>
          <div className="pt-4 border-t border-[#293D39] flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo?.(); }}
              className="w-full rounded-xl bg-white text-[#162523] py-3 text-xs font-semibold uppercase tracking-wider text-center"
            >
              Book Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}