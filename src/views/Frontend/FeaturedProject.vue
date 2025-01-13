<script setup>
import Calculator from "@/components/Frontend/Calculator.vue";
import { ref } from "vue";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { RouterLink } from "vue-router";

const showCalculator = ref(false);

// Reference to the scroll container
const scrollContainer = ref(null);

// Handle infinite scrolling
const moveCardToEnd = () => {
  if (scrollContainer.value) {
    const firstCard = scrollContainer.value.querySelector(".project-card");
    if (firstCard) {
      scrollContainer.value.appendChild(firstCard); // Move the first card to the end
      scrollContainer.value.scrollBy({ left: -firstCard.offsetWidth, behavior: "instant" });
    }
  }
};

const moveCardToStart = () => {
  if (scrollContainer.value) {
    const lastCard = scrollContainer.value.querySelector(".project-card:last-child");
    if (lastCard) {
      scrollContainer.value.prepend(lastCard); // Move the last card to the start
      scrollContainer.value.scrollBy({ left: lastCard.offsetWidth, behavior: "instant" });
    }
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    const cardWidth = scrollContainer.value.querySelector(".project-card")?.offsetWidth || 0;
    scrollContainer.value.scrollBy({ left: cardWidth, behavior: "smooth" });

    // Wait for the scroll to complete, then reorder cards
    setTimeout(() => moveCardToEnd(), 300);
  }
};

const scrollLeft = () => {
  if (scrollContainer.value) {
    const cardWidth = scrollContainer.value.querySelector(".project-card")?.offsetWidth || 0;
    scrollContainer.value.scrollBy({ left: -cardWidth, behavior: "smooth" });

    // Wait for the scroll to complete, then reorder cards
    setTimeout(() => moveCardToStart(), 300);
  }
};
</script>

<template>
  <section id="projects" class="py-5 bg-secondary px-4">
    <div class="container-fluid">
      <h2 class="h3 fw-bold mb-4">Featured Projects</h2>

      <!-- Scrollable Row with Arrow Controls -->
      <div class="position-relative">
        <div
          class="d-flex"
          style="scroll-behavior: smooth; overflow: hidden;"
          ref="scrollContainer"
        >
        <!-- Apple Hub -->
        <div class="col-sm-6 col-lg-4 project-card px-2">
          <div class="card bg-dark text-white h-100 d-flex flex-column">
            <div class="card-body d-flex flex-column">
              <h3 class="card-title h5 fw-bold mb-0">
                Apple Hub (Concept) <i class="fa-brands fa-apple"></i>
              </h3>

              <div class="d-flex align-items-center mt-1">
                <span
                  class="text-black px-2 d-inline-block bg-white rounded-2"
                  style="font-size: 8px"
                >
                  VIEW BELOW <i class="fa-solid fa-play ms-1"></i>
                </span>
              </div>

              <div
                class="d-flex align-items-center justify-content-center py-2"
              >
                <img
                  src="/src/images/apple/HubHomeMockup.png"
                  alt="Investuition App Logo"
                  class="card-img-top rounded me-3"
                  style="object-fit: cover; height: 250px; width: auto"
                />
              </div>

              <p class="card-text text-white mb-1 small">
                I've always admired Apple's websites for their creativity, uniqueness, 
                and captivating design. Inspired by the release of Apple Intelligence, 
                I envisioned a productivity app that leverages its capabilities while 
                introducing a fresh set of tools. I designed and engineered a basic web 
                app that embodies the Apple aesthetic, providing a glimpse into my concept. 
                <!-- Apple Hub is an all-in-one lifestyle platform exclusive to Apple
                devices that combines Apple Intelligence-powered personal
                planning, social experiences, and local discovery to make users
                more engaged with their devices throughout the day. It blends
                productivity, community engagement, and seamless integration
                with Apple services to encourage constant use. -->
              </p>
              <p class="fst-italic" style="font-size: 10px">
                Disclaimer: This project is not affiliated with, endorsed by, or
                connected to Apple Inc. in any way. All Apple-related
                trademarks, logos, and designs are the property of Apple Inc.
                and are used here solely for demonstration and prototype
                purposes. This demo is intended to showcase design concepts and
                has no commercial intent or ownership claims over any Apple
                intellectual property.
              </p>


              <!-- This section will remain at the bottom of the card -->
              <div
                class="d-flex align-items-center justify-content-between mt-auto"
              >
                <!-- Button Section -->
                <RouterLink
                  to="/apple-hub"
                  class="btn btn-lg text-white border-0 align-items-center ps-0 pe-3 py-0"
                  title="Go To Apple Hub"
                  style="font-size: 30px"
                >
                  <i class="fa-solid fa-circle-play"></i>
                </RouterLink>

                <!-- Icons Section -->
                <div>
                  <i class="fa-brands fa-vuejs me-2"></i>
                  <i class="fa-brands fa-html5 me-2"></i>
                  <i class="fa-brands fa-css3-alt me-2"></i>
                  <i class="fa-brands fa-bootstrap"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Investuition App -->
        <div class="col-sm-6 col-lg-4 project-card px-2">
          <div class="card bg-dark text-white h-100 d-flex flex-column">
            <div class="card-body d-flex flex-column">
              <h3 class="card-title h5 fw-bold mb-0">
                Investuition Finance - Mobile App
              </h3>

              <div class="d-flex align-items-center">
                <span
                  class="text-black px-2 d-inline-block bg-white rounded-2"
                  style="font-size: 8px"
                >
                  COMING SOON
                </span>
                <span class="ms-1" style="font-size: 12px"
                  ><i class="fa-brands fa-app-store-ios text-white"></i
                ></span>
                <span class="ms-1" style="font-size: 12px">
                  <i class="fa-brands fa-android"></i>
                </span>
              </div>

              <div
                class="d-flex align-items-center justify-content-center py-2"
              >
                <img
                  src="/src/images/Projects/Investuition/Logo.png"
                  alt="Investuition App Logo"
                  class="card-img-top rounded me-3"
                  style="object-fit: cover; height: 75px; width: 75px"
                />

                <img
                  src="/src/images/Projects/Investuition/InvestuitionMockup1.png"
                  alt="Investuition App Mockup 1"
                  class="card-img-top rounded"
                  style="object-fit: cover; height: 250px; width: auto"
                />

                <img
                  src="/src/images/Projects/Investuition/InvestuitionMockup2.png"
                  alt="Investuition App Mockup 2"
                  class="card-img-top rounded ms-1"
                  style="object-fit: cover; height: 250px; width: auto"
                />
              </div>

              <p class="card-text text-white mb-1 small">
                I developed this app to empower individuals with the tools for
                financial stability and growth through effective money
                management. Built with React Native and a Node.js backend, this
                project marks my introduction to React and React Native and is
                currently my primary focus. Through this work, I’m deepening my
                skills in mobile app development and backend integration.
              </p>

              <!-- This section will remain at the bottom of the card -->
              <div
                class="d-flex align-items-center justify-content-between mt-auto"
              >
                <!-- Button Section -->
                <a
                  href="https://github.com/xavierpough/Investution-App"
                  class="btn btn-danger disabled"
                >
                  View Project&nbsp;
                  <i class="fa-brands fa-github"></i>
                </a>
                <!-- Icons Section -->
                <div>
                  <i class="fa-brands fa-react me-2"></i>
                  <i class="fa-brands fa-node me-2"></i>
                  <i class="fa-brands fa-css3-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Javascript Calulator -->
        <div class="col-sm-6 col-lg-4 project-card px-2">
          <div class="card bg-dark text-white h-100">
            <div class="card-body d-flex flex-column">
              <h3 class="card-title h5 fw-bold mb-0">Javascript Calculator</h3>

              <div class="d-flex align-items-center mt-1">
                <span
                  class="text-black px-2 d-inline-block bg-white rounded-2"
                  style="font-size: 8px"
                >
                  VIEW BELOW <i class="fa-solid fa-play ms-1"></i>
                </span>
              </div>

              <div
                class="d-flex align-items-center justify-content-center py-2"
              >
                <span style="font-size: 60px"
                  ><i class="fa-brands fa-js me-2"></i
                ></span>
                <img
                  src="/src/images/Projects/Investuition/JavascriptCalculator.png"
                  alt="Investuition App Logo"
                  class="card-img-top rounded me-3"
                  style="object-fit: cover; height: 250px; width: auto"
                />
              </div>

              <p class="card-text text-white mb-1 small">
                This is one of my early JavaScript web applications, where I
                combined my growing knowledge of JavaScript and CSS to build a
                basic yet fully functional calculator. This project was a
                pivotal step in my learning journey, allowing me to explore core
                JavaScript concepts like DOM manipulation, event handling, and
                basic arithmetic operations. The styling, though minimal,
                provided a practical exercise in using CSS to create a clean and
                user-friendly interface.
              </p>

              <!-- This section will remain at the bottom of the card -->
              <div
                class="d-flex align-items-center justify-content-between mt-auto"
              >
                <!-- Button Section -->
                <div>
                  <a
                  href="#calculator-modal"
                  data-fancybox
                  class="btn btn-lg text-white border-0 align-items-center ps-0 pe-3 py-0"
                  title="Test the calculator"
                  style="font-size: 30px"
                  @click="showCalculator = true"
                >
                  <i class="fa-solid fa-circle-play"></i>
                </a>

                <a
                  href="https://github.com/xavierpough/Javascript-Calculator"
                  class="btn btn-danger"
                >
                  View Project&nbsp;
                  <i class="fa-brands fa-github"></i>
                </a>
                </div>
                <!-- Icons Section -->
                <div>
                  <i class="fa-brands fa-js me-2"></i>
                  <i class="fa-brands fa-html5 me-2"></i>
                  <i class="fa-brands fa-css3-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gainz United App -->
        <div class="col-sm-6 col-lg-4 project-card px-2">
          <div class="card bg-dark text-white h-100">
            <div class="card-body d-flex flex-column">
              <h3 class="card-title h5 fw-bold mb-0">
                Gainz United - iOS Mobile App
              </h3>

              <div class="justify-content-center text-center pt-1">
                <img
                  src="/src/images/Projects/GainzUnited/Logo.png"
                  alt="Gainz United App Logo"
                  class="card-img-top rounded me-1"
                  style="object-fit: cover; height: 40px; width: 40px"
                />
              </div>
              <div
                class="d-flex align-items-center justify-content-center py-2"
              >
                <img
                  src="/src/images/Projects/GainzUnited/LaunchPage.png"
                  alt="Gainz United App Logo"
                  class="card-img-top rounded me-1"
                  style="
                    object-fit: cover;
                    height: 175px;
                    width: auto;
                    max-width: 25%;
                  "
                />

                <img
                  src="/src/images/Projects/GainzUnited/Homepage.png"
                  alt="Gainz United Homepage Mockup"
                  class="card-img-top rounded me-1"
                  style="
                    object-fit: cover;
                    height: 175px;
                    width: auto;
                    max-width: 25%;
                  "
                />

                <img
                  src="/src/images/Projects/GainzUnited/ProfilePage.png"
                  alt="Gainz United Profile Page"
                  class="card-img-top rounded me-1"
                  style="
                    object-fit: cover;
                    height: 175px;
                    width: auto;
                    max-width: 25%;
                  "
                />

                <img
                  src="/src/images/Projects/GainzUnited/Messaging.png"
                  alt="Gainz United Profile Page"
                  class="card-img-top rounded me-1"
                  style="
                    object-fit: cover;
                    height: 175px;
                    width: auto;
                    max-width: 25%;
                  "
                />
              </div>

              <p class="card-text text-white mb-1 small">
                This was my very first programming project. Using Apple's Swift
                programming language, I developed a social media iOS app
                specifically designed for the fitness niche. Through this
                project, I gained foundational experience in iOS development and
                app design, which sparked my passion for mobile app creation. It
                laid the groundwork for my journey into more complex and
                innovative app development.
              </p>

              <div class="text-end mt-auto">
                <i class="fa-brands fa-apple me-2"></i>
                <i class="fa-brands fa-app-store-ios me-2"></i>
                <i class="fa-brands fa-swift"></i>
              </div>
            </div>
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
    </div>
  </section>

  <!-- Hidden calculator modal content -->
  <div v-if="showCalculator" style="display: none">
    <div
      id="calculator-modal"
      class="p-0"
      style="background-color: transparent"
    >
      <Calculator />
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 992px) {
  .card-img-top {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .card-img-top {
    height: 125px;
  }
}

@media (max-width: 576px) {
  .card-img-top {
    height: 100px;
  }
}

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

.scroll-container {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 100px; /* Space between cards */
}

/* Card styles for consistent layout */
.scroll-container .card {
  height: 100%; /* Match the container height */
  width: 100%; /* Match the container width */
  display: flex;
  flex-direction: column;
}
</style>
