import { defineStore } from "pinia";
import { marked } from "marked";
import axios from "axios";

export const useHomeStore = defineStore({
  id: "home",
  state: () => ({
    content: "",
  }),
  getters: {},
  actions: {
    loadMarkdown() {
      if (!this.content) {
        axios
          .get(import.meta.env.VITE_BASE_PATH + "home.md")
          .then((response) => {
            const pattern = /^---.*---(.*)$/s.exec(response.data)!;

            this.content = marked(pattern[1]);
          });
      }
    },
  },
});
