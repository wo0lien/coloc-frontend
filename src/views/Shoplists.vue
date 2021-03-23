<template>
  <div class="container">
    <h1>Shoplists</h1>
    <div class="divider text-left" data-content="Your shoplists"></div>
    <div class="container">
      <div class="mb-2" v-for="sl in this.ownedShoplists" v-bind:key="sl.name">
        <ShoplistCard :index="sl.id" :type="'owned'" />
      </div>
    </div>
    <div class="divider text-left" data-content="Joined shoplists"></div>
    <div class="container">
      <div class="mb-2" v-for="sl in this.joinedShoplists" v-bind:key="sl.name">
        <ShoplistCard :index="sl.id" :type="'joined'" />
      </div>
    </div>
    <div class="divider text-left" data-content="Others shoplists"></div>
    <div class="container">
      <div class="mb-2" v-for="sl in this.otherShoplists" v-bind:key="sl.name">
        <ShoplistCard :index="sl.id" :type="'other'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
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
  // Sorted shoplists
  private ownedShoplists: Array<ShoplistModel> = [];
  private joinedShoplists: Array<ShoplistModel> = [];
  private otherShoplists: Array<ShoplistModel> = [];

  //Vuex
  @shoplists.State
  public shoplists!: Array<ShoplistModel>;

  @shoplists.Action
  public getShoplists!: () => {};

  mounted() {
    this.getShoplists();
  }

  @Watch("shoplists")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPropertyChange(shoplists: any) {
    const userId = window.localStorage.getItem("userId");
    console.log(userId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    shoplists.map((shoplist: any) => {
      if (shoplist.ownerId == userId) {
        // code
        this.ownedShoplists.push(shoplist);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } else if (shoplist.joiners.find((joiner: any) => joiner.id == userId)) {
        this.joinedShoplists.push(shoplist);
      } else {
        this.otherShoplists.push(shoplist);
      }
    });
  }
}
</script>
