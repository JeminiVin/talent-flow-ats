"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Award, Users2, Clock, Sparkles, ArrowUpRight } from "lucide-react";

export default function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const stats = [
    {
      icon: TrendingUp,
      value: "65%",
      label: "Faster Hiring Velocity",
      desc: "Reduce time-to-hire from weeks to days with automated candidate pipelines.",
      badge: "EFFICIENCY",
      highlight: "+42% MoM",
      colSpan: "lg:col-span-2",
      gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    },
    {
      icon: Award,
      value: "99.4%",
      label: "AI Match Precision",
      desc: "High-accuracy resume parsing and automated skill matching algorithms.",
      badge: "ACCURACY",
      highlight: "SOC2 Certified",
      colSpan: "lg:col-span-1",
      gradient: "from-teal-500/10 via-teal-500/5 to-transparent",
    },
    {
      icon: Clock,
      value: "120+ hrs",
      label: "Saved Per Month",
      desc: "Eliminate repetitive scheduling and initial resume screening tasks.",
      badge: "TIME SAVER",
      highlight: "Automated",
      colSpan: "lg:col-span-1",
      gradient: "from-emerald-400/10 via-emerald-400/5 to-transparent",
    },
    {
      icon: Users2,
      value: "10,000+",
      label: "Active Recruiters",
      desc: "Trusted by fast-scaling HR teams, agencies, and enterprise companies globally.",
      badge: "GLOBAL COMMUNITY",
      highlight: "4.9/5 Rating",
      colSpan: "lg:col-span-2",
      gradient: "from-teal-400/10 via-teal-400/5 to-transparent",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#162523] py-28 px-6 sm:px-12 lg:px-20 text-white relative overflow-hidden border-t border-[#293D39]"
    >
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#A5C9BF]/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Background Grid Line Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#CDE5E0 1px, transparent 1px), linear-gradient(90deg, #CDE5E0 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8 pb-8 border-b border-[#293D39]">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#1F3330] px-4 py-1.5 text-[11px] font-mono tracking-widest text-emerald-300 mb-4 border border-[#2F4A45]"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>PROVEN METRICS & IMPACT</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl font-light text-white leading-[1.15]"
            >
              Empowering modern teams to <br />
              <span className="italic font-normal text-emerald-300">hire smarter & faster.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#A5C9BF] max-w-sm font-sans leading-relaxed"
          >
            Real-time analytics collected from over 500+ active hiring pipelines running on Oasis ATS.
          </motion.p>
        </div>

        {/* Bento Box-Style Modern Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 * idx }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col justify-between rounded-3xl bg-[#1D2E2B]/80 p-8 border border-[#2A423D] hover:border-emerald-500/50 transition-all duration-300 shadow-xl backdrop-blur-xl overflow-hidden ${item.colSpan}`}
              >
                {/* Background Card Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Top Badge, Icon & Highlight Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#253B37] border border-[#324F4A] flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-[#162523] group-hover:scale-105 transition-all duration-300 shadow-inner">
                        <Icon className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#82B5A8]">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <span>{item.highlight}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Big Number Counter */}
                  <motion.h3
                    initial={{ scale: 0.95 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                    className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight mb-2 group-hover:text-emerald-200 transition-colors"
                  >
                    {item.value}
                  </motion.h3>

                  <p className="text-base font-semibold text-[#CDE5E0] mb-4">
                    {item.label}
                  </p>
                </div>

                {/* Description Divider */}
                <p className="text-xs text-[#8BA8A0] leading-relaxed border-t border-[#293D39] pt-4 mt-2 group-hover:text-white/80 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}