import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import UserModel from "@/models/user.model.ts";
import axios from "axios";
import Store from "../index";

@Module({ dynamic: true, store: Store, namespaced: true, name: "Users" })
class Users extends VuexModule {
  public users: Array<UserModel> = [];

  @Mutation
  public DELETE_USER(index: number): void {
    this.users.splice(index, 1);
  }

  @Mutation
  public GET_USERS(): void {
    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
      },
    };
    axios
      .get("http://localhost:3030/users", config)
      .then(response => {
        this.users = response.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  @Action({ rawError: true, commit: "DELETE_USER" })
  public deleteUser(index: number): number {
    return index;
  }

  @Action({ rawError: true, commit: "GET_USERS" })
  public getUsers(): void {
    return;
  }
}

export default Users;
