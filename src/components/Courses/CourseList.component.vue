<template>
  <section id="recent-posts" class="course section">
    <div class="container">
      <div class="row gy-5">
        <CourseCard
          v-for="course in courses"
          :key="course.id"
          :course="course"
        ></CourseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import CourseCard from "./CourseCard.component.vue";
import { useRouter } from "vue-router";

const router = useRouter()

const courses = [
  { id: 1, title: "Mixologist & Bartending Course", img: "src/assets/img/courses/Mixologist & Bartending Course.jpg" },
  { id: 2, title: "Food & Beverage Service Course", img: "src/assets/img/courses/Food & Beverage Service Course.jpg" },
  { id: 3, title: "Housekeeping Course", img: "src/assets/img/courses/Housekeeping Course.jpeg" },
  { id: 4, title: "Pastry & Bakery Course", img: "src/assets/img/courses/Pastry & Bakery Course.jpg" },
  { id: 5, title: "Food & Beverage Production (Culinary) Course", img: "src/assets/img/courses/F&B Production (Culinary) Course.jpg" }
];
</script>

<style setup>

</style>