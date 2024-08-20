<template>
  <NavigationBar></NavigationBar>
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<script setup>
import NavigationBar from "./components/Navigation.component.vue";
</script>

<style>
</style>