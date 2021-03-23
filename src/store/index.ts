import Vue from "vue";
import Vuex from "vuex";
import Shoplists from "@/store/modules/shoplists";
import Notifications from "@/store/modules/notifications";
import Users from "@/store/modules/users";
import { getModule } from "vuex-module-decorators";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Shoplists,
    Notifications,
    Users,
  },
});

export default store;

// export to include store in the modules
export const ShoplistsModule = getModule(Shoplists, store);
export const NotificationsModule = getModule(Notifications, store);
export const UsersModule = getModule(Users, store);
