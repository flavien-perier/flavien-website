<template>
  <div class="information shadow bg-article-information">
    <div class="keys">
      <span>{{ $t("author") }}</span>
      <span>{{ $t("date") }}</span>
    </div>
    <div class="values">
      <span>{{ author }}</span>
      <span>{{ date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  author: { type: String, required: true },
  date: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.information {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
  }

  .keys {
    margin-right: 0.5rem;
    font-weight: bold;
  }

  .values {
    span:before {
      content: ": ";
    }
  }
}
</style>
