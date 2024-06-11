<template>
    <div>
    <Head>
      <Title>進捗管理 | iDemy</Title>
      <Meta name="description" content="iDemy | 進捗管理画面一覧" />
    </Head>
    <v-container>
      <StudyProgressList />
    </v-container>
    </div>
  </template>
  <script setup>
  import StudyProgressList from "~/features/progress/StudyProgressList.vue";
  </script>

