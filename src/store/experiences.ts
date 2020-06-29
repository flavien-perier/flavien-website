import ExperienceInterface from "@/model/ExperienceInterface";
const { experiences } = require("@/data/experiences.json") as { experiences: ExperienceInterface[] };

interface State {
    experiences: ExperienceInterface[]
}

const state = {
    experiences
} as State;

const mutations = {};

const actions = {};

const getters = {
  experiences: (state: State) => {
    return state.experiences;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
