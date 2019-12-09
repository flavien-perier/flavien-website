<template>
    <div class="input-group mb-3 col-lg-4 col-md-6 col-sm-12" @click="check()">
        <div class="input-group-prepend">
            <div class="input-group-text">
                <input type="checkbox" :checked="selected" />
            </div>
        </div>
        <div class="input-group-append">
            <span v-bind:class="'competence-title input-group-text bg-color-' + id">{{ message }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CompetenceType extends Vue {
  @Prop() private id!: string;
  @Prop() private message!: string;
  @Prop() private selected!: string;

  check() {
    this.$emit("check");
  }
}
</script>
