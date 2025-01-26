import { defineStore } from "pinia";

export const useApplicationStore = defineStore("application", {
  state: () => ({
    pageTitle: "",
  }),
  getters: {},
  actions: {
    changeTitle(title: string) {
      if (!title) {
        document.title = "Flavien PERIER";
      } else {
        document.title = `Flavien PERIER - ${this.$i18n.t(title)}`;
      }
      this.pageTitle = title;
    },
  },
});
