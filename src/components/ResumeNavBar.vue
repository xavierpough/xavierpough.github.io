<script setup>
import { ref } from 'vue';

const frontendLinks = ref([
  'home',
  'frontend-resume'
])

const actorLinks = ref([
  'actor',
  'actor-resume'
])

</script>

<template>
  <nav id="portfolio-navbar">
    <ul class="nav nav-tabs small border-bottom-0" style="font-size: 10px">
    <li class="nav-item">
      <!-- {{ $route.name }} -->
      <RouterLink class="nav-link border-0" aria-current="page" to="/" :class="{ active: frontendLinks.includes($route.name) }">Frontend Developer</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link border-0" aria-current="page" to="/actor" :class="{ active: actorLinks.includes($route.name) }"
        >Actor</RouterLink>
    </li>
  </ul>
  </nav>

</template>

<style scoped>
  .nav-tabs .nav-link {
    padding: 0.25rem 0.5rem; /* Adjust the padding to make the tab height smaller */
    color: white;
  }

  .nav-tabs .nav-link.active {
    background-color: #e50913 !important; /* Set the active tab background color to red */
    color: white !important; /* Ensure the text color contrasts with the red background */
    border-color: #e50913 !important; /* Optional: make the border color red as well */
  }
</style>
