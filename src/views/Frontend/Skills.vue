<script setup>
import { ref } from "vue";

// Reference to the scroll container
const scrollContainer = ref(null);

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
</script>

<template>
  <section id="graphics" class="py-5 bg-dark px-4">
    <div class="container-fluid">
      <h2 class="h3 fw-bold mb-4">My Skills</h2>

      <!-- Scrollable Row with Arrow Controls -->
      <div class="position-relative">
        <div
          class="d-flex"
          style="scroll-behavior: smooth; overflow: hidden;"
          ref="scrollContainer"
        >
          <!-- HTML -->
          <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
            <div class="card bg-secondary">
              <img
                src="/src/images/HTML.png"
                alt="HTML"
                class="card-img-top rounded mb-2"
                style="object-fit: cover"
              />
            </div>
            <div class="text-center mt-1 small text-white">HTML</div>
          </div>

          <!-- CSS -->
          <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-secondary">
            <img
              src="/src/images/CSS.png"
              alt="CSS"
              class="card-img-top rounded mb-2"
              style="object-fit: cover"
            />
          </div>
            <div class="text-center mt-1 small">CSS</div>
          </div>

          <!-- Javascript -->
          <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-secondary">
            <img
              src="/src/images/Javascript.png"
              alt="Javascript"
              class="card-img-top rounded mb-2"
              style="object-fit: cover"
            />
            </div>
            <div class="text-center mt-1 small">Javascript</div>
          </div>

          <!-- Vue -->
          <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-secondary">
            <img
              src="/src/images/Vue.png"
              alt="Vue"
              class="card-img-top rounded mb-2"
              style="object-fit: cover"
            />
            </div>
            <div class="text-center mt-1 small">Vue</div>
          </div>

          <!-- React -->
          <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-secondary">
            <img
              src="/src/images/React.png"
              alt="React"
              class="card-img-top rounded mb-2"
              style="object-fit: cover"
            />
            </div>
            <div class="text-center mt-1 small">React</div>
          </div>

          <!-- Bootstrap -->
          <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-secondary">
            <img
              src="/src/images/Bootstrap.png"
              alt="Bootstrap"
              class="card-img-top rounded mb-2"
              style="object-fit: cover"
            />
            </div>
            <div class="text-center mt-1 small">Bootstrap</div>
          </div>

          <!-- Photoshop -->
          <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-dark">
            <img
              src="/src/images/Photoshop.png"
              alt="Photoshop"
              class="card-img-top rounded mb-2"
              style="object-fit: cover"
            />
            </div>
            <div class="text-center mt-1 small">Photoshop</div>
          </div>

          <!-- Figma -->
          <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-secondary">
            <img
              src="/src/images/Figma.png"
              alt="Figma"
              class="card-img-top rounded mb-2"
              style="object-fit: cover"
            />
            </div>
            <div class="text-center mt-1 small">Figma</div>
          </div>


          <!-- Creative Cloud -->
          <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-dark">
            <img
              src="/src/images/CreativeCloud.png"
              alt="Creative Cloud"
              class="card-img-top rounded mb-2"
              style="object-fit: cover"
            />
            </div>
            <div class="text-center mt-1 small">Creative Cloud</div>
          </div>

          <!-- Github -->
        <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-secondary">
            <img
              src="/src/images/Github.png"
              alt="Github"
              class="card-img-top rounded mb-2"
              style="object-fit: cover"
            />
            </div>
            <div class="text-center mt-1 small">Github</div>
          </div>

          <!-- Laravel -->
        <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-secondary">
            <img
              src="/src/images/Laravel.png"
              alt="Github"
              class="card-img-top rounded mb-2"
              style="object-fit: contain;"
            />
            </div>
            <div class="text-center mt-1 small">Laravel PHP</div>
          </div>

          <!-- C++ -->
        <div
            class="card bg-dark text-white mx-2 flex-shrink-0"
            style="height: 12rem; width: 10rem"
          >
          <div class="card bg-dark">
            <img
              src="/src/images/C++.png"
              alt="Github"
              class="card-img-top rounded mb-2"
              style="object-fit: contain; height: 10rem;"
            />
            </div>
            <div class="text-center mt-1 small">C++</div>
          </div>

          
        </div>
        

        <!-- Left and Right Arrow Controls -->
        <button
          class="position-absolute top-50 start-0 translate-middle-y btn btn-dark"
          @click="scrollLeft"
        >
          <i class="fa fa-chevron-left"></i>
        </button>
        <button
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
