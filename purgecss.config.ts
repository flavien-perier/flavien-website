import fs from "node:fs";
import path from "node:path";
import type {UserDefinedOptions} from "@fullhuman/postcss-purgecss";

function readCompetences() {
  const dir = path.resolve(__dirname, "content", "competences");
  let items: Array<{ lvl?: number | string; type?: string }> = [];

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const json = JSON.parse(raw);
    items.push(json);
  }

  return items;
}

function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

const competences = readCompetences();
const competencesLevels = unique(
  competences
    .map((c) => c.lvl)
    .filter((v): v is number | string => v !== undefined && v !== null)
    .map(String)
);
const competencesTypes = unique(
  competences
    .map((c) => c.type)
    .filter((v): v is string => typeof v === "string" && v.length > 0)
);

const safelist = [
  ...competencesLevels.map((level) => `progress-bar-animation-${level}`),
  ...competencesTypes.map((type) => `bg-competence-${type}`),
];

export const purgeCssConfiguration = {
  enabled: true,
  content: ["./app/**/*.vue"],
  defaultExtractor(content: string) {
    return (
      content
        .replace(/<style.+?<\/style>/gis, "")
        .replace(/<script.+?<\/script>/gis, "")
        .match(/[a-z0-9-_/:]+/gi) || []
    );
  },
  safelist: [
    ...safelist,
    "html",
    "body",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "p",
    "a",
    "img",
    "strong",
    "code",
    "pre",
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
    /data-v-.*/,
    /svg.*/,
    /fa.*/,
    /.*hljs.*/,
  ],
} as UserDefinedOptions;
