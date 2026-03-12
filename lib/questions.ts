export type QuestionType = "choice" | "text";

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[];
  placeholder?: string;
}

export const questions: Question[] = [
  {
    id: "study",
    type: "choice",
    text: "What do you study?",
    options: ["Fashion", "Photography", "Makeup", "Styling", "Videography", "Other"],
  },
  {
    id: "year",
    type: "choice",
    text: "What year are you in?",
    options: ["Year 1", "Year 2", "Year 3", "Year 4", "Graduate"],
  },
  {
    id: "collab_frequency",
    type: "choice",
    text: "How often do you work on creative projects with collaborators?",
    options: ["Very Often", "Sometimes", "Rarely", "Never"],
  },
  {
    id: "collab_struggle",
    type: "choice",
    text: "Have you ever struggled to find collaborators for a project?",
    options: ["Yes, often", "Yes, sometimes", "Rarely", "Never"],
  },
  {
    id: "offer_services",
    type: "choice",
    text: "Do you offer your creative services to others?",
    options: ["Yes", "Sometimes", "No"],
  },
  {
    id: "platform_interest",
    type: "choice",
    text: "If a platform existed to help you find collaborators, would you use it?",
    options: ["Yes, definitely", "Maybe", "Not sure", "No"],
  },
  {
    id: "biggest_challenge",
    type: "text",
    text: "What's your biggest challenge when working on creative projects?",
    placeholder: "e.g. Hard to find people with the right skills…",
  },
];
