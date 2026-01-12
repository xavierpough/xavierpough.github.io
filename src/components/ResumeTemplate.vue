<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const props = defineProps({
  resume: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <!-- Resume Header -->
  <div class="resume-header">
    <div class="row align-items-center">
      <!-- Logo -->
      <div class="col-auto">
        <img
          src="@/images/X Logo.png"
          alt="X Logo"
          style="height: 3rem; width: 3rem"
        />
      </div>

      <div class="col">
        <!-- Contact Info Row 1 -->
        <div class="row">
          <div v-if="resume.location" class="col-auto">
            <i class="fa-solid fa-location-dot text-danger"></i>&nbsp;
            {{ resume.location }}
          </div>
          <div v-if="resume.email" class="col-auto">
            <i class="fa-solid fa-envelope text-danger"></i>&nbsp;
            {{ resume.email }}
          </div>
          <div v-if="resume.number" class="col-auto">
            <i class="fa-solid fa-phone text-danger"></i>&nbsp;
            {{ resume.number }}
          </div>
        </div>

        <!-- Contact Info Row 2 -->
        <div class="row mt-1">
          <div v-if="resume.linkedin" class="col-auto">
            <a
              :href="resume.linkedin"
              target="_blank"
              class="text-decoration-none text-white"
            >
              <i class="fa-brands fa-linkedin text-danger"></i>&nbsp;
              {{ resume.linkedin }}
            </a>
          </div>
          <div v-if="resume.imdb" class="col-auto">
            <a
              :href="resume.imdb"
              target="_blank"
              class="text-decoration-none text-white"
            >
              <i class="fa-brands fa-imdb text-danger"></i>&nbsp;
              {{ resume.imdb }}
            </a>
          </div>
          <div v-if="resume.github" class="col-auto">
            <a
              :href="resume.github"
              target="_blank"
              class="text-decoration-none text-white"
            >
              <i class="fa-brands fa-github text-danger"></i>&nbsp;
              {{ resume.github }}
            </a>
          </div>
          <div v-if="resume.agent" class="col-auto">
            <i class="fa-solid fa-circle-user text-danger"></i>&nbsp;
            {{ resume.agent }}
          </div>
          <div v-if="resume.website" class="col-auto">
            <a
              :href="resume.website"
              target="_blank"
              class="text-decoration-none text-white"
            >
              <i class="fa-solid fa-globe text-danger"></i>&nbsp;
              {{ resume.website }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Name and bio -->
    <div class="row my-2">
      <!-- Name -->
      <div class="col-auto bg-secondary align-items-center">
        <div
          class="h3 text-danger my-3 fw-bolder d-flex"
          style="text-transform: uppercase"
        >
          {{ resume.name }}
        </div>

        <div class="row pb-2">
          <button v-if="resume.type !== 'Actors'" class="col-auto bg-white ms-2 mx-1 text-black border-0">
            <i class="fa-solid fa-circle-play"></i> Play
          </button>


              <a v-if="resume.type === 'Actors'"
                style="text-decoration: none;"
                :href="resume.play_link"
                data-fancybox
                data-type="iframe"
                class="col-auto bg-white ms-2 mx-1 text-black border-0"
                title="Play Reel"
              >
                <i class="fa-solid fa-circle-play"></i> Play Demo
              </a>

          <button
            class="col-auto mx-1 text-secondary border-0"
            style="background-color: #818589"
          >
            <i class="fa-solid fa-plus"></i> More Info
          </button>
        </div>

      </div>

      <!-- Bio -->
      <div class="col">
        <!-- #1 Applicant -->
        <div class="row align-items-center">
          <div class="col-auto pe-0 pb-1">
            <div
              class="bg-danger text-center d-flex flex-column justify-content-center align-items-center"
              style="width: 30px; height: 30px"
            >
              <div class="small m-0">TOP</div>
              <div class="small m-0">10</div>
            </div>
          </div>
          <div class="col">
            <p class="lead mb-1 fw-bold" style="font-size: 16px">
              #1 in <span v-if="resume.type">{{ resume.type }}</span> Today
            </p>
          </div>
        </div>

        <!-- Biography goes here. -->
        <div>
          {{ resume.bio }}
        </div>
      </div>
    </div>

    <!-- Education, Skills/Stats -->
    <div class="row">
      <!-- Education -->
      <div v-if="props.resume.education" class="col ps-0">
        <div class="h5 fw-bold ms-0 text-danger">EDUCATION</div>
      </div>

      <!-- Skills -->
      <div v-if="props.resume.skills" class="col ps-0">
        <div class="h5 fw-bold text-danger">SKILLS</div>
      </div>

      <!-- Stats -->
      <div v-if="props.resume.stats" class="col ps-0">
        <div class="h5 fw-bold text-danger">STATS</div>
      </div>
    </div>

    <div class="row">
      <!-- Education -->
      <div v-if="props.resume.education" class="col d-flex ps-0">
        <div
          v-for="(item, index) in props.resume.education"
          :key="index"
          class="col bg-secondary small"
        >
          <div class="p-2">
            <!-- Degree -->
            <div v-if="item.degree" class="fw-bold">{{ item.degree }}</div>

            <!-- School -->
            <div v-if="item.institution" class="fw-bold fst-italic">
              {{ item.institution }}
            </div>

            <!-- Location -->
            <div v-if="item.location" class="mt-1">
              <i class="fa-solid fa-location-dot"></i> &nbsp;
              {{ item.location }}
            </div>

            <!-- Grad Date -->
            <div
              v-if="item.graduationDate"
              class="d-inline-block mt-1 pe-2 border-end border-top border-bottom"
            >
              {{ item.graduationDate }}
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div v-if="props.resume.skills" class="col d-flex ps-0">
        <div
          v-for="(item, index) in props.resume.skills"
          :key="index"
          class="col bg-secondary small me-2"
        >
          <div class="p-2 ">
            <!-- Skill category -->
            <div v-if="item.category" class="fw-bold ms-0">
              {{ item.category }}
            </div>
            <ul v-for="(skillset, j) in item.items" :key="j" class="my-0">
              <li>{{ skillset }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div v-if="props.resume.stats" class="col d-flex ps-0">
        <div
          v-for="(item, index) in props.resume.stats"
          :key="index"
          class="col bg-secondary small py-2 h-100 me-2"
        >
          <div class="mx-3">
            <div v-if="item.height" class="row border-bottom">
            <div class="col">Height</div>
            <div class="col fw-bold">{{ item.height }}</div>
          </div>

          <div v-if="item.weight" class="row border-bottom">
            <div class="col">Weight</div>
            <div class="col fw-bold">{{ item.weight }}</div>
          </div>

          <div v-if="item.ageRange" class="row border-bottom">
            <div class="col">Age Range</div>
            <div class="col fw-bold">{{ item.ageRange }}</div>
          </div>

          <div v-if="item.eyeColor" class="row border-bottom">
            <div class="col">Eye Color</div>
            <div class="col fw-bold">{{ item.eyeColor }}</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <slot />

  <!-- Resume Body -->
  <div class="resume-body">
    <!-- Work History -->
    <div v-if="props.resume.experiences" class="my-4">
      <div class="h5 text-light">
        Explore titles related to:
        <span class="fw-bold text-white"> Work Experience </span>
      </div>

      <!-- Jobs -->
      <div v-for="(job, index) in props.resume.experiences" :key="index">
        <div class="border border-secondary my-1 border-secondary">
          <div class="row align-items-center p-3">
            <!-- Job Title and Duration -->
            <div class="col">
              <div class="d-flex align-items-center">
                <span class="fw-bold">{{ job.title }}</span>

                <!-- Horizontal Line -->
                <div class="mx-2 flex-grow-1">
                  <hr class="horizontal-line" />
                </div>

                <span v-if="job.duration">{{ job.duration }}</span>
              </div>
            </div>

            <!-- Play button -->
            <div
              v-if="job.reel"
              class="col-2 col-md-1 col-lg-1 col-xl-1 text-end py-0"
              v-bind="props.resume.role"
            >
              <a
                :href="job.reel"
                data-fancybox
                data-type="iframe"
                class="btn btn-lg text-danger border-0 align-items-center ps-2 pe-0"
                title="Play Reel"
              >
                <i class="fa-solid fa-circle-play"></i>
              </a>
            </div>
            <div v-else class="col-1"></div>

            <!-- Details / Description -->
            <div class="mt-2 small">
              <div>
                <a class="border-top border-start border-end px-2" 
                    v-if="job.subtitle_link" 
                    :href="job.subtitle_link" 
                    target="_blank" 
                    rel="noopener noreferrer">{{ job.subtitle }}</a>
                <span
                  v-else-if="job.subtitle"
                  class="border-top border-start border-end px-2"
                >
                  {{ job.subtitle }}
                </span>
                &nbsp;
                <span
                  v-if="job.role"
                  class="border-top border-start border-end px-2"
                >
                  {{ job.role }}
                </span>
              </div>
              <ul
                class="mt-2 list-spacing"
                v-for="(item, i) in job.details"
                :key="i"
                :style="{
                  'list-style-type': job.details.length === 1 ? 'none' : 'disc',
                }"
              >
                <li>{{ item }}</li>
              </ul>

              <!-- Available platforms -->
              <div
                v-if="job.availableOn"
                class="text-end small align-items-center"
              >
                <div class="align-items-center" style="font-size: 8px">
                  Streaming on:
                </div>
                <div class="d-inline-flex">
                  <div v-if="job.availableOn[0].youtube">
                    <img
                      src="/src/images/actor/YoutubeLogo.webp"
                      alt="Youtube"
                      style="height: 15px"
                      class="ps-1"
                    />
                  </div>
                  <div v-if="job.availableOn[0].tubi">
                    <img
                      src="/src/images/actor/TubiLogo.png"
                      alt="Tubi"
                      style="height: 15px"
                      class="ps-1"
                    />
                  </div>
                  <div v-if="job.availableOn[0].tvone">
                    <img
                      src="/src/images/actor/TVOneLogo.png"
                      alt="TV One"
                      style="height: 10px"
                      class="ps-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects & Achievements -->
    <div v-if="props.resume.projects" class="col ms-0">
      <div class="row">
        <div class="col ps-0" v-if="props.resume.projects">
          <div class="h5 fw-bold ms-0 text-danger">PROJECTS</div>

          <div class="bg-secondary h-100">
            <div
              v-for="(item, index) in props.resume.projects"
              :key="index"
              class="col small py-2 me-2"
            >
              <div class="mx-2">
                <!-- Skill category -->
                <div v-if="item.category" class="fw-bold ms-0">
                  {{ item.category }}
                </div>
                <ul
                  v-for="(skillset, j) in item.items"
                  :key="j"
                  class="my-0 small"
                >
                  <li>{{ skillset }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col ps-0" v-if="props.resume.achievements">
          <div class="h5 fw-bold ms-0 text-danger">ACHIEVEMENTS</div>
          <div class="bg-secondary h-100">
            <div class="py-3">
              <div
                v-for="(item, index) in props.resume.achievements"
                :key="index"
                class="col small me-2"
              >
                <!-- <div class="mx-2 my-5"> -->
                <ul class="my-0">
                  <li>{{ item }}</li>
                </ul>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-5"></div>

    <!-- Training -->
    <div v-if="props.resume.training" class="col ms-0">
      <div class="h5 fw-bold ms-0 text-danger">TRAINING</div>
      <div class="row">
        <div
          v-for="(item, index) in props.resume.training"
          :key="index"
          class="col-12 col-md-3 mb-2 ps-0"
        >
          <div class="bg-secondary small py-2 h-100">
            <div class="ms-2">
              <!-- Title -->
              <div v-if="item.title" class="fw-bold">{{ item.title }}</div>

              <!-- Subtitle -->
              <div v-if="item.subtitle" class="fw-bold fst-italic">
                {{ item.subtitle }}
              </div>

              <!-- Subtitle -->
              <div v-if="item.description">
                {{ item.description }}
              </div>

              <!-- Location -->
              <div v-if="item.location" class="mt-1">
                <i class="fa-solid fa-location-dot"></i> &nbsp;
                {{ item.location }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- References -->
  <div class="resume-header ps-0">
    <div v-if="props.resume.references" class="mt-4 ps-0">
      <div class="h5 fw-bold ms-0 text-danger ps-0">REFERENCES</div>
    </div>

    <div class="row mb-4">
      <div
        v-for="(reference, index) in props.resume.references"
        :key="index"
        class="col-12 col-md-3 mb-2 ps-0"
      >
        <div class="bg-secondary small py-2 h-100">
          <div class="ms-2">
            <div v-if="reference.name" class="fw-bold">
              {{ reference.name }}
            </div>

            <div v-if="reference.title" class="fst-italic">
              {{ reference.title }}
            </div>

            <div v-if="reference.phone">
              {{ reference.phone }}
            </div>

            <div v-if="reference.name">
              {{ reference.email }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

a {
  color: white;
}

.resume-header {
  font-size: 13px;
}
.resume-body {
  font-size: 15px;
}

.horizontal-line {
  height: 1px;
  margin: 0 10px;
}

.list-spacing {
  margin-bottom: 0.25rem;
  padding-left: 0;
}
</style>
