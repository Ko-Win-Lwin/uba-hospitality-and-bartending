<template>
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <img src="../assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Towards a promising future
            </h2>
            <RouterLink class="btn btn-outline-light mt-3" to="/contact"
              >Contact</RouterLink
            >
          </div>
        </div>
      </div>
    </section>
    <!-- /Hero Section -->
  </main>

  <!-- Our Courses -->
  <section>
    <Title title="Our Courses"></Title>
    <CourseList></CourseList>
    <div class="d-grid place-items-center mt-4">
        <button @click="router.push({ path: `/courses` })" type="button" class="btn btn-outline-orange text-secondary mx-auto">More Courses</button> 
      </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import CourseList from "../components/Courses/CourseList.component.vue";
import Title from "../components/Title.component.vue"

const router = useRouter()

</script>

<style scoped>
.btn-outline-orange {
    border: 1px solid var(--accent-color);;
}

.btn-outline-orange:hover {
    color: white !important;
    background:var(--accent-color);
}
</style>