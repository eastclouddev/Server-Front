<!-- CourseOverview.vue -->
<template>
  <v-card
    flat
    :style="{
      backgroundColor: `rgb(var(--v-theme-background))`,
      padding: '32px',
    }"
  >
    <v-card-title class="text-h5 font-weight-bold">{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col cols="12" md="2">
          <div class="text-left">基本情報</div>
        </v-col>
        <v-col cols="12" md="10">
          <div>
            <div>スキルレベル: {{ level }}</div>
            <div>学習時間: {{ duration }}時間</div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col cols="12" md="2">
          <div class="text-left">解説</div>
        </v-col>
        <v-col cols="12" md="10">
          <div v-if="!showFullDescription">
            <div
              v-for="(paragraph, index) in visibleDescription"
              :key="index"
              class="mb-4"
            >
              {{ paragraph }}
            </div>
            <div v-if="description.length > 3" class="text-right">
              <a
                href="#"
                @click.prevent="showFullDescription = true"
                style="
                  color: #292737;
                  text-decoration: underline;
                  text-underline-offset: 3px;
                "
              >
                もっと見る
              </a>
            </div>
          </div>
          <div v-else>
            <div
              v-for="(paragraph, index) in description"
              :key="index"
              class="mb-4"
            >
              {{ paragraph }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  title: string;
  level: string;
  duration: number;
  description: string[];
}>();

const showFullDescription = ref(false);

const visibleDescription = computed(() => {
  return showFullDescription.value
    ? props.description
    : props.description.slice(0, 3);
});
</script>
