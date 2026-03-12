import { getAnalytics } from "@/lib/getAnalytics";
import Link from "next/link";

export const dynamic = "force-dynamic";

/* ─── Colour map for disciplines ─────────────────────────────────────────── */
const disciplineColor: Record<string, string> = {
  Fashion: "bg-burgundy-500",
  Photography: "bg-amber-400",
  Makeup: "bg-pink-400",
  Styling: "bg-purple-400",
  Videography: "bg-sky-400",
  Other: "bg-gray-400",
};

const interestColor: Record<string, string> = {
  "Yes, definitely": "bg-emerald-500",
  Maybe: "bg-amber-400",
  "Not sure": "bg-gray-300",
  No: "bg-red-400",
};

const struggleColor: Record<string, string> = {
  "Yes, often": "bg-burgundy-500",
  "Yes, sometimes": "bg-mauve-400",
  Rarely: "bg-gray-300",
  Never: "bg-gray-200",
};

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

function sortedEntries(obj: Record<string, number>): [string, number][] {
  return Object.entries(obj).sort((a, b) => b[1] - a[1]);
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* ─── Sub-components ──────────────────────────────────────────────────────── */

function StatCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 border shadow-sm flex flex-col gap-1 ${
        accent
          ? "bg-burgundy-600 border-burgundy-700 text-white"
          : "bg-white border-gray-100"
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-widest ${accent ? "text-burgundy-200" : "text-gray-400"}`}>
        {label}
      </p>
      <p className={`font-display text-4xl font-bold ${accent ? "text-white" : "text-gray-900"}`}>
        {value}
      </p>
      {sub && (
        <p className={`text-xs mt-0.5 ${accent ? "text-burgundy-200" : "text-gray-400"}`}>{sub}</p>
      )}
    </div>
  );
}

function HBar({
  label,
  value,
  max,
  total,
  colorClass = "bg-burgundy-500",
}: {
  label: string;
  value: number;
  max: number;
  total: number;
  colorClass?: string;
}) {
  const barPct = max > 0 ? (value / max) * 100 : 0;
  const ofTotal = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className="grid grid-cols-[7rem_1fr_2.5rem_2rem] items-center gap-3 text-sm">
      <span className="text-gray-500 text-xs truncate text-right">{label}</span>
      <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: `${barPct}%` }}
        />
      </div>
      <span className="text-xs font-bold text-gray-800 text-right">{value}</span>
      <span className="text-xs text-gray-400">{ofTotal}%</span>
    </div>
  );
}

function ChartCard({
  title,
  data,
  colorMap,
  total,
}: {
  title: string;
  data: Record<string, number>;
  colorMap?: Record<string, string>;
  total: number;
}) {
  const entries = sortedEntries(data);
  const max = entries[0]?.[1] ?? 1;
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <h3 className="text-sm font-bold text-gray-900 mb-5">{title}</h3>
      {entries.length === 0 ? (
        <p className="text-xs text-gray-400">No responses yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {entries.map(([label, count]) => (
            <HBar
              key={label}
              label={label}
              value={count}
              max={max}
              total={total}
              colorClass={colorMap?.[label] ?? "bg-burgundy-400"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function AnalyticsPage() {
  const data = getAnalytics();
  const GOAL = 100;
  const progressPct = Math.min((data.total / GOAL) * 100, 100);
  const remaining = Math.max(GOAL - data.total, 0);
  const dailyMax = Math.max(...data.daily.map((d) => d.count), 1);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Nav */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-burgundy-600 flex items-center justify-center text-white font-display font-bold text-xs">
                O
              </span>
              <span className="font-display font-bold text-gray-900">Orvex</span>
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-sm font-semibold text-gray-500">Insights</span>
          </div>
          <Link
            href="/survey"
            className="px-4 py-1.5 rounded-full bg-burgundy-600 text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors"
          >
            View survey
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">

        {/* Title */}
        <div>
          <h1 className="font-display text-3xl font-bold text-gray-900">Waitlist insights</h1>
          <p className="text-gray-400 text-sm mt-1">
            Live data from survey submissions · refreshes on every page load
          </p>
        </div>

        {/* ── Top stat cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Total signups"
            value={data.total}
            sub={`${remaining} more to launch`}
            accent
          />
          <StatCard
            label="This week"
            value={data.recentCount}
            sub="Last 7 days"
          />
          <StatCard
            label="Shared WhatsApp"
            value={data.withPhone}
            sub={
              data.total > 0
                ? `${Math.round((data.withPhone / data.total) * 100)}% of signups`
                : "—"
            }
          />
          <StatCard
            label="Keen on platform"
            value={`${data.interestScore}%`}
            sub={'Said \u201cYes, definitely\u201d'}
          />
        </div>

        {/* ── Progress to goal ── */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-900">Progress to launch goal</h3>
            <span className="text-sm font-bold text-burgundy-600">
              {data.total} / {GOAL}
            </span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-burgundy-500 rounded-full transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>{Math.round(progressPct)}% complete</span>
            <span>{remaining} remaining</span>
          </div>
        </div>

        {/* ── 7-day daily activity ── */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-6">Daily signups — last 7 days</h3>
          {data.daily.every((d) => d.count === 0) ? (
            <p className="text-xs text-gray-400">No submissions in the last 7 days.</p>
          ) : (
            <div className="flex items-end gap-2 h-28">
              {data.daily.map(({ label, count, date }) => (
                <div key={date} className="flex-1 flex flex-col items-center gap-1.5">
                  <span className="text-xs font-semibold text-gray-700">
                    {count > 0 ? count : ""}
                  </span>
                  <div className="w-full flex items-end" style={{ height: "72px" }}>
                    <div
                      className="w-full rounded-t-md bg-burgundy-500 transition-all duration-700"
                      style={{
                        height: `${dailyMax > 0 ? (count / dailyMax) * 72 : 0}px`,
                        minHeight: count > 0 ? "4px" : "0",
                      }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Chart grid ── */}
        <div className="grid sm:grid-cols-2 gap-4">
          <ChartCard
            title="Discipline breakdown"
            data={data.byStudy}
            colorMap={disciplineColor}
            total={data.total}
          />
          <ChartCard
            title="Year of study"
            data={data.byYear}
            total={data.total}
          />
          <ChartCard
            title="Platform interest"
            data={data.byPlatformInterest}
            colorMap={interestColor}
            total={data.total}
          />
          <ChartCard
            title="Struggled to find collaborators?"
            data={data.byCollabStruggle}
            colorMap={struggleColor}
            total={data.total}
          />
          <ChartCard
            title="Collaboration frequency"
            data={data.byCollabFreq}
            total={data.total}
          />
          <ChartCard
            title="Offer services to others?"
            data={data.byOfferServices}
            total={data.total}
          />
        </div>

        {/* ── Recent signups ── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="text-sm font-bold text-gray-900">Recent signups</h3>
          </div>
          {data.recent.length === 0 ? (
            <p className="text-xs text-gray-400 px-6 py-5">No submissions yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      Name
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      Discipline
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide hidden sm:table-cell">
                      Interest
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide hidden md:table-cell">
                      WhatsApp
                    </th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors">
                      <td className="px-6 py-3.5 font-medium text-gray-900">{row.name}</td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-white text-xs font-medium ${
                            disciplineColor[row.study] ?? "bg-gray-400"
                          }`}
                        >
                          {row.study}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-gray-500 hidden sm:table-cell">
                        {row.interest}
                      </td>
                      <td className="px-4 py-3.5 hidden md:table-cell">
                        {row.hasPhone ? (
                          <span className="text-emerald-600 font-medium text-xs">✓ Yes</span>
                        ) : (
                          <span className="text-gray-300 text-xs">—</span>
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-gray-400 text-xs text-right whitespace-nowrap">
                        {fmtDate(row.date)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ── Biggest challenges ── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900">Biggest challenges</h3>
            <span className="text-xs text-gray-400">{data.challenges.length} responses</span>
          </div>
          {data.challenges.length === 0 ? (
            <p className="text-xs text-gray-400 px-6 py-5">No text responses yet.</p>
          ) : (
            <ul className="divide-y divide-gray-50">
              {data.challenges.map((c, i) => (
                <li key={i} className="px-6 py-4 flex gap-4 items-start">
                  <span
                    className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold ${
                      disciplineColor[c.study] ?? "bg-gray-400"
                    }`}
                  >
                    {c.name.slice(0, 1).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-700 leading-relaxed">&ldquo;{c.text}&rdquo;</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {c.name}
                      {c.study ? ` · ${c.study}` : ""}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

      </main>
    </div>
  );
}
