<template>
  <div class="d-flex" id="wrapper" :class="{ move: mobileNavActive}"> 
    <!-- Sidebar-->
    <div class="bg-white logo rounded-bottom" id="">
      <RouterLink to="/">
        <h1
          class="border-bottom sitename fs-3 fw-semibold"
          style="padding: 12px 12px; letter-spacing: 0.5px"
        >
          UBA Institute
        </h1>
      </RouterLink>
      <div class="list-group list-group-flush">
        <RouterLink
          class="list-group-item list-group-item-action list-group-item-light p-3"
          to="/home"
          >Home</RouterLink
        >
        <RouterLink
          class="list-group-item list-group-item-action list-group-item-light p-3"
          to="/about"
          >About</RouterLink
        >
        <RouterLink
          class="list-group-item list-group-item-action list-group-item-light p-3"
          to="/gallery"
          >Gallery</RouterLink
        >
        <RouterLink
          class="list-group-item list-group-item-action list-group-item-light p-3"
          to="/courses"
          >Courses</RouterLink
        >
        <RouterLink
          class="list-group-item list-group-item-action list-group-item-light p-3"
          to="/contact"
          >Contact Us</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  position: fixed; /* Change to fixed to keep the sidebar visible at all times */
  top: 0;
  left: 0;
  z-index: 1000 !important;
  width: 250px; /* Set a fixed width for your sidebar */
  overflow-y: auto; /* Allows scrolling if the content is taller than the screen */
  transition: top 0.5s ease-in-out, left 0.5s ease-in-out;
}

#wrapper.move {
  top: 0; /* Adjust this as needed */
  left: 0; /* Adjust this as needed */
}

/* Ensure main content has margin to not overlap with the fixed sidebar */
.main-content {
  margin-left: 250px; /* Matches the width of your sidebar */
}
</style>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
    mobileNavActive: Boolean
})
</script>