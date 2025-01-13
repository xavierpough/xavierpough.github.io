<script setup>
import { ref } from "vue";
</script>

<template>
    <!-- Marketplace and Smart Goal Section -->
    <section class="promo-section container">
      <!-- Card: Marketplace for Services & Micro-Gigs -->
      <div class="promo-card promo-card-bg">
        <div class="row align-items-center">
          <div class="col-8">
            <h3 class="card-title">Thank You!</h3>
            <p>Be sure to stay on the lookout for updates to <i class="fa-brands fa-apple"></i> Hub.</p>
            <div class="small">Xavier Pough</div>
            <div class="small fw-light">Software Engineer | UX Designer | UI Engineer</div>
            <div class="small">
              <p><span><i class="small fa-regular fa-envelope"></i></span> &nbsp;xavierpough@gmail.com</p>
            </div>
          </div>
          <div class="col-4 text-end">
            <img
              src="/src/images/apple/XavierPoughMemoji.png"
              alt="Gainz United App Logo"
              class="card-image"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  

<style scoped>
/* General Styles */
.promo-section {
  background-color: #f5f5f7;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Promo Card Styles */
.promo-card {
  flex: 1;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  padding: 20px 30px; /* Adjusted padding for more room inside the card */
  width: 100%; /* Make the card responsive */
}

.promo-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
}

/* Card with Gradient Background */
.promo-card-bg {
  background: linear-gradient(45deg, #ff0000, #ffd900);
  color: white;
}

.card-title {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica Neue", sans-serif;
  font-size: 2rem;
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

/* Card Image Styling */
.card-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  margin-top: 20px;
}

.thanks-text {
  font-family: "Pacifico";
  font-size: 4.5rem;
  text-align: center;
  margin: 0;
  background: linear-gradient(90deg, #50c9c3, #5c8df9, #d16ba5, #ff7a5a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

</style>
