import { defineStore } from "pinia";
import { useFetch } from "#app";
import type Markdown from "~/model/wiki/Markdown";
import type Search from "~/model/wiki/Search";

export const useWikiStore = defineStore("wiki", {
  state: () => ({
    headers: [] as Markdown[],
    page: 1,
    numberOfPages: 1,
  }),
  getters: {},
  actions: {
    async loadArticles(page: number) {
      if (this.headers.length == 0 || this.page !== page) {
        this.page = page;
        const config = useRuntimeConfig();
        const { data, error } = await useFetch<Search>(config.public.WIKI_BASE_PATH, {
          query: {
            p: page,
            n: 10,
            type: "WIKI",
          },
        });

        if (error?.value || !data.value) {
          console.error("Failed to load wiki articles:", error.value);
          return;
        }

        this.headers = data.value.files;
        this.numberOfPages = data.value.pages;
      }
    },
  },
});
