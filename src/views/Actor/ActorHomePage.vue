<script setup>
import ResumeTemplate from "@/components/ResumeTemplate.vue";
import Footer from "@/components/Actor/Footer.vue";
import GetInTouch from "../Frontend/GetInTouch.vue";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const resume = {
  type: "Actors",
  name: "Xavier Pough",
  location: "Atlanta, GA",
  email: "xavierpough@gmail.com",
  play_link: "https://youtu.be/8KyCkyxd8HM?si=a794iTSVYnoSTh9U",
  number: "+1-803-477-5474",
  imdb: "https://www.imdb.com/name/nm14567587/",
  agent: "East Coast Talent",
  website: "www.xavierpough.com/actor",
  bio: "Xavier Pough is an actor, film writer, and entrepreneur. He was born in Columbia, SC. He attended Charleston Southern University where he minored in Theatre. Here is where Xavier got his introduction to the world of acting. Shortly after finishing up college, Xavier moved to Atlanta, GA to pursue his love for acting.",
  education: [
    {
      degree: "Theatre (Minor)",
      institution: "Charleston Southern Univeristy",
      location: "Charleston, SC",
      graduationDate: "May 2020",
    },
  ],
  stats: [
    {
      height: "6'4",
      weight: "200",
      ageRange: "18-30",
      eyeColor: "Brown",
    },
  ],
  training: [
    {
      title: "Actors Spark",
      subtitle: "Get Scene Studios",
      description: "Jesse Malinowski",
      location: "Atlanta, GA",
    },
    {
      title: "Master The Audition Workshop",
      subtitle: "Tyler Perry Studio's",
      description: "Rhyvynn Drummer",
      location: "Atlanta, GA",
    },
    {
      title: "Actor Workshop",
      subtitle: "People's Store",
      description: "Thom Milam",
      location: "Atlanta, GA",
    },
    {
      title: "Acting For The Camera I",
      subtitle: "Talent Inc.",
      description: "Brett Zimmerman / Courtney Tur",
      location: "Orlando, FL",
    },
    {
      title: "Casting Director Workshop",
      subtitle: "The Casting Director Cut",
      description: "Ramani Leah",
      location: "Virtual",
    },
    {
      title: "Acting For The Camera II",
      subtitle: "Avalon Artists",
      description: "Craig Holzberg",
      location: "Orlando, FL",
    },
    {
      title: "Audition Technique",
      subtitle: "Millie Lewis Talent Agency.",
      description: "Cary Anderson",
      location: "Charleston, SC",
    },
    {
      title: "Acting Workshop with AMDA",
      subtitle: "American Musical and Dramatic Academy",
      description: "American Musical and Dramatic",
      location: "Virtual",
    },
  ],
  experiences: [
    {
      title: "A Cry Nobody Heard",
      subtitle: "Cast",
      duration: "Theatre",
      reel: "https://youtu.be/NDzphkDTK5I?si=OvwghBA9VYCdiJnk&t=3027",
      details: [
        "Playing the role of Derek McAllister. Also starring Tony Grant, from Tyler Perry's 'Love Thy Neighbor', Willie Taylor from R&B group 'Day 26' and Love & Hip-Hop, along with the cast from the hit series 'Complicated'.",
      ],
      availableOn: [
        {
          youtube: true,
          tubi: false,
          tvone: false,
        },
      ],
    },
    {
      title: "Complicated: Atlanta",
      subtitle: "Guest Star",
      duration: "TV Series",
      reel: "https://youtube.com/shorts/0T83eo_KD40?si=RyhZgcrmlGtKmIZh",
      details: [
        "Directed by award wining director, Johnny Sizemore, and wrote by award winning writer, Kerrick Greer, Complicated: Atlanta follows a group of friends who maneuver through life's triumphs as they deal with the pressures of self-identity, love, and sexual liberation. ",
      ],
      availableOn: [
        {
          youtube: true,
          tubi: true,
          tvone: false,
        },
      ],
    },
    {
      title: "Fatal Attraction",
      subtitle: "Guest Star",
      duration: "TV Series",
      details: [
        "Guest starring in season 13, episode 30 and season 15, episode 26.",
      ],
      availableOn: [
        {
          youtube: false,
          tubi: true,
          tvone: true,
        },
      ],
    },
    {
      title: "The Mousetrap",
      subtitle: "Cast",
      duration: "Theatre",
      details: [
        "The Mousetrap, by Agatha Chrisite. Played the role of Christopher Wren at Charleston Southern University",
      ],
    },
  ],
  references: [
    {
      name: "Johnny Sizemore",
      title: "Award Wininng Director",
      company: "Showtime Productions",
      email: "showtimeproductionsgvl@gmail.com",
    },
    {
      name: "Thomas Keating",
      title: "Dean of Theatre",
      company: "Charleston Southern Univeristy",
      email: "tkeating@csuniv.edu",
    },
    {
      name: "Kerrick Greer",
      title: "Award Winning Screenwriter",
      company: "Showtime Productions",
      email: "showtimeproductionsgvl@gmail.com",
    },
    {
      name: "Rachel Murray",
      title: "Talent Inc Director",
      company: "Talent Inc",
      email: "rachael@talentincusa.com",
    },
  ],
};
</script>

<template>
      <div class="py-4">
      <div
        class="position-relative d-flex justify-content-center align-items-center"
      >
        <!-- Red line that spans the entire screen width -->
        <div
          class="position-absolute w-100"
          style="height: 45%; top: 50%; transform: translateY(-50%); z-index: 0; background: radial-gradient(circle at 10% 20%, rgb(221, 49, 49) 0%, rgb(119, 0, 0) 90%);"
        ></div>

        <!-- Circle picture and gradient overlay -->
        <div
          class="position-relative"
          style="width: 100%; max-width: 300px; aspect-ratio: 1; z-index: 1"
        >
          <img
            src="/src/images/actor/PrimaryHeadshot.png"
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
        </div>
      </div>
    </div>

  <div class="container mt-3">
    <ResumeTemplate :resume="resume">
      <div class="resume-body my-3">
        <div class="h5 fw-bold text-white">Top Credits</div>
        <div class="row">
          <div class="col-md-4 pb-2">
            <!-- Complicated Atlanta -->
            <div class="position-relative">
              <img
                src="/src/images/actor/ComplicatedAtlanta.jpg"
                alt="Complicated Atlanta"
                class="img-fluid"
              />
            </div>
          </div>

          <!-- Fatal Attraction -->
          <div class="col-md-4  pb-2">
            <div class="position-relative">
              <img
                src="/src/images/actor/FatalAttraction.webp"
                alt="Fatal Attraction"
                class="img-fluid"
              />
            </div>
          </div>

          <!-- A Cry Nobody Heard -->
          <div class="col-md-4 pb-2">
            <div class="position-relative">
              <img
                src="/src/images/actor/ACryNobodyHeard.jpeg"
                alt="A Cry Nobody Heard"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </ResumeTemplate>
  </div>
  <GetInTouch />
  <Footer />
</template>

<style scoped>
.resume-body {
  font-size: 15px;
}
</style>
