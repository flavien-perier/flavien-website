<template>
  <header class="d-none d-lg-flex bg-parallax">
    <p class="h1 display-4">Flavien PERIER</p>
    <p class="lead">{{ $t("fullStackDeveloper") }}</p>
  </header>
</template>

<style lang="scss" scoped>
header {
  flex-direction: column;
  justify-content: center;

  height: 28.125vw;
  max-height: 50vh;
  padding-left: 10rem;

  text-shadow: 0 0 0.2rem #000;

  h1 {
    color: #fff;
  }

  p {
    color: #eee;
    margin-left: 1.5rem;
  }
}
</style>
