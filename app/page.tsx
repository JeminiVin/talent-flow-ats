"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import KanbanPreview from "./components/KanbanPreview";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";
import ResumeParserSandbox from "./components/ResumeParserSandbox";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#CDE5E0]">
      <Navbar onOpenDemo={() => setIsModalOpen(true)} />
      <Hero onOpenDemo={() => setIsModalOpen(true)} />
      <Features />
      <KanbanPreview />
      <ResumeParserSandbox />
      <Stats />
      <Testimonials />
      <Pricing onOpenDemo={() => setIsModalOpen(true)} />
      <FAQ />
      <Footer />

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}