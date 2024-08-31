<template>
  <header 
    class="header d-flex align-items-center sticky-top shadow-sm"
    :class="{'bg-white': isScrolled, 'bg-transparent': !isScrolled}"
  >
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">
      <RouterLink to="/" class="logo d-flex align-items-center me-auto me-xl-0">
        <div class="bg-dark p-2 me-2">
          <img src="../assets/img/logo/logo.png" alt="" class="">
        </div>
        <h1 class="sitename">UBA Institute</h1>
      </RouterLink>

      <nav id="" class="navmenu mx-lg-auto">
        <ul>
          <li><RouterLink to="/home">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/gallery">Gallery</RouterLink></li>
          <li class="dropdown">
            <RouterLink to="/courses">
              <span>Courses</span>
              <i class="bi bi-chevron-down toggle-dropdown"></i>
            </RouterLink>
            <ul>
              <li v-for="course in courses" :key="course.id">
                <a>
                  {{  course.title }}
                </a>
                <!-- <RouterLink :to="`/courses/${course.title.replace(/\s+/g, '-').toLowerCase()}`">
                  {{ course.title }}
                </RouterLink> -->
              </li>
            </ul>
          </li>
          <li><RouterLink to="/contact">Contact Us</RouterLink></li>
        </ul>
        <i @click="$emit('toggleMenu')" class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const courses = [
  { id: 1, category: "F&B", title: "Mixologist & Bartending Course" },
  { id: 2, category: "Hotel", title: "Food & Beverage Service Course" },
  { id: 3, category: "Bartender", title: "Housekeeping Course" },
  { id: 4, category: "Language", title: "Pastry & Bakery Course" },
  { id: 5, category: "Culnary", title: "Food & Beverage Production (Culinary) Course"}
];

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
}

onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.bg-white {
  background-color: #fff; /* White color */
}

.bg-transparent {
  background-color: transparent; /* Transparent background */
}

.router-link-exact-active {
  color: var(--nav-hover-color);
}
</style>
