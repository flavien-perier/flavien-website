import ProjectInterface from "@/model/ProjectInterface";
const { projects } = require("@/data/projects.json") as { projects: ProjectInterface[] };

interface State {
    projects: ProjectInterface[]
}

const state = {
    projects
} as State;

const mutations = {};

const actions = {};

const getters = {
  projects: (state: State) => {
    return state.projects.sort((p1, p2) => parseInt(p2.date) - parseInt(p1.date));
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
