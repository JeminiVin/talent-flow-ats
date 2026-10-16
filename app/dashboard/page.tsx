"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  BarChart3,
  Settings,
  Search,
  Bell,
  Plus,
  ArrowUpRight,
  ChevronRight,
  LogOut,
  ShieldAlert,
} from "lucide-react";
import { isAdminUser, logoutUser } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Strict Protection Check on Mount & Direct Route Access
  useEffect(() => {
    if (!isAdminUser()) {
      setIsAuthorized(false);
      // Automatically redirect unauthenticated or non-admin users to Login page
      const timer = setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push("/auth/login");
  };

  // 1. Loading State
  if (isAuthorized === null) {
    return (
      <div className="min-h-screen bg-[#E5F2EF] flex items-center justify-center text-[#162523]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-[#162523] border-t-transparent animate-spin" />
          <p className="text-xs font-semibold uppercase tracking-wider">
            Verifying Admin Authorization...
          </p>
        </div>
      </div>
    );
  }

  // 2. Unauthorized State (Direct Route Blocked)
  if (isAuthorized === false) {
    return (
      <div className="min-h-screen bg-[#162523] flex items-center justify-center p-6 text-white">
        <div className="max-w-md w-full bg-[#1F3330] p-8 rounded-3xl border border-[#2F4A45] text-center shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-4 border border-red-500/30">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <h2 className="font-serif text-2xl font-light text-white mb-2">
            Access Denied
          </h2>
          <p className="text-xs text-[#A5C9BF] mb-6 leading-relaxed">
            This dashboard is restricted to authorized Admins only. Redirecting you to the login screen...
          </p>
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center w-full py-3.5 rounded-2xl bg-white text-[#162523] text-xs font-semibold uppercase tracking-wider hover:bg-[#E5F2EF] transition-all"
          >
            Go to Admin Login
          </Link>
        </div>
      </div>
    );
  }

  // 3. Authorized Admin Dashboard View
  const metrics = [
    { label: "Active Jobs", value: "12", change: "+2 this week", isPositive: true },
    { label: "Total Candidates", value: "1,284", change: "+14% vs last mo", isPositive: true },
    { label: "AI Screening Match Rate", value: "94.2%", change: "+3.1%", isPositive: true },
    { label: "Avg. Time to Hire", value: "14 Days", change: "-4 days faster", isPositive: true },
  ];

  const recentCandidates = [
    { name: "Siddharth Verma", role: "Senior Frontend Lead", match: 96, stage: "Interview", date: "Today" },
    { name: "Aarav Sharma", role: "Full Stack Engineer", match: 94, stage: "AI Screened", date: "Yesterday" },
    { name: "Neha Patel", role: "UI/UX Product Designer", match: 88, stage: "Applied", date: "14 Oct" },
    { name: "Ananya Gupta", role: "Product Marketing Lead", match: 92, stage: "Offer Sent", date: "12 Oct" },
  ];

  const activeJobs = [
    { title: "Senior Next.js Developer", dept: "Engineering", applicants: 42, status: "Active" },
    { title: "Product Designer (UI/UX)", dept: "Design", applicants: 28, status: "Active" },
    { title: "Technical Product Manager", dept: "Product", applicants: 19, status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-[#E5F2EF] text-[#162523] flex flex-col lg:flex-row">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full lg:w-64 bg-[#162523] text-white p-6 flex flex-col justify-between border-r border-[#293D39]">
        <div>
          {/* Logo Header */}
          <Link href="/" className="inline-flex items-center gap-2 mb-10">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-serif text-2xl font-normal tracking-tight text-white">
              Oasis ATS
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {[
              { id: "overview", label: "Dashboard", icon: LayoutDashboard },
              { id: "jobs", label: "Job Postings", icon: Briefcase },
              { id: "candidates", label: "Candidates", icon: Users },
              { id: "analytics", label: "Analytics", icon: BarChart3 },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#293D39] text-white shadow-sm border border-[#3A554E]"
                      : "text-[#A5C9BF] hover:text-white hover:bg-[#1F3330]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : ""}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Profile User Bar */}
        <div className="pt-6 border-t border-[#293D39] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center border border-emerald-500/30">
              AD
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Admin</p>
              <p className="text-[10px] text-[#82B5A8]">System Administrator</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Log Out"
            className="text-[#82B5A8] hover:text-white transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* MAIN DASHBOARD CONTENT */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        
        {/* TOP HEADER BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#BCD8D2] mb-8">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4F6E66]">
              ADMIN TALENT MANAGEMENT
            </span>
            <h1 className="font-serif text-3xl font-light text-[#162523] mt-1">
              Hiring Overview
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7B72]" />
              <input
                type="text"
                placeholder="Search candidates or jobs..."
                className="bg-white border border-[#BCD8D2] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#162523] placeholder-[#5A7B72] focus:outline-none focus:border-[#162523] shadow-xs"
              />
            </div>

            {/* Notifications Button */}
            <button className="w-10 h-10 rounded-2xl bg-white border border-[#BCD8D2] flex items-center justify-center text-[#162523] hover:bg-[#CDE5E0] transition-colors relative cursor-pointer">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-emerald-500" />
            </button>

            {/* Create Job CTA */}
            <button className="inline-flex items-center gap-2 rounded-2xl bg-[#162523] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-[#233B36] transition-all cursor-pointer">
              <Plus className="w-4 h-4" />
              <span>Post New Job</span>
            </button>
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-3xl bg-white/80 p-6 shadow-sm border border-white/90 backdrop-blur-md"
            >
              <p className="text-xs font-semibold text-[#5A7B72] uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <h3 className="font-serif text-3xl font-normal text-[#162523] mb-2">
                {item.value}
              </h3>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                {item.change}
              </span>
            </motion.div>
          ))}
        </div>

        {/* TWO COLUMN CONTENT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* RECENT CANDIDATES LIST (2 Cols) */}
          <div className="lg:col-span-2 rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-[#BCD8D2]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-serif text-xl font-normal text-[#162523]">
                  Recent AI Sourced Candidates
                </h3>
                <p className="text-xs text-[#5A7B72]">Top applicant scores parsed automatically.</p>
              </div>
              <button className="text-xs font-semibold text-[#162523] hover:underline flex items-center gap-1 cursor-pointer">
                View All <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {recentCandidates.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F4F9F8] border border-[#E1F0EC] hover:border-[#BCD8D2] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#CDE5E0] text-[#162523] font-serif font-bold flex items-center justify-center">
                      {c.name[0]}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#162523]">{c.name}</h4>
                      <p className="text-[11px] text-[#5A7B72]">{c.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-lg">
                      {c.match}% Match
                    </span>
                    <span className="text-xs text-[#162523] font-medium hidden sm:inline-block">
                      {c.stage}
                    </span>
                    <span className="text-[11px] text-[#5A7B72]">{c.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIVE JOB POSTINGS (1 Col) */}
          <div className="rounded-3xl bg-[#162523] p-6 sm:p-8 text-white shadow-lg border border-[#2F4A45] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl font-normal text-white">Active Requisitions</h3>
                <span className="text-xs font-mono text-[#A5C9BF]">3 Openings</span>
              </div>

              <div className="space-y-4">
                {activeJobs.map((job, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#1F3330] border border-[#2F4A45] hover:border-[#82B5A8] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs font-semibold text-white">{job.title}</h4>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md font-mono">
                        {job.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#82B5A8]">
                      <span>{job.dept}</span>
                      <span>{job.applicants} Applicants</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[#293D39] pt-4">
              <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#293D39] py-3 text-xs font-semibold text-white hover:bg-[#3A554E] transition-colors cursor-pointer">
                <span>Manage All Job Boards</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}