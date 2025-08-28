import {defineStore} from "pinia";
import { useFetch } from "#app";
import type Markdown from "~/model/wiki/Markdown";
import YAML from "yaml";
import { markdownRenderer } from "~/scripts/markdownRenderer";

export const useWikiArticleStore = defineStore("wikiArticle", {
  state: () => ({
    articleName: "",
    header: null as Markdown | null,
    content: "",
  }),
  getters: {
    title: (state) => (state.header ? state.header.title : ""),
    author: (state) => (state.header ? state.header.author : ""),
    date: (state) =>
      state.header ? new Date(state.header.date).toLocaleDateString() : "",
    description: (state) => (state.header ? state.header.description : ""),
  },
  actions: {
    async loadArticle(name: string) {
      if (name !== this.articleName) {
        const config = useRuntimeConfig();
        const { data, error } = await useFetch<string>(config.public.WIKI_BASE_PATH + name, { responseType: "text" });

        if (error.value || !data.value) {
          console.error("Failed to load home.md:", error.value);
          return;
        }
        this.articleName = name;

        const pattern = /^---(.*?)---(.*)$/s.exec(data.value)!;

        this.header = YAML.parse(pattern[1] || "");
        this.content = markdownRenderer(pattern[2] || "");
      }
    },
  },
});
