import fs from "fs";
import path from "path";
import { SurveyResponse } from "./saveResponse";

const FILE_PATH = path.join(process.cwd(), "data", "responses.json");

function readAll(): SurveyResponse[] {
  if (!fs.existsSync(FILE_PATH)) return [];
  try {
    return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
  } catch {
    return [];
  }
}

function countBy(responses: SurveyResponse[], key: string): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const r of responses) {
    const val = r.answers[key];
    if (val) counts[val] = (counts[val] || 0) + 1;
  }
  return counts;
}

function dailyActivity(responses: SurveyResponse[]): { date: string; label: string; count: number }[] {
  const days: Record<string, number> = {};
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days[key] = 0;
  }
  for (const r of responses) {
    const key = r.submittedAt.slice(0, 10);
    if (key in days) days[key]++;
  }
  return Object.entries(days).map(([date, count]) => ({
    date,
    label: new Date(date + "T12:00:00").toLocaleDateString("en-GB", { weekday: "short" }),
    count,
  }));
}

export function getAnalytics() {
  const responses = readAll();
  const total = responses.length;
  const withPhone = responses.filter((r) => r.answers["whatsapp"]?.trim()).length;

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const recentCount = responses.filter((r) => new Date(r.submittedAt) >= sevenDaysAgo).length;

  // Interest score: % who said "Yes, definitely"
  const definitelyCount = responses.filter(
    (r) => r.answers["platform_interest"] === "Yes, definitely"
  ).length;
  const interestScore = total > 0 ? Math.round((definitelyCount / total) * 100) : 0;

  return {
    total,
    withPhone,
    recentCount,
    interestScore,
    byStudy: countBy(responses, "study"),
    byYear: countBy(responses, "year"),
    byCollabFreq: countBy(responses, "collab_frequency"),
    byCollabStruggle: countBy(responses, "collab_struggle"),
    byPlatformInterest: countBy(responses, "platform_interest"),
    byOfferServices: countBy(responses, "offer_services"),
    challenges: responses
      .map((r) => ({
        text: r.answers["biggest_challenge"] ?? "",
        name: r.answers["name"] ?? "Anonymous",
        study: r.answers["study"] ?? "",
        date: r.submittedAt,
      }))
      .filter((r) => r.text.trim()),
    recent: [...responses]
      .reverse()
      .slice(0, 12)
      .map((r) => ({
        name: r.answers["name"] ?? "—",
        study: r.answers["study"] ?? "—",
        interest: r.answers["platform_interest"] ?? "—",
        hasPhone: !!r.answers["whatsapp"]?.trim(),
        date: r.submittedAt,
      })),
    daily: dailyActivity(responses),
  };
}

export type Analytics = ReturnType<typeof getAnalytics>;
