"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { loginAsAdmin } from "@/lib/auth";
import { ArrowRight, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set session as Admin and redirect to dashboard
    loginAsAdmin(email);
    router.push("/dashboard");
  };

  const handleGoogleLogin = () => {
    loginAsAdmin("admin@oasis-ats.com");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-[#CDE5E0] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Mesh Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#BFDFD6] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#162523] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-md rounded-3xl bg-white/80 p-8 sm:p-10 shadow-2xl backdrop-blur-md border border-white/90"
      >
        {/* Logo / Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-serif text-2xl font-normal tracking-tight text-[#162523]">
              Oasis ATS
            </span>
          </Link>
          <p className="text-xs text-[#5A7B72]">Welcome back! Log in to manage your hiring pipeline.</p>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3 mb-6">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 rounded-2xl bg-white border border-[#BCD8D2] py-3 text-xs font-semibold text-[#162523] hover:bg-[#F4F9F8] transition-all shadow-xs cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-[#BCD8D2] w-full" />
          <span className="bg-white px-3 text-[10px] font-semibold uppercase text-[#5A7B72] absolute">
            or email
          </span>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#162523] uppercase tracking-wider mb-1.5">
              Work Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7B72]" />
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl bg-[#F4F9F8] border border-[#BCD8D2] pl-11 pr-4 py-3.5 text-xs text-[#162523] focus:outline-none focus:border-[#162523] transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-[#162523] uppercase tracking-wider">
                Password
              </label>
              <a href="#" className="text-[11px] font-medium text-[#2F4741] hover:underline">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7B72]" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl bg-[#F4F9F8] border border-[#BCD8D2] pl-11 pr-4 py-3.5 text-xs text-[#162523] focus:outline-none focus:border-[#162523] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#162523] py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:bg-[#233B36] transition-all cursor-pointer"
          >
            <span>Log In to Dashboard</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs text-[#5A7B72] mt-8">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="font-semibold text-[#162523] hover:underline">
            Sign up for free
          </Link>
        </p>
      </motion.div>
    </div>
  );
}