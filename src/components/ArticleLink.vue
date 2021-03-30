<template>
  <router-link 
    :to="{ name: 'wikiArticle', params: { fileName: header.fileName }}"
    class="col-12 col-md-6" 
    style="color: inherit; text-decoration: inherit"
  >
    <div class="box box-animation bg-box text-article col-12">
      <h2 class="text-center">{{ header.title }}</h2>
      <hr />
      <p>{{ header.description }}</p>
      <span class="ml-1"
        v-for="categ in header.categories"
        :key="categ"
        :title="categ[0].toUpperCase() + categ.substr(1)">
        <font-awesome-icon :icon="categToFa(categ)" />
      </span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MarkdownHeader from "@/model/MarkdownHeader";

@Component
export default class ArticleLink extends Vue {
  @Prop() private header!: MarkdownHeader;

  categToFa(categ: string) {
    switch(categ) {
      case "system":
        return ["fa", "terminal"]
      case "code":
        return ["fa", "code"]
    }
  }
}
</script>
