<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
</script>

<template>
  <section style="padding-top: 100px; position: relative; z-index: 1">
    <!-- Background Image Container -->
    <div class="background-image-container"></div>
    <div class="container" id="home">
      <div
        class="top-0 start-0 d-flex flex-column px-4 w-100 h-100"
        style="position: relative; z-index: 2"
      >
        <h1 class="display-3 fw-bold mb-4 text-white">
          Welcome To My Portfolio
        </h1>

        <div class="row align-items-center">
          <div class="col-auto pe-0 pb-1">
            <div
              class="bg-danger text-center d-flex flex-column justify-content-center align-items-center"
              style="width: 40px; height: 40px"
            >
              <div class="small m-0">TOP</div>
              <div class="small m-0">10</div>
            </div>
          </div>
          <div class="col">
            <p class="lead mb-2 fw-bold">#1 in Portfolios Today</p>
          </div>
        </div>

        <p class="mb-5">
          In this portfolio, explore my creative journey, where artistry meets
          innovation. Delve into expertly crafted websites, stunning visual
          designs, and compelling narratives that captivate and inspire.
        </p>

        <p class="fw-bold ms-2">Trending Now</p>

        <div class="container mt-0 mb-0">
          <div class="row">
            <!-- Trending Videos -->

            <!-- Failure Breeds Success -->
            <div class="col-md-3 pb-2">
              <div class="video-box position-relative">
                <!-- Link wrapped around the image to trigger Fancybox -->
                <a
                  href="https://youtu.be/UtpmaRI0m-4?si=4VhOVEMhWPWjQBtp"
                  data-fancybox
                  data-type="iframe"
                >
                  <img
                    src="/src/images/Failure Breeds Succes Cover.png"
                    alt="Failure Breeds Success"
                    class="img-fluid"
                  />
                  <div class="overlay">
                    <i class="fa-solid fa-circle-play play-icon"></i>
                  </div>
                  <div
                    class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1"
                  >
                    TOP 10
                  </div>
                </a>
              </div>
            </div>

            <!-- Life Wireless Commercial #001 -->
            <div class="col-md-3 mb-sm-2 pb-2">
              <div class="video-box position-relative">
                <!-- Link wrapped around the image to trigger Fancybox -->
                <a
                  href="https://vimeo.com/804685846"
                  data-fancybox
                  data-type="iframe"
                >
                  <img
                    src="/src/images/Life Wireless Commercial _001-min.png"
                    alt="Life Wireless Commercial"
                    class="img-fluid"
                  />
                  <div class="overlay">
                    <i class="fa-solid fa-circle-play play-icon"></i>
                  </div>
                  <div
                    class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1"
                  >
                    TOP 10
                  </div>
                </a>
              </div>
            </div>

            <!-- Yoga Entails Commercial -->
            <div class="col-md-3 mb-sm-2 pb-2">
              <div class="video-box position-relative">
                <a
                  href="https://vimeo.com/1000481557?share=copy"
                  data-fancybox
                  data-type="iframe"
                >
                  <img
                    src="/src/images/YogaEntailsCommercial.png"
                    alt="Yoga Entails Commercial"
                    class="img-fluid"
                  />
                  <div class="overlay">
                    <i class="fa-solid fa-circle-play play-icon"></i>
                  </div>
                  <div
                    class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1"
                  >
                    TOP 10
                  </div>
                </a>
              </div>
            </div>

            <!-- Life Wireless Commercial #002 -->
            <div class="col-md-3 mb-sm-2 pb-2">
              <div class="video-box position-relative">
                <a
                  href="https://vimeo.com/804686001"
                  data-fancybox
                  data-type="iframe"
                >
                  <img
                    src="/src/images/Life Wireless Commercial 002.png"
                    alt="Life Wireless Commercial #2"
                    class="img-fluid"
                  />
                  <div class="overlay">
                    <i class="fa-solid fa-circle-play play-icon"></i>
                  </div>
                  <div
                    class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1"
                  >
                    TOP 10
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p class="small fst-italic ms-2" style="font-size: 9pt">
          Designed, created, and edited by yours truly!
        </p>
      </div>
    </div>
  </section>

  
</template>

<style scoped>
.background-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.7)
    ),
    url("/src/images/Wall.jpg");
  background-size: cover;
  z-index: -2;
  opacity: 0.8;
}

.video-box {
  cursor: pointer;
  overflow: hidden;
}

.video-box img {
  display: block;
  width: 100%;
  height: auto;
}

.video-box .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Darker overlay */
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.video-box:hover .overlay {
  opacity: 1;
}

.play-icon {
  font-size: 3rem;
  color: white;
}
</style>
