// https://nuxt.com/docs/api/configuration/nuxt-config
import VuetifyPlugin from 'vite-plugin-vuetify'

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
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
  components: [
    {
      path: '@/components/',
      pathPrefix: false,
    },
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [VuetifyPlugin()],
  },
})
