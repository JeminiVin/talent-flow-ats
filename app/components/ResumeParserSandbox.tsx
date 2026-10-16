"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  UploadCloud,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  Cpu,
  Code2,
  Terminal,
  Zap,
  Bot,
} from "lucide-react";

export default function ResumeParserSandbox() {
  const [isParsing, setIsParsing] = useState(false);
  const [parsingStep, setParsingStep] = useState(0);
  const [viewMode, setViewMode] = useState<"visual" | "json">("visual");

  const [parsedData, setParsedData] = useState<null | {
    name: string;
    role: string;
    score: number;
    skills: string[];
    experience: string;
    recommendation: string;
    parsedAt: string;
  }>(null);

  const steps = [
    "Extracting OCR raw text & structure...",
    "Matching skill vectors against job requirements...",
    "Calculating AI Fit Index & generating recommendation...",
  ];

  const handleSimulateUpload = () => {
    setIsParsing(true);
    setParsedData(null);
    setParsingStep(0);

    // Step-by-step processing animation
    const stepInterval = setInterval(() => {
      setParsingStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(stepInterval);
        return prev;
      });
    }, 600);

    setTimeout(() => {
      setIsParsing(false);
      setParsedData({
        name: "Siddharth Verma",
        role: "Senior Full-Stack Engineer",
        score: 96,
        skills: ["React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Supabase", "GraphQL"],
        experience: "4.5 Years in High-Growth Web Scale Applications",
        recommendation: "Strong Hire — Top 2% candidate for Senior Frontend / Full-Stack Role.",
        parsedAt: new Date().toLocaleTimeString(),
      });
    }, 2200);
  };

  return (
    <section className="w-full bg-[#CDE5E0] py-24 px-6 sm:px-12 lg:px-20 border-t border-[#BCD8D2] relative overflow-hidden">
      {/* Background Decorative Mesh Accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#BFDFD6] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#162523] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#BFDFD6] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#162523] mb-4 border border-[#A2C9BD] shadow-xs"
          >
            <Cpu className="w-3.5 h-3.5 text-[#162523] animate-pulse" /> Live AI Engine Sandbox
          </motion.div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#162523] leading-tight">
            Test Real-Time AI Resume Parsing
          </h2>
          <p className="text-xs sm:text-sm text-[#3C5750] mt-3 leading-relaxed">
            Experience how Oasis ATS parses unstructured resumes into hyper-structured data points and instant match scoring in milliseconds.
          </p>
        </div>

        {/* Sandbox Playground Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: UPLOADER / TRIGGER BOX */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-3xl bg-white/80 p-8 shadow-xl border border-white/90 backdrop-blur-md relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl text-[#162523]">Input Document</h3>
                <span className="text-[10px] font-mono font-semibold bg-[#E1F0EC] text-[#293D39] px-2.5 py-1 rounded-lg border border-[#BCD8D2]">
                  v2.4 AI Model
                </span>
              </div>
              <p className="text-xs text-[#5A7B72] mb-6">
                Click below to simulate feeding a live applicant resume into our extraction engine.
              </p>

              {/* Interactive Drag & Drop Zone */}
              <div
                onClick={handleSimulateUpload}
                className="group relative border-2 border-dashed border-[#BCD8D2] hover:border-[#162523] rounded-3xl p-8 sm:p-10 text-center cursor-pointer bg-[#F4F9F8] transition-all duration-300 hover:bg-[#E5F2EF] hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#CDE5E0] text-[#162523] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#162523] group-hover:text-white transition-all duration-300 shadow-sm">
                  <UploadCloud className="w-7 h-7" />
                </div>
                <p className="text-xs font-bold text-[#162523] uppercase tracking-wider mb-1">
                  Run Live Parser Test
                </p>
                <p className="text-[11px] text-[#5A7B72]">
                  Simulate parsing <span className="font-semibold text-[#162523]">siddharth_resume.pdf</span>
                </p>

                {/* Micro pulse aura on hover */}
                <div className="absolute inset-0 rounded-3xl border border-[#162523]/0 group-hover:border-[#162523]/20 transition-all pointer-events-none" />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between text-xs text-[#5A7B72] border-t border-[#E1F0EC] pt-4">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#162523]" />
                <span className="font-mono text-[11px] text-[#162523] font-medium">sample_siddharth.pdf</span>
              </span>
              <button
                onClick={handleSimulateUpload}
                disabled={isParsing}
                className="font-semibold text-[#162523] hover:text-[#293D39] flex items-center gap-1.5 bg-[#CDE5E0] hover:bg-[#BFDFD6] px-3.5 py-1.5 rounded-xl transition-all cursor-pointer shadow-xs disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isParsing ? "animate-spin" : ""}`} />
                <span>{isParsing ? "Processing..." : "Re-run AI"}</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT: PARSED OUTPUT TERMINAL DISPLAY */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#162523] p-6 sm:p-8 shadow-2xl text-white border border-[#2F4A45] flex flex-col justify-between relative overflow-hidden min-h-[380px]"
          >
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#293D39] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-[#82B5A8] flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Oasis-AI-Output
                </span>
              </div>

              {/* View Switcher (Visual vs Raw JSON) */}
              {parsedData && !isParsing && (
                <div className="flex items-center gap-1 bg-[#1F3330] p-1 rounded-xl border border-[#2F4A45]">
                  <button
                    onClick={() => setViewMode("visual")}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      viewMode === "visual"
                        ? "bg-[#293D39] text-emerald-400 shadow-xs"
                        : "text-[#82B5A8] hover:text-white"
                    }`}
                  >
                    Visual
                  </button>
                  <button
                    onClick={() => setViewMode("json")}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      viewMode === "json"
                        ? "bg-[#293D39] text-emerald-400 shadow-xs"
                        : "text-[#82B5A8] hover:text-white"
                    }`}
                  >
                    JSON
                  </button>
                </div>
              )}
            </div>

            {/* Content Display Area */}
            {isParsing ? (
              <div className="flex flex-col items-center justify-center my-auto py-10">
                <div className="relative mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                    className="w-14 h-14 rounded-full border-2 border-emerald-400 border-t-transparent"
                  />
                  <Bot className="w-6 h-6 text-emerald-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={parsingStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs font-mono text-[#A5C9BF] text-center"
                  >
                    {steps[parsingStep]}
                  </motion.p>
                </AnimatePresence>
              </div>
            ) : parsedData ? (
              <AnimatePresence mode="wait">
                {viewMode === "visual" ? (
                  <motion.div
                    key="visual"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    {/* Header Candidate Summary */}
                    <div className="flex items-start justify-between pb-4 border-b border-[#293D39]">
                      <div>
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1 mb-1">
                          <Zap className="w-3 h-3" /> Entity Extracted
                        </span>
                        <h4 className="font-serif text-2xl font-normal text-white">{parsedData.name}</h4>
                        <p className="text-xs text-[#82B5A8]">{parsedData.role}</p>
                      </div>
                      <div className="text-right bg-[#1F3330] p-3 rounded-2xl border border-[#2F4A45]">
                        <span className="text-3xl font-serif font-light text-emerald-400">{parsedData.score}%</span>
                        <p className="text-[9px] font-mono text-[#A5C9BF] uppercase tracking-wider">Match Score</p>
                      </div>
                    </div>

                    {/* Experience Summary */}
                    <div>
                      <span className="text-[11px] font-semibold text-[#82B5A8] uppercase tracking-wider block mb-1">
                        Experience Assessment
                      </span>
                      <p className="text-xs text-white bg-[#1F3330] p-3 rounded-xl border border-[#2F4A45]">
                        {parsedData.experience}
                      </p>
                    </div>

                    {/* Extracted Skills Chips */}
                    <div>
                      <span className="text-[11px] font-semibold text-[#82B5A8] uppercase tracking-wider block mb-2">
                        Detected Skills Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {parsedData.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="text-[11px] font-medium bg-[#293D39] text-[#A5C9BF] px-2.5 py-1 rounded-lg border border-[#3A554E]"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Recommendation Badge */}
                    <div>
                      <span className="text-[11px] font-semibold text-[#82B5A8] uppercase tracking-wider block mb-1">
                        AI Hiring Decision
                      </span>
                      <div className="flex items-center gap-2 text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{parsedData.recommendation}</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="json"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#101C1A] p-4 rounded-2xl border border-[#293D39] font-mono text-[11px] text-emerald-400 overflow-x-auto max-h-[280px]"
                  >
                    <pre>{JSON.stringify(parsedData, null, 2)}</pre>
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              <div className="flex flex-col items-center justify-center my-auto text-center text-[#82B5A8] py-12">
                <Sparkles className="w-8 h-8 mb-3 text-emerald-400 opacity-60 animate-bounce" />
                <p className="text-xs max-w-xs leading-relaxed">
                  Click <span className="text-white font-semibold">"Run Live Parser Test"</span> on the left to watch AI entity extraction in real-time.
                </p>
              </div>
            )}

            {/* Terminal Footer Info */}
            <div className="pt-4 mt-4 border-t border-[#293D39] flex items-center justify-between text-[10px] font-mono text-[#82B5A8]">
              <span>Status: {isParsing ? "Extracting..." : parsedData ? "200 OK" : "Idle"}</span>
              <span>Latency: 142ms</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}