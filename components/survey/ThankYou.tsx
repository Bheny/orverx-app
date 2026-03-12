"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYou() {
  return (
    <motion.div
      key="thankyou"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center px-4 py-8"
    >
      {/* Animated check circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, duration: 0.5, type: "spring", stiffness: 220, damping: 16 }}
        className="w-20 h-20 rounded-full bg-burgundy-50 border-4 border-burgundy-200 flex items-center justify-center mb-6"
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-10 h-10 text-burgundy-600"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        >
          <motion.path
            d="M5 13l4 4L19 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.45, duration: 0.45, ease: "easeOut" }}
          />
        </motion.svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-display text-3xl font-bold text-gray-900 mb-3"
      >
        You're amazing. 🎉
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-500 text-base max-w-sm mb-8 leading-relaxed"
      >
        Thanks for taking the time. Your answers will directly shape how we
        build Orvex — we'll reach out when we launch.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-burgundy-600 text-white font-semibold text-sm hover:bg-burgundy-700 transition-colors shadow-sm"
        >
          Back to home
        </Link>
        <a
          href="#"
          className="px-6 py-3 rounded-full border border-mauve-200 text-gray-600 font-semibold text-sm hover:border-burgundy-400 hover:text-burgundy-600 transition-colors"
        >
          Share Orvex
        </a>
      </motion.div>
    </motion.div>
  );
}
