"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Collaborate with peers",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Launch creative projects",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="8" r="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="20" height="20" rx="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Build your portfolio",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Connect with creatives",
  },
];

// Decorative fashion-inspired SVG illustration
function FashionIllustration() {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Background circle */}
      <circle cx="210" cy="210" r="190" fill="#fdf2f4" />

      {/* Dress form / mannequin silhouette */}
      <ellipse cx="210" cy="155" rx="52" ry="60" fill="#f4a8b8" opacity="0.5" />
      <ellipse cx="210" cy="155" rx="38" ry="46" fill="#ec7592" opacity="0.4" />
      {/* Neck */}
      <rect x="204" y="100" width="12" height="22" rx="6" fill="#ec7592" opacity="0.5" />
      {/* Skirt */}
      <path d="M158 200 Q175 300 210 310 Q245 300 262 200 Z" fill="#c8264f" opacity="0.18" />
      <path d="M168 205 Q183 290 210 300 Q237 290 252 205 Z" fill="#c8264f" opacity="0.28" />

      {/* Hanger */}
      <path d="M210 68 Q210 82 190 90" stroke="#9e5a75" strokeWidth="3" strokeLinecap="round" />
      <path d="M190 90 Q160 100 155 108" stroke="#9e5a75" strokeWidth="3" strokeLinecap="round" />
      <path d="M210 68 Q210 82 230 90" stroke="#9e5a75" strokeWidth="3" strokeLinecap="round" />
      <path d="M230 90 Q260 100 265 108" stroke="#9e5a75" strokeWidth="3" strokeLinecap="round" />
      <circle cx="210" cy="64" r="5" stroke="#9e5a75" strokeWidth="2.5" fill="white" />

      {/* Floating swatches */}
      <rect x="60" y="150" width="44" height="56" rx="6" fill="#dfc0cc" transform="rotate(-12 82 178)" />
      <rect x="64" y="154" width="44" height="56" rx="6" fill="#ec7592" opacity="0.35" transform="rotate(-12 86 182)" />
      <rect x="68" y="158" width="44" height="56" rx="6" fill="#c8264f" opacity="0.2" transform="rotate(-12 90 186)" />

      <rect x="316" y="130" width="44" height="56" rx="6" fill="#b57690" transform="rotate(10 338 158)" />
      <rect x="320" y="134" width="44" height="56" rx="6" fill="#ec7592" opacity="0.35" transform="rotate(10 342 162)" />

      {/* Needle & thread */}
      <path d="M100 280 Q130 250 160 270 Q190 290 220 260" stroke="#c8264f" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
      <circle cx="100" cy="280" r="5" fill="white" stroke="#c8264f" strokeWidth="2" />
      <ellipse cx="100" cy="280" rx="3" ry="4.5" fill="#c8264f" opacity="0.4" />

      {/* Scissors */}
      <g transform="translate(300 270) rotate(-30)">
        <circle cx="0" cy="0" r="9" stroke="#9e5a75" strokeWidth="2" fill="white" />
        <circle cx="18" cy="0" r="9" stroke="#9e5a75" strokeWidth="2" fill="white" />
        <line x1="7" y1="-5" x2="38" y2="-28" stroke="#9e5a75" strokeWidth="2" strokeLinecap="round" />
        <line x1="7" y1="5" x2="38" y2="28" stroke="#9e5a75" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Floating dots decoration */}
      {[
        [130, 110], [290, 95], [85, 230], [335, 200], [150, 355], [270, 360],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 5 : 4} fill="#ec7592" opacity={0.35 + i * 0.05} />
      ))}

      {/* Stars */}
      {[
        [340, 340, 8], [75, 340, 6], [355, 160, 5],
      ].map(([cx, cy, r], i) => (
        <path
          key={i}
          d={`M${cx},${Number(cy) - Number(r)} L${Number(cx) + 2},${Number(cy) - 2} L${Number(cx) + Number(r)},${cy} L${Number(cx) + 2},${Number(cy) + 2} L${cx},${Number(cy) + Number(r)} L${Number(cx) - 2},${Number(cy) + 2} L${Number(cx) - Number(r)},${cy} L${Number(cx) - 2},${Number(cy) - 2} Z`}
          fill="#c8264f"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Soft gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-mauve-100 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-burgundy-100 opacity-30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-10 sm:py-16 md:py-20 w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left — text */}
        <div className="flex flex-col items-start">
          {/* Eyebrow pill */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mauve-100 text-burgundy-700 text-xs font-semibold tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-burgundy-600 inline-block" />
            For fashion students
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-5"
          >
            Where fashion{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-burgundy-600">creativity</span>
              <span
                className="absolute bottom-1 left-0 right-0 h-2 bg-mauve-200 rounded-sm -z-0 opacity-60"
                aria-hidden="true"
              />
            </span>{" "}
            finds its crew.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md"
          >
            Orvex is your creative home — collaborate on real fashion projects,
            showcase your work, build a stunning portfolio, and meet the peers
            who share your vision.
          </motion.p>

          {/* Feature pills */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="flex flex-wrap gap-3 mb-10"
          >
            {features.map(({ icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-mauve-200 bg-white text-sm text-gray-600 shadow-sm"
              >
                <span className="text-burgundy-600">{icon}</span>
                {label}
              </li>
            ))}
          </motion.ul>

          {/* CTA button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <motion.a
              href="/survey"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(200,38,79,0.28)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-burgundy-600 text-white font-semibold text-base shadow-md hover:bg-burgundy-700 transition-colors duration-200"
            >
              Start Survey
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
            <a href="/preview" className="text-sm text-gray-400 hover:text-burgundy-600 transition-colors underline underline-offset-2">
              See a sample profile →
            </a>
          </motion.div>
        </div>

        {/* Right — illustration (hidden on small mobile, shown md+) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hidden sm:flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[440px] lg:h-[440px]">
            <FashionIllustration />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
