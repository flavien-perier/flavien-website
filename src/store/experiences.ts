import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import axios from "axios";

import ExperienceInterface from "@/model/ExperienceInterface";

interface ExperienceState {
    experiences: ExperienceInterface[]
}

const state: ExperienceState = {
    experiences: []
};

const mutations: MutationTree<ExperienceState> = {
    loadExperiences: (state: ExperienceState) => {
        if (state.experiences.length == 0) {
            axios.get("data/experiences.json")
                .then(response => {
                    state.experiences = (response.data as { experiences: ExperienceInterface[] }).experiences;
                });
        }
    }
};

const actions: ActionTree<ExperienceState, string> = {
    loadExperiences: ({commit}) => {
        commit("loadExperiences");
    }
};

const getters: GetterTree<ExperienceState, string> = {
    experiences: (state: ExperienceState) => state.experiences.sort((p1, p2) => (p2.end || p2.start + 100) - (p1.end || p1.start + 100))
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
} as Module<ExperienceState, string>;
