"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companySize: "10-50 employees",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#162523]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg rounded-3xl bg-white p-8 sm:p-10 shadow-2xl border border-[#BCD8D2] z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#E5F2EF] flex items-center justify-center text-[#162523] hover:bg-[#162523] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="font-serif text-2xl font-normal text-[#162523] mb-2">
                  Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#46655D] max-w-xs">
                  Our talent acquisition specialist will get in touch with you within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5F2EF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#162523] mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#2A453F]" /> Start Free Trial
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#162523] mb-2">
                  Experience Oasis ATS
                </h3>
                <p className="text-xs sm:text-sm text-[#46655D] mb-6">
                  Get a personalized walkthrough and instant sandbox access for your team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#162523] uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vinayak Jaimini"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-2xl bg-[#F4F9F8] border border-[#BCD8D2] px-4 py-3.5 text-xs sm:text-sm text-[#162523] focus:outline-none focus:border-[#162523] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#162523] uppercase tracking-wider mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vinayak@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl bg-[#F4F9F8] border border-[#BCD8D2] px-4 py-3.5 text-xs sm:text-sm text-[#162523] focus:outline-none focus:border-[#162523] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#162523] uppercase tracking-wider mb-1.5">
                      Company Size
                    </label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full rounded-2xl bg-[#F4F9F8] border border-[#BCD8D2] px-4 py-3.5 text-xs sm:text-sm text-[#162523] focus:outline-none focus:border-[#162523] transition-colors"
                    >
                      <option>1-10 employees</option>
                      <option>10-50 employees</option>
                      <option>50-200 employees</option>
                      <option>200+ employees</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="group mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#162523] py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:bg-[#233B36] transition-all"
                  >
                    <span>Request Demo & Access</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}