import CompetenceInterface from "@/model/CompetenceInterface";

const { competences } = require("@/data/competences.json") as { competences: CompetenceInterface[] }

const state: any = {};

competences.map(c =>  c.type ).filter((value, index, self) => self.indexOf(value) == index).forEach(id => state[id] = true);

const mutations = {
  select: (state: any, competenceId: string) => {
    state[competenceId] = !state[competenceId];
  }
};

const actions = {
  select: ({ commit }: any, competenceId: string) => {
    commit("select", competenceId);
  }
};

const getters = {
  checked: (state: any) => (competenceId: string) => {
    return state[competenceId];
  },
  list: (state: any) => {
    return Object.keys(state);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
