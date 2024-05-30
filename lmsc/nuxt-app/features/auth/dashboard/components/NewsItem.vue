<template>
  <v-container class="mx-aout">
    <v-card flat color="#F5F5F5" class="d-flex align-center pt-2 pb-2 pl-6" width="20rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
      <v-icon color="#10BED2" size="40" class="pr-3">mdi-email-outline</v-icon>
      <label style="font-size: 1.5em; font-weight: bold;">お知らせ</label>
    </v-card>
    <v-card flat class="pt-2 pb-2" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    	<v-sheet class="mx-auto mt-8 mb-8" width="90%" color="#F5F5F5">
        <template >
          <div class="sp_item pa-4" v-for="(newsItem,index) in newsItems" :key="index">
            <p class="pr-2" style="font-weight:400; width:7rem;">{{ newsItem.date }}</p>
            <p class="mr-5 category">{{ newsItem.category }}</p>
            <NuxtLink :to="`/news/${newsItem.id}`" style="color:#242424;" class="sp_title">{{ newsItem.title }}</NuxtLink>
          </div>
        </template>
        <NuxtLink to="/" style="display: flex; justify-content: flex-end; color:#242424;">もっとみる</NuxtLink>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script setup>
const newsItems = [
  {
    id: '1',
    date: '2024.04.30',
    title: 'ニュースタイトル',
    category: 'カテゴリA'
  },
  {
    id: '2',
    date: '2024.05.01',
    title: 'ニュースタイトル',
    category: 'カテゴリB'
  },
  {
    id: '3',
    date: '2024.05.02',
    title: 'ニュースタイトル',
    category: 'カテゴリC'
  },
]
</script>
<style lang="scss" scoped>
.sp{
  &_item {
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #FFFFFF;
  }
}
.category {
      display: block;
      margin: 8px 0;
      font-size: 0.9em;
      font-weight: bold;
      padding: 5px 10px;
      color: #FFFFFF;
      background-color: #FF5A36;
      border-radius: 5px;
    }
@media (max-width: 768px) {
  .sp{
    &_item {
    flex-direction: column;
    align-items: flex-start;
  }
  &_title {
    font-size: 1.5em;
    font-weight: bold;
  }
}
}
</style>
