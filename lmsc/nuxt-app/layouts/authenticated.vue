<template>
  <v-app>
    <Header />
    <slot />
    <Footer />
  </v-app>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
})
</script>
