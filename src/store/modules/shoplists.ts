import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import ShoplistModel from "@/models/shoplist.model.ts";
import axios from "axios";

@Module({ namespaced: true, name: "Shoplists" })
class Shoplists extends VuexModule {
  public shoplists: Array<ShoplistModel> = [];

  @Mutation
  public SET_SHOPLIST_NAME(index: number): void {
    console.log("Renaming");
    this.shoplists[index].name = `newS${index + 1}`;
  }

  @Mutation
  public DELETE_SHOPLIST(index: number): void {
    this.shoplists.splice(index, 1);
    console.log(this.shoplists);
  }

  @Mutation
  public GET_SHOPLISTS(): void {
    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
      },
    };
    axios
      .get("http://localhost:3030/shoplists", config)
      .then(response => {
        console.log(response);
        this.shoplists = response.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  @Action({ rawError: true, commit: "SET_SHOPLIST_NAME" })
  public updateName(index: number): number {
    return index;
  }

  @Action({ rawError: true, commit: "DELETE_SHOPLIST" })
  public deleteShoplist(index: number): number {
    return index;
  }

  @Action({ rawError: true, commit: "GET_SHOPLISTS" })
  public getShoplists(): void {
    return;
  }
}

export default Shoplists;
