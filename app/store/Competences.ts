import { defineStore } from "pinia";
import type Competence from "~/model/competences/Competence";
import {competenceType} from "~/model/competences/competenceType";

export const useCompetencesStore = defineStore("competences", {
  state: () => ({
    competences: [] as Competence[],
    competencesCheckbox: {} as { [key: string]: boolean },
  }),
  getters: {
    competencesTypes: (state) => Object.keys(state.competencesCheckbox),
    competenceIsChecked: (state) => (competenceId: string) => {
      if (!state.competencesCheckbox.hasOwnProperty(competenceId)) {
        return false;
      }
      return state.competencesCheckbox[competenceId];
    },
    allCompetencesIsChecked: (state) =>
      Object.keys(state.competencesCheckbox).every(
        (competenceId) => state.competencesCheckbox[competenceId]
      ),
  },
  actions: {
    initialize(competences: Competence[]) {
      this.competences = competences;
      this.competencesCheckbox = competenceType
        .reduce((acc: { [key: string]: boolean }, competence) => {
            acc[competence] = true;
            return acc;
          }, {}
        );
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
