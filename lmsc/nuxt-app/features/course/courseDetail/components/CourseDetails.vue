<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-img
          src="https://example.com/sample-image.jpg"
          height="200px"
          gradient="to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)"
        ></v-img>
        <v-card>
          <client-only>
            <v-tabs v-model="tab" class="bg-white text-black">
              <v-tab value="course-content" v-if="smAndDown">コース内容</v-tab>
              <v-tab value="overview">概要</v-tab>
              <v-tab value="questions">質問</v-tab>
              <v-tab value="submissions">課題提出</v-tab>
            </v-tabs>
            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="course-content" v-if="smAndDown">
                  <v-card flat>
                    <v-card-title class="text-h6">コースの内容</v-card-title>
                    <!-- ここにImage 1の内容を追加 -->
                  </v-card>
                </v-window-item>
                <v-window-item value="overview">
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
                <v-window-item value="questions">
                  質問タブの内容
                </v-window-item>
                <v-window-item value="submissions">
                  課題提出タブの内容
                </v-window-item>
              </v-window>
            </v-card-text>
          </client-only>
        </v-card>
      </v-col>
      <client-only>
        <v-col cols="12" md="4" v-if="mdAndUp">
          <v-card flat>
            <v-card-title class="text-h6">コースの内容</v-card-title>
            <!-- ここにImage 1の内容を追加 -->
          </v-card>
        </v-col>
      </client-only>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useDisplay } from "vuetify";

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

const { smAndDown, mdAndUp } = useDisplay();
const tab = ref("overview");
</script>
