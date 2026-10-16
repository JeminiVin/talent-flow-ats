import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import MotionProvider from "./components/MotionProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Oasis ATS — Modern HR & AI Recruitment Software",
  description:
    "Streamline candidate sourcing, resume parsing, and recruitment workflows with a peaceful, high-performance ATS built for modern HR teams.",
  keywords: [
    "ATS",
    "Applicant Tracking System",
    "HR Software",
    "Recruitment Tool",
    "AI Resume Parsing",
    "Hiring Workflow",
  ],
  authors: [{ name: "Oasis Team" }],
  openGraph: {
    title: "Oasis ATS — Modern HR & AI Recruitment Software",
    description:
      "Automate candidate pipelines and hire top talent faster with Oasis ATS.",
    url: "https://oasis-ats.com",
    siteName: "Oasis ATS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oasis ATS Product Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oasis ATS — Modern HR & AI Recruitment Software",
    description:
      "Automate candidate pipelines and hire top talent faster with Oasis ATS.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-[#CDE5E0] text-[#162523]">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}