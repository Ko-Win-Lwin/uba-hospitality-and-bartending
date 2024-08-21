<template>
    <Title title="Our Courses"></Title>
    <CourseList v-if="!hasChildRoute"></CourseList>
    <router-view></router-view>
</template>

<script setup>
import Title from '../components/Title.component.vue';
import CourseList from '../components/Courses/CourseList.component.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Check if the current route has a child route active
const hasChildRoute = computed(() => {
  return route.path !== '/courses' && route.path.startsWith('/courses/');
});
</script>

<style>

</style>