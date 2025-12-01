<template>
    <div class="page w-[90vw] max-w-[1000px]">
        <div v-for="item in props.blogPost.content" v-html="item"></div>
    </div>
</template>

<script setup lang="ts">
    // Models
    import type BlogPost from '../types/blogPost';

    interface Props {
        blogPost: BlogPost
    }

    const props = defineProps<Props>();
</script>