<<<<<<< HEAD
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({})
  nuxtApp.vueApp.use(vuetify)
  
})
=======
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({});
  nuxtApp.vueApp.use(vuetify);
});
>>>>>>> develop
