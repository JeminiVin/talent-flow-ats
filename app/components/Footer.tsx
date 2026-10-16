"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Globe,
  Share2,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number | string>("2026");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3500);
    }
  };

  return (
    <footer className="w-full bg-[#162523] text-white pt-24 pb-12 px-6 sm:px-12 lg:px-20 border-t border-[#293D39] relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#A5C9BF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Callout / Newsletter Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#1F3330]/80 p-8 sm:p-12 border border-[#2F4A45] shadow-2xl backdrop-blur-md mb-20 relative overflow-hidden"
        >
          {/* Accent Glow Circle */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#293D39] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A5C9BF] mb-3 border border-[#3A554E]">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Stay Ahead
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                Ready to transform your hiring workflow?
              </h3>
              <p className="text-xs sm:text-sm text-[#A5C9BF] mt-3 max-w-md leading-relaxed">
                Join thousands of HR leaders getting weekly insights on AI candidate sourcing and automated recruitment.
              </p>
            </div>

            {/* Interactive Newsletter Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#82B5A8]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="w-full bg-[#162523] border border-[#2F4A45] rounded-2xl pl-11 pr-4 py-4 text-sm text-white placeholder-[#7C9E95] focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer flex-shrink-0 ${
                  subscribed
                    ? "bg-emerald-500 text-[#162523]"
                    : "bg-white text-[#162523] hover:bg-[#E1F0EC]"
                }`}
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#162523]" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Get Started</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-16 border-b border-[#293D39]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-xs text-[#82B5A8] mb-6 uppercase tracking-widest font-mono">
              Product
            </h4>
            <ul className="space-y-3.5 text-xs text-[#A5C9BF]">
              <li>
                <a href="#features" className="hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Core Capabilities</span>
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">AI Resume Parser</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Pricing & Plans</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Customer Stories</span>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-xs text-[#82B5A8] mb-6 uppercase tracking-widest font-mono">
              Resources
            </h4>
            <ul className="space-y-3.5 text-xs text-[#A5C9BF]">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Hiring Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Community Hub</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-xs text-[#82B5A8] mb-6 uppercase tracking-widest font-mono">
              Company
            </h4>
            <ul className="space-y-3.5 text-xs text-[#A5C9BF]">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200 inline-flex items-center gap-2">
                  <span>Careers</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/30">
                    We're hiring
                  </span>
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Support</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-semibold text-xs text-[#82B5A8] mb-6 uppercase tracking-widest font-mono">
              Security & Legal
            </h4>
            <ul className="space-y-3.5 text-xs text-[#A5C9BF]">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> GDPR Compliant
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Security Architecture</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-xs text-[#82B5A8]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#293D39] flex items-center justify-center text-emerald-400 font-serif font-bold text-sm">
              O
            </div>
            <div>
              <span className="font-serif text-base text-white font-normal">Oasis ATS</span>
              <span className="ml-3 text-[11px] text-[#6A948A]">© {year} All rights reserved.</span>
            </div>
          </div>

          {/* Social Icons with Hover Lift */}
          <div className="flex items-center gap-3">
            {[
              { icon: Globe, label: "Website" },
              { icon: Share2, label: "Share" },
              { icon: MessageSquare, label: "Community" },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-2xl bg-[#1F3330] border border-[#2F4A45] flex items-center justify-center text-[#A5C9BF] hover:text-white hover:bg-[#293D39] hover:border-[#3A554E] transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}