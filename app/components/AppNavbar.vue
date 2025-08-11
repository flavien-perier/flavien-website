<template>
  <nav class="navbar navbar-dark fixed-top navbar-expand-lg bg-parallax container-fluid">
    <button class="navbar-toggler" type="button" @click="collapse()">
      <span class="navbar-toggler-icon"></span>
    </button>

    <NuxtLink to="/" class="navbar-brand" @click="hide()">
      <img alt="logo" class="d-inline-block align-top" height="30" width="30" src="~/assets/img/logo.svg" />
      Flavien
    </NuxtLink>

    <div class="navbar-collapse" v-show="showNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link" @click="hide()">
            <font-awesome-icon icon="home" />
            {{ $t("home") }}
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/competences" class="nav-link" @click="hide()">
            <font-awesome-icon icon="list" />
            {{ $t("competences") }}
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/experiences" class="nav-link" @click="hide()">
            <font-awesome-icon icon="graduation-cap" />
            {{ $t("experiences") }}
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/projects" class="nav-link" @click="hide()">
            <font-awesome-icon icon="project-diagram" />
            {{ $t("projects") }}
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/wiki" class="nav-link" @click="hide()">
            <font-awesome-icon icon="book" />
            {{ $t("wiki") }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <ul class="nav navbar-nav d-none d-lg-flex">
      <li class="nav-item cursor-pointer me-5" @click="changeLanguage()">
        <a class="nav-link">
          <font-awesome-icon icon="flag" />
          {{ $i18n.locale }}
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/flavien-perier" target="_blank" rel="noopener">
          <font-awesome-icon :icon="['fab', 'github-square']" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.linkedin.com/in/flavien-perier" target="_blank" rel="noopener">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://mastodon.social/@flavien_perier" target="_blank" rel="me noopener">
          <font-awesome-icon :icon="['fab', 'mastodon']" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://bsky.app/profile/flavien.io" target="_blank" rel="noopener">
          <font-awesome-icon :icon="['fab', 'bluesky']" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const showNavbar = ref(false);

function collapse() {
  showNavbar.value = !showNavbar.value;
}
function hide() {
  showNavbar.value = false;
}
function changeLanguage() {
  i18n.setLocale(i18n.locale.value === "fr" ? "en" : "fr");
}
</script>
