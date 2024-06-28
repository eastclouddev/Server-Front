<template>
    <div class="d-flex justify-space-between sp_content">
      <v-col class="text-left text-md-left pa-0 d-flex align-start">
        <div style="width: 100%;" class="mt-5 sp_label">
          <label :style="{ fontSize: '1em', fontWeight: 'bold', color: '#242424' }" >{{ label }}</label>
          <span class="required_mark" style="height: 3ex;" v-if="required">必須</span>
        </div>
      </v-col>
      <v-col class="text-center text-md-right pa-0">
        <v-card flat class="d-flex flex-column sp_field" width="25rem">
          <v-sheet :class="{ error: errorMessage }" class="my-0 pr-4 pb-4 pl-4 " color="#EBEBEB">
            <v-text-field
              hide-details="auto"
              :placeholder="placeholder"
              variant="plain"
              :type="showPassword ? 'text' : 'password'"
              v-model="internalPassword"
              @blur="$emit('blur')"
            >
              <template #append>
                <v-icon @click="showPassword = !showPassword">
                  {{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}
                </v-icon>
              </template>
            </v-text-field>
          </v-sheet>
          <div class="d-flex flex-column">
            <p class="additional_text mt-2">{{ additionalText }}</p>
            <p class="error_message mb-3" v-if="errorMessage">{{ errorMessage }}</p>
          </div>
        </v-card>
      </v-col>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  errorMessage: String,
  required: Boolean,
  additionalText: String,  // 新しいプロパティ
})
const emit = defineEmits(['update:modelValue', 'blur'])

const internalPassword = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

const showPassword = ref(false)
</script>

<style scoped lang="scss">
.error {
  border: 1px solid red;
  border-radius: 5px;
}

.error_message {
  color: #ff0000;
  font-size: 0.75em;
  text-align: left;
}

.additional_text {
  color: #242424;
  font-size: 0.75em;
  text-align: left;
}

.required_mark {
  color: #ffff;
  background-color: #ff5a36;
  border-radius: 5px;
  font-weight: bold;
  padding: 0 1%;
  margin: 0 3%;
}
@media screen and (max-width: 768px) {
  .error_message,
  .additional-text {
    font-size: 1em;
  }
  .sp {
  &_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &_label {
    font-size: 2em !important;
    padding-bottom: 2%;
  }
  &_field {
    width: 100% !important;
  }
}
}
</style>