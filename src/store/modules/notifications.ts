import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import NotificationModel from "@/models/notification.model";
import Store from "../index";

@Module({
  dynamic: true,
  store: Store,
  namespaced: true,
  name: "Notifications",
})
class Notifications extends VuexModule {
  public notifications: Array<NotificationModel> = [
    {
      title: "Login failed",
      msg: "Dommage ca a pas marché...",
      type: "warning",
    },
    {
      title: "Register failed",
      msg: "Mot de passe pas ouf...",
      type: "error",
    },
    {
      title: "Nouvelle shoplist",
      msg: "Alya a créer une nouvelle shoplist",
      type: "classic",
    },
    {
      title: "Shoplist crée",
      msg: "Vous avez ajouté une jolie shoplist",
      type: "success",
    },
  ];

  @Mutation
  public DELETE_NOTIFICATION(index: number): void {
    this.notifications.splice(index, 1);
  }

  @Action({ rawError: true, commit: "DELETE_NOTIFICATION" })
  public deleteNotification(index: number): number {
    return index;
  }
}

export default Notifications;
