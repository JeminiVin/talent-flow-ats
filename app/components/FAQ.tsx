"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare, ArrowUpRight } from "lucide-react";

interface FAQProps {
  onOpenDemo?: () => void;
}

export default function FAQ({ onOpenDemo }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Oasis ATS kaise kaam karta hai?",
      answer:
        "Oasis ATS AI-powered algorithms ka use karke resumes ko automatically parse aur score karta hai. Yeh candidate sourcing, screening, aur custom recruitment pipelines ko ek hi clean dashboard par streamline karta hai.",
    },
    {
      question: "Kya mai apne existing recruitment tools ya LinkedIn ke sath ise sync kar sakta hu?",
      answer:
        "Haan, Oasis ATS seamlessly multiple channels aur professional networks (jaise LinkedIn & GitHub) ke sath sync ho jata hai taaki aap bina kisi friction ke top talent ko source kar sakein.",
    },
    {
      question: "Candidate data kitna secure aur compliant hai?",
      answer:
        "Hamara platform enterprise-grade encryption use karta hai aur full GDPR & SOC2 Type II compliance standards ko follow karta hai taaki candidate data hamesha safe rahe.",
    },
    {
      question: "Kya main apne team members ya recruiters ko add kar sakta hu?",
      answer:
        "Bilkul! Growth aur Enterprise plans me aap multiple recruiter seats add kar sakte hain aur collaborative hiring workflows setup kar sakte hain.",
    },
    {
      question: "Billing plans ko kabhi bhi upgrade ya downgrade kiya ja sakta hai?",
      answer:
        "Haan, aap apne account settings se kisi bhi waqt apne subscription plan ko upgrade ya annual/monthly billing me switch kar sakte hain.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full bg-[#E5F2EF] py-24 px-6 sm:px-12 lg:px-20 border-t border-[#BCD8D2] relative overflow-hidden"
    >
      {/* Background Decorative Mesh Elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#CDE5E0] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-[#BCD8D2] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#CDE5E0] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#162523] mb-4 border border-[#BCD8D2] shadow-xs"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#2A453F]" /> Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#162523] tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-[#3C5750] max-w-lg mx-auto leading-relaxed"
          >
            Yahan aapko Oasis ATS ke features, security, aur pricing se jude saare common sawalon ke jawaab mil jayenge.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-3xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? "bg-white border-[#162523] shadow-lg ring-1 ring-[#162523]/10"
                    : "bg-white/80 border-[#BCD8D2]/80 hover:border-[#162523]/50 hover:bg-white shadow-xs"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer focus:outline-none group"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="font-mono text-xs font-semibold text-[#5A7B72] group-hover:text-[#162523] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-normal text-[#162523]">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#162523] text-white rotate-180"
                        : "bg-[#CDE5E0]/60 text-[#162523] group-hover:bg-[#162523] group-hover:text-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-xs sm:text-sm text-[#46655D] leading-relaxed border-t border-[#EAEFEB] pt-4 ml-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Help Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-8 rounded-3xl bg-[#162523] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#2F4A45]"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#293D39] flex items-center justify-center text-emerald-400 flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-normal">Still have questions?</h4>
              <p className="text-xs text-[#82B5A8] mt-1">
                Hamari team se baat karein ya custom demo request karein.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDemo}
            className="group inline-flex items-center gap-2 rounded-2xl bg-white text-[#162523] hover:bg-[#E1F0EC] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md flex-shrink-0"
          >
            <span>Book a Demo</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}