"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Mail, User, Building, Sparkles } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing up:", formData);
  };

  return (
    <div className="min-h-screen w-full bg-[#CDE5E0] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#BFDFD6] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#162523] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-md rounded-3xl bg-white/80 p-8 sm:p-10 shadow-2xl backdrop-blur-md border border-white/90"
      >
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-serif text-2xl font-normal tracking-tight text-[#162523]">
              Oasis ATS
            </span>
          </Link>
          <p className="text-xs text-[#5A7B72]">Start your 14-day free trial. No credit card required.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-[#162523] uppercase tracking-wider mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7B72]" />
              <input
                type="text"
                required
                placeholder="e.g. Vinayak Jaimini"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-2xl bg-[#F4F9F8] border border-[#BCD8D2] pl-11 pr-4 py-3 text-xs text-[#162523] focus:outline-none focus:border-[#162523] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#162523] uppercase tracking-wider mb-1">
              Work Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7B72]" />
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-2xl bg-[#F4F9F8] border border-[#BCD8D2] pl-11 pr-4 py-3 text-xs text-[#162523] focus:outline-none focus:border-[#162523] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#162523] uppercase tracking-wider mb-1">
              Company Name
            </label>
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7B72]" />
              <input
                type="text"
                required
                placeholder="Acme Inc."
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-2xl bg-[#F4F9F8] border border-[#BCD8D2] pl-11 pr-4 py-3 text-xs text-[#162523] focus:outline-none focus:border-[#162523] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#162523] uppercase tracking-wider mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7B72]" />
              <input
                type="password"
                required
                placeholder="Create password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full rounded-2xl bg-[#F4F9F8] border border-[#BCD8D2] pl-11 pr-4 py-3 text-xs text-[#162523] focus:outline-none focus:border-[#162523] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#162523] py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:bg-[#233B36] transition-all cursor-pointer"
          >
            <span>Create Free Account</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <p className="text-center text-xs text-[#5A7B72] mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-semibold text-[#162523] hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}