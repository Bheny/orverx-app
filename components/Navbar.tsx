"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-mauve-100"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-burgundy-600 flex items-center justify-center text-white font-display font-bold text-sm select-none">
            O
          </span>
          <span className="font-display text-xl font-bold text-gray-900 tracking-tight">
            Orvex
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {[
            { label: "Home", href: "/" },
            { label: "Preview", href: "/preview" },
            { label: "About", href: "#" },
            { label: "Contact", href: "#" },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="hover:text-burgundy-600 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/survey"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-burgundy-600 text-white text-sm font-semibold hover:bg-burgundy-700 transition-colors duration-200 shadow-sm"
        >
          Start Survey
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-mauve-50 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-4 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-mauve-100 bg-white px-6 pb-4"
        >
          <ul className="flex flex-col gap-4 pt-4 text-sm font-medium text-gray-700">
            {["Home", "About", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-burgundy-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/survey"
                className="inline-block px-5 py-2 rounded-full bg-burgundy-600 text-white text-sm font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Start Survey
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
