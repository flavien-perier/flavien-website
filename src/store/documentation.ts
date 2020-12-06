import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import axios from "axios";

import MarkdownHeader from "@/model/MarkdownHeader";
import SearchResult from "@/model/SearchResult";

const BACKEND_URL = process.env["VUE_APP_MARKDOWN_BACKEND"] as string;

interface DocumentationState {
  headers: MarkdownHeader[],
  page: number,
  numberOfPages: number
}

const state: DocumentationState = {
  headers: [],
  page: 1,
  numberOfPages: 1
};

const mutations: MutationTree<DocumentationState> = {
  loadArticles: (state, page: number) => {
    if (state.headers.length == 0 || state.page !== page) {
      state.page = page;
      axios.get(BACKEND_URL, {
        params: {
          p: page,
          n: 10,
          type: "DOCUMENTATION"
        }
      }).then(response => {
        const data = response.data as SearchResult;
  
        state.headers = data.files;
        state.numberOfPages = data.pages;
      });
    }
  }
};

const actions: ActionTree<DocumentationState, string> = {
  loadArticles: ({ commit }, page: number) => {
    commit("loadArticles", page);
  }
};

const getters: GetterTree<DocumentationState, string> = {
  headers: state => state.headers,
  page: state => state.page,
  numberOfPages: state => state.numberOfPages
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<DocumentationState, string>;
