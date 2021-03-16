<template>
  <div>
    <div v-if="this.type == 'classic'" class="toast text-left">
      <button
        class="btn btn-clear float-right"
        @click="deleteNotification(index)"
      ></button>
      <h5>{{ title }}</h5>
      <p>{{ msg }}</p>
    </div>
    <div v-if="this.type == 'success'" class="toast toast-success text-left">
      <button
        class="btn btn-clear float-right"
        @click="deleteNotification(index)"
      ></button>
      <h5>{{ title }}</h5>
      <p>{{ msg }}</p>
    </div>
    <div v-if="this.type == 'warning'" class="toast toast-warning text-left">
      <button
        class="btn btn-clear float-right"
        @click="deleteNotification(index)"
      ></button>
      <h5>{{ title }}</h5>
      <p>{{ msg }}</p>
    </div>
    <div v-if="this.type == 'error'" class="toast toast-error text-left">
      <button
        class="btn btn-clear float-right"
        @click="deleteNotification(index)"
      ></button>
      <h5>{{ title }}</h5>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import NotificationModel from "@/models/notification.model";
const notifications = namespace("Notifications");
@Component
export default class Notification extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) msg!: string;
  @Prop({ required: true }) index!: number;
  @Prop({ required: true }) type!: string;

  // Vuex
  @notifications.State
  public notifications!: Array<NotificationModel>;

  @notifications.Action
  public deleteNotification!: (index: number) => {};
}
</script>
