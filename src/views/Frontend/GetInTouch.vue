<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

// Define references for form
const formRef = ref(null);

// Function to send email
const sendEmail = () => {
  emailjs
    .sendForm("service_sy9xlgq", "template_xej5z2r", formRef.value, "Nhkc3e5epImqHZksJ")
    .then(
      () => {
        console.log("SUCCESS!");
        alert("Your email was successfully sent");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
</script>

<template>
  <section id="contact" class="py-3 bg-secondary px-4">
    <div class="container-fluid container">
      <h2 class="h3 fw-bold mb-3">Get in Touch</h2>
      <form ref="formRef" class="bg-dark rounded p-4 shadow-lg" @submit.prevent="sendEmail">
        <div class="row g-3 mb-4">
          <div class="col-sm-6">
            <input
              type="text"
              placeholder="Name"
              class="form-control bg-secondary text-white border-0 rounded"
              name="from_name"
              id="fullName"
              required
            />
          </div>
          <div class="col-sm-6">
            <input
              type="email"
              placeholder="Email"
              class="form-control bg-secondary text-white border-0 rounded"
              name="email_address"
              id="email_address"
              required
            />
          </div>
        </div>
        <div class="mb-4">
          <textarea
            placeholder="Message"
            class="form-control bg-secondary text-white border-0 rounded"
            rows="5"
            name="message"
            id="message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-danger px-4 py-3 fw-medium"
          value="send"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
::placeholder {
  color: white;
  opacity: 0.6;
}

input::placeholder,
textarea::placeholder {
  color: white;
  opacity: 0.6;
}
</style>
