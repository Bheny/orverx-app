"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Question } from "@/lib/questions";
import QuestionButtons from "./QuestionButtons";
import TextInput from "./TextInput";

interface Props {
  question: Question;
  questionIndex: number;
  answer: string;
  onAnswer: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
  direction: 1 | -1;
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SurveyCard({
  question,
  questionIndex,
  answer,
  onAnswer,
  onNext,
  onBack,
  isFirst,
  isLast,
  direction,
}: Props) {
  const canProceed = question.optional ? true : answer.trim().length > 0;

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={questionIndex}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="w-full"
      >
        {/* Question text */}
        <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 leading-snug">
          {question.text}
        </h2>
        {question.subtitle && (
          <p className="text-sm text-gray-400 mb-5">{question.subtitle}</p>
        )}
        {!question.subtitle && <div className="mb-6" />}

        {/* Answer input */}
        {question.type === "choice" && question.options ? (
          <QuestionButtons
            options={question.options}
            selected={answer || null}
            onSelect={(v) => {
              onAnswer(v);
            }}
          />
        ) : (
          <TextInput
            value={answer}
            onChange={onAnswer}
            placeholder={question.placeholder}
            inputType={question.inputType}
          />
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={onBack}
            disabled={isFirst}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 disabled:opacity-0 disabled:pointer-events-none transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>

          <motion.button
            onClick={onNext}
            disabled={!canProceed}
            whileHover={canProceed ? { scale: 1.04 } : {}}
            whileTap={canProceed ? { scale: 0.97 } : {}}
            className={`flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200
              ${
                canProceed
                  ? "bg-burgundy-600 text-white shadow-md hover:bg-burgundy-700 cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            {isLast ? "Submit" : "Next"}
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
