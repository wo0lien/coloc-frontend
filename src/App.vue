<template>
  <div id="app">
    <!-- Nav bar -->
    <header class="navbar mx-2 mt-2">
      <section class="navbar-section">
        <router-link to="/" class="navbar-brand">Coloc</router-link>
        <!-- <router-link to="/about" class="btn btn-link">Docs</router-link> -->
      </section>
      <section class="navbar-section">
        <router-link to="/login" class="btn btn-primary mr-2"
          >Login</router-link
        >
        <router-link to="/register" class="btn">Register</router-link>
      </section>
    </header>

    <!-- Notifications -->
    <div class="mx-2 notification-container">
      <div
        class="mb-1"
        v-for="(notif, index) in notifications"
        v-bind:key="index"
      >
        <Notification
          :title="notif.title"
          :msg="notif.msg"
          :index="index"
          :type="notif.type"
        />
      </div>
    </div>

    <!-- content -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Notification from "@/components/Notification.vue";
import NotificationModel from "@/models/notification.model";
const notifications = namespace("Notifications");
@Component({
  components: {
    Notification,
  },
})
export default class App extends Vue {
  @notifications.State
  public notifications!: Array<NotificationModel>;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.notification-container {
  max-width: 30em;
  min-width: 10em;
  margin-top: 10px;
  position: sticky;
  top: 10px;
  z-index: 999;
}
</style>
