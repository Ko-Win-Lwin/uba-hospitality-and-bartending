<template>
  <NavigationBar></NavigationBar>
  <RouterView />
  <Footer></Footer>
  <FooterBanner></FooterBanner>
</template>

<script setup>
import FooterBanner from "./components/FooterBanner.vue";
import Footer from './components/Footer.vue'
import NavigationBar from "./components/Navigation.component.vue";
import FooterVue from "./components/Footer.vue";
</script>

<style>
</style>