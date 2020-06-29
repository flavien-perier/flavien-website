import Vue from "vue";
import Vuex from "vuex";
import competences from "./competences";
import experiences from "./experiences";
import projects from "./projects";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    competences,
    experiences,
    projects
  }
});
