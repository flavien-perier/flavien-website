import { defineStore } from "pinia";
import type Project from "~/model/projects/Project";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [] as Project[],
  }),
  getters: {
    projectsSorted: (state) =>
      state.projects.sort(
        (p1, p2) => (p2.end || p2.start + 100) - (p1.end || p1.start + 100)
      ),
  },
  actions: {
    loadProjects() {
      if (this.projects.length == 0) {
        $fetch<{ projects: Project[] }>("data/projects.json").then((data) => {
          this.projects = data.projects;
        });
      }
    },
  },
});
