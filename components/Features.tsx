"use client";

import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🤝",
    title: "Real Collaboration",
    body: "Team up with classmates and creatives worldwide to bring fashion concepts to life — from mood boards to finished garments.",
  },
  {
    emoji: "📁",
    title: "Project Hub",
    body: "Organise every project in one place. Share briefs, moodboards, sketches, and feedback without losing anything in DMs.",
  },
  {
    emoji: "🖼️",
    title: "Portfolio Builder",
    body: "Every project you complete adds directly to your Orvex portfolio — a living showcase ready to share with recruiters.",
  },
  {
    emoji: "✨",
    title: "Creative Community",
    body: "Discover peers who match your aesthetic, find collaborators for your next drop, and grow your network before graduation.",
  },
];

export default function Features() {
  return (
    <section className="bg-mauve-50/40 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to{" "}
            <span className="text-burgundy-600">create & connect</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Orvex brings together the tools that fashion students actually need
            — without the noise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ emoji, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(200,38,79,0.1)" }}
              className="bg-white rounded-2xl p-6 border border-mauve-100 shadow-sm transition-shadow"
            >
              <span className="text-3xl mb-4 block">{emoji}</span>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
