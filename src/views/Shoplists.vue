<template>
  <div class="container">
    <h1>Shoplists</h1>
    <div class="container">
      <div
        class="mb-2"
        v-for="(sl, index) in this.shoplists"
        v-bind:key="sl.name"
      >
        <ShoplistCard :index="index" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ShoplistCard from "@/components/ShoplistCard.vue";
import ShoplistModel from "@/models/shoplist.model";
const shoplists = namespace("Shoplists");
@Component({
  components: {
    ShoplistCard,
  },
})
export default class Shoplists extends Vue {
  //Vuex
  @shoplists.State
  public shoplists!: Array<ShoplistModel>;

  @shoplists.Action
  public getShoplists!: () => {};

  mounted() {
    this.getShoplists();
  }
}
</script>
