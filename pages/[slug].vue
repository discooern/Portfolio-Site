<template>
    <div v-if="store.currentPage && store.currentPage.content" class="page ql-snow">
        <div v-for="item in store.currentPage.content" v-html="quillDeltaToHtml(store?.currentPage?.content)" class="ql-editor max-w-[1000px]"></div>
    </div>
</template>

<script setup lang="ts">
    import { useMainStore } from '../stores/store';
	import hljs from 'highlight.js'
	
    // Helpers
    import ContentHelper from '../helpers/contentHelper';
import Quill from 'quill';

    const contentHelper: ContentHelper = new ContentHelper;
	
    const store = useMainStore();
	
	onMounted(() => {
		quillDeltaToHtml(store?.currentPage?.content);
		highlight();
	});

	watch(() => store.currentPage?.content, () => highlight(), { deep: true })

	function highlight() {
  	requestAnimationFrame(() => {
		document.querySelectorAll('pre .ql-syntax').forEach((block) => {
			hljs.highlightElement(block as HTMLElement)
		})
	})
	}

	
    function quillDeltaToHtml(delta: any): string {
		const container = document.createElement("div")
		const tempQuill = new Quill(container);
		tempQuill.setContents(delta);
		return tempQuill.root.innerHTML;

        // const ops = delta.ops || delta;
        // var cfg = {};
        // var converter = new QuillDeltaToHtmlConverter(ops, cfg);
        // var html = converter.convert();

        // console.log("stuff", delta);
        // console.log("html", html);

        // return html;
    }
</script>