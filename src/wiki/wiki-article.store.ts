import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import axios from "axios";
import YAML from "yaml";
import {marked} from "marked";

import store from "@/store";
import MarkdownModel from "@/wiki/model/markdown.model";

const BACKEND_URL = process.env["VUE_APP_MARKDOWN_BACKEND"] as string;

interface WikiArticleState {
    articleName: string,
    header: MarkdownModel | null,
    content: string
}

const state: WikiArticleState = {
    articleName: "",
    header: null,
    content: ""
};

const mutations: MutationTree<WikiArticleState> = {
    loadArticle: (state: WikiArticleState, name: string) => {
        if (name !== state.articleName) {
            axios.get(BACKEND_URL + name).then(response => {
                state.articleName = name;

                const pattern = /^---(.*?)---(.*)$/s.exec(response.data)!;
                state.header = YAML.parse(pattern[1]);
                state.content = marked(pattern[2]);

                store.commit("application/changeTitle", state.header!.title);
            });
        } else {
            store.commit("application/changeTitle", state.header!.title);
        }
    }
};

const actions: ActionTree<WikiArticleState, string> = {
    loadArticle: ({commit}, name: number) => {
        commit("loadArticle", name);
    }
};

const getters: GetterTree<WikiArticleState, string> = {
    content: (state: WikiArticleState) => state.content,
    title: (state: WikiArticleState) => state.header ? state.header.title : "",
    author: (state: WikiArticleState) => state.header ? state.header.author : "",
    date: (state: WikiArticleState) => state.header ? new Date(state.header.date).toLocaleDateString() : "",
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
} as Module<WikiArticleState, string>;
