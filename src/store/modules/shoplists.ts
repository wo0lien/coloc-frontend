import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import ShoplistModel from "@/models/shoplist.model.ts";
import axios from "axios";
import Store from "../index";

const config: any = {
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
  },
};

@Module({ dynamic: true, store: Store, namespaced: true, name: "Shoplists" })
class Shoplists extends VuexModule {
  public shoplists: Array<ShoplistModel> = [];

  @Mutation SET_SHOPLISTS(data: Array<ShoplistModel>): void {
    this.shoplists = data;
  }

  @Mutation
  public UPDATE_SHOPLIST<K extends keyof ShoplistModel>(data: {
    index: number;
    key: K;
    data: ShoplistModel[K];
  }): void {
    this.shoplists[data.index][data.key] = data.data;
  }

  @Mutation
  public DELETE_SHOPLIST(index: number): void {
    this.shoplists.splice(index, 1);
  }

  @Action({ rawError: true, commit: "SET_SHOPLISTS" })
  public getShoplists(): Array<ShoplistModel> {
    console.log("inside getShoplists()");
    axios
      .get("http://localhost:3030/shoplists", config)
      .then(response => {
        return response.data.data;
      })
      .catch(err => {
        console.log(err);
      });
    return [];
  }

  @Action({ rawError: true })
  public updateShoplist<K extends keyof ShoplistModel>(
    id: number,
    key: K,
    data: ShoplistModel[K],
  ): any {
    // getting index from id
    const index: number = this.shoplists.findIndex(shoplist => {
      return shoplist.id == id;
    });

    if (index != -1) {
      // Pushing to API
      config.body = data;
      axios
        .patch(`http://localhost:3030/shoplists/${id}`, config)
        .then(response => {
          this.context.commit("UPDATE_SHOPLIST", {
            index: index,
            key: key,
            data: response.data.data[key],
          });
        })
        .catch(() => {
          // Emit notification on error
          console.log("Axios error");
        });
    }
  }

  @Action({ rawError: true })
  public deleteShoplist(id: number): any {
    // getting index from id
    const index: number = this.shoplists.findIndex(shoplist => {
      return shoplist.id == id;
    });

    if (index != -1) {
      axios
        .delete(`http://localhost:3030/shoplists/${id}`, config)
        .then(() => {
          this.context.commit("DELETE_SHOPLIST", {
            index,
          });
        })
        .catch(() => {
          console.log("Axios error");
        });
    }
  }
}

export default Shoplists;
