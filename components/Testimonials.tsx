"use client";

import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  school: string;
  avatar: string; // initials fallback
  avatarColor: string;
  quote: string;
  rating: number;
  tags: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Amara Diallo",
    role: "Fashion Design, Year 3",
    school: "London College of Fashion",
    avatar: "AD",
    avatarColor: "bg-rose-200 text-rose-700",
    quote:
      "I had a lookbook concept sitting in my notes for months because I couldn't find a photographer. Orvex connected me with exactly the right person in days — we shot it in two weeks.",
    rating: 5,
    tags: ["Collaboration", "Photography", "Lookbook"],
  },
  {
    name: "Luca Ferrara",
    role: "Fashion Photography, Year 2",
    school: "Istituto Marangoni, Milan",
    avatar: "LF",
    avatarColor: "bg-amber-200 text-amber-700",
    quote:
      "As a photographer I always struggled to find stylists who took student projects seriously. On Orvex everyone is genuinely committed — my portfolio grew more in one semester than in the last two years.",
    rating: 5,
    tags: ["Portfolio", "Styling", "Editorial"],
  },
  {
    name: "Yemi Okafor",
    role: "Styling & Art Direction, Year 4",
    school: "Parsons School of Design",
    avatar: "YO",
    avatarColor: "bg-purple-200 text-purple-700",
    quote:
      "The project hub keeps everything organised — no more chasing people through Instagram DMs. Having a real brief and timeline made our shoot feel professional from day one.",
    rating: 5,
    tags: ["Project management", "Art direction"],
  },
  {
    name: "Sofia Navarro",
    role: "Textile Design, Year 3",
    school: "ESDI, Barcelona",
    avatar: "SN",
    avatarColor: "bg-teal-200 text-teal-700",
    quote:
      "I joined a womenswear grad project as the textile lead and ended up with 4 pieces in a proper end-of-year show. Orvex made the collaboration feel effortless.",
    rating: 5,
    tags: ["Textiles", "Grad show", "Womenswear"],
  },
  {
    name: "Kai Nakamura",
    role: "Videography & Film, Year 2",
    school: "Bunka Fashion College, Tokyo",
    avatar: "KN",
    avatarColor: "bg-sky-200 text-sky-700",
    quote:
      "My reel was weak because I had nothing to shoot. Two months on Orvex and I've filmed three full fashion campaigns with designers who actually knew what they wanted.",
    rating: 5,
    tags: ["Film", "Campaign", "Video"],
  },
  {
    name: "Chloe Mensah",
    role: "Makeup Artistry, Graduate",
    school: "Academy of Art, San Francisco",
    avatar: "CM",
    avatarColor: "bg-pink-200 text-pink-700",
    quote:
      "After graduation it's hard to keep momentum. Orvex gave me a place to keep collaborating with students who still have that hungry, experimental energy. I love it.",
    rating: 5,
    tags: ["Makeup", "Graduate", "Networking"],
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 16 16"
          className={`w-3.5 h-3.5 ${i < count ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
        >
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-mauve-100 text-burgundy-700 text-xs font-semibold tracking-widest uppercase">
            Student stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Students already{" "}
            <span className="text-burgundy-600">love the idea</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Here's what fashion creatives told us when we asked about
            collaboration — and what they're excited for.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(
            ({ name, role, school, avatar, avatarColor, quote, rating, tags }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(200,38,79,0.09)" }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col transition-shadow"
              >
                {/* Stars */}
                <Stars count={rating} />

                {/* Quote */}
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-5 flex-1">
                  "{quote}"
                </blockquote>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-mauve-50 text-mauve-700 text-xs font-medium border border-mauve-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${avatarColor}`}
                  >
                    {avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {name}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {role} · {school}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Social proof footer bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-500"
        >
          {/* Stacked avatars */}
          <div className="flex -space-x-2">
            {["AD", "LF", "YO", "SN", "KN"].map((initials, i) => {
              const colors = [
                "bg-rose-200 text-rose-700",
                "bg-amber-200 text-amber-700",
                "bg-purple-200 text-purple-700",
                "bg-teal-200 text-teal-700",
                "bg-sky-200 text-sky-700",
              ];
              return (
                <div
                  key={initials}
                  className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold ${colors[i]}`}
                >
                  {initials}
                </div>
              );
            })}
          </div>
          <span>
            Join <strong className="text-gray-800">1,200+ students</strong> already on the
            waitlist
          </span>
          <a
            href="/survey"
            className="inline-flex w-full md:w-auto justify-center items-center gap-1.5 px-5 py-2.5 rounded-full bg-burgundy-600 text-white text-sm font-semibold hover:bg-burgundy-700 transition-colors shadow-sm"
          >
            Get early access
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
