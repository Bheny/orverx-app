"use client";

import { motion } from "framer-motion";

interface Props {
  options: string[];
  selected: string | null;
  onSelect: (value: string) => void;
}

export default function QuestionButtons({ options, selected, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {options.map((opt, i) => {
        const isSelected = selected === opt;
        return (
          <motion.button
            key={opt}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(opt)}
            className={`w-full text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-400
              ${
                isSelected
                  ? "border-burgundy-600 bg-burgundy-50 text-burgundy-700"
                  : "border-mauve-100 bg-white text-gray-700 hover:border-mauve-300 hover:bg-mauve-50"
              }`}
          >
            <span className="flex items-center gap-3">
              <span
                className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors duration-150 ${
                  isSelected
                    ? "border-burgundy-600 bg-burgundy-600"
                    : "border-gray-300"
                }`}
              >
                {isSelected && (
                  <span className="block w-full h-full rounded-full scale-50 bg-white" />
                )}
              </span>
              {opt}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
