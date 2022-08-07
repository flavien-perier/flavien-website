import Vue from "vue";
import Vuex from "vuex";
import application from "./application/application.store";
import home from "./home/home.store";
import competences from "./competences/competences.store";
import experiences from "./experiences/experiences.store";
import projects from "./projects/projects.store";
import wiki from "./wiki/wiki.store";
import wikiArticle from "./wiki/wiki-article.store";

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
