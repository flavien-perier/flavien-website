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
        path: "/competences",
        name: "competences",
        meta: {
            title: "competences"
        },
        component: () => import("@/competences/competences.view.vue")
    },
    {
        path: "/experiences",
        name: "experiences",
        meta: {
            title: "experiences"
        },
        component: () => import("@/experiences/experiences.view.vue")
    },
    {
        path: "/projects",
        name: "projects",
        meta: {
            title: "projects"
        },
        component: () => import("@/projects/projects.view.vue")
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
