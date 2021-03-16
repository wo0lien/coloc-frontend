<template>
  <div class="home">
    <WorkInProgress />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WorkInProgress from "@/components/WorkInProgress.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    WorkInProgress,
  },
});
</script>
