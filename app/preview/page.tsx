"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* ─── Image assets (Unsplash CDN) ──────────────────────────────────────── */

const img = {
  avatar:  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&h=300&q=85",
  cover:   "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&h=400&q=80",
  lookbook: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=1000&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&h=1000&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&h=1000&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&h=1000&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&h=1000&q=80",
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&h=1000&q=80",
  ],
  projects: [
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&h=600&q=80",
  ],
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const student = {
  name: "Amara Diallo",
  handle: "@amara.creates",
  role: "Fashion Designer & Art Director",
  school: "London College of Fashion",
  year: "Year 3",
  bio: "I design clothes that tell stories. Interested in sustainable womenswear, deconstructed tailoring, and the intersection of West African textile traditions with contemporary fashion.",
  stats: { projects: 12, collaborators: 28, views: "4.2k" },
  disciplines: ["Fashion Design", "Art Direction", "Styling", "Illustration"],
  lookingFor: ["Photographer", "Videographer", "Makeup Artist"],
};

const lookbook = {
  title: "DUSK / BLOOM",
  subtitle: "Autumn–Winter 2024 Collection",
  description:
    "A seven-piece womenswear collection exploring the tension between growth and decay. Inspired by botanical pressings, oxidised metals, and the quiet hours between dusk and dawn.",
  credits: [
    { role: "Fashion Design", name: "Amara Diallo",  avatar: "AD", color: "bg-rose-200   text-rose-700"   },
    { role: "Photography",    name: "Luca Ferrara",  avatar: "LF", color: "bg-amber-200  text-amber-700"  },
    { role: "Styling",        name: "Yemi Okafor",   avatar: "YO", color: "bg-purple-200 text-purple-700" },
    { role: "Makeup",         name: "Chloe Mensah",  avatar: "CM", color: "bg-pink-200   text-pink-700"   },
  ],
  tags: ["Womenswear", "AW24", "Sustainable", "Tailoring", "Editorial"],
};

const otherProjects = [
  { title: "THREAD THEORY",  type: "Editorial",     year: "2024", src: img.projects[0] },
  { title: "FORM & VOID",    type: "Lookbook",      year: "2023", src: img.projects[1] },
  { title: "CARTE BLANCHE",  type: "Collaboration", year: "2023", src: img.projects[2] },
];

/* ─── Tiny helpers ──────────────────────────────────────────────────────── */

function Badge({ label, variant = "default" }: { label: string; variant?: "default" | "outline" | "accent" }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
      variant === "accent"  ? "bg-burgundy-600 text-white" :
      variant === "outline" ? "border border-mauve-300 text-mauve-700" :
                              "bg-mauve-100 text-mauve-700"}`}>
      {label}
    </span>
  );
}

function StatCard({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-2xl sm:text-3xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-400 mt-0.5">{label}</p>
    </div>
  );
}

/* ─── Lightbox ──────────────────────────────────────────────────────────── */

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-sm sm:max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
          <Image src={src} alt="Lookbook image" fill className="object-cover" sizes="(max-width: 768px) 90vw, 500px" />
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function PreviewPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"lookbook" | "projects" | "about">("lookbook");

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Preview banner ── */}
      <div className="bg-burgundy-600 text-white text-center py-2.5 px-4 text-xs font-semibold tracking-wide flex items-center justify-center gap-3 flex-wrap">
        <span className="opacity-70">✦</span>
        This is a sample Orvex profile — showing what students will see when Orvex launches.
        <Link href="/survey" className="underline underline-offset-2 hover:opacity-80 transition-opacity whitespace-nowrap">
          Join the waitlist →
        </Link>
      </div>

      {/* ── Top nav ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-burgundy-600 flex items-center justify-center text-white font-display font-bold text-xs">O</span>
            <span className="font-display font-bold text-gray-900">Orvex</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 hidden sm:block">Explore · Projects · Messages</span>
            <Link href="/survey" className="px-4 py-1.5 rounded-full bg-burgundy-600 text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors">
              Get early access
            </Link>
          </div>
        </div>
      </header>

      {/* ── Cover image ── */}
      <div className="relative h-44 sm:h-60 overflow-hidden">
        <Image
          src={img.cover}
          alt="Profile cover"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Subtle dark gradient overlay at bottom for avatar legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* ── Profile header ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative -mt-14 sm:-mt-16 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">

            {/* Avatar photo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-4 border-white shadow-lg overflow-hidden flex-shrink-0 bg-rose-100"
            >
              <Image
                src={img.avatar}
                alt={student.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </motion.div>

            {/* Name + actions */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="font-display text-2xl sm:text-3xl font-bold text-gray-900"
                >
                  {student.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="text-gray-400 text-sm mt-0.5"
                >
                  {student.handle} · {student.school}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <button className="px-4 py-2 rounded-full border border-mauve-200 text-gray-700 text-sm font-medium hover:border-burgundy-400 hover:text-burgundy-600 transition-colors flex items-center gap-1.5">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Message
                </button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2 rounded-full bg-burgundy-600 text-white text-sm font-semibold hover:bg-burgundy-700 transition-colors shadow-sm"
                >
                  Collaborate
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="flex items-center gap-8 sm:gap-12 py-5 border-y border-gray-100 mb-6"
        >
          <StatCard value={student.stats.projects}     label="Projects" />
          <StatCard value={student.stats.collaborators} label="Collaborators" />
          <StatCard value={student.stats.views}         label="Profile views" />
          <div className="hidden sm:block flex-1" />
          <div className="hidden md:flex flex-wrap gap-2 justify-end">
            {student.disciplines.map((d) => <Badge key={d} label={d} />)}
          </div>
        </motion.div>

        {/* ── Tabs ── */}
        <div className="flex gap-1 border-b border-gray-100 mb-8 overflow-x-auto">
          {(["lookbook", "projects", "about"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-200
                ${activeTab === tab
                  ? "border-burgundy-600 text-burgundy-600"
                  : "border-transparent text-gray-500 hover:text-gray-800"}`}
            >
              {tab === "lookbook" ? "Featured Lookbook" : tab === "projects" ? "All Projects" : "About"}
            </button>
          ))}
        </div>

        {/* ══ LOOKBOOK TAB ══════════════════════════════════════════════════ */}
        {activeTab === "lookbook" && (
          <motion.div key="lookbook" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="pb-16">

            {/* Lookbook header */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-burgundy-600 mb-1">{lookbook.subtitle}</p>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{lookbook.title}</h2>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button className="p-2 rounded-full border border-gray-200 text-gray-500 hover:border-burgundy-400 hover:text-burgundy-600 transition-colors">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/></svg>
                  </button>
                  <button className="p-2 rounded-full border border-gray-200 text-gray-500 hover:border-burgundy-400 hover:text-burgundy-600 transition-colors">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg>
                  </button>
                </div>
              </div>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl">{lookbook.description}</p>
            </div>

            {/* ── Photo grid ── */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
              {img.lookbook.map((src, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setLightbox(src)}
                  className={`relative rounded-xl overflow-hidden shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-400
                    ${i === 0 ? "col-span-2 sm:col-span-2" : ""}
                    ${i === 0 ? "h-52 sm:h-80" : "h-44 sm:h-60"}`}
                >
                  <Image
                    src={src}
                    alt={`Lookbook image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={i === 0 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 50vw, 33vw"}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200" />
                </motion.button>
              ))}
            </div>

            {/* Credits */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">Creative team</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {lookbook.credits.map(({ role, name, avatar, color }) => (
                  <div key={name} className="flex items-center gap-3 group cursor-pointer">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${color}`}>
                      {avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-burgundy-600 transition-colors">{name}</p>
                      <p className="text-xs text-gray-400">{role}</p>
                    </div>
                    <button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs text-burgundy-600 font-medium whitespace-nowrap">
                      View profile
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {lookbook.tags.map((t) => <Badge key={t} label={t} variant="outline" />)}
            </div>
          </motion.div>
        )}

        {/* ══ PROJECTS TAB ══════════════════════════════════════════════════ */}
        {activeTab === "projects" && (
          <motion.div key="projects" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="pb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* Featured project */}
              <motion.div
                whileHover={{ y: -3 }}
                className="sm:col-span-2 lg:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer"
                onClick={() => setActiveTab("lookbook")}
              >
                <div className="relative h-52 w-full">
                  <Image src={img.lookbook[0]} alt={lookbook.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-burgundy-600 mb-1">Lookbook · AW24</p>
                  <h3 className="font-display font-bold text-gray-900 text-lg">{lookbook.title}</h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">{lookbook.description}</p>
                  <div className="flex items-center gap-1 mt-3 -space-x-1.5">
                    {lookbook.credits.map(({ avatar, color }, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold ${color}`}>{avatar}</div>
                    ))}
                    <span className="text-xs text-gray-400 ml-3">4 collaborators</span>
                  </div>
                </div>
              </motion.div>

              {otherProjects.map(({ title, type, year, src }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer"
                >
                  <div className="relative h-44 w-full">
                    <Image src={src} alt={title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-burgundy-600 mb-1">{type} · {year}</p>
                    <h3 className="font-display font-bold text-gray-900">{title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ══ ABOUT TAB ═════════════════════════════════════════════════════ */}
        {activeTab === "about" && (
          <motion.div key="about" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="pb-16 max-w-2xl">

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">About</h3>
              <p className="text-gray-700 leading-relaxed">{student.bio}</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Details</h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: "School", value: student.school },
                  { label: "Year",   value: student.year   },
                  { label: "Role",   value: student.role   },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <dt className="w-28 text-gray-400 flex-shrink-0">{label}</dt>
                    <dd className="text-gray-800 font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Disciplines</h3>
              <div className="flex flex-wrap gap-2">
                {student.disciplines.map((d) => <Badge key={d} label={d} variant="accent" />)}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Open to collaborating with</h3>
              <p className="text-xs text-gray-400 mb-4">This student is actively looking for:</p>
              <div className="flex flex-wrap gap-2">
                {student.lookingFor.map((l) => (
                  <span key={l} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-burgundy-200 text-burgundy-700 text-xs font-medium bg-burgundy-50">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6 4v4M4 6h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>

      {/* ── Join CTA ── */}
      <div className="bg-white border-t border-mauve-100 py-10 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-4">
            This is a preview of what Orvex profiles will look like.{" "}
            <br className="hidden sm:block" />
            Want yours? Help us build it.
          </p>
          <Link
            href="/survey"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-burgundy-600 text-white font-semibold text-sm hover:bg-burgundy-700 transition-colors shadow-sm"
          >
            Start the survey — takes 3 mins
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
