<!-- CourseOverview.vue -->
<template>
  <v-card flat>
    <v-card-title class="text-h5">{{ title }}</v-card-title>
    <v-card-subtitle class="d-flex align-center">
      <v-chip :color="levelColor" text-color="white" class="mr-4">{{
        level
      }}</v-chip>
      <div>学習時間: {{ duration }}時間</div>
    </v-card-subtitle>
    <v-card-text>
      <div v-for="(paragraph, index) in description" :key="index" class="mb-4">
        {{ paragraph }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title: string;
  level: string;
  duration: number;
  description: string[];
}>();

const levelColor = computed(() => {
  switch (props.level) {
    case "初級":
      return "green";
    case "中級":
      return "orange";
    case "上級":
      return "red";
    default:
      return "primary";
  }
});
</script>
