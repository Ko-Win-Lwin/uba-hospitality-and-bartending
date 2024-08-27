<template>
    <div class="my-5 features" style="height: fit-content;">
        <div class="py-4">
            <div class="container section-title" data-aos="fade-up">
                <Title :title="title"></Title>
            </div>

            <div class="container">
                <div class="row align-items-stretch justify-content-between gap-4 features-item">
                    <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
                        <p class="lh-lg fs-5">
                            <slot></slot>
                        </p>
                    </div>
                
                    <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
                        <img src="../assets/img/blog/blog-1.jpg" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>
<!-- 
        <div class="col-lg-6 order-1  order-lg-2 d-flex align-items-center" data-aos="zoom-out"
                    data-aos-delay="100">
                    <div class="image-stack">
                        <img src="../assets/img/blog/blog-1.jpg" alt="" class="stack-front">
                        <img src="../assets/img/blog/blog-1.jpg" alt="" class="stack-back">
                    </div>
                </div> -->
    </div>
</template>

<script setup>
import Title from './Title.component.vue';
defineProps({
    title: String
})
</script>