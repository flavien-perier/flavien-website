<template>
  <div class="mb-3 col-lg-4 col-md-6 col-sm-12" @click="check()">
    <div class="input-group">
      <div class="input-group-text">
        <input :id="`competence-${competenceTypeId}`" :checked="selected" type="checkbox" />
      </div>
      <label
        :for="`competence-${competenceTypeId}`"
        :class="`input-group-text competence-title bg-competence-${competenceTypeId}`"
      >
        {{ $t(competenceTypeId) }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  competenceTypeId: { type: String, required: true },
  selected: { type: Boolean, required: true },
});

const emit = defineEmits(["check"]);

function check() {
  emit("check");
}
</script>

<style lang="scss" scoped>
.competence-title {
  min-width: 15rem;
  cursor: pointer;
}
</style>
