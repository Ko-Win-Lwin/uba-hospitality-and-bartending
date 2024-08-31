<template>
    <div class="my-5 features" style="height: fit-content;">
        <div class="py-4">
            <div class="container section-title" data-aos="fade-up">
                <Title :title="title"></Title>
            </div>

            <div class="px-5">
                <div class="row align-items-stretch justify-content-between gap-4 features-item">
                    <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
                        <p class="lh-lg fs-5 text-warning-emphasis">
                            <slot name="content"></slot>
                        </p>
                    </div>

                    <div v-if="$slots.image" class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
                        <slot name="image"></slot>
                    </div>

                    <div v-if="$slots.images" class="col-lg-6 order-1 order-lg-2 d-flex\ align-items-center" data-aos="zoom-out"
                        data-aos-delay="100">
                        <div class="image-stack">
                            <slot name="images"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import Title from './Title.component.vue';
defineProps({
    title: String
})
</script>