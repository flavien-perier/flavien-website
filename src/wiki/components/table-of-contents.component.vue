<template>
  <div class="table-of-content shadow bg-article-information">
    <div
      v-for="title in titles()"
      :key="title.order"
      :style="`margin-left:${title.level}em`"
    >
      - <a :href="'#' + title.id">{{ title.title }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

const props = defineProps({
  htmlContent: { type: String, required: true },
});
const { htmlContent } = toRefs(props);

function titles() {
  let order = 0;
  const content = htmlContent?.value || "";

  return (
    (content.match(/<h[0-6] id=".*?">.*?<\/h[0-6]>/gmsu) || []).map(
      (titleString) => {
        const regexResult =
          /<h([0-6]) id="(.*?)">(.*?)<\/h[0-6]>/su.exec(titleString) || [];

        return {
          id: regexResult[2],
          order: order++,
          title: regexResult[3].replace(/<.*?>/g, "").replace("&#39;", "'"),
          level: parseInt(regexResult[1]),
        };
      }
    ) || []
  );
}
</script>

<style lang="scss" scoped>
.table-of-content {
  overflow: auto;
  max-height: 30rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}
</style>
