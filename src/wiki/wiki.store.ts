import { defineStore } from "pinia";
import axios from "axios";
import type MarkdownModel from "@/wiki/model/markdown.model";
import type SearchModel from "@/wiki/model/search.model";

export const useWikiStore = defineStore("wiki", {
  state: () => ({
    headers: [] as MarkdownModel[],
    page: 1,
    numberOfPages: 1,
  }),
  getters: {},
  actions: {
    loadArticles(page: number) {
      if (this.headers.length == 0 || this.page !== page) {
        this.page = page;
        axios
          .get(import.meta.env.VITE_BASE_PATH, {
            params: {
              p: page,
              n: 10,
              type: "WIKI",
            },
          })
          .then((response) => {
            const data = response.data as SearchModel;

            this.headers = data.files;
            this.numberOfPages = data.pages;
          });
      }
    },
  },
});
