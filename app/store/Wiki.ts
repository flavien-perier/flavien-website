import { defineStore } from "pinia";
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
    loadArticles(page: number) {
      if (this.headers.length == 0 || this.page !== page) {
        this.page = page;
        $fetch<Search>(import.meta.env.VITE_BASE_PATH, {
          query: {
            p: page,
            n: 10,
            type: 'WIKI',
          },
        }).then((data) => {
          this.headers = data.files;
          this.numberOfPages = data.pages;
        });
      }
    },
  },
});
