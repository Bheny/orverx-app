"use client";

import { motion } from "framer-motion";

interface Props {
  current: number; // 0-based index of current question
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round(((current) / total) * 100);

  return (
    <div className="w-full space-y-1.5">
      <div className="flex justify-between text-xs text-gray-400 font-medium">
        <span>
          Question {current + 1} of {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 w-full bg-mauve-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-burgundy-600 rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: pct / 100 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </div>
  );
}
