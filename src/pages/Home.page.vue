<template>
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <img :src="images[currentImageIndex]" alt="" data-aos="fade-in" class="img-fluid w-100" />
      <div class="container">
        <div class="row">
          <div class="col-lg-12">

            <h2 data-aos="fade-up" data-aos-delay="100" class="lh-lg fs-2">
              <div>UBA continues to empower the next generation of hospitality professionals, equipping
                them with the skills and knowledge needed to thrive in the dynamic world of hospitality and
                bartending. </div>

            </h2>
            <RouterLink class="btn btn-outline-orange mt-4  px-lg-4 py-lg-2 fs-5 fw-semibold" to="/contact">Contact
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <!-- /Hero Section -->
  </main>


  <section id="about" class="about section " style="height: fit-content">
    <Title title="UBA School History"></Title>
    <div class="container">

      <div class="row gy-4">
        <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
          <p class="lh-lg text-secondary-emphasis fs-5">
            Founded in 2019, UBA began its journey with a commitment to excellence in hospitality and
            bartending education. As the world faced the unprecedented challenges of the COVID-19
            pandemic, UBA quickly adapted by launching online classes, providing young people with
            continued access to quality education. The positive response from students and their growing
            interest led UBA to establish itself as a recognized educational company in Thaketa Township.
            Today, UBA continues to empower the next generation of hospitality professionals, equipping
            them with the skills and knowledge needed to thrive in the dynamic world of hospitality and
            bartending.
          </p>
        </div>

        <div class="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
          <div class="row gy-12 icon-box">
            <img src="../assets/img/gallery/school-history.jpg" class="img-fluid" alt="">

          </div>

        </div>

      </div>

    </div>
  </section>


  <section id="Success" class="features section">
    <Title title="Vision"></Title>

    <div class="container">

      <div class="row gy-4 align-items-center features-item">
        <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <p class="lh-lg text-secondary-emphasis fs-5">

            Our vision is to empower individuals born and raised in Myanmar
            (Burma)
            by providing
            accessible, up-to-date education in the dynamic hospitality industry. We believe that a career in
            hospitality offers young people a pathway to stable income and abundant opportunities, both
            locally and abroad. UBA is committed to making this vision a reality by equipping our students
            with the skills and knowledge necessary to succeed in the global hospitality sector.
          </p>
        </div>
        <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
          <div class="image-stack">
            <img src="../assets/img/vision/vision-1.jpg" alt="" class="stack-front">
            <img src="../assets/img/vision/visioni-2.jpg" alt="" class="stack-back">
          </div>
        </div>
      </div><!-- Features Item -->
    </div>
  </section>



  <!-- Features Section -->
  <section id="" class="features my-4" style="height: fit-content;">

    <Title title="Our Guarantee"></Title>

    <div class="container">
      <div class="row gy-4 align-items-stretch justify-content-between features-item ">
        <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
          <img src="../assets/img/gallery/gallery-1.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
          <p class="lh-lg text-secondary-emphasis fs-5">
            At UBA, we are committed to providing young people and the new generation with
            comprehensive education that blends both theoretical and practical training, aligned with
            international hospitality standards. Our curriculum is designed to equip students with the skills
            necessary to thrive in five-star hotels and restaurants worldwide.
            Upon completion of their courses, our students are offered internships in local restaurants and
            hotels, ensuring they gain valuable real-world experience. Additionally, UBA has established a
            strong network that facilitates job placements in foreign countries, including Thailand, Malaysia,
            Singapore, Taiwan, the Maldives, UAE, Qatar, Bahrain, Kuwait, and more. This global reach
            ensures that our graduates have access to a wealth of career opportunities beyond Myanmar. </p>
        </div>
      </div>
    </div>
  </section>


  <section id="about" class="about section">

    <Title title="Our Success"></Title>
    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
          <p class="lh-lg text-secondary-emphasis fs-5">
            UBA's journey since its inception in 2019 has been marked by significant achievements. As of
            August 2024, we have successfully conducted 67 batches, enrolling students on a monthly basis.
            Over 4,600 students have completed our programs, each equipped with the skills and knowledge
            to excel in the hospitality industry. Our thousand of students have not only secured promisingopportunities
            in local restaurants and hotels but have also made their mark on the international
            stage, contributing to UBA's reputation as a leader in hospitality education.
          </p>
        </div>

        <div class="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="row gy-4">
                <div class="col-lg-12">
                  <img src="../assets/img/success/success-1.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-lg-12">
                  <img src="../assets/img/success/success-4.jpg" class="img-fluid" alt="">
                </div>

              </div>
            </div>
            <div class="col-lg-6">
              <div class="row gy-4">
                <div class="col-lg-12">
                  <img src="../assets/img/success/success-3.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-lg-12">
                  <img src="../assets/img/success/success-2.jpg" class="img-fluid" alt="">
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section><!-- /About Section -->




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
import Title from "../components/Title.component.vue"
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

<style>
.btn-outline-orange {
  border: 2px solid var(--accent-color);
  color: white;
}

.btn-outline-orange:hover {
  color: white !important;
  background: var(--accent-color);
}
</style>
