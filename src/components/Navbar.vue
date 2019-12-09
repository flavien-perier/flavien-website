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
            <i class="fas fa-home"></i> Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/competences">
            <i class="fas fa-list"></i> Competences
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/experiences">
            <i class="fas fa-graduation-cap"></i> Experiences
          </router-link>
        </li>
      </ul>
    </div>

    <ul class="nav navbar-nav ml-auto d-none d-lg-flex">
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
      <li class="nav-item">
        <a class="nav-link" href="http://wp.flavien.cc/">
          <i class="fab fa-wordpress"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>
