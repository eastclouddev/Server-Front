
import NewsItem from '~/components/NewsItem.vue';
<template>
  <v-container style="margin:10% 0;">
    <v-sheet class="d-flex align-end pt-2 pb-8 pl-0 " >
      <img src="assets/idemy_logo.svg" width="192" height="70">
      <v-card-title class="ml-3 pa-0 sp_title"  style="font-size:1.5em; font-weight: bold;"
    color="#242424">〇〇さん おかえりなさい</v-card-title>
    </v-sheet>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>
    <v-card flat class="mt-8 mb-8">
      <NewsItem />
      <StudyItem />
      <ProgressItem />
      <CouseItem />
      <RecommendationItem />
    </v-card>
  </v-container>
</template>