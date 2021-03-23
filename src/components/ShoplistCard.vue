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
            <span class="text-large"
              >{{ this.owner.firstname }} {{ this.owner.lastname }}</span
            >
            <br />
            <span class="text-small">{{ this.joinersString }}</span>
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
      <button
        v-if="this.type === 'owned'"
        class="btn btn-error ml-2"
        @click="deleteShoplist(index)"
      >
        Remove
      </button>
      <button v-if="this.type === 'other'" class="btn btn-success ml-2">
        Join
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ShoplistModel from "@/models/shoplist.model";
import UserModel from "@/models/user.model";
const shoplists = namespace("Shoplists");
const users = namespace("Users");
@Component
export default class ShoplistCard extends Vue {
  // Data
  private shoplist: ShoplistModel = new ShoplistModel();
  private owner: UserModel = new UserModel();
  private joinersString = "";

  // Props
  @Prop({ required: true }) index!: number;
  @Prop({ required: true }) type!: string;

  // Vuex
  @shoplists.State
  public shoplists!: Array<ShoplistModel>;

  @users.State
  public users!: Array<UserModel>;

  @shoplists.Action
  public deleteShoplist!: (index: number) => number;

  mounted() {
    const userId = window.localStorage.getItem("userId");
    const sl = this.shoplists.find(s => {
      return s.id == this.index;
    });
    if (sl) {
      this.shoplist = sl;
      this.owner = this.shoplist.owner;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.shoplist.joiners = this.shoplist.joiners.filter((joiner: any) => {
        return joiner.id != userId;
      });

      // calculate the joinerstring
      if (this.shoplist.joiners.length != 0) {
        for (
          let i = 0;
          i < Math.min(2, this.shoplist.joiners.length - 1);
          i++
        ) {
          this.joinersString = this.joinersString.concat(
            this.shoplist.joiners[i].firstname,
          );
          this.joinersString = this.joinersString.concat(", ");
        }

        if (this.shoplist.joiners.length <= 3) {
          this.joinersString = this.joinersString.concat(
            this.shoplist.joiners[this.shoplist.joiners.length - 1].firstname,
          );
        } else {
          this.joinersString = this.joinersString.concat(" and more");
        }
      }
    }

    console.log(this.joinersString);
  }
}
</script>
