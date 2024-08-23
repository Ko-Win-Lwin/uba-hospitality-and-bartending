<template>
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <img src="/src/assets/img/banner/banner-1.jpg" alt="" data-aos="fade-in" class=""/>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 data-aos="fade-up" data-aos-delay="100" class="lh-lg">
              <div>လက်တွေ့မှာ ဘာစလုပ်ရမှန်းမသိသေးရင် ကျွန်တော်တို့ရဲ့ </div>
              <di>UBA - United Bartender & Hospitality Academy ကို</di> 
              <div>လှမ်းခဲ့ဖို့ ဖိတ်ခေါ်ပါရစေလား</div>
            </h2>
            <RouterLink class="btn btn-outline-orange mt-4 px-4 py-2 fs-3 fw-semibold" to="/contact"
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
import { onBeforeUnmount, onMounted, ref } from "vue";

const router = useRouter()

const currentImageIndex = ref(0);
let intervalId = null;

const startImageRotation = () => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }, 5000)
}

onMounted(() => {
  startImageRotation();
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.btn-outline-orange {
    border: 2px solid var(--accent-color);
    color: white;
}

.btn-outline-orange:hover {
    color: white !important;
    background:var(--accent-color);
}


</style>