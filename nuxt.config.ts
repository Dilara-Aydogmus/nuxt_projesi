// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
  
    modules: ['@nuxt/content', '@nuxt/ui', '@pinia/nuxt'],
  
    routeRules: {
      '/': { prerender: true },
    },
  
    plugins: ['~/plugins/firebase.js'],
  
    colorMode: {
      preference: 'light',
    },
  
    compatibilityDate: '2024-12-04',
  });
  