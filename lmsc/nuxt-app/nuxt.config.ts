// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: ['@nuxtjs/axios',],
  ssr:true,
  target: 'static',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // 他のメタタグもここで定義する場合は追加します
    ],
  },
  components:[{
    path:'@/components/',
    pathPrefix:false
    }],
   plugins: [
    '~/plugins/vue-formulate'
  ]
})
