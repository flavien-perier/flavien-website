<template>
  <nav
    class="navbar navbar-dark fixed-top navbar-expand-lg bg-parallax container-fluid"
  >
    <button class="navbar-toggler" type="button" @click="collapse()">
      <span class="navbar-toggler-icon"></span>
    </button>

    <router-link :to="{ name: 'home' }" class="navbar-brand">
      <img
        alt="logo"
        class="d-inline-block align-top"
        height="30"
        src="../../assets/img/logo.svg"
        width="30"
      />
      Flavien
    </router-link>

    <div class="navbar-collapse" v-show="showNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link" @click="hide()">
            <font-awesome-icon icon="home" />
            {{ $t("home") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'competences' }" class="nav-link" @click="hide()">
            <font-awesome-icon icon="list" />
            {{ $t("competences") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'experiences' }" class="nav-link" @click="hide()">
            <font-awesome-icon icon="graduation-cap" />
            {{ $t("experiences") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'projects' }" class="nav-link" @click="hide()">
            <font-awesome-icon icon="project-diagram" />
            {{ $t("projects") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'wiki' }" class="nav-link" @click="hide()">
            <font-awesome-icon icon="book" />
            {{ $t("wiki") }}
          </router-link>
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
        <a class="nav-link" href="https://github.com/flavien-perier">
          <font-awesome-icon :icon="['fab', 'github-square']" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.linkedin.com/in/flavien-perier">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li>
        <a class="nav-link" href="https://mastodon.social/@flavien_perier">
          <font-awesome-icon :icon="['fab', 'mastodon']" />
        </a>
      </li>
            <li>
        <a class="nav-link" href="https://bsky.app/profile/flavien.io">
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
  i18n.locale.value = i18n.locale.value === "fr" ? "en" : "fr";
}
</script>
