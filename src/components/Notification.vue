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
import { getModule } from "vuex-module-decorators";
import notificationModule from "@/store/modules/notifications";
const notificationsState = getModule(notificationModule);

@Component
export default class Notification extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) msg!: string;
  @Prop({ required: true }) index!: number;
  @Prop({ required: true }) type!: string;

  deleteNotification() {
    notificationsState.deleteNotification(this.index);
  }
}
</script>
