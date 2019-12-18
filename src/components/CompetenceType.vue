<template>
  <div class="input-group mb-3 col-lg-4 col-md-6 col-sm-12" @click="check()">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <input type="checkbox" :checked="selected" />
      </div>
    </div>
    <div class="input-group-append">
      <span v-bind:class="`competence-title input-group-text bg-color-${competenceType.id}`">
        {{ message }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { Component, Prop, Vue } from 'vue-property-decorator';
import CompetenceTypeInterface from '../model/CompetenceTypeInterface';
import { Language } from '../model/Language';

@Component
export default class CompetenceType extends Vue {
  @Prop() private competenceType!: CompetenceTypeInterface;
  @Prop() private language!: Language;
  @Prop() private selected!: string;

  private get message() {
    return this.language == Language.FRENCH ? this.competenceType.messageFr : this.competenceType.messageEn;
  }

  private check() {
    this.$emit("check");
  }
}
</script>

<style scoped lang="scss">
.competence-title {
  min-width: 250px;
  cursor: pointer; 
}
</style>