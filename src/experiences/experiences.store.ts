import { defineStore } from "pinia";
import axios from "axios";
import type ExperienceModel from "@/experiences/model/experience.model";

export const useExperiencesStore = defineStore({
  id: "experiences",
  state: () => ({
    experiences: [] as ExperienceModel[],
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
        axios.get("data/experiences.json").then((response) => {
          this.experiences = (
            response.data as { experiences: ExperienceModel[] }
          ).experiences;
        });
      }
    },
  },
});
