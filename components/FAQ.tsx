"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const items = [
  {
    q: "Is Orvex free to use?",
    a: "Yes — Orvex is free for all students during our early access period. We're building in the open and everyone on the waitlist gets in first.",
  },
  {
    q: "Do I need to be enrolled in a fashion school?",
    a: "Nope. Whether you're at a top fashion school, a self-taught creative, or a recent graduate — if you create fashion work, Orvex is for you.",
  },
  {
    q: "What disciplines are on the platform?",
    a: "Fashion design, photography, styling, makeup artistry, videography, textile design, art direction, and more. If it's creative and fashion-related, it belongs here.",
  },
  {
    q: "How is Orvex different from Instagram or LinkedIn?",
    a: "Instagram is for sharing finished work. LinkedIn is for jobs. Orvex is for the messy, collaborative in-between — finding people, running projects, and building work together before it's ready to show the world.",
  },
  {
    q: "When does Orvex launch?",
    a: "We're targeting a beta launch later this year. Everyone who fills in the survey gets priority access and will be the first to hear when we go live.",
  },
  {
    q: "How will my survey answers be used?",
    a: "Your answers are anonymous and used purely to shape what we build. We won't spam you — we'll only reach out about Orvex access.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group focus:outline-none"
      >
        <span className="text-gray-900 font-medium text-sm sm:text-base group-hover:text-burgundy-600 transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-6 h-6 rounded-full border border-mauve-200 flex items-center justify-center text-gray-400 group-hover:border-burgundy-400 group-hover:text-burgundy-600 transition-colors"
        >
          <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor">
            <path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2z" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm leading-relaxed pb-5 pr-4 sm:pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-mauve-100 text-burgundy-700 text-xs font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Got questions?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-50 rounded-2xl px-6 sm:px-8 divide-y divide-gray-100 border border-gray-100"
        >
          {items.map(({ q, a }, i) => (
            <FAQItem
              key={q}
              q={q}
              a={a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Still have questions nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          Still curious?{" "}
          <a href="#" className="text-burgundy-600 hover:underline font-medium">
            Drop us a message
          </a>
        </motion.p>
      </div>
    </section>
  );
}
