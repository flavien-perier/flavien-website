<template>
  <a
    :href="experience.url"
    class="col-12 col-lg-6"
    style="color: inherit; text-decoration: inherit"
  >
    <div class="row mx-auto box box-animation bg-box">
      <div class="text-center col-12">
        <h2>{{ experience.location }}</h2>
        <hr />
      </div>

      <div class="col-12 col-lg-6">
        <h3 class="text-left text-lg-center">{{ $t("description") }}</h3>
        {{ description() }}
      </div>

      <div class="col-12 col-lg-6">
        <h3 class="text-left text-lg-center">{{ $t("informations") }}</h3>
        <p>
          <strong>{{ $t("city") }} :</strong>
          {{ experience?.city }}
          <br />
          <strong>{{ $t("period") }} :</strong>
          {{ experience.start }} - {{ experience.end || "*" }}
          <br />
        </p>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { defineProps, PropType, toRefs } from "vue";
import ExperienceModel from "@/experiences/model/experience.model";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const props = defineProps({
  experience: { type: Object as PropType<ExperienceModel>, required: true },
});
const { experience } = toRefs(props);

function description(): string {
  const experienceValue = experience?.value as ExperienceModel;
  return i18n.locale.value === "fr"
    ? experienceValue.descriptionFr
    : experienceValue.descriptionEn;
}
</script>

<style lang="scss" scoped>
.box {
  height: 17rem;
  overflow: hidden;
}
</style>
