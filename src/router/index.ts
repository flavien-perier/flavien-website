import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Flavien PERIER - Home"
    },
    component: Home
  },
  {
    path: "/competences",
    name: "competences",
    meta: {
      title: "Flavien PERIER - Competences"
    },
    component: () => import("../views/Competences.vue")
  },
  {
    path: "/experiences",
    name: "experiences",
    meta: {
      title: "Flavien PERIER - Experiences"
    },
    component: () => import("../views/Experiences.vue")
  },
  {
    path: "/projects",
    name: "projects",
    meta: {
      title: "Flavien PERIER - Projects"
    },
    component: () => import("../views/Projects.vue")
  },
  {
    path: "/documentations",
    name: "documentations",
    meta: {
      title: "Flavien PERIER - Documentations"
    },
    component: () => import("../views/Documentations.vue")
  },
  {
    path: "/documentations/:fileName",
    name: "documentationArticles",
    meta: {
      title: "Flavien PERIER - Documentation Articles"
    },
    component: () => import("../views/DocumentationArticles.vue")
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta["title"] || "Flavien PERIER";

  next();
});

export default router;

