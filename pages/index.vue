<template>
    <div class="w-full">
        <HeroImage :url="'/images/hero-image.png'"></HeroImage>
        <div class="w-full flex flex-col items-center bg-[--color-bg] text-[--color-text]">

            <!-- Section 1 -->
            <section class="w-full max-w-5xl flex flex-col items-center p-8 md:flex-row md:items-start md:space-x-8 gap-[1rem]">
                <div class="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                    <img src="/images/section-1.png" alt="Team Image 1" class="w-full h-auto rounded-lg shadow-lg object-cover" />
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 class="text-2xl font-bold mb-4">Welcome to Our Portfolio Site</h2>
                    <p class="mb-2">This site is created for us to share articles based on our experiences and projects
                        within IT.</p>
                    <p class="mb-2">It was made by <strong>Jonas Kristoffer Mortensen</strong> and <strong>Jonathan
                            Grubbe Frank</strong> for a 2-week group project related to our time at Specialisterne
                        Danmarks Academy.</p>
                    <p class="pt-2">The current site you are viewing is based on our experience with this project and
                        will contain articles explaining our process.</p>
                </div>
            </section>

            <!-- Section 2 -->
            <section
                class="w-full max-w-5xl flex flex-col items-center p-8 md:flex-row-reverse md:items-start md:space-x-8 gap-[1rem]">
                <div class="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                    <img src="/images/section-2.png" alt="Team Image 2" class="w-full h-auto rounded-lg shadow-lg object-cover" />
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
                    <p class="mb-2">Our goal is to create a centralized portfolio site where we can document our
                        projects and lessons learned.</p>
                    <p class="mb-2">We want to showcase the skills we have gained during our IT education and make it
                        accessible to peers and employers.</p>
                    <p class="pt-2">We hope our articles provide insight into the challenges and successes we experience
                        while working on practical IT projects.</p>
                </div>
            </section>

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

<style scoped>
/* Optional: add some subtle background or styling */
section {
  transition: transform 0.3s ease;
}
section:hover {
  transform: translateY(-4px);
}
</style>