<template>
  <form class="form-horizontal">
    <div class="form-group columns py-2">
      <div class="column col-3 col-sm-12">
        <label class="form-label text-left" for="input-register-firtname"
          >Firstname</label
        >
      </div>
      <div class="column col-9 col-sm-12 ">
        <input
          class="form-input"
          type="text"
          id="input-register-firstname"
          placeholder="Firstname"
          v-model="firstname"
        />
      </div>
    </div>
    <div class="form-group columns py-2">
      <div class="column col-3 col-sm-12">
        <label class="form-label text-left" for="input-register-lastname"
          >Lastname</label
        >
      </div>
      <div class="column col-9 col-sm-12 ">
        <input
          class="form-input"
          type="text"
          id="input-register-lastname"
          placeholder="Lastname"
          v-model="lastname"
        />
      </div>
    </div>
    <div class="form-group columns py-2">
      <div class="column col-3 col-sm-12">
        <label class="form-label text-left" for="input-register-room"
          >Room n°</label
        >
      </div>
      <div class="column col-9 col-sm-12 ">
        <input
          class="form-input"
          type="number"
          id="input-register-room"
          placeholder="Room number"
          v-model="room"
        />
      </div>
    </div>
    <div class="form-group columns py-2">
      <div class="column col-3 col-sm-12">
        <label class="form-label text-left" for="input-register-email"
          >Email</label
        >
      </div>
      <div class="column col-9 col-sm-12 ">
        <input
          class="form-input"
          type="email"
          id="input-register-email"
          placeholder="Email"
          v-model="email"
        />
      </div>
    </div>
    <div class="form-group columns py-2">
      <div class="column col-3 col-sm-12">
        <label class="form-label text-left" for="input-register-password"
          >Password</label
        >
      </div>
      <div class="column col-9 col-sm-12">
        <input
          class="form-input"
          type="password"
          id="input-register-password"
          placeholder="Password"
          v-model="password"
        />
      </div>
    </div>
    <div class="form-group columns py-2">
      <div class="column col-3 col-sm-12">
        <label
          class="form-label text-left"
          for="input-register-password-confirm"
          >Confirm password</label
        >
      </div>
      <div class="column col-9 col-sm-12">
        <input
          class="form-input"
          type="password"
          id="input-register-password-confirm"
          placeholder="Password"
          v-model="passwordConfirm"
        />
      </div>
    </div>
    <div class="form-group columns py-2">
      <div class="column col-3 hide-sm d-block"></div>
      <div class="column col-2">
        <button class="btn btn-left" @click="submitForm">Create account</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { AxiosError, AxiosResponse } from "axios";
import Vue from "vue";

interface State {
  firstname: string;
  lastname: string;
  email: string;
  room: number;
  password: string;
  passwordConfirm: string;
}
export default Vue.extend({
  name: "RegisterForm",
  data: (): State => {
    return {
      firstname: "",
      lastname: "",
      email: "",
      room: 0,
      password: "",

      passwordConfirm: "",
    };
  },
  methods: {
    submitForm(e: Event) {
      e.preventDefault();
      // TODO verif mail, name etc
      if (this.passwordConfirm == this.password) {
        this.$axios
          .post("http://localhost:3030/users", {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            room: this.room,
            password: this.password,
          })
          .then((response: AxiosResponse) => {
            console.log(response);
            this.$router.push({ name: "Login" });
          })
          .catch((error: AxiosError) => {
            console.error(error.response);
          });
      }
    },
  },
});
</script>
