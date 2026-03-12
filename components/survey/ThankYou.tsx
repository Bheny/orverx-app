"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const GOAL = 100;

function buildShareText(position: number, name: string) {
  const intro = name.trim()
    ? `Hey! ${name.trim()} is inviting you to join Orvex 👋`
    : "Hey! I'm inviting you to join Orvex 👋";
  return `${intro}\n\nIt's a platform for fashion students to collaborate on shoots, lookbooks & grad projects. We need ${GOAL} students before we start building — I'm #${position}. Join us:`;
}

export default function ThankYou({ position }: { position: number }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [copied, setCopied] = useState(false);

  const pct = Math.min((position / GOAL) * 100, 100);
  const remaining = Math.max(GOAL - position, 0);

  const surveyUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/survey`
      : "https://orvex.co/survey";

  const shareText = buildShareText(position, name);
  const fullText = `${shareText}\n${surveyUrl}`;

  // If a phone number is provided, open a direct WhatsApp chat; otherwise the share picker
  const rawPhone = phone.replace(/[\s\-()]/g, "");
  const whatsappUrl = rawPhone
    ? `https://wa.me/${rawPhone}?text=${encodeURIComponent(fullText)}`
    : `https://wa.me/?text=${encodeURIComponent(fullText)}`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText}\n`)}&url=${encodeURIComponent(surveyUrl)}`;

  function handleCopy() {
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <motion.div
      key="thankyou"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center px-4 py-8"
    >
      {/* Check circle */}
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
        >
          <motion.path
            d="M5 13l4 4L19 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.45, duration: 0.45, ease: "easeOut" }}
          />
        </motion.svg>
      </motion.div>

      {/* Position badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.45 }}
        className="mb-4"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-600 text-white text-sm font-bold tracking-wide shadow-sm">
          <span className="text-burgundy-200 text-xs">#</span>
          {position}
          <span className="text-burgundy-200 font-normal">of {GOAL}</span>
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
      >
        You&apos;re in!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.5 }}
        className="text-gray-500 text-sm sm:text-base max-w-xs mb-7 leading-relaxed"
      >
        {remaining > 0 ? (
          <>
            Only{" "}
            <strong className="text-gray-800">{remaining} more students</strong>{" "}
            needed before we start building. Help us get there.
          </>
        ) : (
          <>We&apos;ve hit our goal! We&apos;re starting to build — stay tuned.</>
        )}
      </motion.p>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.45 }}
        className="w-full max-w-xs mb-8"
      >
        <div className="flex justify-between text-xs text-gray-400 mb-1.5">
          <span>{position} joined</span>
          <span>Goal: {GOAL}</span>
        </div>
        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-burgundy-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <p className="text-xs text-burgundy-600 font-semibold mt-1.5 text-right">
          {Math.round(pct)}% to launch
        </p>
      </motion.div>

      {/* ── Personalize invite ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.45 }}
        className="w-full max-w-xs mb-6 text-left"
      >
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3 text-center">
          Personalize your invite
        </p>

        <div className="flex flex-col gap-2.5">
          {/* Name */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your first name"
              maxLength={40}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-burgundy-400 focus:ring-1 focus:ring-burgundy-200 transition"
            />
          </div>

          {/* WhatsApp number */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.526 5.858L.057 23.617a.5.5 0 00.614.614l5.758-1.469A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.554 9.554 0 01-4.878-1.334l-.35-.207-3.617.923.94-3.522-.228-.362A9.558 9.558 0 012.4 12C2.4 6.699 6.699 2.4 12 2.4S21.6 6.699 21.6 12 17.301 21.6 12 21.6z"/>
              </svg>
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Friend's WhatsApp number (optional)"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-burgundy-400 focus:ring-1 focus:ring-burgundy-200 transition"
            />
          </div>
        </div>

        {/* Live preview of invite message */}
        <AnimatePresence>
          {name.trim() && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 overflow-hidden"
            >
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-3 text-left">
                <p className="text-xs text-gray-400 mb-1 font-medium">Preview</p>
                <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                  {shareText}
                  {"\n"}
                  <span className="text-burgundy-500">{surveyUrl}</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Share buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.45 }}
        className="flex flex-wrap justify-center gap-2.5 mb-7 w-full max-w-xs"
      >
        {/* X / Twitter */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[100px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Post
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[100px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.526 5.858L.057 23.617a.5.5 0 00.614.614l5.758-1.469A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.554 9.554 0 01-4.878-1.334l-.35-.207-3.617.923.94-3.522-.228-.362A9.558 9.558 0 012.4 12C2.4 6.699 6.699 2.4 12 2.4S21.6 6.699 21.6 12 17.301 21.6 12 21.6z"/>
          </svg>
          {rawPhone ? "Send directly" : "WhatsApp"}
        </a>

        {/* Copy link */}
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-mauve-200 text-gray-600 text-sm font-semibold hover:border-burgundy-400 hover:text-burgundy-600 transition-colors"
        >
          {copied ? (
            <>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-500">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              Copy invite link
            </>
          )}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.4 }}
      >
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-2"
        >
          Back to home
        </Link>
      </motion.div>
    </motion.div>
  );
}
