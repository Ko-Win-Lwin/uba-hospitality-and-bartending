<template>
  <section id="" class="">
    <Title title="Gallery"></Title>
    <div class="container">
      <!-- Gallery -->
      <div class="row">
        <div v-for="img in images" :key="img" class="col-lg-4 col-md-12 gy-4 mb-4 mb-lg-0">

        <!-- <div v-for="img in [1, 4, 5, 2, 3, 6]" :key="img" class="col-lg-4 col-md-12 mb-4 mb-lg-0"> -->
          <!-- <img :src="getImagePath(img)" class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" /> -->
          <img :src="img" class="w-100 shadow-1-strong rounded mb-4 img-fluid h-100" alt="Boat on Calm Water" />

        </div>
      </div>
      <!-- Gallery -->
    </div>
  </section>
</template>

<script setup>
import Title from "../components/Title.component.vue";


const images = [
  "src/assets/img/courses/Housekeeping Course.jpeg",
  "src/assets/img/gallery/gallery-1.jpg",
  "src/assets/img/gallery/school-history.jpg",
  "src/assets/img/success/success-1.jpg",
  "src/assets/img/success/success-2.jpg",
  "src/assets/img/gallery/gallery-4.jpg",
  "src/assets/img/vision/vision-1.jpg",
  "src/assets/img/courses/Mixologist & Bartending Course.jpg",
  "src/assets/img/gallery/gallery-7.jpg"
]

// const getImagePath = (image) => {
//   return `src/assets/img/gallery/gallery-${image}.jpg`;
// }
</script>

<style></style>