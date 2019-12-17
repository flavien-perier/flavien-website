import Vue from "vue";
import Vuex from "vuex";
import competences from "./competences";
import language from "./language";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    competences,
    language
  }
});
