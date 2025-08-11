import {defineStore} from "pinia";
import { useFetch } from "#app";
import type Markdown from "~/model/wiki/Markdown";
import {marked} from "marked";
import type {Tokens} from "marked";
import YAML from "yaml";

const renderer = new marked.Renderer();
renderer.heading = ({tokens, depth}) => {
  const content = tokens.map(token => {
    const raw = token as (Tokens.Text | Tokens.Link);

    const {text} = raw;
    const href = raw.type === "link" ? raw.href : null;

    return href ? `<a href=${href}>${text}</a>` : text;
  }).join("");

  const id = content.toLowerCase()
    .replace(/<.*?>/g, "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z]+/g, "_");

  return `<h${depth} id="${id}">${content}</h${depth}>`;
};

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
        const { data, error } = await useFetch<string>(import.meta.env.VITE_BASE_PATH + name, { responseType: 'text' });

        if (error.value || !data.value) {
          console.error("Failed to load home.md:", error.value);
          return;
        }
        this.articleName = name;

        const pattern = /^---(.*?)---(.*)$/s.exec(data.value)!;

        this.header = YAML.parse(pattern[1] || "");
        this.content = marked(pattern[2] || "", {renderer}) as string;
      }
    },
  },
});
