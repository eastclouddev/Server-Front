<template>
  <v-container class="d-flex justify-space-between">
    <v-row class="align-center">
      <v-col class="text-left text-md-left">
        <label style="font-size: 0.9em; font-weight: bold" color="#242424"
          >メールアドレス</label
        >
      </v-col>
      <v-col class="text-center text-md-right">
        <v-card flat class="d-flex flex-column" width="25rem">
          <v-sheet
            :class="{ error: errorMessage }"
            class="my-0 pr-4 pb-4 pl-4"
            color="#EBEBEB"
          >
            <v-text-field
              hide-details="auto"
              placeholder="XXXXXXX@example.com"
              variant="plain"
              type="email"
              v-model="internalEmail"
              @blur="$emit('blur')"
            ></v-text-field>
          </v-sheet>
          <p class="error_message" v-if="errorMessage">{{ errorMessage }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  errorMessage: String,
})
const emit = defineEmits(['update:modelValue', 'blur'])

const internalEmail = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})
</script>

<style lang="scss" scoped>
.error {
  border: 1px solid red;
  border-radius: 5px;
}

.error_message {
  color: #ff0000;
  font-size: 0.75em;
  text-align: left;
}
@media screen and (max-width: 768px) {
  .error_message {
    font-size: 1em;
  }
}
</style>
