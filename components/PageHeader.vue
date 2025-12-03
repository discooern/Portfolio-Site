<template>
    <header
        class="flex flex-col -top-0 -left-0 -right-0 w-[100%] h-[110px] bg-[--color-secondary] text-[--color-accent]">
        <div class="h-[70px] flex items-center p-[1rem]">
            <nuxt-link class="font-bold text-xl text-[--color-accent] !m-0" to="/">Our Portfolio Site</nuxt-link>
        </div>
        <div ref="navRef" class="header-nav w-[100%] h-[40px] bg-[--color-secondary] px-[1rem] overflow-x-scroll overflow-y-hidden whitespace-nowrap">
            <nuxt-link v-for="item in store.routes" :to="item.slug" class="mx-[.5em]">{{ item.title }}</nuxt-link>
        </div>
    </header>
</template>


<script setup lang="ts">
import { useMainStore } from '../stores/store';

const store = useMainStore();

const navRef = ref<HTMLElement | null>(null);

const handleWheel = (e: WheelEvent) => {
  if (navRef.value) {
    e.preventDefault();
    navRef.value.scrollLeft += e.deltaY; // translate vertical scroll to horizontal
  }
};

onMounted(() => {
  if (navRef.value) {
    navRef.value.addEventListener('wheel', handleWheel, { passive: false });
  }
});

onBeforeUnmount(() => {
  if (navRef.value) {
    navRef.value.removeEventListener('wheel', handleWheel);
  }
});
</script>

<style lang="scss">
    .header-nav {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: rgba(0,0,0,0) rgba(0,0,0,0); /* Hide scrollbar by default */

  /* WebKit browsers */
  &::-webkit-scrollbar {
    height: 0px; /* hide by default */
    transition: height 0.3s;
  }

  &:hover::-webkit-scrollbar {
    height: 8px; /* show on hover */
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }

  &:hover {
    scrollbar-color: rgba(0,0,0,0.5) rgba(0,0,0,0.1); /* Firefox hover */
  }
}

</style>