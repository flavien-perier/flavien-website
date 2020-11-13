import Vue from "vue";
import Vuex from "vuex";
import competences from "./competences";
import experiences from "./experiences";
import projects from "./projects";
import documentation from "./documentation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    competences,
    experiences,
    projects,
    documentation
  }
});
