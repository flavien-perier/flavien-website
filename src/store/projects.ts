import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import axios from "axios";

import ProjectInterface from "@/model/ProjectInterface";

interface ProjectState {
    projects: ProjectInterface[]
}

const state: ProjectState = {
    projects: []
};

const mutations: MutationTree<ProjectState> = {
  loadProjects: state => {
    if (state.projects.length == 0) {
      axios.get("data/projects.json")
        .then(markdownContent => {
          state.projects = (markdownContent.data as { projects: ProjectInterface[] }).projects;
        });
    }
  }
};

const actions: ActionTree<ProjectState, string> = {
  loadProjects: ({ commit }) => {
    commit("loadProjects");
  }
};

const getters: GetterTree<ProjectState, string> = {
  projects: state => state.projects.sort((p1, p2) => parseInt(p2.date) - parseInt(p1.date))
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<ProjectState, string>;
