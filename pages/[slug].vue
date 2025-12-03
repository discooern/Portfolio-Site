<template>
    <div v-if="store.currentPage && store.currentPage.content" class="page">
        <div v-for="item in store.currentPage.content" v-html="contentHelper.quillDeltaToHtml(store?.currentPage?.content)"></div>
    </div>
</template>

<script setup lang="ts">
    import { useMainStore } from '../stores/store';

    // Helpers
    import ContentHelper from '../helpers/contentHelper';

    const contentHelper: ContentHelper = new ContentHelper;

    const store = useMainStore();
</script>