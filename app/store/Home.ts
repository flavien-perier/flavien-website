import { defineStore } from "pinia";
import { marked } from "marked";
import { useFetch } from "#app";

export const useHomeStore = defineStore("home", {
  state: () => ({
    content: "",
  }),
  getters: {},
  actions: {
    async loadMarkdown() {
      if (this.content) return;

      const base = import.meta.env.VITE_BASE_PATH || "";
      const { data, error } = await useFetch<string>(base + "home.md", {
        responseType: "text",
        key: "home-md",
      });

      if (error?.value || !data?.value) {
        console.error("Failed to load home.md:", error.value);
        return;
      }

      // Remove YAML front-matter if present and parse Markdown
      const match = /^---.*?---\s*(.*)$/s.exec(data.value);
      this.content = await marked((match && match[1]) || "");
    },
  },
});
