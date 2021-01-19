<template>
  <div id="tableOfContents">
    <div 
      v-for="title in titles"
      :style="`margin-left:${title.level}em`"
    >- <a :href="'#' + title.id">{{ title.title }}</a></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TitleDescription from "@/model/TitleDescription";
import marked from "marked";

@Component
export default class TableOfContents extends Vue {
  @Prop() private htmlContent!: string;

  private get titles(): TitleDescription[] {
    return (this.htmlContent.match(/<h[0-6] id=".*?">.*?<\/h[0-6]>/mgsu) || []).map(titleString => {
      const regexResult = /<h([0-6]) id="(.*?)">(.*?)<\/h[0-6]>/su.exec(titleString) || [];

      return {
        id: regexResult[2],
        title: regexResult[3].replace(/<.*?>/g, "").replace("&#39;", "'"),
        level: parseInt(regexResult[1])
      } as TitleDescription;
    }) || [];
  }
}
</script>

<style scoped>
#tableOfContents {
  overflow: auto;
  max-height: 30em;
  background-color: #e5e5f0;
}
</style>
