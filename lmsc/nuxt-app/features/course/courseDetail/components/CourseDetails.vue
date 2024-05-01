<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-img
          src="https://example.com/sample-image.jpg"
          height="200px"
          gradient="to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)"
        ></v-img>
        <v-card>
          <v-tabs v-model="tab" background-color="white" dark>
            <v-tab value="tab-1">概要</v-tab>
            <v-tab value="tab-2">質問</v-tab>
            <v-tab value="tab-3">課題提出</v-tab>
          </v-tabs>
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="tab-1">
                <v-card flat>
                  <v-card-title class="text-h5">{{ title }}</v-card-title>
                  <v-card-subtitle class="d-flex align-center">
                    <v-chip
                      :color="levelColor"
                      text-color="white"
                      class="mr-4"
                      >{{ level }}</v-chip
                    >
                    <div>学習時間: {{ duration }}時間</div>
                  </v-card-subtitle>
                  <v-card-text>
                    <div
                      v-for="(paragraph, index) in description"
                      :key="index"
                      class="mb-4"
                    >
                      {{ paragraph }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-window-item>
              <v-window-item value="tab-2"> 質問タブの内容 </v-window-item>
              <v-window-item value="tab-3"> 課題提出タブの内容 </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

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

const tab = ref("tab-1");
</script>
