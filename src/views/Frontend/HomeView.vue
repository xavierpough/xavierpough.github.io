<script setup>
import HeaderSection from "./HeaderSection.vue";
import Welcome from "./Welcome.vue";
import FeaturedProject from "./FeaturedProject.vue";
import AboutMe from "./AboutMe.vue";
import MyGraphics from "./MyGraphics.vue";
import Skills from "./Skills.vue";
import GetInTouch from "./GetInTouch.vue";
import Footer from "@/components/Frontend/Footer.vue";
</script>

<template>
  <HeaderSection>
    <Welcome></Welcome>
    <FeaturedProject></FeaturedProject>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <MyGraphics></MyGraphics>
    <GetInTouch></GetInTouch>
  </HeaderSection>
  <Footer />
</template>
