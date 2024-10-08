<script setup>
import Calculator from "@/components/Frontend/Calculator.vue";
import { ref } from "vue";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const showCalculator = ref(false);
</script>

<template>
  <section id="projects" class="py-5 bg-secondary px-4">
    <div class="container-fluid">
      <h2 class="h3 fw-bold mb-4">Featured Projects</h2>
      <div class="row g-4">
        <!-- Investuition App -->
        <div class="col-sm-6 col-lg-4">
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
              <div class="mt-auto">
                <div class="text-end">
                  <i class="fa-brands fa-react me-2"></i>
                  <i class="fa-brands fa-node me-2"></i>
                  <i class="fa-brands fa-css3-alt"></i>
                </div>

                <a href="https://github.com/xavierpough/Investution-App" class="btn btn-danger mt-2 disabled">
                  View Project&nbsp;
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Javascript Calulator -->
        <div class="col-sm-6 col-lg-4">
          <div class="card bg-dark text-white h-100">
            <div class="card-body d-flex flex-column">
              <h3 class="card-title h5 fw-bold mb-0">Javascript Calculator</h3>

              <div class="d-flex align-items-center mt-1">
                <span
                  class="text-black px-2 d-inline-block bg-white rounded-2"
                  style="font-size: 8px"
                >
                  TEST BELOW <i class="fa-solid fa-play ms-1"></i>
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

              <div class="mt-auto">
                <div class="text-end">
                  <i class="fa-brands fa-js me-2"></i>
                  <i class="fa-brands fa-html5 me-2"></i>
                  <i class="fa-brands fa-css3-alt"></i>
                </div>

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

                <a href="https://github.com/xavierpough/Javascript-Calculator" class="btn btn-danger">
                  View Project&nbsp;
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Gainz United App -->
        <div class="col-sm-6 col-lg-4">
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
</style>
