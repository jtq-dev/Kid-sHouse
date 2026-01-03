export type Category =
  | "general"
  | "quarter"
  | "progress"
  | "ptc"
  | "holiday"
  | "firstlast";

export type CalEvent = {
  date: string; // YYYY-MM-DD
  titleKey: string; // key in messages.calendar.events
  category: Category;
  endDate?: string; // optional range end
};

// Colors only (labels come from i18n now)
export const CATEGORY_META: Record<Category, { color: string }> = {
  general: { color: "#0F766E" }, // teal
  quarter: { color: "#EF4444" }, // red
  progress: { color: "#D6D3A3" }, // tan
  ptc: { color: "#7C3AED" }, // purple
  holiday: { color: "#1D4ED8" }, // blue
  firstlast: { color: "#84CC16" }, // green
};

export const EVENTS: CalEvent[] = [
  { date: "2025-08-25", titleKey: "firstDayOfSchool", category: "firstlast" },
  { date: "2025-09-19", titleKey: "progress01", category: "progress" },
  { date: "2025-09-26", titleKey: "wellnessDay", category: "general" },
  { date: "2025-10-17", titleKey: "pdDay", category: "general" },
  { date: "2025-10-25", titleKey: "endFirstQuarter", category: "quarter" },
  { date: "2025-10-27", endDate: "2025-10-31", titleKey: "fallBreak", category: "holiday" },
  { date: "2025-11-03", titleKey: "q2Begins", category: "quarter" },
  { date: "2025-11-13", endDate: "2025-11-14", titleKey: "ptcNov", category: "ptc" },
  { date: "2025-12-05", titleKey: "progress02", category: "progress" },
  { date: "2025-12-19", titleKey: "winterBreakBegins", category: "holiday" },
  { date: "2026-01-05", titleKey: "schoolResumes", category: "general" },
  { date: "2026-01-30", titleKey: "endSecondQuarter", category: "quarter" },
  { date: "2026-02-02", titleKey: "q3Begins", category: "quarter" },
  { date: "2026-03-06", titleKey: "progress03", category: "progress" },
  { date: "2026-04-10", titleKey: "endThirdQuarter", category: "quarter" },
  { date: "2026-04-13", titleKey: "q4Begins", category: "quarter" },
  { date: "2026-04-23", endDate: "2026-04-24", titleKey: "ptcApr", category: "ptc" },
  { date: "2026-05-01", titleKey: "labourDayObserved", category: "holiday" },
  { date: "2026-05-20", titleKey: "cameroonNationalDay", category: "holiday" },
  { date: "2026-06-19", titleKey: "lastDayOfSchool", category: "firstlast" },
];
