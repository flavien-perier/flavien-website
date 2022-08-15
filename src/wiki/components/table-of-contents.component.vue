<template>
  <div id="tableOfContents">
    <div
        v-for="title in titles()"
        :key="title.order"
        :style="`margin-left:${title.level}em`"
    >- <a :href="'#' + title.id">{{ title.title }}</a></div>
  </div>
</template>

<script>
export default {
  name: "TableOfContents",
  props: ["htmlContent"],
  methods: {
    titles: function() {
      let order = 0;
      return (this.htmlContent.match(/<h[0-6] id=".*?">.*?<\/h[0-6]>/mgsu) || []).map(titleString => {
        const regexResult = /<h([0-6]) id="(.*?)">(.*?)<\/h[0-6]>/su.exec(titleString) || [];

        return {
          id: regexResult[2],
          order: order++,
          title: regexResult[3].replace(/<.*?>/g, "").replace("&#39;", "'"),
          level: parseInt(regexResult[1])
        };// as TitleDescriptionModel;
      }) || [];
    },
  }
};
</script>

<style scoped>
#tableOfContents {
  overflow: auto;
  max-height: 30em;
  background-color: #e5e5f0;
}
</style>
