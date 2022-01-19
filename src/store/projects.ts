import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import axios from "axios";

import ProjectInterface from "@/model/ProjectInterface";

interface ProjectState {
    projects: ProjectInterface[]
}

const state: ProjectState = {
    projects: []
};

const mutations: MutationTree<ProjectState> = {
    loadProjects: (state: ProjectState) => {
        if (state.projects.length == 0) {
            axios.get("data/projects.json")
                .then(response => {
                    state.projects = (response.data as { projects: ProjectInterface[] }).projects;
                });
        }
    }
};

const actions: ActionTree<ProjectState, string> = {
    loadProjects: ({commit}) => {
        commit("loadProjects");
    }
};

const getters: GetterTree<ProjectState, string> = {
    projects: (state: ProjectState) => state.projects.sort((p1, p2) => (p2.end || p2.start + 100) - (p1.end || p1.start + 100))
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
} as Module<ProjectState, string>;
