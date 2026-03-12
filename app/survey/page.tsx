"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { questions } from "@/lib/questions";
import ProgressBar from "@/components/survey/ProgressBar";
import SurveyCard from "@/components/survey/SurveyCard";
import ThankYou from "@/components/survey/ThankYou";

type Status = "idle" | "submitting" | "done" | "error";

export default function SurveyPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const question = questions[step];
  const isFirst = step === 0;
  const isLast = step === questions.length - 1;
  const currentAnswer = answers[question.id] ?? "";

  function handleAnswer(value: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  }

  function handleNext() {
    if (!currentAnswer.trim()) return;

    if (isLast) {
      submitSurvey();
    } else {
      setDirection(1);
      setStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (isFirst) return;
    setDirection(-1);
    setStep((s) => s - 1);
  }

  async function submitSurvey() {
    setStatus("submitting");
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-mauve-50/30 to-burgundy-50/20 flex flex-col">
      {/* Minimal nav */}
      <header className="flex items-center justify-between px-6 py-5 max-w-2xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-full bg-burgundy-600 flex items-center justify-center text-white font-display font-bold text-xs">
            O
          </span>
          <span className="font-display font-bold text-gray-800 text-lg">Orvex</span>
        </Link>
        {status !== "done" && (
          <span className="text-xs text-gray-400 font-medium">
            Takes ~3 minutes
          </span>
        )}
      </header>

      {/* Main card */}
      <main className="flex-1 flex items-start sm:items-center justify-center px-3 sm:px-6 py-6 sm:py-10">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {status === "done" ? (
              <motion.div
                key="done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-mauve-100 px-4 sm:px-8 py-10 sm:py-12"
              >
                <ThankYou />
              </motion.div>
            ) : (
              <motion.div
                key="survey"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-mauve-100 px-4 sm:px-8 py-8 sm:py-10"
              >
                {/* Progress */}
                <div className="mb-8">
                  <ProgressBar current={step} total={questions.length} />
                </div>

                {/* Question card with slide animation */}
                <SurveyCard
                  question={question}
                  questionIndex={step}
                  answer={currentAnswer}
                  onAnswer={handleAnswer}
                  onNext={handleNext}
                  onBack={handleBack}
                  isFirst={isFirst}
                  isLast={isLast}
                  direction={direction}
                />

                {/* Error state */}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-center text-sm text-red-500"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}

                {/* Submitting overlay */}
                {status === "submitting" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-3xl bg-white/70 flex items-center justify-center"
                  >
                    <div className="w-6 h-6 border-2 border-burgundy-300 border-t-burgundy-600 rounded-full animate-spin" />
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer hint */}
      {status !== "done" && (
        <p className="text-center text-xs text-gray-400 pb-6">
          Your answers are anonymous and used only to improve Orvex.
        </p>
      )}
    </div>
  );
}
