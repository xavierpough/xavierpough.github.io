<script setup>
import { ref } from "vue";

const toggleExpandCard = (card) => {
  card.expanded = !card.expanded;
};

// State management for individual cards
const marketplaceCard = ref({ expanded: false });
const goalTrackerCard = ref({ expanded: false });
const widgetsCard = ref({ expanded: false });

</script>

<template>
  <!-- Marketplace and Smart Goal Section -->
   <h1 class="section-title container">Get To Know Apple Hub</h1>
  <section class="promo-section">
    <div class="promo-container">
      <!-- Card 1: Marketplace for Services & Micro-Gigs -->
      <div
        class="promo-card promo-card-bg"
        :class="{ 'expanded': marketplaceCard.expanded }"
        :style="{ backgroundImage: marketplaceCard.expanded ?  '' : `url('/src/images/MarketplaceWithHub.jpg')` }">
        <h3 class="card-title">Marketplace for Services & Micro-Gigs</h3>
        <p class="card-text" :style="{visibility: marketplaceCard.expanded ? '' : 'hidden'}">
          Offer or hire small services—like tutoring, dog walking, or
          photography—right from the app.
        </p>
        <p class="card-text" :style="{visibility: marketplaceCard.expanded ? '' : 'hidden'}">
          Payments are seamless with Apple Pay, encouraging Wallet use and
          making every transaction effortless.
        </p>
        <button class="expand-button" @click="toggleExpandCard(marketplaceCard)">
          <i v-if="!marketplaceCard.expanded" class="fa-solid fa-plus"></i>
          <i v-else class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Card 2: Smart Goal Tracker & Rewards -->
      <div
        class="promo-card promo-card-bg"
        :class="{ 'expanded': goalTrackerCard.expanded }"
        :style="{backgroundImage: goalTrackerCard.expanded ? '' : `url('/src/images/SetWorkoutsWithHub.jpg')`}"
      >
        <h3 class="card-title">Smart Goal Tracker & Rewards</h3>
        <p class="card-text" :style="{visibility: goalTrackerCard.expanded ? '' : 'hidden'}">
          Set personal, fitness, or financial goals—like "Save $500" or "Walk 5K
          every day."
        </p>
        <p class="card-text" :style="{visibility: goalTrackerCard.expanded ? '' : 'hidden'}">
          Unlock rewards such as exclusive wallpapers, App Store credits, or
          Apple Music discounts.
        </p>
        <p class="card-text" :style="{visibility: goalTrackerCard.expanded ? '' : 'hidden'}">
          Syncs with Apple Health, Wallet, and the latest savings features to
          keep you motivated.
        </p>
        <button class="expand-button" @click="toggleExpandCard(goalTrackerCard)">
          <i v-if="!goalTrackerCard.expanded" class="fa-solid fa-plus"></i>
          <i v-else class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Card 3: Smart Goal Tracker & Rewards -->
      <div
        class="promo-card promo-card-bg"
        :class="{ 'expanded': widgetsCard.expanded }"
        :style="{backgroundImage: widgetsCard.expanded ? '' : `url('/src/images/iPhoneWidgets.png')`}"
      >
        <h3 class="card-title">Interactive Lock Screen Widgets</h3>
        <p class="card-text" :style="{visibility: widgetsCard.expanded ? '' : 'hidden'}">
          Live widgets for your day’s events, goals, and upcoming social plans
          to keep users checking their phones frequently.
        </p>
        <button class="expand-button" @click="toggleExpandCard(widgetsCard)">
          <i v-if="!widgetsCard.expanded" class="fa-solid fa-plus"></i>
          <i v-else class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* General Styles for the Promo Section */
.promo-section {
  background-color: #f5f5f7;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.promo-container {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  max-width: 1200px;
}

/* Individual Promo Cards */
.promo-card {
  flex: 1;
  min-width: 280px;
  max-width: 500px;
  background-color: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
}

.promo-card:hover {
  transform: scale(1.05);
}

.promo-card.expanded {
    background: linear-gradient(135deg, #007aff, #34c759);
    color: white;
}

/* Typography */
.card-title {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica Neue",
    sans-serif;
  font-size: 24px;
  margin-bottom: 16px;
  color: white;
}

/* Card with Background Image */
.promo-card-bg {
  background-size: cover; /* Ensure the image covers the entire card */
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Persistent Black Overlay */
.promo-card-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3); /* Slight black overlay by default */
  border-radius: 24px;
  z-index: 0;
  transition: background 0.3s ease;
}

/* Ensure content stays on top of the overlay */
.promo-card-bg h3,
.promo-card-bg p {
  position: relative;
  z-index: 1;
}

/* Hover Effects */
.promo-card-bg:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
}

.promo-card-bg:hover::before {
  background: rgba(0, 0, 0, 0.3); /* Slightly darker overlay on hover */
}

.card-text {
  font-size: 16px;
  color: white;
  line-height: 1.6;
  margin-bottom: 12px;
}

.expand-button {
  background-color: white;
  border: none;
  color: #555555;
  font-size: 24px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.section-title {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica Neue",
    sans-serif;
  font-weight: 700;
  color: #333;
}

.expand-button:hover {
  background-color: #e0e0e0;
}
</style>
