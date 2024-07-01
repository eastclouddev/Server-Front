<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
import newsDetail from '~/features/news/newsDetail.vue'
</script>

<template>
  <newsDetail />
</template>
