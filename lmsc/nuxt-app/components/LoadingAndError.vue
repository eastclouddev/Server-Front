<template>
  <v-alert v-if="error" type="error">
    読み込み中にエラーが発生しました。再度お試しください。
  </v-alert>
  <v-progress-circular
    v-else-if="status === 'pending'"
    indeterminate
    color="primary"
    size="64"
  >
    <template v-slot:default>
      <v-progress-circular indeterminate color="primary" size="48" />
    </template>
  </v-progress-circular>
  <slot v-else />
</template>

<script setup lang="ts">
import type { AsyncDataRequestStatus, NuxtError } from "#app";

defineProps({
  error: {
    type: Object as PropType<NuxtError | null>,
    default: null,
  },
  status: {
    type: String as PropType<AsyncDataRequestStatus>,
    default: "idle",
  },
});
</script>
