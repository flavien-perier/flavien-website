import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { marked } from "marked";
import axios from "axios";

interface HomeState {
  content: string
}

const state: HomeState = {
  content: ""
};

const mutations: MutationTree<HomeState> = {
  loadMarkdown: state => {
    if (!state.content) {
      axios.get(process.env["VUE_APP_MARKDOWN_BACKEND"] + "home.md")
        .then(response => {
          const pattern = /^---.*---(.*)$/s.exec(response.data)!;

          state.content = marked(pattern[1]);
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
  content: state => state.content,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<HomeState, string>;
