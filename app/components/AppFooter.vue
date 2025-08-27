<template>
  <footer class="bg-dark p-2 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-3 d-none d-lg-block my-auto">
          <p class="h2 text-center text-light">{{ $t("scanMe") }}</p>
          <img id="qr-code" alt="qr-code" src="~/assets/img/qr-code.png" />
        </div>
        <div class="list-group mx-auto col-12 pe-0 col-lg-6 pe-lg-2">
          <strong class="list-group-item list-group-item-dark">{{
            $t("contactMe")
          }}</strong>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="mailto:contact@flavien.io"
          >
            <font-awesome-icon icon="envelope" />
            contact@flavien.io
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://www.openstreetmap.org/#map=13/45.7584/4.8213"
          >
            <font-awesome-icon icon="map-marker-alt" />
            Lyon (France)
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://www.linkedin.com/in/flavien-perier"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
            Flavien PERIER
          </a>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="https://mastodon.social/@flavien_perier"
          >
            <font-awesome-icon :icon="['fab', 'mastodon']" />
            @flavien_perier@mastodon.social
          </a>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="https://bsky.app/profile/flavien.io"
          >
            <font-awesome-icon :icon="['fab', 'bluesky']" />
            @flavien.io
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://www.discord.com"
          >
            <font-awesome-icon :icon="['fab', 'discord']" />
            fl4v13n
          </a>
        </div>
        <div class="list-group mx-auto col-12 pe-0 mt-2 col-lg-3 mt-lg-0">
          <strong class="list-group-item list-group-item-dark">{{
            $t("followMe")
          }}</strong>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://github.com/flavien-perier"
          >
            <font-awesome-icon :icon="['fab', 'github-square']" />
            flavien-perier
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://hub.docker.com/u/flavienperier"
          >
            <font-awesome-icon :icon="['fab', 'docker']" />
            flavienperier
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://www.npmjs.com/~flavien-perier"
          >
            <font-awesome-icon :icon="['fab', 'npm']" />
            flavien-perier
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
#qr-code {
  display: block;
  width: 75%;
  border: 10px solid #fff;
  margin-left: auto;
  margin-right: auto;
  image-rendering: pixelated;
}
</style>