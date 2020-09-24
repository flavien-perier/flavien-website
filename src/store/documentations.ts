import MarkdownHeader from "@/model/MarkdownHeader";
import axios from "axios";

const BACKEND_URL = process.env["VUE_APP_MARKDOWN_BACKEND"] as string;

interface State {
  headers: MarkdownHeader[],
  page: number
}

const state: State = {
  headers: [],
  page: 1
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
      state.headers = response.data;
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
  page: (state: State) => state.page
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
