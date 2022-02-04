import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import axios from "axios";

import MarkdownModel from "@/wiki/model/markdown.model";
import SearchModel from "@/wiki/model/search.model";

const BACKEND_URL = process.env["VUE_APP_MARKDOWN_BACKEND"] as string;

interface WikiState {
    headers: MarkdownModel[],
    page: number,
    numberOfPages: number
}

const state: WikiState = {
    headers: [],
    page: 1,
    numberOfPages: 1
};

const mutations: MutationTree<WikiState> = {
    loadArticles: (state: WikiState, page: number) => {
        if (state.headers.length == 0 || state.page !== page) {
            state.page = page;
            axios.get(BACKEND_URL, {
                params: {
                    p: page,
                    n: 10,
                    type: "WIKI"
                }
            }).then(response => {
                const data = response.data as SearchModel;

                state.headers = data.files;
                state.numberOfPages = data.pages;
            });
        }
    }
};

const actions: ActionTree<WikiState, string> = {
    loadArticles: ({commit}, page: number) => {
        commit("loadArticles", page);
    }
};

const getters: GetterTree<WikiState, string> = {
    headers: (state: WikiState) => state.headers,
    page: (state: WikiState) => state.page,
    numberOfPages: (state: WikiState) => state.numberOfPages
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
} as Module<WikiState, string>;
