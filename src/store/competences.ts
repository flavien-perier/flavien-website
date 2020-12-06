import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import axios from "axios";

import CompetenceInterface from "@/model/CompetenceInterface";

interface CompetenceState {
  competences: CompetenceInterface[],
  competencesCheckbox: {[key: string]: boolean}
}

const state: CompetenceState = {
  competences: [],
  competencesCheckbox: {}
};

const mutations: MutationTree<CompetenceState> = {
  loadCompetences: state => {
    if (state.competences.length == 0) {
      axios.get("data/competences.json")
        .then(markdownContent => {
          state.competences = (markdownContent.data as { competences: CompetenceInterface[] }).competences;

          const competencesCheckbox: {[key: string]: boolean} = {};
          state.competences.map(c => c.type ).filter((value, index, self) => self.indexOf(value) == index)
            .forEach(id => competencesCheckbox[id] = true);
          state.competencesCheckbox = competencesCheckbox;
        });
    }
  },
  selectCompetence: (state, competenceId: string) => {
    state.competencesCheckbox[competenceId] = !state.competencesCheckbox[competenceId];
  }
};

const actions: ActionTree<CompetenceState, string> = {
  loadCompetences: ({ commit }) => {
    commit("loadCompetences");
  },
  selectCompetence: ({ commit }, competenceId: string) => {
    commit("selectCompetence", competenceId);
  }
};

const getters: GetterTree<CompetenceState, string> = {
  competences: state => state.competences,
  competencesTypes: state => Object.keys(state.competencesCheckbox),
  competenceIsChecked: state => (competenceId: string) => state.competencesCheckbox[competenceId]
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<CompetenceState, string>;
