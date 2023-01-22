<template>
  <router-link
    :to="{ name: 'wikiArticle', params: { fileName: header.fileName } }"
    class="col-12 col-md-6"
    style="color: inherit; text-decoration: inherit"
  >
    <div class="box box-hover text-article col-12">
      <h2 class="text-center">{{ header.title }}</h2>
      <hr />
      <div class="content">{{ header.description }}</div>
      <div class="col-12 mb-2">
        <span
          v-for="category in header.categories"
          :key="category"
          :title="category[0].toUpperCase() + category.substr(1)"
          class="ms-1"
        >
          <font-awesome-icon :icon="categoryToFa(category)" />
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import type MarkdownModel from "@/wiki/model/markdown.model";

defineProps({
  header: { type: Object as PropType<MarkdownModel>, required: true },
});

function categoryToFa(category: string) {
  switch (category) {
    case "system":
      return ["fa", "terminal"];
    case "security":
      return ["fa", "lock"];
    case "code":
      return ["fa", "code"];
  }
}
</script>

<style lang="scss" scoped>
.content {
  min-height: 4rem;
}
</style>
