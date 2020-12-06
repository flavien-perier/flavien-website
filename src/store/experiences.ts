import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import axios from "axios";

import ExperienceInterface from "@/model/ExperienceInterface";

interface ExperienceState {
    experiences: ExperienceInterface[]
}

const state: ExperienceState = {
    experiences: []
};

const mutations: MutationTree<ExperienceState> = {
  loadExperiences: state => {
    if (state.experiences.length == 0) {
      axios.get("data/experiences.json")
        .then(markdownContent => {
          state.experiences = (markdownContent.data as { experiences: ExperienceInterface[] }).experiences;
        });
    }
  }
};

const actions: ActionTree<ExperienceState, string> = {
  loadExperiences: ({ commit }) => {
    commit("loadExperiences");
  }
};

const getters: GetterTree<ExperienceState, string> = {
  experiences: state => state.experiences
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<ExperienceState, string>;
