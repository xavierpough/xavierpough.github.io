<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ResumeNavBar from "./components/ResumeNavBar.vue";
</script>

<template>
  <div class="d-flex flex-column min-vh-100 text-white bg-dark">
  <ResumeNavBar/>
    <main class="flex-grow-1">
      <RouterView />
    </main>
  </div>
</template>
