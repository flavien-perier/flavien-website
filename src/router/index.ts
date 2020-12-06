import Vue from "vue";
import VueRouter from "vue-router";

import store from "@/store";
import i18n from "@/i18n";
import Home from "@/views/Home.vue";

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
    component: () => import("@/views/Competences.vue")
  },
  {
    path: "/experiences",
    name: "experiences",
    meta: {
      title: "experiences"
    },
    component: () => import("@/views/Experiences.vue")
  },
  {
    path: "/projects",
    name: "projects",
    meta: {
      title: "projects"
    },
    component: () => import("@/views/Projects.vue")
  },
  {
    path: "/documentation",
    name: "documentation",
    meta: {
      title: "documentation"
    },
    component: () => import("@/views/Documentation.vue")
  },
  {
    path: "/documentation/:fileName",
    name: "documentationArticles",
    meta: {
      title: "Documentation Articles"
    },
    component: () => import("@/views/DocumentationArticle.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  store.commit("application/changeTitle", i18n.t(to.meta["title"]));
  next();
});

export default router;
