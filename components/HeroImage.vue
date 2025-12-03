<template>
  <div class="hero-image !absolute -left-0">
    <img :src="url" alt="Hero Image" class="image !h-[320px] !w-[100vw] object-cover" />
  </div>
  <div class="ratio-box !h-[320px]"></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define the prop for the image URL
const props = defineProps<{
  url: string;
}>();
</script>

<style scoped>
/* Left and right black fades */
.hero-image::before,
.hero-image::after {
  content: "";
  position: absolute;
  top: 0;
  width: 80px; /* width of the fade */
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

/* Left fade */
.hero-image::before {
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent);
}

/* Right fade */
.hero-image::after {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.7), transparent);
}
</style>
