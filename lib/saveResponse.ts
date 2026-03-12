import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "responses.json");

export interface SurveyResponse {
  id: string;
  submittedAt: string;
  answers: Record<string, string>;
}

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, "[]", "utf-8");
}

export function saveResponse(answers: Record<string, string>): SurveyResponse {
  ensureFile();
  const existing: SurveyResponse[] = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
  const entry: SurveyResponse = {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    answers,
  };
  existing.push(entry);
  fs.writeFileSync(FILE_PATH, JSON.stringify(existing, null, 2), "utf-8");
  return entry;
}
