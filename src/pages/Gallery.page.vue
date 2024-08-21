<template>
  <Title title="Gallery"></Title>
  <section id="portfolio" class="portfolio section">
    <div class="container">
      <!-- Gallery -->
      <div class="row">
        <div v-for="img in [2,3, 1,4,5,6,7]" :key="img" class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            :src="getImagePath(img)"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>
      </div>
      <!-- Gallery -->
    </div>
  </section>
</template>

<script setup>
import Title from "../components/Title.component.vue";


const getImagePath = (image) => {
    return `src/assets/img/gallery/gallery-${image}.jpg`;
}
</script>

<style>
</style>