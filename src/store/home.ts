import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import axios from "axios";

interface HomeState {
  markdownContent: string
}

const state: HomeState = {
  markdownContent: ""
};

const mutations: MutationTree<HomeState> = {
  loadMarkdown: state => {
    if (!state.markdownContent) {
      axios.get(process.env["VUE_APP_MARKDOWN_BACKEND"] + "home.md")
        .then(markdownContent => {
          state.markdownContent = markdownContent.data;
        });
    }
  }
};

const actions: ActionTree<HomeState, string> = {
  loadMarkdown: ({ commit }) => {
    commit("loadMarkdown");
  }
};

const getters: GetterTree<HomeState, string> = {
  markdownContent: state => state.markdownContent,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<HomeState, string>;
