"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { UserCheck, Zap, ShieldCheck, BarChart3, Sparkles } from "lucide-react";

export interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ElementType;
  positionOffsetY: string; // Vertical alignment for arc curve effect
}

const featuresData: FeatureItem[] = [
  {
    id: "sourcing",
    badge: "AI AUTOMATION",
    title: "Smart Sourcing",
    description: "Automatically pull top talent across channels with AI-driven matching algorithms.",
    icon: UserCheck,
    positionOffsetY: "lg:translate-y-0",
  },
  {
    id: "screening",
    badge: "INSTANT FILTER",
    title: "Automated Screening",
    description: "Filter resumes instantly based on custom skills, experience, and prerequisites.",
    icon: Zap,
    positionOffsetY: "lg:translate-y-12",
  },
  {
    id: "privacy",
    badge: "SECURE BY DESIGN",
    title: "Data Privacy & Compliance",
    description: "Enterprise-grade security ensuring full GDPR and candidate data protection.",
    icon: ShieldCheck,
    positionOffsetY: "lg:translate-y-12",
  },
  {
    id: "analytics",
    badge: "DEEP INSIGHTS",
    title: "Recruitment Analytics",
    description: "Track time-to-hire, pipeline health, and interviewer performance with metrics.",
    icon: BarChart3,
    positionOffsetY: "lg:translate-y-0",
  },
];

export default function Features() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative w-full bg-[#E5F2EF] py-24 px-6 sm:px-12 lg:px-16 overflow-hidden text-[#162523]"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#CDE5E0]/60 px-4 py-1.5 text-[11px] font-mono tracking-widest text-[#162523] border border-[#162523]/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>CORE CAPABILITIES</span>
          </div>

          <h2
            id="features-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-[#162523] mb-4"
          >
            Our Features
          </h2>
          <p className="text-sm sm:text-base text-[#162523]/75 font-sans font-medium">
            Everything you need for effortless human resource management.
          </p>
        </div>

        {/* Curved Path Graphic & Features Grid */}
        <div className="relative mt-8">
          
          {/* Background Decorative Arc Line (SVG Curve) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full z-0 pointer-events-none">
            <svg
              className="w-full h-36"
              viewBox="0 0 1200 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 50 20 Q 600 180 1150 20"
                stroke="#162523"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.25"
              />
            </svg>
          </div>

          {/* 4 Feature Circles arranged in Curve Layout */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
            {featuresData.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className={`flex flex-col items-center text-center transition-transform duration-300 ${feature.positionOffsetY}`}
                >
                  {/* Circular Icon Wrapper matching reference design */}
                  <div className="relative mb-6 group cursor-pointer">
                    {/* Ring Border Accent */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-xl border-2 border-[#162523]/15 flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105 group-hover:border-emerald-600">
                      
                      {/* Inner Circular Icon Container */}
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#E5F2EF] flex items-center justify-center text-[#162523] group-hover:bg-[#162523] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
                      </div>

                      {/* Top Accent Ring Segment */}
                      <svg
                        className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="47"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="3"
                          strokeDasharray="70 200"
                          strokeLinecap="round"
                          className="opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-800 uppercase mb-2">
                    {feature.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-[#162523] mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#162523]/70 leading-relaxed max-w-xs font-sans">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}