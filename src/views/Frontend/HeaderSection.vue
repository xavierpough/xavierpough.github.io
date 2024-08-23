<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";

const spin = ref(false);
const stickyHeader = ref(false); // Track sticky behavior
const activeSection = ref(""); // Default active section
const router = useRouter();
let interval: any;
let observer: any;

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "graphics", label: "Graphics" },
  { id: "contact", label: "Contact" },
];

onMounted(() => {
  interval = setInterval(() => {
    spin.value = true;
    setTimeout(() => {
      spin.value = false;
    }, 1000); // Spin duration should match the animation duration
  }, 5000); // Spins every 5 seconds

  // Intersection Observer to detect the parent header visibility
  const parentHeader = document.querySelector("#portfolio-navbar");
  observer = new IntersectionObserver(
    ([entry]) => {
      stickyHeader.value = !entry.isIntersecting;
    },
    { threshold: 0 } // Trigger as soon as the parent header is out of view
  );

  if (parentHeader) {
    observer.observe(parentHeader);
  }

  // Observe sections for active state
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          router.currentRoute.value.name !== "frontend-resume"
        ) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.5 } // Adjust as needed to trigger the active state
  );

  sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      sectionObserver.observe(element);
    }
  });
});

onUnmounted(() => {
  clearInterval(interval);
  // Disconnect observer when component is unmounted
  observer.disconnect();
});

// console.log('Router: ', router.currentRoute);

watch(router.currentRoute, (newRoute) => {
  console.log("newRoute", newRoute);
  if (newRoute.name === "frontend-resume") {
    activeSection.value = "";
  } else if (activeSection.value === "") {
    activeSection.value = "home";
  }
});

const scrollToSection = (sectionId: any) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handleScrollToSection = (sectionId: any) => {
  if (router.currentRoute.value.name !== "home") {
    router.push({ name: "home" }).then(() => {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300); // Adjust delay if needed to ensure page has loaded
    });
  } else {
    scrollToSection(sectionId);
  }
};
</script>

<template>
  <header
    :class="[
      'w-100 z-index-10 bg-dark bg-opacity-50 position-fixed ',
      { 'top-0 start-0': stickyHeader },
    ]"
    style="z-index: 1000"
  >
    <div
      class="container-fluid px-4 py-4 d-flex align-items-center justify-content-between"
    >
      <RouterLink to="/" class="h2 fw-bold text-decoration-none">
        <!-- Bind the spin class conditionally based on the spin ref -->
        <img
          :class="{ 'horizontal-spin-animation': spin }"
          src="/src/images/X Logo.png"
          alt="X Logo"
          class="rounded"
          style="height: 2rem; width: 2rem"
        />
      </RouterLink>

      <nav class="d-flex align-items-center gap-3">
        <RouterLink
          v-for="section in sections"
          :key="section.id"
          to="/"
          :class="[
            'text-decoration-none text-white hover-text-danger',
            { 'border-bottom border-danger': activeSection === section.id },
          ]"
          @click.prevent="handleScrollToSection(section.id)">
          {{ section.label }}
        </RouterLink>
        <RouterLink
          to="/frontend-resume"
          :class="[
            'text-decoration-none text-white hover-text-danger',
            {
              'border-bottom border-danger': $route.name === 'frontend-resume',
            },
          ]"
          >Resume</RouterLink
        >
      </nav>
    </div>
  </header>
  <slot />
</template>

<style scoped>
.border-bottom {
  border-bottom-width: 3px !important;
}

/* Horizontal Spin animation */
.horizontal-spin-animation {
  animation: horizontal-spin 1s linear;
}

@keyframes horizontal-spin {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
