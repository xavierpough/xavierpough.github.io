<script setup>
import { ref, onMounted } from 'vue';

// Words to animate
const words = ref([
  'Maps', 'Weather', 'Fitness+', 'Reminders',
  'iCloud+', 'Calendar', 'Workouts', 'Wallet',
]);

// Container height and padding settings
const containerHeight = 600;  // Fixed container height
const maxOverlapPercentage = 0.05;  // Allow overlap of up to 5%

// Compute allowed vertical step size based on number of words and overlap limit
const stepSize = containerHeight / words.value.length;
const maxOffset = stepSize * maxOverlapPercentage;  // Maximum offset per word

// Function to generate random styles
const generateWordStyles = (index) => ({
  startX: `${Math.random() * -200 - 50}px`,  // Start off-screen (left)
  endX: `${Math.random() * 200 + 50}px`,     // End off-screen (right)
  yPosition: `${index * stepSize - containerHeight / 2 + stepSize / 2}px`, // Adjust for centering
  fontSize: `${Math.floor(Math.random() * 75) + 24}px`,  // Random font size (24-44px)
  delay: `${Math.random() * 3}s`,  // Random delay (0-3s)
});


// Reactive state to store word styles
const wordStyles = ref([]);

// Generate styles when component is mounted
onMounted(() => {
  wordStyles.value = words.value.map((_, index) => generateWordStyles(index));
});
</script>

<template>
  <div class="animated-words-container">
    <span
      v-for="(word, index) in words"
      :key="index"
      class="animated-word"
      :style="{
        '--start-x': wordStyles[index]?.startX,
        '--end-x': wordStyles[index]?.endX,
        '--y-position': wordStyles[index]?.yPosition,
        'font-size': wordStyles[index]?.fontSize,
        'animation-delay': wordStyles[index]?.delay,
      }"
    >
      {{ word }}
    </span>
  </div>
</template>

<style scoped>
@keyframes horizontal-slide {
  0% {
    opacity: 0;
    transform: translateX(var(--start-x)) translateY(var(--y-position)) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: translateX(0) translateY(var(--y-position)) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateX(var(--end-x)) translateY(var(--y-position)) scale(0.8);
  }
}

.animated-words-container {
  position: relative;
  height: 40rem; /* Fixed container height */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 16px;
  background-color: #f5f5f7;
}

.animated-word {
  position: absolute;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro', 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #007aff, #34c759);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  animation: horizontal-slide 5s infinite;
  opacity: 0;
}

.animated-words-container .animated-word:nth-child(odd) {
  animation-direction: alternate;
}

.animated-words-container .animated-word:nth-child(even) {
  animation-direction: alternate-reverse;
}
</style>
