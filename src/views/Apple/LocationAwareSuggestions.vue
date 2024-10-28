<template>
    <section class="location-container">

        <div class="content"> 
            <h1>Smart Notifications</h1>
            <p>Predicts the best times for reminders</p>
        </div>
      <!-- Animated Background Layers -->
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
  
      <!-- Image at Bottom -->
      <img
        src="/src/images/apple/HubDynamicIsland.png"
        alt="Dynamic Island Screenshot"
        class="bottom-image"
      />
    </section>
  </template>
  
  <style scoped>
  .location-container {
    background-color: #f5f5f7;
    border-radius: 20px;
    margin: 20px;
    width: 90%;
    height: 40rem;
    position: relative;
    overflow: hidden;
  }
  
  /* Animated Background Layers */
  .bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #34c759 50%, #007aff 50%);
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    /* opacity: 0.5; Set to 50% opacity */
    z-index: 1;
  }
  
  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
    opacity: 0.5; 
  }
  
  .bg3 {
    animation-duration: 5s;
    opacity: 0.5;
  }
  
  /* Image Positioned at the Bottom of Container */
  .bottom-image {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    width: auto;
    max-width: 100%;
    border-radius: 10px;
  }

  .content {
  left:50%;
  padding:10vmin;
  /* text-align:center; */
  top: 20%;
  transform:translate(-50%, -50%);
  position: absolute;
  z-index: 10;
}

h1 {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica Neue",
    sans-serif;
  font-weight: 700;
  color: white;
}
  
  /* Slide Animation */
  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
  </style>
  