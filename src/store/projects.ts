import ProjectInterface from "@/model/ProjectInterface";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

const { projects } = require("@/data/projects.json") as { projects: ProjectInterface[] };

interface ProjectState {
    projects: ProjectInterface[]
}

const state: ProjectState = {
    projects
};

const mutations: MutationTree<ProjectState> = {};

const actions: ActionTree<ProjectState, string> = {};

const getters: GetterTree<ProjectState, string> = {
  projects: (state) => state.projects.sort((p1, p2) => parseInt(p2.date) - parseInt(p1.date))
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<ProjectState, string>;
