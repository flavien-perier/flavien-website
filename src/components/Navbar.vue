<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-parallax">
    <router-link class="navbar-brand" :to="{ name: 'home'}">
      <img
        class="d-inline-block align-top"
        src="../assets/img/logo.svg"
        alt="logo"
        width="30"
        height="30"
      />
      Flavien
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'home'}">
            <font-awesome-icon icon="home" /> {{ $t("home") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'competences'}">
            <font-awesome-icon icon="list" /> {{ $t("competences") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'experiences'}">
            <font-awesome-icon icon="graduation-cap" /> {{ $t("experiences") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'projects'}">
            <font-awesome-icon icon="project-diagram" /> {{ $t("projects") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'documentation'}">
            <font-awesome-icon icon="book" /> {{ $t("documentation") }}
          </router-link>
        </li>
      </ul>
    </div>

    <ul class="nav navbar-nav d-none d-lg-block cursor-link mr-5"  @click="changeLanguage()">
      <li class="nav-item">
        <a class="nav-link">
          <font-awesome-icon icon="flag" /> {{ $i18n.locale }}
        </a>
      </li>
    </ul>

    <ul class="nav navbar-nav d-none d-lg-flex">
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
      <li class="nav-item">
        <a class="nav-link" href="https://www.facebook.com/flavien.io">
          <font-awesome-icon :icon="['fab', 'facebook-square']" />
        </a>
      </li>
      <li>
        <a class="nav-link" href="https://mastodon.social/@flavien_perier">
          <font-awesome-icon :icon="['fab', 'mastodon']" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import i18n from "@/i18n";

@Component
export default class Navbar extends Vue {
  private changeLanguage() {
    i18n.locale = i18n.locale === "fr" ? "en" : "fr";
  }
}
</script>
