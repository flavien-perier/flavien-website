import { defineStore } from "pinia";
import axios from "axios";
import type MarkdownModel from "@/wiki/model/markdown.model";
import { useApplicationStore } from "@/application/application.store";
import { marked } from "marked";
import YAML from "yaml";

const renderer = new marked.Renderer();
renderer.heading = (text, level, raw) => {
  const id = text.toLowerCase().replace(/ |\"/g, "_");
  return `<h${level} id="${id}">${text}</h${level}>`
};

export const useWikiArticleStore = defineStore({
  id: "wikiArticle",
  state: () => ({
    articleName: "",
    header: null as MarkdownModel | null,
    content: "",
  }),
  getters: {
    title: (state) => (state.header ? state.header.title : ""),
    author: (state) => (state.header ? state.header.author : ""),
    date: (state) =>
      state.header ? new Date(state.header.date).toLocaleDateString() : "",
  },
  actions: {
    loadArticle(name: string) {
      const applicationStore = useApplicationStore();

      if (name !== this.articleName) {
        axios.get(import.meta.env.VITE_BASE_PATH + name).then((response) => {
          this.articleName = name;

          const pattern = /^---(.*?)---(.*)$/s.exec(response.data)!;
          this.header = YAML.parse(pattern[1]);
          this.content = marked(pattern[2], { renderer }) as string;

          applicationStore.changeTitle(this.header!.title);
        });
      } else {
        applicationStore.changeTitle(this.header!.title);
      }
    },
  },
});
