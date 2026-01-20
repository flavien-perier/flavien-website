import { defineStore } from "pinia";
import { marked } from "marked";
import { useFetch } from "#app";

export const useHomeStore = defineStore("home", {
  state: () => ({
    content: "",
    localeContent: {} as { [key: string]: string },
  }),
  getters: {},
  actions: {
    async loadMarkdown(locale: string) {
      if (!this.localeContent[locale]) {
        const config = useRuntimeConfig();
        
        const markdownUrl = config.public.WIKI_BASE_PATH + `home-${locale}.md`;
        
        const { data, error } = await useFetch<string>(markdownUrl, {
          responseType: "text",
          key: "home-md",
        });
        
        if (error?.value || !data?.value) {
          console.error("Failed to load home.md:", error.value);
          return;
        }
        
        // Remove YAML front-matter if present and parse Markdown
        const match = /^---.*?---\s*(.*)$/s.exec(data.value);
  
        this.localeContent[locale] = await marked((match && match[1]) || "");
      }

      this.content = this.localeContent[locale];
    },
  },
});
