"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create your profile",
    body: "Tell us your discipline, skills, and what kind of projects you're looking for. Takes two minutes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Post or join a project",
    body: "Pitch a concept you want to bring to life, or browse open projects that need your specific skills.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Collaborate & create",
    body: "Work together using shared moodboards, briefs, and feedback threads — all in one focused space.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Publish to your portfolio",
    body: "Every finished project goes straight to your Orvex portfolio — a living proof of your creative range.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" strokeWidth={0} />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-mauve-100 text-burgundy-700 text-xs font-semibold tracking-widest uppercase">
            How it works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            From idea to portfolio in 4 steps
          </h2>
        </motion.div>

        {/* Step grid with connecting line on desktop */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-mauve-200" aria-hidden="true" />

          {steps.map(({ number, title, body, icon }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon bubble */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-mauve-200 flex items-center justify-center text-burgundy-600 mb-5 shadow-sm">
                {icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-burgundy-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
