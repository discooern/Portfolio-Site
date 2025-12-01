<template>
    <header
        class="flex flex-col -top-0 -left-0 -right-0 w-[100%] h-[110px] bg-[--color-secondary] text-[--color-accent]">
        <div class="h-[70px] flex items-center p-[1rem]">
            <h2 class="font-bold text-xl text-[--color-accent] !m-0">Our Portfolio Site</h2>
        </div>
        <div class="w-[100%] h-[40px] bg-[--color-secondary] px-[1rem]">
            <nuxt-link v-for="item in store.routes" :to="item.slug" class="mx-[.5em]">{{ item.title }}</nuxt-link>
        </div>
    </header>
</template>


<script setup lang="ts">
import { useMainStore } from '../stores/store';

const store = useMainStore();
</script>