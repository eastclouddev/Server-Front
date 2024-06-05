<template>
  <v-tabs
    v-model="currentTab"
    class="custom-tabs"
    @update:model-value="updateTab($event as string)"
  >
    <v-tab
      v-for="tab in tabs"
      :key="tab.value"
      :value="tab.value"
      v-show="!tab.showOnSmallOnly || smAndDown"
      class="custom-tab"
    >
      {{ tab.label }}
    </v-tab>
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

// タブのデータをリストとして定義
const tabs = ref([
  { label: "コース内容", value: "course-content", showOnSmallOnly: true },
  { label: "概要", value: "overview", showOnSmallOnly: false },
  { label: "質問", value: "questions", showOnSmallOnly: false },
  { label: "課題提出", value: "submissions", showOnSmallOnly: false },
]);

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

<style lang="scss" scoped>
.custom-tabs {
  .v-tab {
    margin-right: 8px;
    background-color: #fafafa;
    border-radius: 4px;
    padding: 10px 20px;

    &--selected {
      font-weight: bold;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>

<style>
.custom-tabs .v-tab__slider {
  opacity: 0 !important;
}
</style>
