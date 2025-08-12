import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import {competenceType} from "./app/model/competences/competenceType";

const year = new Date().getFullYear();

export default defineContentConfig({
  collections: {
    competences: defineCollection({
      type: "data",
      source: "competences/*.json",
      schema: z
        .object({
          label: z.string(),
          faIcon: z.string(),
          descriptionFr: z.string(),
          descriptionEn: z.string(),
          url: z.string().url(),
          type: z.enum(competenceType),
          experiences: z.array(z.string()),
          lvl: z.number().int().min(0).max(100),
        })
        .strict(),
    }),
    projects: defineCollection({
      type: "data",
      source: "projects/*.json",
      schema: z
        .object({
          name: z.string(),
          descriptionFr: z.string(),
          descriptionEn: z.string(),
          technos: z.array(z.string()),
          experience: z.string(),
          start: z.number().int(),
          end: z.number().int().optional().default(year),
        })
        .strict(),
    }),
    experiences: defineCollection({
      type: "data",
      source: "experiences/*.json",
      schema: z
        .object({
          location: z.string(),
          descriptionFr: z.string(),
          descriptionEn: z.string(),
          url: z.string().url(),
          city: z.string(),
          start: z.number().int(),
          end: z.number().int().optional().default(year),
        })
        .strict(),
    }),
  },
});
