<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const frontendLinks = ref([
  'home',
  'frontend-resume'
])

const actorLinks = ref([
  'actor',
  'actor-resume'
])

const appleTheme = ref(false);
const route = useRoute(); // Access route object
watch(
  () => route.path,
  (newPath) => {
    appleTheme.value = newPath.includes('/apple-hub'); // Toggle theme
  },
  { immediate: true } // Run immediately on mount
);

console.log("appleTheme: ", appleTheme)
</script>

<template>
  <nav id="portfolio-navbar" :style="{backgroundColor: appleTheme ?  '#6c757d' : ''}">

    <ul class="nav nav-tabs small border-bottom-0" style="font-size: 10px">
    <li class="nav-item">
      <!-- {{ $route.name }} -->
      <RouterLink class="nav-link border-0" aria-current="page" to="/" :class="{ active: frontendLinks.includes($route.name) }">
        <span v-if="appleTheme" class="ms-3 ">View My Portfolio Here</span>
        <span v-else>Frontend Developer</span>
      </RouterLink>
    </li>
    <li v-if="!appleTheme" class="nav-item">
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
