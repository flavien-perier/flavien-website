import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import axios from "axios";
import YAML from "yaml";

import store from "@/store";
import MarkdownHeader from "@/model/MarkdownHeader";

const BACKEND_URL = process.env["VUE_APP_MARKDOWN_BACKEND"] as string;

interface DocumentationArticleState {
  articleName: string,
  header: MarkdownHeader | null,
  content: string
}

const state: DocumentationArticleState = {
  articleName: "",
  header: null,
  content: ""
};

const mutations: MutationTree<DocumentationArticleState> = {
  loadArticle: (state, name: string) => {
    if (name !== state.articleName) {
      axios.get(BACKEND_URL + name).then(response => {
        state.articleName = name;
        state.content = response.data;
        
        const headerString = /^---(.*)---.*$/s.exec(response.data)![1];
        state.header = YAML.parse(headerString);
        store.commit("application/changeTitle", state.header!.title);
      });
    }
  }
};

const actions: ActionTree<DocumentationArticleState, string> = {
  loadArticle: ({ commit }, name: number) => {
    commit("loadArticle", name);
  }
};

const getters: GetterTree<DocumentationArticleState, string> = {
  content: state => state.content,
  title: state => state.header ? state.header.title : "",
  author: state => state.header ? state.header.author : "",
  date: state => state.header ? new Date(state.header.date).toLocaleDateString() : "",
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} as Module<DocumentationArticleState, string>;
