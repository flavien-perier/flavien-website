import { defineStore } from "pinia";
import axios from "axios";
import type ProjectModel from "@/projects/model/project.model";

export const useProjectsStore = defineStore({
  id: "projects",
  state: () => ({
    projects: [] as ProjectModel[],
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
        axios.get("data/projects.json").then((response) => {
          this.projects = (
            response.data as { projects: ProjectModel[] }
          ).projects;
        });
      }
    },
  },
});
