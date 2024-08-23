<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollContainer = ref(null);
const showArrows = ref(false);

const checkOverflow = () => {
  if (scrollContainer.value) {
    showArrows.value =
      scrollContainer.value.scrollWidth > scrollContainer.value.clientWidth;
  }
};

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -200, behavior: "smooth" });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 200, behavior: "smooth" });
  }
};

onMounted(() => {
  checkOverflow();
  window.addEventListener("resize", checkOverflow);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkOverflow);
});
</script>

<template>
  <section
    id="graphics"
    class="py-5 bg-secondary text-white px-4 position-relative"
  >
    <div class="container-fluid">
      <h2 class="h3 fw-bold mb-4">My Graphics</h2>

      <!-- Scrollable Row with Arrow Controls -->
      <div class="position-relative">
        <div
          class="d-flex overflow-hidden-x justify-content-between"
          style="scroll-behavior: smooth"
          ref="scrollContainer"
        >
          <!-- Camborie Film Cover -->
          <div class="card-container mx-5">
            <div class="number-overlay">1</div>
            <div
              class="card text-white bg-secondary border-0"
              style="
                height: 15rem;
                width: 10rem;
                left: 110px;
                overflow: visible;
              "
            >
              <img
                src="/src/images/graphics/Camborie University.png"
                alt="Design Systems"
                class="card-img-top rounded mb-2"
                style="object-fit: cover; height: 100%; width: 100%"
              />
            </div>
          </div>

          <!-- Black Forest Cannabis Logo -->
          <div class="card-container mx-5 position-relative">
            <div class="number-overlay">2</div>
            <div
              class="card text-white bg-secondary border-0"
              style="
                height: 15rem;
                width: 10rem;
                position: relative;
                overflow: visible;
              "
            >
              <img
                src="/src/images/graphics/BlackForestCannabisCo_Logo.png"
                alt="UX/UI Design"
                class="rounded mb-2"
                style="
                  object-fit: contain;
                  height: 100%;
                  width: auto;
                  position: absolute;
                  left: 50%;
                "
              />
            </div>
          </div>

          <!-- X's and O's Film -->
          <div class="card-container mx-5">
            <div class="number-overlay">3</div>
            <div
              class="card text-white bg-secondary border-0"
              style="height: 15rem; width: 10rem; left: 110px"
            >
              <img
                src="/src/images/graphics/XandOsCover.png"
                alt="Design Systems"
                class="card-img-top rounded mb-2"
                style="object-fit: cover; height: 100%; width: 100%"
              />
            </div>
          </div>

          <!-- Gainz United Mockup -->
          <div class="card-container mx-5">
            <div class="number-overlay">4</div>
            <div
              class="card text-white bg-secondary border-0"
              style="height: 15rem; width: 10rem; left: 110px"
            >
              <img
                src="/src/images/graphics/Launch Page Mockup.png"
                alt="UX Research"
                class="card-img-top rounded mb-2"
                style="object-fit: cover; height: 100%; width: 100%"
              />
            </div>
          </div>

          <!-- Colors of Black and White Film Cover -->
          <div class="card-container mx-5">
            <div class="number-overlay">5</div>
            <div
              class="card text-white bg-secondary border-0"
              style="height: 15rem; width: 10rem; left: 110px"
            >
              <img
                src="/src/images/graphics/Colors of Black White.png"
                alt="Film whiCover of Colors of Black and White"
                class="card-img-top rounded mb-2"
                style="object-fit: cover; height: 100%; width: 100%"
              />
            </div>
          </div>


          <!-- Life Wireless Graphic -->
          <div class="card-container mx-5">
            <div class="number-overlay">6</div>
            <div
              class="card text-white bg-secondary border-0"
              style="height: 15rem; width: 10rem; left: 110px"
            >
              <img
                src="/src/images/graphics/LifeWirelessGraphic.png"
                alt="Life Wireless Graphic"
                class="card-img-top rounded mb-2"
                style="object-fit: cover; height: 100%; width: 100%"
              />
            </div>
          </div>

          <!-- Kee Slayed My Wig Logo-->
          <div class="card-container mx-5">
            <div class="number-overlay">7</div>
            <div
              class="card text-white bg-secondary border-0"
              style="height: 15rem; width: 10rem; left: 110px"
            >
              <img
                src="/src/images/graphics/KeeSlayedMyWig.png"
                alt="Kee Slayed My Wig Logo"
                class="card-img-top rounded mb-2"
                style="object-fit: cover; height: 100%; width: 100%"
              />
            </div>
          </div>

          <!-- Organic Growth Logo -->
          <div class="card-container mx-5">
            <div class="number-overlay">8</div>
            <div
              class="card text-white bg-secondary border-0"
              style="height: 15rem; width: 10rem; left: 110px"
            >
              <img
                src="/src/images/graphics/OrganicGrowthLogo.png"
                alt="Organic Growth Logo"
                class="card-img-top rounded mb-2"
                style="
                  object-fit: cover;
                  height: 100%;
                  width: 100%;
                  transform: translateX(10%);
                "
              />
            </div>
          </div>
        </div>

        <!-- Left and Right Arrow Controls -->
        <button
          v-if="showArrows"
          class="position-absolute top-50 start-0 translate-middle-y btn btn-dark"
          @click="scrollLeft"
        >
          <i class="fa fa-chevron-left"></i>
        </button>
        <button
          v-if="showArrows"
          class="position-absolute top-50 end-0 translate-middle-y btn btn-dark"
          @click="scrollRight"
        >
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.overflow-hidden-x {
  overflow-x: hidden;
  overflow-y: hidden;
}

.card-container {
  position: relative;
  width: 10rem;
  height: 15rem;
}

.number-overlay {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12rem;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 1); /* Outline the text */
  text-shadow: none; /* Remove any existing shadow */
  z-index: 1;
  pointer-events: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* Adjust buttons to be clearly visible over the content */
button {
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Make sure the cards are not wrapping and stay in a single row */
.flex-shrink-0 {
  flex-shrink: 0;
}
</style>
