<template>
  <h1>{{ $t("home") }}</h1>
  <article v-html="content"></article>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "~/store/Home";

const { t, locale } = useI18n();
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

watch(locale, (newLocale) => {
  homeStore.loadMarkdown(newLocale);
});

homeStore.loadMarkdown(locale.value);
</script>
