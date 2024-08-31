<template>
{{  course.title }}
</template>

<script setup>
import { useRoute } from 'vue-router';


const route = useRoute();
const course = route.params
</script>

<style>
</style>