<template>
  <div class="columns">
    <div class="column col-5">
      <div class="columns">
        <img
          class="column col-6 p-0"
          style="max-width: 50px; max-height: 50px;"
          src="https://picsum.photos/50/50"
          alt=""
        />
        <div class="column col-6 text-left">
          <p>
            <span class="text-large">{{ this.product.name }}</span>
            <br />
            <span class="text-small"
              >{{ this.product.owner.firstname }}
              {{ this.product.owner.lastname[0] }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="column col-1 flex-centered">
      {{ this.product.quantity }}
    </div>
    <div class="column col-6 flex-centered" v-if="this.type == 'owned'">
      <button class="btn btn-sm btn-action btn-primary s-circle mr-1">
        <i class="icon icon-plus"></i>
      </button>
      <button class="btn btn-sm btn-action btn-primary s-circle mx-1">
        <i class="icon icon-minus"></i>
      </button>
      <button class="btn btn-sm btn-action btn-error ml-1">
        <i class="icon icon-delete"></i>
      </button>
    </div>
    <div class="column col-6 flex-centered" v-else>
      <button class="btn btn-success">I need it !</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ShoplistModel from "@/models/shoplist.model";
import ShoplistProductModel from "@/models/shoplistProduct.model";

@Component
export default class ShoplistProductCard extends Vue {
  @Prop({ required: true }) product!: ShoplistProductModel;
  @Prop({ required: true }) shoplist!: ShoplistModel;
  @Prop({ required: true }) type!: string;
}
</script>
