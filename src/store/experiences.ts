import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

import ExperienceInterface from "@/model/ExperienceInterface";
const { experiences } = require("@/data/experiences.json") as { experiences: ExperienceInterface[] };

interface ExperienceState {
    experiences: ExperienceInterface[]
}

const state: ExperienceState = {
    experiences
};

const mutations: MutationTree<ExperienceState> = {};

const actions: ActionTree<ExperienceState, string> = {};

const getters: GetterTree<ExperienceState, string> = {
  experiences: (state) => state.experiences
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<ExperienceState, string>;
