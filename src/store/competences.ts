import CompetenceTypeInterface from '@/model/CompetenceTypeInterface';

const { competenceTypes } = require("../model/competenceTypes.json") as { competenceTypes: CompetenceTypeInterface[] };

const state: any = {};

competenceTypes.forEach(c => state[c.id] = true);

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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

