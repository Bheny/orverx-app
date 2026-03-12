"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 1200, suffix: "+", label: "Students on the waitlist" },
  { value: 18,   suffix: "",  label: "Fashion schools represented" },
  { value: 94,   suffix: "%", label: "Want a collaboration platform" },
  { value: 3,    suffix: "x", label: "More projects completed together" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-burgundy-600 py-14 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {stats.map(({ value, suffix, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center text-center"
          >
            <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-none mb-2">
              <Counter target={value} suffix={suffix} />
            </span>
            <span className="text-mauve-200 text-sm font-medium leading-snug max-w-[120px]">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
