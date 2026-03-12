"use client";

import { motion } from "framer-motion";

export default function SurveyBanner() {
  return (
    <section className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-burgundy-600 to-mauve-600 rounded-2xl sm:rounded-3xl px-5 sm:px-8 md:px-16 py-12 sm:py-16 text-center text-white relative overflow-hidden shadow-xl"
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white opacity-5" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-white opacity-5" />

        <p className="uppercase tracking-widest text-mauve-200 text-xs font-semibold mb-4">
          We're building for you
        </p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-tight">
          Help us shape Orvex before we launch.
        </h2>
        <p className="text-mauve-100 text-base sm:text-lg mb-10 max-w-lg mx-auto">
          Tell us what you need in a creative platform. It takes 3 minutes and
          directly shapes what we build next.
        </p>

        <motion.a
          href="/survey"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 36px rgba(0,0,0,0.22)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-white text-burgundy-700 font-bold text-base shadow-md hover:bg-mauve-50 transition-colors duration-200"
        >
          Start the Survey
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
