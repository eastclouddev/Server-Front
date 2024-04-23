export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['@pinia/nuxt'],
  ssr: true,
  app: {
    baseURL: '/',
    cdnURL: '',
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  components: [
    {
      path: '@/components/',
      pathPrefix: false,
    },
  ],
})