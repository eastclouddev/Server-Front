import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            background: "#fafafa",
            primary: "#1976D2",
            secondary: "#424242",
            accent: "#82B1FF",
          },
        },
        dark: {
          dark: true,
          colors: {},
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
