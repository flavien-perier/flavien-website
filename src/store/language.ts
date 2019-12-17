import { Language } from '@/model/Language';

const state = {
  language: Language.FRENCH
};

const mutations = {
  changeLanguage: (state: any, language: Language) => {
    if (state.language == Language.FRENCH) {
      state.language = Language.ENGLISH;
    } else {
      state.language = Language.FRENCH;
    }
  }
};

const actions = {
  changeLanguage: ({ commit }: any) => {
    commit("changeLanguage");
  }
};

const getters = {
  language: (state: any) => {
    return state.language;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

