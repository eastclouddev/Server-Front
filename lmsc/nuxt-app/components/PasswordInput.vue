<template>
  <v-container class="d-flex justify-space-between">
    <v-row class="align-center">
      <v-col class="text-left text-md-left">
        <label style="font-size: 1em; font-weight: bold" color="#242424"
          >パスワード</label
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
              placeholder="パスワードを入力"
              variant="plain"
              :type="showPassword ? 'text' : 'password'"
              v-model="internalPassword"
              @blur="$emit('blur')"
            >
              <template #append>
                <v-icon @click="showPassword = !showPassword">{{
                  showPassword ? 'mdi-eye-off' : 'mdi-eye'
                }}</v-icon>
              </template>
            </v-text-field>
          </v-sheet>
          <p class="error_message" v-if="errorMessage">{{ errorMessage }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: String,
  errorMessage: String,
})
const emit = defineEmits(['update:modelValue', 'blur'])

const internalPassword = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

const showPassword = ref(false)
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
