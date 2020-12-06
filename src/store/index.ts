import Vue from "vue";
import Vuex from "vuex";
import application from "./application";
import home from "./home";
import competences from "./competences";
import experiences from "./experiences";
import projects from "./projects";
import documentation from "./documentation";
import documentationArticle from "./documentationArticle";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    application,
    home,
    competences,
    experiences,
    projects,
    documentation,
    documentationArticle
  }
});
