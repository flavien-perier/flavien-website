<template>
  <nav class="navbar navbar-dark fixed-top navbar-expand-lg bg-parallax container-fluid">
    <NuxtLink :to="localePath('/')" class="navbar-brand" @click="hide()">
      <img alt="logo" class="d-inline-block align-top" height="30" width="30" src="~/assets/img/logo.svg" />
      Flavien
    </NuxtLink>

    <button class="navbar-toggler" type="button" @click="collapse()" :title="$t('menu')">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse" v-show="showNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NuxtLink :to="localePath('/')" class="nav-link" @click="hide()">
            <font-awesome-icon icon="home" />
            {{ $t("home") }}
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink :to="localePath('/competences')" class="nav-link" @click="hide()">
            <font-awesome-icon icon="list" />
            {{ $t("competences") }}
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink :to="localePath('/experiences')" class="nav-link" @click="hide()">
            <font-awesome-icon icon="graduation-cap" />
            {{ $t("experiences") }}
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink :to="localePath('/projects')" class="nav-link" @click="hide()">
            <font-awesome-icon icon="project-diagram" />
            {{ $t("projects") }}
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink :to="localePath('/wiki')" class="nav-link" @click="hide()">
            <font-awesome-icon icon="book" />
            {{ $t("wiki") }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <ul class="nav navbar-nav d-none d-lg-flex">
      <li class="nav-item me-5">
        <NuxtLink class="nav-link" :to="switchLocalePath(altLocale)" @click="hide()">
          <font-awesome-icon icon="flag" aria-hidden="true" />
          {{ $i18n.locale }}
        </NuxtLink>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/flavien-perier" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
          <font-awesome-icon :icon="['fab', 'github-square']" aria-hidden="true" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.linkedin.com/in/flavien-perier" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
          <font-awesome-icon :icon="['fab', 'linkedin']" aria-hidden="true" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://mastodon.social/@flavien_perier" target="_blank" rel="me noopener" aria-label="Mastodon" title="Mastodon">
          <font-awesome-icon :icon="['fab', 'mastodon']" aria-hidden="true" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://bsky.app/profile/flavien.io" target="_blank" rel="noopener" aria-label="Bluesky" title="Bluesky">
          <font-awesome-icon :icon="['fab', 'bluesky']" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const showNavbar = ref(false);

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const altLocale = computed(() => (i18n.locale.value === "fr" ? "en" : "fr"));

function collapse() {
  showNavbar.value = !showNavbar.value;
}
function hide() {
  showNavbar.value = false;
}
</script>
