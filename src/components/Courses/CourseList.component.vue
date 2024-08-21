<template>
  <section id="recent-posts" class="course section">
    <div class="container">
      <div class="row gy-4">
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
  { id: 1, category: "F&B", title: "Food and Beverage" },
  { id: 2, category: "Hotel", title: "Hotel and Housekeeping" },
  { id: 3, category: "Bartender", title: "Bartender course" },
];
</script>

<style setup>

</style>