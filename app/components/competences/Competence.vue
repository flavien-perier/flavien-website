<template>
  <a
    :href="competence.url"
    class="col-12 col-md-6"
    style="color: inherit; text-decoration: inherit"
  >
    <div :class="`row mx-auto box box-hover bg-competence-${competence.type}`">
      <div class="text-center col-12">
        <h2>
          <font-awesome-icon :icon="competence.faIcon.split(' ')" />
          {{ competence.label }}
        </h2>
        <hr />
      </div>

      <div class="col-md-12 col-lg-6">
        <h3 class="text-center">{{ $t("description") }}</h3>
        <p class="description">{{ description() }}</p>
      </div>

      <div class="d-none d-lg-block col-6">
        <h3 class="text-left text-lg-center">{{ $t("enterprises") }}</h3>
        <ul class="description">
          <li v-for="e in competence.experiences" :key="e">{{ $t(e) }}</li>
        </ul>
      </div>

      <div class="col-12 mb-2">
        <h3 class="text-left text-lg-center">{{ $t("level") }}</h3>
        <div class="progress">
          <div :class="`progress-bar progress-bar-animation-${competence.lvl}`">
            {{ competence.lvl }}%
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type Competence from "~/model/competences/Competence";
import { defineProps, toRefs } from "vue";
import type { PropType } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const props = defineProps({
  competence: { type: Object as PropType<Competence>, required: true },
});
const { competence } = toRefs(props);

function description(): string {
  const competenceValue = competence?.value as Competence;
  return i18n.locale.value === "fr"
    ? competenceValue.descriptionFr
    : competenceValue.descriptionEn;
}
</script>

<style lang="scss" scoped>
.description {
  height: 7em;
  overflow: auto;
}
</style>
