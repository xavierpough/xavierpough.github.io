<script setup>
import { ref } from 'vue';

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section id="about" class="py-5 bg-dark px-4 container">
    <div class="container-fluid">
      <div class="row g-4">
        <div class="col-lg-6">
          <h2 class="h3 fw-bold mb-4">About Me</h2>
          <p class="text-white mb-4">
            Hi, I'm Xavier Pough, a front-end developer with a strong foundation
            in computer science and a passion for artistry. Web development is
            more than just code to me—it's a canvas for creativity. With a
            Bachelor's of Science in Computer Science from Charleston Southern
            University, I combine technical expertise with an artistic eye to
            craft visually stunning, functional websites. I'm always exploring
            new technologies and frameworks to expand my skill set, and I'm
            eager to join a team where I can bring my creative prowess to life
            through innovative web solutions.
          </p>
          <router-link @click.prevent="scrollToContact" class="btn btn-danger px-4 py-3 fw-medium" >
            Get in Touch
          </router-link>
        </div>
        <div
          class="col-lg-6 position-relative d-flex justify-content-center align-items-center"
        >
          <div
            class="position-relative"
            style="width: 100%; max-width: 400px; aspect-ratio: 1"
          >
            <img
              src="/src/images/Headshot2.png"
              alt="About Me"
              class="img-fluid rounded-circle w-100 h-100"
              style="object-fit: cover"
            />
            <div
              class="position-absolute top-0 start-0 w-100 h-100 rounded-circle bg-gradient"
              style="
                background: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0.2),
                  rgba(0, 0, 0, 0.2)
                );
              "
            ></div>
            <div
              class="position-absolute start-50 translate-middle text-center"
              style="top: 90%"
            >
              <h3 class="h4 fw-bold mb-2 text-white">Xavier Pough</h3>
              <p class="text-white">UI Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
