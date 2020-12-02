<template>
  <article v-html="htmlContent"></article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import marked from "marked";

@Component
export default class MarkdownViewer extends Vue {
  @Prop() private markdown!: string;

  get htmlContent() {
    const markdownWithoutHeader = /^(?:---.*---)?(.*)$/s.exec(this.markdown);
    return marked(markdownWithoutHeader![1]);
  }
}
</script>
