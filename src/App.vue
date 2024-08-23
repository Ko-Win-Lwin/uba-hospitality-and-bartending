<template>
  <NavigationBar @toggleMenu="toggleMenu"></NavigationBar>
  <div v-if="mobileNavActive">
    <Sidebar :mobileNavActive="mobileNavActive"></Sidebar>
  </div>
  <RouterView />
  <Footer></Footer>
  <FooterBanner></FooterBanner>
</template>

<script setup>
import FooterBanner from "./components/FooterBanner.component.vue";
import Footer from "./components/Footer.component.vue";
import NavigationBar from "./components/Navigation.component.vue";
import Sidebar from "./components/Sidebar.component.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()


const mobileNavActive = ref(false);

const toggleMenu = () => {
  mobileNavActive.value = !mobileNavActive.value;
};

// Function to handle route changes and close mobile nav
const handleRouteChange = () => {
  mobileNavActive.value = false;
};

// Cleanup on component unmount
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  router.afterEach(() => {}); // This is to remove the afterEach guard if necessary
});


router.afterEach(handleRouteChange);



// Function to handle screen size changes and close mobile nav
const handleResize = () => {
  if (window.innerWidth > 768) {
    mobileNavActive.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});


</script>

