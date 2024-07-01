<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
import checkNews from '~/features/news/manager/edit/checkNews.vue'
</script>

<template>
  <checkNews />
</template>
