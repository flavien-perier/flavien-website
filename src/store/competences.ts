import CompetenceInterface from "@/model/CompetenceInterface";
const { competences } = require("@/data/competences.json") as { competences: CompetenceInterface[] }

interface State {
  competences: CompetenceInterface[],
  competencesCheckbox: any
}

const state: State = {
  competences,
  competencesCheckbox: {}
};

competences.map(c =>  c.type ).filter((value, index, self) => self.indexOf(value) == index)
  .forEach(id => state.competencesCheckbox[id] = true);

const mutations = {
  select: (state: State, competenceId: string) => {
    state.competencesCheckbox[competenceId] = !state.competencesCheckbox[competenceId];
  }
};

const actions = {
  select: ({ commit }: any, competenceId: string) => {
    commit("select", competenceId);
  }
};

const getters = {
  checked: (state: State) => (competenceId: string) => {
    return state.competencesCheckbox[competenceId];
  },
  list: (state: State) => {
    return Object.keys(state.competencesCheckbox);
  },
  competences: (state: State) => {
    return state.competences;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
