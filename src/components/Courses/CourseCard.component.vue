<template>
  <div
    @click="showCourseDetail(course.title)"
    class="col-lg-4 col-md-6"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <article>
      <div class="post-img">
        <img src="../..//assets/img/blog/blog-1.jpg" alt="" class="img-fluid" />
      </div>

      <p class="post-category">{{ course.category }}</p>

      <h2 class="title">
        <p>{{ course.title }}</p>
      </h2>
    </article>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

defineProps({
  course: {
    id: Number,
    category: String,
    title: String,
  },
});

const showCourseDetail = (title) => {
  title = title.replace(/\s+/g, '-').toLowerCase();
  router.push({ path: `/courses/${title}` });
}
</script>

<style>
</style>
