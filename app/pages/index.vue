<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("home") }}</h1>
    <div class="box text-article" v-html="content"></div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "~/store/Home";

const homeStore = useHomeStore();
const { content } = storeToRefs(homeStore);

homeStore.loadMarkdown();
</script>
