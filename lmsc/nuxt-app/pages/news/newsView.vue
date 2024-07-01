<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
import newsView from '~/features/news/newsView.vue'
</script>

<template>
  <newsView />
</template>
