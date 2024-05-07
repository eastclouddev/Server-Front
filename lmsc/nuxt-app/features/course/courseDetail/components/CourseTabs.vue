<template>
  <v-tabs
    v-model="currentTab"
    class="bg-white text-black"
    @update:model-value="updateTab($event as string)"
  >
    <v-tab value="course-content" v-if="smAndDown">コース内容</v-tab>
    <v-tab value="overview">概要</v-tab>
    <v-tab value="questions">質問</v-tab>
    <v-tab value="submissions">課題提出</v-tab>
  </v-tabs>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useDisplay } from "vuetify";

const props = defineProps<{
  tab: string;
}>();

const emit = defineEmits<{
  (e: "update:tab", value: string): void;
}>();

const { smAndDown } = useDisplay();
const currentTab = ref(props.tab);

const updateTab = (value: string) => {
  emit("update:tab", value);
};

watch(
  () => props.tab,
  (newValue) => {
    currentTab.value = newValue;
  }
);
</script>
