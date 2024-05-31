<template>
  <v-container class="d-flex justify-space-between mb-3">
    <v-row class="align-center justify-space-between flex-column-sm">
      <div style="width: 200px; display: flex; align-items: center;" >
        <label class="sp_label" style="font-size: 1em; font-weight: bold;">{{ label }}</label>
        <span v-if="showRequiredMark" class="required-mark">必須</span>
      </div>
      <v-card flat class="sp_field d-flex flex-column" width="25rem">
        <v-sheet class="sp_field my-0 pr-4 pb-4 pl-4" color="#EBEBEB" style="width: 15rem; border-radius: 5px;">
          <v-text-field hide-details="auto" :placeholder="placeholder" variant="plain" full-width ></v-text-field>
        </v-sheet>
      </v-card>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const showRequiredMark = ref(true);

onMounted(() => {
  // 特定のページでは必須マークを表示しない
  if (route.name === 'billingInformation') {
    showRequiredMark.value = false;
  }
});

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String
});
</script>
<style lang="scss" scoped>
.required-mark {
  color: #FFFF;
  background-color: #FF5A36;
  border-radius: 5px;
  font-weight: bold;
  padding: 0 1%;
  margin: 0 3%;
}
@media screen and (max-width: 768px) {
  .sp {
    &_label {
      font-size: 2em !important;
    }

    &_field {
      width: 100% !important;
    }
  }
}
</style>