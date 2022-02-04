import Vue from "vue";
import Vuex from "vuex";
import application from "./application/application.store";
import home from "./home/home.store";
import competence from "./competence/competence.store";
import experience from "./experience/experience.store";
import project from "./project/project.store";
import wiki from "./wiki/wiki.store";
import wikiArticle from "./wiki/wiki-article.store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        application,
        home,
        competence,
        experience,
        project,
        wiki,
        wikiArticle
    }
});
