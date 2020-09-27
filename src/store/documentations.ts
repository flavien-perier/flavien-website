import MarkdownHeader from "@/model/MarkdownHeader";
import SearchResult from "@/model/SearchResult";
import axios from "axios";

const BACKEND_URL = process.env["VUE_APP_MARKDOWN_BACKEND"] as string;

interface State {
  headers: MarkdownHeader[],
  page: number,
  numberOfPages: number
}

const state: State = {
  headers: [],
  page: 1,
  numberOfPages: 1
};

const mutations = {
  changePage: (state: State, page: number) => {
    state.page = page;
  },
  loadPage: (state: State, page: number) => {
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

const actions = {
  loadPage: ({ commit }: any, page: number) => {
    commit("changePage", page);
    commit("loadPage", page);
  }
};

const getters = {
  headers: (state: State) => state.headers,
  page: (state: State) => state.page,
  numberOfPages: (state: State) => state.numberOfPages
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
