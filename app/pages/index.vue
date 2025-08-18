<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("home") }}</h1>
    <div class="box text-article" v-html="content"></div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "~/store/Home";

const { t } = useI18n();
const title = `Flavien PERIER - ${t("home")}`;
const description = t("home.description");

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});

const homeStore = useHomeStore();
const { content } = storeToRefs(homeStore);

homeStore.loadMarkdown();
</script>
