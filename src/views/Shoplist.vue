<template>
  <div class="container">
    <h1>{{ this.shoplist.name }}</h1>
  </div>
</template>

<script lang="ts">
import ShoplistModel from "@/models/shoplist.model";
import ShoplistsModule from "@/store/modules/shoplists";
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
const shoplists = getModule(ShoplistsModule);

@Component
export default class Shoplists extends Vue {
  private shoplist: ShoplistModel = new ShoplistModel();

  mounted() {
    const sl = shoplists.shoplists.find((shoplist: ShoplistModel) => {
      return shoplist.id == parseInt(this.$route.params.id);
    });

    if (sl) {
      this.shoplist = sl;
    }
  }
}
</script>
