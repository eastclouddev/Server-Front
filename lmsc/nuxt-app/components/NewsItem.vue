
<template>
  <v-container class="mx-aout">
    <v-card flat color="#F5F5F5" class="d-flex align-center pt-2 pb-2 pl-6" width="20rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
      <v-icon color="#10BED2" size="40" class="pr-3">mdi-email-outline</v-icon>
      <label style="font-size: 1.5em; font-weight: bold;">お知らせ</label>
    </v-card>
    <v-card flat class="pt-2 pb-2 pl-6" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    	<v-sheet class="mx-auto mt-8 mb-8" width="60rem" color="#F5F5F5">
        <template v-for="(newsItem, index) in newsItems" :key="index">
          <div style="display: flex; align-items: center; padding:15px; margin-bottom: 15px; background-color:#FFFFFF;">
            <p class="pl-4 pr-4" style="font-weight:400; width:12rem;">{{ newsItem.date }}</p>
            <NuxtLink :to="`/news/${newsItem.id}`" style="color:#242424;">{{ newsItem.title }}</NuxtLink>
          </div>
        </template>
        <NuxtLink to="/" style="display: flex; justify-content: flex-end; color:#242424;" >もっとみる</NuxtLink>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script setup>
const newsItems = [
  {
    id: '1',
    date: '2024.04.30',
    title: 'ニュースタイトル'
  },
  {
    id: '2',
    date: '2024.05.01',
    title: 'ニュースタイトル'
  },
  {
    id: '3',
    date: '2024.05.02',
    title: 'ニュースタイトル'
  },
]
</script>