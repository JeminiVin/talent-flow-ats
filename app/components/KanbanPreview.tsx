"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, Sparkles, Filter, ChevronRight, ChevronLeft } from "lucide-react";

interface Candidate {
  id: string;
  name: string;
  role: string;
  score: number;
}

export default function KanbanPreview() {
  const [stages, setStages] = useState({
    applied: [
      { id: "1", name: "Aarav Sharma", role: "Frontend Dev", score: 94 },
      { id: "2", name: "Neha Patel", role: "UI/UX Designer", score: 88 },
    ] as Candidate[],
    screened: [
      { id: "3", name: "Rohan Mehta", role: "Full Stack Lead", score: 96 },
    ] as Candidate[],
    interview: [
      { id: "4", name: "Ananya Gupta", role: "Product Manager", score: 92 },
    ] as Candidate[],
  });

  const moveCandidate = (candidateId: string, fromStage: keyof typeof stages, toStage: keyof typeof stages) => {
    const candidate = stages[fromStage].find((c) => c.id === candidateId);
    if (!candidate) return;

    setStages((prev) => ({
      ...prev,
      [fromStage]: prev[fromStage].filter((c) => c.id !== candidateId),
      [toStage]: [...prev[toStage], candidate],
    }));
  };

  return (
    <section className="w-full bg-[#162523] py-24 px-6 sm:px-12 lg:px-20 text-white border-t border-[#293D39] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[#293D39] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A5C9BF] mb-3 border border-[#3A554E]"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Interactive Simulation
            </motion.div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Try the ATS Pipeline Drag Simulation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A5C9BF] max-w-md leading-relaxed">
            Click on any candidate card to advance them through your AI recruitment pipeline in real-time.
          </p>
        </div>

        {/* Board Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. APPLIED COLUMN */}
          <div className="rounded-3xl bg-[#1F3330]/90 p-6 border border-[#2F4A45] shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#293D39]">
              <span className="text-xs font-semibold text-[#A5C9BF] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Sourced / Applied ({stages.applied.length})
              </span>
              <Filter className="w-3.5 h-3.5 text-[#82B5A8]" />
            </div>

            <div className="space-y-3 min-h-[220px]">
              <AnimatePresence>
                {stages.applied.map((c) => (
                  <motion.div
                    key={c.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => moveCandidate(c.id, "applied", "screened")}
                    className="p-4 rounded-2xl bg-[#162523] border border-[#2F4A45] flex items-center justify-between cursor-pointer hover:border-emerald-400 transition-colors shadow-md group"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">{c.name}</h4>
                      <p className="text-[11px] text-[#82B5A8]">{c.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-lg">
                        {c.score}% Match
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#82B5A8] group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {stages.applied.length === 0 && (
                <div className="flex items-center justify-center h-32 text-xs text-[#6B8E85] italic">
                  No candidates in queue
                </div>
              )}
            </div>
          </div>

          {/* 2. SCREENED COLUMN */}
          <div className="rounded-3xl bg-[#1F3330]/90 p-6 border border-[#2F4A45] shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#293D39]">
              <span className="text-xs font-semibold text-[#A5C9BF] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                AI Screened ({stages.screened.length})
              </span>
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            <div className="space-y-3 min-h-[220px]">
              <AnimatePresence>
                {stages.screened.map((c) => (
                  <motion.div
                    key={c.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => moveCandidate(c.id, "screened", "interview")}
                    className="p-4 rounded-2xl bg-[#162523] border border-[#2F4A45] flex items-center justify-between cursor-pointer hover:border-emerald-400 transition-colors shadow-md group"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">{c.name}</h4>
                      <p className="text-[11px] text-[#82B5A8]">{c.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-lg">
                        {c.score}% Match
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#82B5A8] group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {stages.screened.length === 0 && (
                <div className="flex items-center justify-center h-32 text-xs text-[#6B8E85] italic">
                  Drop candidates here
                </div>
              )}
            </div>
          </div>

          {/* 3. INTERVIEW COLUMN */}
          <div className="rounded-3xl bg-[#1F3330]/90 p-6 border border-[#2F4A45] shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#293D39]">
              <span className="text-xs font-semibold text-[#A5C9BF] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                Interview Scheduled ({stages.interview.length})
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>

            <div className="space-y-3 min-h-[220px]">
              <AnimatePresence>
                {stages.interview.map((c) => (
                  <motion.div
                    key={c.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => moveCandidate(c.id, "interview", "applied")}
                    className="p-4 rounded-2xl bg-[#162523] border border-[#2F4A45] flex items-center justify-between cursor-pointer hover:border-emerald-400 transition-colors shadow-md group"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">{c.name}</h4>
                      <p className="text-[11px] text-[#82B5A8]">{c.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-lg">
                        {c.score}% Match
                      </span>
                      <ChevronLeft className="w-4 h-4 text-[#82B5A8] group-hover:text-white transition-transform group-hover:-translate-x-0.5" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {stages.interview.length === 0 && (
                <div className="flex items-center justify-center h-32 text-xs text-[#6B8E85] italic">
                  No active interviews
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}