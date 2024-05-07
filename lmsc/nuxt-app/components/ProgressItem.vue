<template>
  <v-container class="mx-auto">
    <v-card flat color="#F5F5F5" class="d-flex align-center pt-2 pb-2 pl-6" width="16rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/progress.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">学習進捗状況</label>
    </v-card>
    <v-card flat class="pt-2 pb-2 pl-6" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    <SutdiengCouse />
    <QuestionList />
    <ReviewList />
    </v-card>
  </v-container>
</template>
