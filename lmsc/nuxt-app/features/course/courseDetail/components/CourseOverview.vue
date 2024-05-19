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
            <div class="description-container mb-4" v-html="formattedDescription"></div>
            <div v-if="isOverflowing" class="text-right">
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
            <div class="mb-4" v-html="formattedDescription"></div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const props = defineProps<{
  title: string;
  level: string;
  duration: number;
  description: string;
}>();

const showFullDescription = ref(false);
const isOverflowing = ref(false);

const formattedDescription = computed(() => {
  if (showFullDescription.value) {
    return props.description.replace(/\n/g, '<br />');
  }
  const lines = props.description.split('\n');
  const truncatedLines = lines.slice(0, 12);
  return truncatedLines.join('<br />');
});

onMounted(() => {
  const container = document.querySelector('.description-container');
  if (container) {
    const style = window.getComputedStyle(container);
    const lineHeight = parseFloat(style.lineHeight);
    const maxHeight = lineHeight * 12;
    if (container.scrollHeight > maxHeight) {
      isOverflowing.value = true;
    }
  }
});
</script>

<style scoped>
.description-container {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  line-clamp: 12; /* Not fully supported in all browsers */
  max-height: calc(1.5em * 12); /* Adjust '1.5em' based on your line-height */
  white-space: pre-wrap; /* Preserve whitespace and line breaks */
}
</style>
