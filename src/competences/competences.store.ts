import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import axios from "axios";

import CompetenceModel from "@/competences/model/competence.model";

interface CompetenceState {
    competences: CompetenceModel[],
    competencesCheckbox: { [key: string]: boolean }
}

const state: CompetenceState = {
    competences: [],
    competencesCheckbox: {}
};

const mutations: MutationTree<CompetenceState> = {
    loadCompetences: (state: CompetenceState) => {
        if (state.competences.length == 0) {
            axios.get("data/competences.json")
                .then(response => {
                    state.competences = (response.data as { competences: CompetenceModel[] }).competences;

                    const competencesCheckbox: { [key: string]: boolean } = {};
                    state.competences.map(c => c.type).filter((value, index, self) => self.indexOf(value) == index)
                        .forEach(id => competencesCheckbox[id] = true);
                    state.competencesCheckbox = competencesCheckbox;
                });
        }
    },
    selectCompetence: (state: CompetenceState, competenceId: string) => {
        state.competencesCheckbox[competenceId] = !state.competencesCheckbox[competenceId];
    },
    selectAllCompetences: (state: CompetenceState) => {
        console.log("test")
        const competencesIds = Object.keys(state.competencesCheckbox);

        const allChecked = competencesIds.every(competenceId => state.competencesCheckbox[competenceId]);

        competencesIds.forEach(competenceId => {
            state.competencesCheckbox[competenceId] = !allChecked;
        });
    },
};

const actions: ActionTree<CompetenceState, string> = {
    loadCompetences: ({commit}) => {
        commit("loadCompetences");
    },
    selectCompetence: ({commit}, competenceId: string) => {
        commit("selectCompetence", competenceId);
    },
    selectAllCompetences: ({commit}) => {
        commit("selectAllCompetences");
    }
};

const getters: GetterTree<CompetenceState, string> = {
    competences: (state: CompetenceState) => state.competences,
    competencesTypes: (state: CompetenceState) => Object.keys(state.competencesCheckbox),
    competenceIsChecked: (state: CompetenceState) => (competenceId: string) => state.competencesCheckbox[competenceId],
    allCompetencesIsChecked: (state: CompetenceState) => Object.keys(state.competencesCheckbox).every(competenceId => state.competencesCheckbox[competenceId])
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
} as Module<CompetenceState, string>;
