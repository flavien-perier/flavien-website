import { defineStore } from "pinia";
import axios from "axios";
import type CompetenceModel from "@/competences/model/competence.model";

export const useCompetencesStore = defineStore("competences", {
  state: () => ({
    competences: [] as CompetenceModel[],
    competencesCheckbox: {} as { [key: string]: boolean },
  }),
  getters: {
    competencesTypes: (state) => Object.keys(state.competencesCheckbox),
    competenceIsChecked: (state) => (competenceId: string) =>
      state.competencesCheckbox[competenceId],
    allCompetencesIsChecked: (state) =>
      Object.keys(state.competencesCheckbox).every(
        (competenceId) => state.competencesCheckbox[competenceId]
      ),
  },
  actions: {
    loadCompetences() {
      if (this.competences.length == 0) {
        axios.get("data/competences.json").then((response) => {
          this.competences = (
            response.data as { competences: CompetenceModel[] }
          ).competences;
          const competencesCheckbox: { [key: string]: boolean } = {};
          this.competences
            .map((c) => c.type)
            .filter((value, index, self) => self.indexOf(value) == index)
            .forEach((id) => (competencesCheckbox[id] = true));
          this.competencesCheckbox = competencesCheckbox;
        });
      }
    },
    selectCompetence(competenceId: string) {
      this.competencesCheckbox[competenceId] =
        !this.competencesCheckbox[competenceId];
    },
    selectAllCompetences() {
      const competencesIds = Object.keys(this.competencesCheckbox);

      const allChecked = competencesIds.every(
        (competenceId) => this.competencesCheckbox[competenceId]
      );

      competencesIds.forEach((competenceId) => {
        this.competencesCheckbox[competenceId] = !allChecked;
      });
    },
  },
});
