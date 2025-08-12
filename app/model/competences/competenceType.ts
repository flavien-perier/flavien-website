export const competenceType = [
  "framework",
  "language",
  "ide",
  "db",
  "bigData",
  "dataScience",
  "os",
  "infra",
  "network",
  "tool",
  "management",
] as const;

export type CompetenceType = typeof competenceType[number];