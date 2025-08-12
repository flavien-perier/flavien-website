import { defineSitemapEventHandler } from "#imports"
import type { SitemapUrlInput } from "#sitemap/types"
import type Search from "~/model/wiki/Search";

export default defineSitemapEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  try {
    const data = await $fetch<Search>(config.public.WIKI_BASE_PATH, {
      params: {
        p: 1,
        n: 30,
        type: "WIKI",
      },
    });

    if (!data) {
      console.error("Failed to load wiki articles: empty response");
      return [] as SitemapUrlInput[];
    }

    return data.files.map(f => {
      return {
        loc: `/wiki/${f.filename}`,
        _sitemap: "fr",
        changefreq: "weekly",
        priority: 0.8,
      };
    }) satisfies SitemapUrlInput[];
  } catch (err) {
    console.error("Failed to load wiki articles:", err);
    return [] as SitemapUrlInput[];
  }
});