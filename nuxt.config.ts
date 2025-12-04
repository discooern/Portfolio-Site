// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '../assets/style/main.scss',
	'quill/dist/quill.snow.css',
    'quill/dist/quill.core.css',
	'highlight.js/styles/atom-one-dark.css'
  ],
})
