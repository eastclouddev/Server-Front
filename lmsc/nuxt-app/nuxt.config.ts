import VuetifyPlugin from 'vite-plugin-vuetify'
import { config as loadEnvConfig } from 'dotenv'

loadEnvConfig()

console.log('CUSTOM_AWS_ACCESS_KEY_ID:', process.env.CUSTOM_AWS_ACCESS_KEY_ID)
console.log(
  'CUSTOM_AWS_SECRET_ACCESS_KEY:',
  process.env.CUSTOM_AWS_SECRET_ACCESS_KEY
)
console.log('CUSTOM_AWS_REGION:', process.env.CUSTOM_AWS_REGION)
console.log('CUSTOM_AWS_S3_BUCKET:', process.env.CUSTOM_AWS_S3_BUCKET)

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
  css: ['~/assets/css/tailwind.css', 'vuetify/styles'],
  build: {
    transpile: ['vuetify', '@types/platform', '@types/uuid'],
  },
  components: [
    {
      path: '@/components/',
      pathPrefix: false,
    },
    {
      path: '~/features/**/components',
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
  plugins: ['~/plugins/api', '~/plugins/vuetify', '~/plugins/vue-query'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    customAwsAccessKeyId: process.env.CUSTOM_AWS_ACCESS_KEY_ID,
    customAwsSecretAccessKey: process.env.CUSTOM_AWS_SECRET_ACCESS_KEY,
    customAwsRegion: process.env.CUSTOM_AWS_REGION,
    customAwsS3Bucket: process.env.CUSTOM_AWS_S3_BUCKET,
    public: {
      mode: process.env.NUXT_PUBLIC_MODE,
      isDev: process.env.NUXT_PUBLIC_DEV,
      isProd: process.env.NUXT_PUBLIC_PROD,
      serviceUrl: process.env.NUXT_PUBLIC_SERVICE_URL,
      apiEndpoint: process.env.API_URL,
    },
  },
})
