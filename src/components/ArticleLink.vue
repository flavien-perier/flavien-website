<template>
  <router-link :to="{ name: 'documentationArticles', params: { fileName: header.fileName }}" class="col-12 col-md-6" style="color: inherit; text-decoration: inherit">
    <div class="box bg-box text-article">
      <div class="text-center col-12">
        <h2>{{ header.title }}</h2>
        <hr />
      </div>
      <p>{{ header.description }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ExperienceInterface from "@/model/ExperienceInterface";
import MarkdownHeader from "@/model/MarkdownHeader";

@Component
export default class ArticleLink extends Vue {
  @Prop() private header!: MarkdownHeader;
}
</script>
