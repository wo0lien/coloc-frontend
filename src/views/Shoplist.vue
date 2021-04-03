<template>
  <div class="container">
    <h1>{{ this.shoplist.name }}</h1>
    <div class="divider text-left" data-content="Your products"></div>
    <div class="container columns">
      <div
        class="column col-6 col-sm-12"
        v-for="p in this.ownedProducts"
        v-bind:key="p.id"
      >
        <ShoplistProductCard
          :shoplist="shoplist"
          :product="p"
          :type="p.owner.id == 1 ? 'owned' : 'other'"
        />
      </div>
    </div>
    <div class="divider text-left" data-content="Other's products"></div>
    <div class="container columns">
      <div
        class="column col-6 col-sm-12"
        v-for="p in this.otherProducts"
        v-bind:key="p.id"
      >
        <ShoplistProductCard
          :shoplist="shoplist"
          :product="p"
          :type="p.owner.id == 1 ? 'owned' : 'other'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ShoplistModel from "@/models/shoplist.model";
// import ShoplistsModule from "@/store/modules/shoplists";
import { Component, Vue } from "vue-property-decorator";
// import { getModule } from "vuex-module-decorators";
import ShoplistProductCard from "@/components/ShoplistProductCard.vue";
import ShoplistProductModel from "@/models/shoplistProduct.model";
// const shoplists = getModule(ShoplistsModule);

@Component({
  components: {
    ShoplistProductCard,
  },
})
export default class Shoplists extends Vue {
  private shoplist: ShoplistModel = new ShoplistModel();
  private ownedProducts: Array<ShoplistProductModel> = [];
  private otherProducts: Array<ShoplistProductModel> = [];

  created() {
    // const sl = shoplists.shoplists.find((shoplist: ShoplistModel) => {
    //   return shoplist.id == parseInt(this.$route.params.id);
    // });
    // if (sl) {
    //   this.shoplist = sl;
    // }

    // placeHolder

    this.shoplist.id = 1;
    this.shoplist.name = "Premiere shoplist";

    this.shoplist.products = [
      {
        id: 1,
        name: "Haricot",
        quantity: "2",
        owner: { id: 1, firstname: "Tom", lastname: "Sampic" },
      },
      {
        id: 2,
        name: "Carotte",
        quantity: "1",
        owner: { id: 2, firstname: "Alya", lastname: "Ibanez" },
      },
      {
        id: 3,
        name: "Patate",
        quantity: "4",
        owner: { id: 2, firstname: "Alya", lastname: "Ibanez" },
      },
      {
        id: 4,
        name: "Oignons",
        quantity: "100",
        owner: { id: 1, firstname: "Tom", lastname: "Sampic" },
      },
      {
        id: 5,
        name: "Poireau",
        quantity: "3",
        owner: { id: 2, firstname: "Alya", lastname: "Ibanez" },
      },
      {
        id: 7,
        name: "Semoule",
        quantity: "4",
        owner: { id: 3, firstname: "Loic", lastname: "Cholvy" },
      },
      {
        id: 6,
        name: "Riz",
        quantity: "1",
        owner: { id: 1, firstname: "Tom", lastname: "Sampic" },
      },
    ];

    this.ownedProducts = this.shoplist.products.filter(
      (product: ShoplistProductModel) => {
        return product.owner.id == 1;
      },
    );

    this.otherProducts = this.shoplist.products.filter(
      (product: ShoplistProductModel) => {
        return product.owner.id != 1;
      },
    );
  }
}
</script>
