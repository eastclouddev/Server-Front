<template>
  <v-alert v-if="anyError" type="error">
    読み込み中にエラーが発生しました。再度お試しください。
  </v-alert>
  <v-progress-circular
    v-else-if="anyPending"
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
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { AsyncDataRequestStatus, NuxtError } from '#app';

const props = defineProps({
  errors: {
    type: Array as PropType<(NuxtError | null)[]>,
    default: () => [],
  },
  statuses: {
    type: Array as PropType<AsyncDataRequestStatus[]>,
    default: () => [],
  },
});

const anyError = computed(() => props.errors.some(error => error !== null));
const anyPending = computed(() => props.statuses.some(status => status === 'pending'));
</script>
