import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

interface ApplicationState {
  pageTitle: string
}

const state: ApplicationState = {
  pageTitle: ""
};

const mutations: MutationTree<ApplicationState> = {
  changeTitle: (state, title: string) => {
    if (!title) {
      document.title = "Flavien PERIER";
    } else {
      document.title = `Flavien PERIER - ${title}`;
    }
    state.pageTitle = title;
  }
};

const actions: ActionTree<ApplicationState, string> = {
  changeTitle: ({ commit }, title: string) => {
    commit("changeTitle", title);
  }
};

const getters: GetterTree<ApplicationState, string> = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<ApplicationState, string>;
