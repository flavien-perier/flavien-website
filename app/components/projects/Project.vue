<template>
  <section>
    <div class="text-center">
      <h2>{{ project.name }}</h2>
      <hr />
    </div>

    <div>
      <h3 class="text-left">{{ $t("technos") }}</h3>
      <ul>
        <li v-for="t in project.technos" :key="t">{{ t }}</li>
      </ul>
    </div>

    <div>
      <div>
        <h3 class="text-left d-inline-block">{{ $t("description") }}</h3>
        ({{ $t(project.experience) }} {{ $t("in") }} {{ project.start }} -
        {{ project.end }})
      </div>
      {{ description() }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import type { PropType } from "vue";
import type ProjectModel from "~/model/projects/Project";
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
