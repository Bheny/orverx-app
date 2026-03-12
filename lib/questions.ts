export type QuestionType = "choice" | "text";
export type InputType = "text" | "name" | "tel";

export interface Question {
  id: string;
  type: QuestionType;
  inputType?: InputType;
  text: string;
  subtitle?: string;
  options?: string[];
  placeholder?: string;
  optional?: boolean;
}

export const questions: Question[] = [
  {
    id: "name",
    type: "text",
    inputType: "name",
    text: "First, what's your name?",
    placeholder: "e.g. Sophia",
  },
  {
    id: "whatsapp",
    type: "text",
    inputType: "tel",
    text: "What's your WhatsApp number?",
    subtitle: "So you can share Orvex with friends in one tap.",
    placeholder: "e.g. +44 7700 900123",
    optional: true,
  },
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
