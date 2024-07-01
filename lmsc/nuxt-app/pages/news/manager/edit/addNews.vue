<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
import addNews from '~/features/news/manager/edit/addNews.vue'
</script>

<template>
  <addNews />
</template>
