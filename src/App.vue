<template>
  <NavigationBar></NavigationBar>
  <RouterView />
  <Footer></Footer>
  <FooterBanner></FooterBanner>
</template>

<script setup>
import FooterBanner from "./components/FooterBanner.component.vue";
import Footer from './components/Footer.component.vue'
import NavigationBar from "./components/Navigation.component.vue";
</script>

<style>
</style>