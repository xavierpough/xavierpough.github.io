<script setup>
import Skills from "@/views/Frontend/Skills.vue";
import ResumeTemplate from "../ResumeTemplate.vue";
import { reference } from "@popperjs/core";
import Footer from "./Footer.vue";
import HeaderSection from "@/views/Frontend/HeaderSection.vue";

const resume = {
  type: "Applicants",
  name: "Xavier Pough",
  location: "Atlanta, GA",
  email: "xavierpough@gmail.com",
  number: "+1-803-477-5474",
  linkedin: "https://www.linkedin.com/in/xavier-pough-b8a4ba174/",
  github: "https://www.github.com/xavierpough",
  website: "https://www.xavierpough.com",
  bio: "Innovative Software & UI Engineer with a strong background in designing and implementing user-centered web applications. Proficient in modern JavaScript frameworks like React and Angular, with expertise in creating intuitive, responsive, and visually compelling interfaces. Adept at bridging the gap between design and development, ensuring seamless user experiences and delivering high-quality, maintainable code.",
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Charleston Southern Univeristy",
      location: "Charleston, SC",
      graduationDate: "May 2020",
    },
  ],
  skills: [
    {
      category: "Functional Skills",
      items: [
        "JIRA",
        "Responsive Design",
        "Agile/Hybrid Methodology",
        "Creativity",
        "Adobe Creative Cloud",
        "Docker",
        "Git",
        "Test Link",
        "RESTful APIs",
      ],
    },
    {
      category: "Technical Skills",
      items: [
        "Javascript",
        "Laravel PHP",
        "HTML",
        "CSS",
        "Bootstrap CSS",
        "Python",
        "Swift/Objective-C",
        "Vue.js",
        "React",
      ],
    },
  ],
  projects: [
    {
      category: "Investuition App",
      items: [
        "Offers personalized budgeting tools and notifications to help users stay on track with their financial goalsI",
        "Provides visual representations of spending patterns through graphs and charts for quick analysis.",
      ],
    },
    {
      category: "Gain United Mobile App",
      items: [
        "Access a community-driven platform to stay motivated and accountable in your fitness journey.",
        "Connect with like-minded fitness users to share tips, progress, and charts for quick analysis",
      ],
    },
  ],
  achievements: [
    "Vue.JS Certification via Certication.dev", 
    "Member of the Association for Computer Machinery",
    "Mentioned on Wall Street Journal"
  ],
  experiences: [
    {
      title: "Software Engineer - UI Developer",
      subtitle: "Inspire Leadership Network",
      subtitle_link: "https://inspireleadershipnetwork.com/",
      role: "Remote",
      duration: "Apr 2025 - Present",
      details: [
        "Developed responsive, user-centric interfaces using HTML, CSS, and JavaScript, ensuring cross-browser and cross-device compatibility.",
        "Translated design mockups and wireframes into high-quality, production-ready code in close collaboration with designers and creative leadership.",
        "Optimized front-end applications for performance, scalability, accessibility, and SEO using industry best practices."
      ],
    },
  {
      title: "Specialist",
      subtitle: "Apple Inc.",
      subtitle_link: "https://www.apple.com/",
      role: "Atlanta, GA",
      duration: "Aug 2024 - Apr 2025",
      details: [
        "Provided technical support and customer service, resolving issues with a 95% satisfaction rate.",
        "Assisted customers in diagnosing and resolving technical issues with Apple devices, ensuring satisfaction while maintaining a focus on technical accuracy.",
        "Leveraged in-depth knowledge of macOS, iOS, and Apple apps to recommend and demonstrate technology solutions to customers."
      ],
    },
    {
      title: "Software Engineer",
      subtitle: "Telrite Holdings",
      subtitle_link: "https://telrite.com/",
      role: "Atlanta, GA",
      duration: "Aug 2021 - July 2024",
      details: [
        "Developed and maintained responsive, data-intensive web applications using Vue.js and React, enhancing user interaction and experience.",
        "Created reusable components and optimized UI patterns for scalability, leading to a 30% reduction in development time for new features.",
        "Integrated front-end designs with back-end functionality using RESTful APIs, ensuring seamless data flow and performance.",
      ],
    },
    {
      title: "UI Engineer & Designer",
      subtitle: "Freelance",
      subtitle_link: "https://www.xavierpough.com/",
      role: "Remote",
      duration: "Dec 2020 - Present",
      details: [
        "Designed and developed user-centric web applications across various industries, leveraging JavaScript frameworks like Vue.js.",
        "Built custom, reusable components and libraries, improving development speed and consistency across multiple projects.",
        "Implemented responsive design and mobile-first principles, ensuring compatibility across devices and platforms.",
      ],
    },
    {
      title: "Software Engineer Intern - Frontend",
      subtitle: "Custom Development Solutions",
      subtitle_link: "https://cdsfunds.com/",
      role: "Charleston, SC",
      duration: "May 2019 - May 2020",
      details: [
        "Engaged in agile development practices, collaborating with cross-functional teams to deliver visually compelling and technically sound products.",
        "Created and implemented visual content for web and print, ensuring alignment with brand standards and marketing goals.",
        "Supported the development of a UI design system that improved design consistency across products.",
      ],
    },
  ],
  references: [
    {
      name: "Steven Hargrove",
      title: "Senior Software Engineer",
      company: "Walmart",
      phone: "+1-470-655-8179",
    },
    {
      name: "Brent Purks",
      title: "Frontend Developer",
      company: "Telrite Holdings",
      phone: "+1-770-203-9091",
      email: "",
    },
    {
      name: "Derek Wong",
      title: "Senior Developer",
      company: "Telrite Holdings",
      email: "derek.wong@telrite.com",
    },
    {
      name: "Norman Summers",
      title: "President of Operations",
      company: "Columbia Vista Transit System",
      phone: "+1-803-738-5124",
      email: "",
    },
  ],
};
</script>

<template>
  <HeaderSection>
    <div class="bg-dark" style="height: 90px"></div>
    <div class="container mt-3">
      <div class="text-end my-2 small">
        <a
          href="/src/images/Xavier_Pough_Frontend_Netflix_Resume.pdf"
          download="Xavier_Pough_Resume.pdf"
          class="btn btn-sm btn-light"
        >
          Download <i class="fa-solid fa-circle-down"></i>
        </a>
      </div>

      <ResumeTemplate :resume="resume"></ResumeTemplate>
    </div>

    <hr class="m-0" />
    <Footer />
  </HeaderSection>
</template>

