import { defineStore } from "pinia";
import type Experience from "~/model/experiences/Experience";

export const useExperiencesStore = defineStore("experiences", {
  state: () => ({
    experiences: [] as Experience[],
  }),
  getters: {
    experiencesSorted: (state) =>
      state.experiences.sort(
        (p1, p2) => (p2.end || p2.start + 100) - (p1.end || p1.start + 100)
      ),
  },
  actions: {
    loadExperiences() {
      if (this.experiences.length == 0) {
        $fetch<{ experiences: Experience[] }>("data/experiences.json").then((data) => {
          this.experiences = data.experiences;
        });
      }
    },
  },
});
