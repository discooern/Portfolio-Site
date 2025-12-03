import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {

    // Globally available fields
    state: () => ({
        apiBaseurl: 'http://localhost:5147',
        xApiKey: '',

        // This field will represent the current state of loading for the entire site
        hasLoaded: false,
        routes: [] as any,
        currentPage: {
            pageData: {
            } as any,
        } as any,

        articles: ["some link", "some other link", "linky linker"]
    }),

    // Globally available functions
    actions: {
		setConfig(runtimeConfig: any) {
            this.apiBaseurl = import.meta.env.API_BASEURL;
            // xApiKey: config.xApiKey,
        },
    },
})