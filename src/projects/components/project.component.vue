<template>
  <div class="col-12 box">
    <div class="text-center col-12">
      <h2>{{ project.name }}</h2>
      <hr />
    </div>

    <div class="col-12">
      <h3 class="text-left">{{ $t("technos") }}</h3>
      <ul>
        <li v-for="t in project.technos" :key="t">{{ t }}</li>
      </ul>
    </div>

    <div class="col-12">
      <div>
        <h3 class="text-left d-inline-block">{{ $t("description") }}</h3>
        ({{ $t(project.experience) }} {{ $t("in") }} {{ project.start }} -
        {{ project.end || "*" }})
      </div>
      {{ description() }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, toRefs } from "vue";
import type ProjectModel from "@/projects/model/project.model";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const props = defineProps({
  project: { type: Object as PropType<ProjectModel>, required: true },
});
const { project } = toRefs(props);

function description(): string {
  const projectValue = project?.value as ProjectModel;
  return i18n.locale.value === "fr"
    ? projectValue.descriptionFr
    : projectValue.descriptionEn;
}
</script>
