<template>
  <Title title="Gallery"></Title>
  <section id="" class="">
    <div class="container">
      <!-- Gallery -->
      <div class="row">
        <div v-for="img in [1,4,5,2,3,6]" :key="img" class="col-lg-4 col-md-12 mb-4 mb-lg-0">
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