import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

interface ApplicationState {
  pageTitle: string
}

const state: ApplicationState = {
  pageTitle: ""
};

const mutations: MutationTree<ApplicationState> = {};

const actions: ActionTree<ApplicationState, string> = {};

const getters: GetterTree<ApplicationState, string> = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<ApplicationState, string>;
