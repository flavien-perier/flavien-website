<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("home") }}</h1>

    <article class="box bg-box text-article" v-html="$t('text')"></article>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>

<i18n>
{
  "en": {
    "text": "My engineering training in alternation between the 3IL school in Limoges and the Orange company in Toulouse ends in September. I am therefore available for a job from October 2020.<br/>During this apprenticeship, I mainly worked on backend projects in Java/Kotlin with the Spring framework. I also realized some interfaces using the frameworks Vue.js and Angular in JavaScript. For my graduation thesis, I studied the problems of cloud application deployment with Docker and Kubernetes.<br/>During these last years, I had the opportunity to work on very diverse issues both in terms of development and infrastructure. On a more personal level, I'm particularly interested in everything related to ecology."
  },
  "fr": {
    "text": "Ma formation d'ingénieur en alternance entre l'école 3IL à Limoges et l'entreprise Orange à Toulouse se termine en septembre. Je suis donc disponible pour un poste dès octobre 2020.<br/>Pendant cet apprentissage, j'ai essentiellement travaillé sur des projets backend en Java/Kotlin avec le framework Spring. J'ai également réalisé quelques interfaces à l'aide des frameworks Vue.js et Angular en JavaScript. Pour mon mémoire de fin d'études, j'ai étudié les problématiques de déploiement d'application cloud avec Docker et Kubernetes.<br/>Durant ces dernières années, j'ai donc eu l'occasion de travailler sur des problématiques très diverses aussi bien en termes de développement que d'infrastructure. Sur un plan plus personnel, je suis particulièrement intéressé par l'approche écologique."
  }
}
</i18n>
