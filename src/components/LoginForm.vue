<template>
  <div>
    <form class="form-horizontal">
      <div class="form-group columns py-2">
        <div class="column col-2 col-sm-12">
          <label class="form-label text-left" for="input-login-email"
            >Email</label
          >
        </div>
        <div class="column col-10 col-sm-12 ">
          <input
            class="form-input"
            type="email"
            id="input-login-email"
            placeholder="Email"
            v-model="email"
          />
        </div>
      </div>
      <div class="form-group columns py-2">
        <div class="column col-2 col-sm-12">
          <label class="form-label text-left" for="input-login-password"
            >Password</label
          >
        </div>
        <div class="column col-10 col-sm-12">
          <input
            class="form-input"
            type="password"
            id="input-login-password"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>
      <div class="form-group columns py-2">
        <div class="column col-2 hide-sm d-block"></div>
        <div class="column col-2 col-sm-12">
          <button class="btn btn-left" @click="submitForm">
            Log In
          </button>
        </div>
        <div class="column col-6 col-sm-12 col-mx-auto text-left pt-2">
          Not registered?
          <router-link class="pl-1" to="/register">
            Register here
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { AxiosError, AxiosResponse } from "axios";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginForm extends Vue {
  private password = "";
  private email = "";

  submitForm(e: Event): void {
    e.preventDefault();
    if (this.password.length > 0) {
      this.$axios
        .post("http://localhost:3030/authentication", {
          strategy: "local",
          email: this.email,
          password: this.password,
        })
        .then((response: AxiosResponse) => {
          window.localStorage.setItem("jwt", response.data.accessToken);
          window.localStorage.setItem("userId", response.data.user.id);

          if (window.localStorage.getItem("jwt") != null) {
            this.$emit("loggedIn");
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl);
            } else {
              this.$router.push({ name: "Dashboard" });
            }
          } else {
            this.$router.push({ name: "Home" });
          }
        })
        .catch((error: AxiosError) => {
          console.error(error.response);
        });
    }
  }
}
</script>
