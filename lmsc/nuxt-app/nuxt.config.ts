export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@pinia/nuxt"],
  ssr: true,
  app: {
    baseURL: "/",
    cdnURL: "",
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  components: [
    {
      path: "@/components/",
      pathPrefix: false,
    },
  ],
  plugins: ["~/plugins/api"],
});
