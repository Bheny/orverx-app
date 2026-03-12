"use client";

import { motion } from "framer-motion";

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export default function TextInput({ value, onChange, placeholder }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Share your thoughts…"}
        rows={4}
        className="w-full px-5 py-4 rounded-xl border-2 border-mauve-200 bg-white text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-100 transition-colors duration-150"
      />
    </motion.div>
  );
}
