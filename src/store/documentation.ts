import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

import MarkdownHeader from "@/model/MarkdownHeader";
import SearchResult from "@/model/SearchResult";
import axios from "axios";

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
  changePage: (state, page: number) => {
    state.page = page;
  },
  loadPage: (state, page: number) => {
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
};

const actions: ActionTree<DocumentationState, string> = {
  loadPage: ({ commit }, page: number) => {
    commit("changePage", page);
    commit("loadPage", page);
  }
};

const getters: GetterTree<DocumentationState, string> = {
  headers: (state) => state.headers,
  page: (state) => state.page,
  numberOfPages: (state) => state.numberOfPages
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<DocumentationState, string>;
