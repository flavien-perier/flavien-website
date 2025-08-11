import { defineStore } from "pinia";
import { marked } from "marked";

export const useHomeStore = defineStore("home", {
  state: () => ({
    content: "",
  }),
  getters: {},
  actions: {
    loadMarkdown() {
      if (!this.content) {
        $fetch<string>(import.meta.env.VITE_BASE_PATH + "home.md", { responseType: 'text' })
          .then(async (data) => {
            const pattern = /^---.*---(.*)$/s.exec(data)!;

            this.content = await marked(pattern[1] || "");
          });
      }
    },
  },
});
