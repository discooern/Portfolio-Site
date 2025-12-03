<template>
    <div class="w-full">
        <HeroImage :url="'/images/hero-image.png'"></HeroImage>
        <div class="flex flex-col p-[2rem]">
            <h3 class="relative text-center">Welcome to our portfolio site</h3>
            <p>This site is created for us to create articles based on our experiences and projects within IT</p>
            <p>It was made by <strong>Jonas Kristoffer Mortensen</strong> and <strong>Jonathan Grubbe Frank</strong> for a 2 week group project related to our time at Specialisterne Danmarks Academy</p>
            <p class="pt-[2rem]">The current site you are viewing is based off our experience with this current group project and will contain articles explaining this</p>
        </div>
    </div>
</template> 

<script lang="ts">
// Components
import HeroImage from './../components/HeroImage.vue';

export default defineComponent({
  name: 'HomePage',
  components: { HeroImage },
})
</script>