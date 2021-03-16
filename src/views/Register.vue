<template>
  <div class="container grid-sm">
    <RegisterForm />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RegisterForm from "@/components/RegisterForm.vue";

export default Vue.extend({
  name: "Register",

  components: { RegisterForm },
});
</script>
