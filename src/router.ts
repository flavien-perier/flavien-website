import Vue from "vue";
import VueRouter from "vue-router";

import store from "@/store";
import i18n from "@/i18n";
import Home from "@/home/home.view.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        meta: {
            title: "home"
        },
        component: Home
    },
    {
        path: "/competence",
        name: "competence",
        meta: {
            title: "competences"
        },
        component: () => import("@/competence/competence.view.vue")
    },
    {
        path: "/experience",
        name: "experience",
        meta: {
            title: "experiences"
        },
        component: () => import("@/experience/experience.view.vue")
    },
    {
        path: "/project",
        name: "project",
        meta: {
            title: "projects"
        },
        component: () => import("@/project/project.view.vue")
    },
    {
        path: "/wiki",
        name: "wiki",
        meta: {
            title: "wiki"
        },
        component: () => import("@/wiki/wiki.view.vue")
    },
    {
        path: "/wiki/:fileName",
        name: "wikiArticle",
        meta: {
            title: "Wiki Articles"
        },
        component: () => import("@/wiki/wiki-article.view.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    store.commit("application/changeTitle", i18n.t(to.meta!["title"]));
    next();
});

export default router;
