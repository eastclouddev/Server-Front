<template>
  <v-container class="mx-aout">
    <v-card flat color="#F5F5F5" class="d-flex align-center pt-2 pb-2 pl-6" width="20rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/progress.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">学習進捗状況</label>
    </v-card>
    <v-card flat class="pt-2 pb-8 pl-6" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    <ProgressCouse />
    <QuestionList />
    <ReviewList />
    </v-card>
  </v-container>
</template>

<script setup>
import ProgressCouse from "~/features/auth/dashboard/components/ProgressCouse.vue";
import QuestionList from "~/features/auth/dashboard/components/QuestionList.vue";
import ReviewList from "~/features/auth/dashboard/components/ReviewList.vue";
</script>