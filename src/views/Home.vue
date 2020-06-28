<template>
  <section class="container">
    <h2 class="col-12 section-title">{{ $t("title") }}</h2>

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
    "title": "Home",
    "text": "Currently on an apprenticeship contract between the 3IL school in Limoges and the Orange company in Toulouse, I am working on various development projects. <br/>During the last few years, I have mainly worked on backend projects in Java or NodeJs with frameworks such as Spring or ExpressJs. However, in the same period of time I also worked on Frontend with Angular, jQuery, VueJs frameworks or directly in native JavaScript. On these same projects, I also had to be interested in continuous deployment issues with GitlabCI and a CloudFoundry platform available within Orange.<br/>I am also interested in how data is managed, whether within traditional relational DBMS such as MySQL or Postgresql, or with NoSQL DBMS such as MongoDB, Reddis and especially Neo4J. I also took a number of DataScience courses during my last year as an engineer, giving me some basics in this field.<br/>This website is currently hosted in a Docker container on a RaspberryPi. I am therefore naturally interested in the issues related to the hosting and security of this environment."
  },
  "fr": {
    "title": "Accueil",
    "text": "Actuellement en contrat d'apprentissage entre l'école 3IL à Limoges et l'entreprise Orange à Toulouse, je travaille sur différents projets de développement. <br/>Durant les dernières années, j'ai essentiellement travaillé sur des projets backends en Java ou NodeJs avec des frameworks tels que Spring ou ExpressJs. Cependant dans le même laps de temps j'ai aussi été amené à travailler sur du Frontend avec les frameworks Angular, jQuery, VueJs ou directement en JavaScript natif. Sur ces mêmes projets, j'ai dû aussi m'intéresser à des problématiques de déploiement continues avec GitlabCI et une plateforme CloudFoundry disponible au sein d'Orange.<br/>Je m'intéresse également aux façons dont sont géré les données que ce soit au sein de SGBD relationnel classique telles que MySQL ou Postgresql, ou avec des SGBD NoSQL tel que MongoDB, Reddis et surtout Neo4J. J'ai également suivi lors de ma dernière année d'ingénieur un certain nombre de cours relatifs à la DataScience, me donnant quelques bases dans ce domaine.<br/>Ce site web est actuellement hébergé dans un conteneur Docker sur une RaspberryPi. Je m'intéresse donc tout naturellement aux problématiques relatives à l'hébergement et à la sécurité de cet environnement."
  }
}
</i18n>
