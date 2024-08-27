<template>
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <img :src="images[currentImageIndex]" alt="" data-aos="fade-in" class="img-fluid w-100" />
      <div class="container">
        <div class="row">
          <div class="col-lg-12">

            <h2 data-aos="fade-up" data-aos-delay="100" class="lh-lg fs-2">
              <div>လက်တွေ့မှာ ဘာစလုပ်ရမှန်းမသိသေးရင် ကျွန်တော်တို့ရဲ့ </div>
              <di>UBA - United Bartender & Hospitality Academy ကို</di>
              <div>လှမ်းခဲ့ဖို့ ဖိတ်ခေါ်ပါရစေလား</div>
            </h2>
            <RouterLink class="btn btn-outline-orange mt-4  px-lg-4 py-lg-2 fs-5 fw-semibold" to="/contact">Contact
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <!-- /Hero Section -->
  </main>

  <div id="vision" class="bg-light py-5">
    <AboutContent title="Vision">
      Our vision is to empower individuals born and raised in Myanmar (Burma) by providing
      accessible, up-to-date education in the dynamic hospitality industry. We believe that a career in
      hospitality offers young people a pathway to stable income and abundant opportunities, both
      locally and abroad. UBA is committed to making this vision a reality by equipping our students
      with the skills and knowledge necessary to succeed in the global hospitality sector.
    </AboutContent>
  </div>

  <section id="success" class="py-5">
    <AboutContent title="Our Success">
      UBA's journey since its inception in 2019 has been marked by significant achievements. As of
      August 2024, we have successfully conducted 67 batches, enrolling students on a monthly basis.
      Over 4,600 students have completed our programs, each equipped with the skills and knowledge
      to excel in the hospitality industry. Our thousand of students have not only secured promising
      opportunities in local restaurants and hotels but have also made their mark on the international
      stage, contributing to UBA's reputation as a leader in hospitality education.
    </AboutContent>
  </section>

  <section id="guarantee" class="bg-light my-0">
    <AboutContent title="Our Guarantee">
      At UBA, we are committed to providing young people and the new generation with
      comprehensive education that blends both theoretical and practical training, aligned with
      international hospitality standards. Our curriculum is designed to equip students with the skills
      necessary to thrive in five-star hotels and restaurants worldwide.
      Upon completion of their courses, our students are offered internships in local restaurants and
      hotels, ensuring they gain valuable real-world experience. Additionally, UBA has established a
      strong network that facilitates job placements in foreign countries, including Thailand, Malaysia,
      Singapore, Taiwan, the Maldives, UAE, Qatar, Bahrain, Kuwait, and more. This global reach
      ensures that our graduates have access to a wealth of career opportunities beyond Myanmar.
    </AboutContent>
  </section>

  <!-- Our Courses -->
  <!--
  <section class="mb-4">
    <Title title="Our Courses"></Title>
    <CourseList></CourseList>
    <div class="d-grid place-items-center mt-4">
      <button
        @click="router.push({ path: `/courses` })"
        type="button"
        class="btn btn-outline-orange text-secondary mx-auto"
      >
        More Courses
      </button>
    </div>
  </section> 
  -->
</template>

<script setup>
import { useRouter } from "vue-router";

import AboutContent from "../components/AboutContent.component.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";

const router = useRouter();

const images = [
  "src/assets/img/banner/banner-2.jpg",
  "src/assets/img/banner/banner-1.jpg",
  "src/assets/img/banner/banner-3.jpg",
];
const currentImageIndex = ref(0);
let intervalId = null;

const startImageRotation = () => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 5000);
};

onMounted(() => {
  startImageRotation();
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.btn-outline-orange {
  border: 2px solid var(--accent-color);
  color: white;
}

.btn-outline-orange:hover {
  color: white !important;
  background: var(--accent-color);
}
</style>
