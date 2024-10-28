<script setup>
import GetToKnowAppleHub from './GetToKnowAppleHub.vue';
import GetToKnowXavier from './GetToKnowXavier.vue';
import AnimatedWordContainer from './AnimatedWordContainer.vue';
import SlidingDiagonalsBackground from './SlidingDiagonalsBackground.vue';
import LocationAwareSuggestions from './LocationAwareSuggestions.vue';

</script>

<template>
  <section>
    <div id="app">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            <i
              class="fa-brands fa-apple"
              alt="Apple Logo"
              width="30"
              height="30"
            ></i>
          </a>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="/" class="nav-link">My Portfolio</a>
            </li>
            <!-- <li><div style="border-left:1px solid #000; height:25px"></div></li> -->
            <li class="nav-item">
              <a href="https://www.apple.com/store" class="nav-link">Store</a>
            </li>
            <li class="nav-item">
              <a href="https://www.apple.com/mac" class="nav-link">Mac</a>
            </li>
            <li class="nav-item">
              <a href="https://www.apple.com/iphone" class="nav-link">iPhone</a>
            </li>
            <li class="nav-item">
              <a href="https://www.apple.com/watch" class="nav-link">Watch</a>
            </li>
            <li class="nav-item">
              <a href="https://www.apple.com/airpods" class="nav-link"
                >AirPods</a
              >
            </li>
          </ul>
        </div>
      </nav>

      <nav
        class="navbar navbar-expand-lg small"
        style="padding: 0.4rem; background-color: #e52a2a"
      >
        <p class="my-0" style="font-size: 0.65rem">
          Disclaimer: This project is not affiliated with, endorsed by, or
          connected to Apple Inc. in any way. All Apple-related trademarks,
          logos, and designs are the property of Apple Inc. and are used here
          solely for demonstration and prototype purposes. This demo is intended
          to showcase design concepts and has no commercial intent or ownership
          claims over any Apple intellectual property.
        </p>
      </nav>

      <!-- Hero Section -->
      <div class="hero-section">
        <h1 class="hero-title text-black">Introducing Apple <spans class="gradient-text ">Hub</spans></h1>
        <p class="hero-subtitle">
          A Personalized Lifestyle and Productivity Ecosystem
        </p>
        <p class="small hero-subtitle">Coming next fall</p>

        <!-- Devices Display -->
        <div class="devices-container">
            <img
            src="/src/images/Hub Marketplace Mockup.png"
            class="device-image"
            alt="Apple Hub Marketplace"
          />
          <img
            src="/src/images/HubHomeMockup.png"
            class="device-image"
            alt="Apple HUB Intro"
          />
          <img
            src="/src/images/Hub Communities Mockup.png"
            class="device-image"
            alt="Apple HUB Intro"
          />
        </div>

        <div class="container text-start py-5">
          <h1 style="color: #e52a2a" class="gradient-text">
            Dynamic Daily Planner (Apple Intelligence-Powered)
          </h1>
          <p class="subtitle">
            A new seamless and intelligent environment where you can manage your daily activities <br />
            explore new experiences, and stay connected with your community <br />
            all within one unified ecosystem.
          </p>
          <a href="#" class="learn-more"
            >Learn more about Dynamic Daily Planner &rsaquo;</a
          >

          <div class="row card-container justify-content-center mt-5 align-items-stretch">
            <!-- Card 1 -->
            <div class="col-md-4 mb-4 d-flex">
              <div class="custom-card p-3 flex-fill">
                <h5 class="gradient-text">Syncing the entire cloud.</h5>
                <p class="text-black">
                  Syncs with Calendar, Reminders, Weather, and Maps to create
                  real-time, adaptive schedules.
                </p>
                <AnimatedWordContainer/>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="col-md-4 mb-4 d-flex">
              <div class="custom-card p-3 flex-fill">
                <h5 class="gradient-text">Apple Intelligence Powered Planning.</h5>
                <p class="text-black">
                  Adjusts your plans based on changing events.
                </p>
                <img
                  src="/src/images/Hub Planner Mockup.png"
                  alt="Genmoji Screenshot"
                  class="img-fluid"
                />
              </div>
            </div>

            <!-- Card 3 -->
            <div class="col-md-4 mb-4 d-flex">
              <div class="custom-card p-3 flex-fill">
                <LocationAwareSuggestions/>
                <h5 class="gradient-text">Location-Aware Task Suggestions.</h5>
                <p class="text-black">
                    Reminds you of tasks relevant to your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetToKnowAppleHub/>
      <!-- Community Section -->
      <div class="community-section">
        <div class="container">
          <div class="row align-items-center">
            <!-- Left Column: Feature List -->
            <div class="col-md-6">
              <h1 class="section-title">
                Local and Interest-Based Communities
              </h1>
              <p class="feature-text">
                Join or create local community groups—whether it's a hiking
                club, book club, or social group—to find events and meet new
                people near you.
              </p>
              <p class="feature-text">
                Get personalized activity suggestions through Maps based on your
                interests, with nearby meetups and recommendations just for you.
              </p>
              <p class="feature-text">
                Connect virtually using SharePlay or FaceTime for group
                activities like movie nights or virtual classes with friends.
              </p>
            </div>

            <!-- Right Column: Apple-inspired Display -->
            <div class="col-md-6 text-center">
              <div class="blue-card">
                <h2>Discover & Connect</h2>
                <p class="card-text">
                  Explore communities in your area or take part in virtual group
                  activities.
                </p>
                <button class="plus-button">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetToKnowXavier/>
      <div class="container text-black pb-4"> <a href="/"><i class="small fa-solid fa-chevron-left"></i> Return Back To Portfolio </a></div>
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro", "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  background-color: #f5f5f7;
  /* background: linear-gradient(to bottom, rgba(178, 216, 232, 1) 10%, rgba(214, 229, 238, 1) 100%); */

  margin: 0;
  padding: 0;
}

.navbar {
  padding: 0.4rem 8rem;
  font-size: 12px;
}

.card {
  border: 0;
}

.hero-section {
  text-align: center;
  padding: 30px 20px;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #6c757d;
}

.devices-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}

.device-image {
    background: transparent;
  width: 20%;
  border-radius: 10px;
  /* box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1); */
}

.subtitle {
  font-size: 1.2rem;
  color: #6e6e73;
}

.learn-more {
  color: #0071e3;
  font-weight: 600;
  text-decoration: none;
}

.card-container {
  margin-top: 40px;
}

.custom-card {
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%; /* Ensure the card fills the height of the column */
}

.custom-card h5 {
  color: #e52a2a;
  font-weight: 600;
  margin-top: 20px;
}

.custom-card img {
  border-radius: 20px;
  margin: 20px;
  width: 90%;
  max-height: 40rem; 
  object-fit: contain; 
}

.gradient-text {
  font-weight: bold;
  background: linear-gradient(135deg, #007aff, #34c759);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ----------------------------- Community Section ------------------ */

/* Container Styling */
.community-section {
  background-color: #f5f5f7;
  padding: 30px 20px;
}

/* Title Styling */
.section-title {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica Neue",
    sans-serif;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

/* Feature Text Styling */
.feature-text {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.5;
}

/* Right Card (Apple-Themed) */
.blue-card {
  background: linear-gradient(135deg, #007aff, #34c759);
  color: white;
  padding: 40px;
  border-radius: 24px;
  position: relative;
  text-align: left;
}

.card-text {
  font-size: 18px;
  margin: 10px 0;
}

/* Plus Button Styling */
.plus-button {
  background-color: white;
  border: none;
  color: #007aff;
  font-size: 24px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.plus-button:hover {
  background-color: #e0e0e0;
}


</style>
