import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

import CompetenceInterface from "@/model/CompetenceInterface";
const { competences } = require("@/data/competences.json") as { competences: CompetenceInterface[] }

interface CompetenceState {
  competences: CompetenceInterface[],
  competencesCheckbox: any
}

const state: CompetenceState = {
  competences,
  competencesCheckbox: {}
};

competences.map(c => c.type ).filter((value, index, self) => self.indexOf(value) == index)
  .forEach(id => state.competencesCheckbox[id] = true);

const mutations: MutationTree<CompetenceState> = {
  select: (state, competenceId: string) => {
    state.competencesCheckbox[competenceId] = !state.competencesCheckbox[competenceId];
  }
};

const actions: ActionTree<CompetenceState, string> = {
  select: ({ commit }, competenceId: string) => {
    commit("select", competenceId);
  }
};

const getters: GetterTree<CompetenceState, string> = {
  checked: (state) => (competenceId: string) => {
    return state.competencesCheckbox[competenceId];
  },
  list: (state) => {
    return Object.keys(state.competencesCheckbox);
  },
  competences: (state) => {
    return state.competences;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<CompetenceState, string>;
