import Vue from "vue";
import Vuex from "vuex";
import competences from "./competences";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    competences
  }
});
