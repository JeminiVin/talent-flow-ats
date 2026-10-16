"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export interface HeroProps {
  onOpenDemo?: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  // Explicitly Typed Animation Variants (Fixes TypeScript Easing & Variant Errors)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const, // Added 'as const' to satisfy cubic-bezier tuple typing
      },
    },
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full h-screen min-h-[680px] max-h-[1080px] overflow-hidden bg-black flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12"
    >
      {/* Background Mountain Image with Cinematic Slow Zoom Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
          alt="Atmospheric mountain backdrop"
          className="w-full h-full object-cover object-center filter brightness-[0.82]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-[1440px] mx-auto w-full px-6 sm:px-12 lg:px-16 flex flex-col justify-between flex-grow h-full"
      >
        {/* Center-Left Content Area */}
        <div className="max-w-3xl my-auto py-4">
          
          {/* Animated AI Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-[11px] font-mono tracking-widest text-emerald-300 border border-emerald-500/30 shadow-lg mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>AI RECRUITMENT OPERATING SYSTEM</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-300 ml-0.5" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-[1.05] mb-6 drop-shadow-xl"
          >
            The Pipeline Beyond <br />
            <span className="font-normal italic bg-gradient-to-r from-emerald-200 via-teal-100 to-emerald-400 bg-clip-text text-transparent">
              Your Imagination
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm lg:text-base text-white/80 max-w-xl leading-relaxed font-sans mb-8 drop-shadow"
          >
            Discover top-tier tech talent and automate resume screening with deterministic AI intelligence and seamless collaborative workflows.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenDemo}
              className="group rounded-xl bg-white text-[#162523] hover:bg-emerald-50 px-6 sm:px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-emerald-500/20 cursor-pointer flex items-center gap-3 hover:scale-[1.02]"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenDemo}
              className="group rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md text-white px-5 sm:px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/25 cursor-pointer flex items-center gap-3 hover:scale-[1.02]"
            >
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 group-hover:bg-emerald-400 group-hover:text-black transition-colors flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
              <span>Watch Workflow</span>
            </button>
          </motion.div>

        </div>

        {/* Bottom Feature Cards & Candidates Preview Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pt-6 border-t border-white/15 w-full mt-auto"
        >
          
          {/* Glassmorphic Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 text-white hover:border-emerald-500/40 transition-colors shadow-xl">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                AI Accuracy
              </span>
              <p className="text-xs text-white/85 mt-1 leading-snug">
                99.4% precision in resume parsing and tech stack matching.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 text-white hover:border-emerald-500/40 transition-colors shadow-xl">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                SOC2 Secure
              </span>
              <p className="text-xs text-white/85 mt-1 leading-snug">
                Enterprise-grade compliance protecting all applicant data.
              </p>
            </div>
          </div>

          {/* Floating Candidate Match Cards */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="relative w-36 lg:w-40 h-20 lg:h-24 rounded-2xl overflow-hidden shadow-2xl border border-white/30 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
                alt="Candidate match preview 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-2.5">
                <span className="text-[10px] text-white font-medium truncate">
                  Siddharth V. · <span className="text-emerald-300 font-bold">96% Match</span>
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="relative w-36 lg:w-40 h-20 lg:h-24 rounded-2xl overflow-hidden shadow-2xl border border-white/30 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                alt="Candidate match preview 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-2.5">
                <span className="text-[10px] text-white font-medium truncate">
                  Priya S. · <span className="text-emerald-300 font-bold">94% Match</span>
                </span>
              </div>
            </motion.div>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}