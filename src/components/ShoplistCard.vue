<template>
  <div class="columns">
    <div class="column col-6 col-sm-12">
      <div class="columns">
        <img
          class="column col-6 p-0"
          style="max-width: 70px; max-height: 70px;"
          src="../assets/userpics/g4229.png"
          alt=""
        />
        <div class="column col-6 text-left">
          <p>
            <span class="text-large">Tom Sampic</span>
            <br />
            <span class="text-small">Alya, Loic and more</span>
          </p>
        </div>
      </div>
    </div>
    <div class="column col-3 col-sm-6 flex-centered">
      {{ this.shoplist.name }}
    </div>
    <div class="column col-3 col-sm-6 flex-centered">
      <button class="btn">
        See
      </button>
      <button class="btn btn-error ml-2" @click="deleteShoplist(index)">
        Remove
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ShoplistModel from "@/models/shoplist.model";
const shoplists = namespace("Shoplists");
@Component
export default class ShoplistCard extends Vue {
  // Data
  private shoplist: ShoplistModel = { name: "", owner: "", items: 0 };

  // Props
  @Prop({ required: true }) index!: number;

  // Vuex
  @shoplists.State
  public shoplists!: Array<ShoplistModel>;

  @shoplists.Action
  public deleteShoplist!: (index: number) => number;

  mounted() {
    this.shoplist = this.shoplists[this.index];
  }
}
</script>
