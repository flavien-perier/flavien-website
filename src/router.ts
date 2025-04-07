import { createRouter, createWebHistory } from "vue-router";
import { useApplicationStore } from "@/application/application.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "home",
      },
      component: () => import("@/home/home.view.vue"),
    },
    {
      path: "/competences",
      name: "competences",
      meta: {
        title: "competences",
      },
      component: () => import("@/competences/competences.view.vue"),
    },
    {
      path: "/experiences",
      name: "experiences",
      meta: {
        title: "experiences",
      },
      component: () => import("@/experiences/experiences.view.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      meta: {
        title: "projects",
      },
      component: () => import("@/projects/projects.view.vue"),
    },
    {
      path: "/wiki",
      name: "wiki",
      meta: {
        title: "wiki",
      },
      component: () => import("@/wiki/wiki.view.vue"),
    },
    {
      path: "/wiki/:filename",
      name: "wikiArticle",
      meta: {
        title: "Wiki Articles",
      },
      component: () => import("@/wiki/wiki-article.view.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const applicationStore = useApplicationStore();

  applicationStore.changeTitle(to.meta!["title"] as string);
  next();
});

export default router;
