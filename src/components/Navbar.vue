<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-parallax">
    <router-link class="navbar-brand" to="/">
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
          <router-link class="nav-link" to="/">
            <i class="fas fa-home"></i> {{ homeTitle }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/competences">
            <i class="fas fa-list"></i> {{ competencesTitle }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/experiences">
            <i class="fas fa-graduation-cap"></i> {{ experiencesTitle }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projects">
            <i class="fas fa-project-diagram"></i> {{ projectsTitle }}
          </router-link>
        </li>
      </ul>
    </div>

    <ul class="nav navbar-nav d-none d-lg-block cursor-link mr-5"  @click="changeLanguage()">
      <li class="nav-item">
        <a class="nav-link">
          <i class="fas fa-flag"></i> {{ language == 0 ? "fr" : "en" }}
        </a>
      </li>
    </ul>

    <ul class="nav navbar-nav d-none d-lg-flex">
      <li class="nav-item">
        <a class="nav-link" href="https://www.facebook.com/flavien.cc">
          <i class="fab fa-facebook-square"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://twitter.com/flavien_perier">
          <i class="fab fa-twitter-square"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.linkedin.com/in/flavien-perier">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/flavien-perier">
          <i class="fab fa-github-square"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Language } from "@/model/Language";

const titles = require("@/translations/titles.json");

@Component
export default class Navbar extends Vue {
  @Prop() private language!: Language;
  private changeLanguage() {
    this.$emit("changeLanguage");
  }

  private get homeTitle() {
    return this.language == Language.FRENCH ? titles.homeFr : titles.homeEn;
  }

  private get competencesTitle() {
    return this.language == Language.FRENCH ? titles.competencesFr : titles.competencesEn;
  }

  private get experiencesTitle() {
    return this.language == Language.FRENCH ? titles.experiencesFr : titles.experiencesEn;
  }

  private get projectsTitle() {
    return this.language == Language.FRENCH ? titles.projectsFr : titles.projectsEn;
  }
}
</script>
