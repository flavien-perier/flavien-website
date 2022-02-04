<template>
  <nav class="navbar navbar-dark fixed-top navbar-expand-lg bg-parallax container-fluid">
    <router-link :to="{ name: 'home'}" class="navbar-brand">
      <img
          alt="logo"
          class="d-inline-block align-top"
          height="30"
          src="../../assets/img/logo.svg"
          width="30"
      />
      Flavien
    </router-link>

    <button
        class="navbar-toggler"
        data-bs-target="#navbar"
        data-bs-toggle="collapse"
        type="button"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbar" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home'}" class="nav-link">
            <font-awesome-icon icon="home"/>
            {{ $t("home") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'competence'}" class="nav-link">
            <font-awesome-icon icon="list"/>
            {{ $t("competences") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'experience'}" class="nav-link">
            <font-awesome-icon icon="graduation-cap"/>
            {{ $t("experiences") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'project'}" class="nav-link">
            <font-awesome-icon icon="project-diagram"/>
            {{ $t("projects") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'wiki'}" class="nav-link">
            <font-awesome-icon icon="book"/>
            {{ $t("wiki") }}
          </router-link>
        </li>
      </ul>
    </div>

    <ul class="nav navbar-nav d-none d-lg-block cursor-link me-5" @click="changeLanguage()">
      <li class="nav-item">
        <a class="nav-link">
          <font-awesome-icon icon="flag"/>
          {{ $i18n.locale }}
        </a>
      </li>
    </ul>

    <ul class="nav navbar-nav d-none d-lg-flex">
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/flavien-perier">
          <font-awesome-icon :icon="['fab', 'github-square']"/>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.linkedin.com/in/flavien-perier">
          <font-awesome-icon :icon="['fab', 'linkedin']"/>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.facebook.com/flavien.io">
          <font-awesome-icon :icon="['fab', 'facebook-square']"/>
        </a>
      </li>
      <li>
        <a class="nav-link" href="https://mastodon.social/@flavien_perier">
          <font-awesome-icon :icon="['fab', 'mastodon']"/>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import i18n from "@/i18n";

@Component
export default class Navbar extends Vue {
  private changeLanguage() {
    i18n.locale = i18n.locale === "fr" ? "en" : "fr";
  }
}
</script>
