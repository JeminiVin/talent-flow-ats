"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);

  const reviews = [
    {
      quote:
        "Oasis ATS ne hamari hiring process ko adha kar diya hai. AI resume parsing aur automated workflow ne hume ghanto ka samay bachane me madad ki.",
      author: "Priya Sharma",
      role: "Head of Talent Acquisition, TechVibe",
      rating: 5,
      impact: "Reduced Time-to-Hire by 50%",
      initials: "PS",
    },
    {
      quote:
        "Clean interface aur powerful analytics ki wajah se hamari team ab bina kisi confusion ke fast decisions le pa rahi hai. Best recruitment software!",
      author: "Rahul Verma",
      role: "Founder & CEO, ScaleFast India",
      rating: 5,
      impact: "Scaled Team 3x in 90 Days",
      initials: "RV",
    },
    {
      quote:
        "Setup karna behad aasan tha, aur candidate pipeline management ka experience bilkul smooth hai. Highly recommended for growing teams.",
      author: "Ananya Roy",
      role: "HR Director, Nexus Solutions",
      rating: 5,
      impact: "Saved 120+ Recruiter Hours/mo",
      initials: "AR",
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#E5F2EF] py-24 px-6 sm:px-12 lg:px-20 border-t border-[#BCD8D2] relative overflow-hidden"
    >
      {/* Background Decorative Mesh Accents */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#CDE5E0] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#BCD8D2] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 border-b border-[#BCD8D2] pb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[#CDE5E0] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#162523] mb-3 border border-[#A5C9BF] shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2A453F]" /> Customer Stories
            </motion.div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#162523] leading-tight">
              Trusted by fast-growing <br /> HR leaders & teams.
            </h2>
          </div>
          <p className="text-sm text-[#3C5750] max-w-md leading-relaxed">
            Dekhiye kaise modern companies aur talent acquisition leaders Oasis ATS ke sath apne recruitment workflow ko elevate kar rahe hain.
          </p>
        </div>

        {/* Testimonials Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => {
            const isSelected = activeTab === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onClick={() => setActiveTab(idx)}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`group relative flex flex-col justify-between rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "bg-[#162523] text-white shadow-2xl border border-[#2F4A45]"
                    : "bg-white/80 text-[#162523] shadow-sm hover:shadow-xl border border-[#BCD8D2]/70 hover:border-[#162523]"
                }`}
              >
                <div>
                  {/* Top Rating & Quote Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <Quote
                      className={`w-8 h-8 transition-colors duration-300 ${
                        isSelected ? "text-[#293D39]" : "text-[#CDE5E0] group-hover:text-[#162523]"
                      }`}
                    />
                  </div>

                  {/* Impact Metric Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                        isSelected
                          ? "bg-[#293D39] text-emerald-400 border border-[#3A554E]"
                          : "bg-[#E1F0EC] text-[#2F4741]"
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {item.impact}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p
                    className={`text-sm sm:text-base leading-relaxed mb-8 font-serif ${
                      isSelected ? "text-[#E0ECE8]" : "text-[#2F4741]"
                    }`}
                  >
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info Footer */}
                <div
                  className={`border-t pt-5 flex items-center gap-3.5 transition-colors duration-300 ${
                    isSelected ? "border-[#293D39]" : "border-[#EAEFEB]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-serif text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-[#CDE5E0] text-[#162523] group-hover:bg-[#162523] group-hover:text-white"
                    }`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-sm ${
                        isSelected ? "text-white" : "text-[#162523]"
                      }`}
                    >
                      {item.author}
                    </h4>
                    <p
                      className={`text-xs ${
                        isSelected ? "text-[#82B5A8]" : "text-[#5A7B72]"
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}