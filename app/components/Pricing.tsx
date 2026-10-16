"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";

interface PricingProps {
  onOpenDemo?: () => void;
}

export default function Pricing({ onOpenDemo }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for early-stage startups and small teams beginning structured hiring.",
      monthlyPrice: "₹2,999",
      annualPrice: "₹2,399",
      badge: "Basic",
      features: [
        "Up to 3 active job postings",
        "AI Resume Parsing (500/mo)",
        "Standard applicant tracking pipeline",
        "Email support & documentation",
        "1 Recruiter seat included",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      desc: "Designed for scaling teams needing advanced AI filtering and deep insights.",
      monthlyPrice: "₹7,999",
      annualPrice: "₹6,399",
      badge: "Most Popular",
      features: [
        "Unlimited active job postings",
        "Advanced AI Resume Parsing & Scoring",
        "Custom recruitment stages & workflows",
        "Real-time recruitment analytics dashboard",
        "Priority support & onboarding",
        "Up to 5 Recruiter seats",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      desc: "Custom solutions with enterprise-grade security and dedicated account management.",
      monthlyPrice: "₹18,999",
      annualPrice: "₹15,199",
      badge: "Custom",
      features: [
        "Everything in Growth plan",
        "SOC2 Type II & GDPR compliance tools",
        "Dedicated account manager & SLA",
        "Custom ATS integrations & API access",
        "Unlimited recruiter seats",
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full bg-[#CDE5E0] py-24 px-6 sm:px-12 lg:px-20 border-t border-[#BCD8D2] relative overflow-hidden"
    >
      {/* Background Decorative Mesh Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#BFDFD6] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#162523] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#BFDFD6] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#162523] mb-4 border border-[#A5C9BF] shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2A453F]" /> Simple & Transparent Pricing
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#162523] tracking-tight mb-4"
          >
            Invest in seamless hiring.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-[#3A554E] max-w-xl mx-auto leading-relaxed"
          >
            Transparent plans tailored to match your team size and recruitment velocity. No hidden fees or lock-ins.
          </motion.p>

          {/* Billing Switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#BFDFD6]/80 p-1.5 border border-[#BCD8D2] shadow-inner"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 cursor-pointer ${
                !isAnnual
                  ? "bg-[#162523] text-white shadow-md"
                  : "text-[#3A554E] hover:text-[#162523]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                isAnnual
                  ? "bg-[#162523] text-white shadow-md"
                  : "text-[#3A554E] hover:text-[#162523]"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-mono font-bold bg-emerald-400 text-[#162523] px-2 py-0.5 rounded-full">
                20% OFF
              </span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: plan.highlighted ? -12 : -8 }}
              className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-300 overflow-hidden ${
                plan.highlighted
                  ? "bg-[#162523] text-white shadow-2xl lg:-translate-y-2 border border-[#2B423E] ring-1 ring-emerald-500/20"
                  : "bg-white/80 text-[#162523] shadow-lg border border-white/90 hover:border-[#162523]"
              }`}
            >
              {/* Highlight Card Glow Accent */}
              {plan.highlighted && (
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
              )}

              <div>
                {/* Plan Badge & Header */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full ${
                      plan.highlighted
                        ? "bg-[#293D39] text-emerald-400 border border-[#3A554E]"
                        : "bg-[#E1F0EC] text-[#2F4741]"
                    }`}
                  >
                    {plan.badge}
                  </span>
                  {plan.highlighted && (
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#82B5A8] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Top Choice
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-3xl font-normal mb-2">
                  {plan.name}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-8 ${
                    plan.highlighted ? "text-[#B2D6CB]" : "text-[#46655D]"
                  }`}
                >
                  {plan.desc}
                </p>

                {/* Animated Price Display */}
                <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-current/10">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isAnnual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="font-serif text-4xl sm:text-5xl font-light tracking-tight"
                    >
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  <span
                    className={`text-xs ${
                      plan.highlighted ? "text-[#A5C9BF]" : "text-[#5A7B72]"
                    }`}
                  >
                    / month {isAnnual ? "(billed yearly)" : ""}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div
                        className={`mt-0.5 rounded-full p-1 flex-shrink-0 ${
                          plan.highlighted
                            ? "bg-[#293D39] text-emerald-400"
                            : "bg-[#E1F0EC] text-[#162523]"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span
                        className={
                          plan.highlighted ? "text-[#D1E6E0]" : "text-[#3A554E]"
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Action Button */}
              <button
                onClick={onOpenDemo}
                className={`group inline-flex items-center justify-center gap-2 w-full rounded-2xl py-4 text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  plan.highlighted
                    ? "bg-white text-[#162523] hover:bg-[#E1F0EC] shadow-lg"
                    : "bg-[#162523] text-white hover:bg-[#2B3A37] shadow-md"
                }`}
              >
                <span>Get Started with {plan.name}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}