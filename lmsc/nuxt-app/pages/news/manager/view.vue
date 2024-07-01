<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
import newsView from '~/features/news/manager/view.vue'
</script>

<template>
  <newsView />
</template>
