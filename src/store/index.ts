import Vue from "vue";
import Vuex from "vuex";
import application from "./application";
import home from "./home";
import competences from "./competences";
import experiences from "./experiences";
import projects from "./projects";
import wiki from "./wiki";
import wikiArticle from "./wikiArticle";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        application,
        home,
        competences,
        experiences,
        projects,
        wiki,
        wikiArticle
    }
});
