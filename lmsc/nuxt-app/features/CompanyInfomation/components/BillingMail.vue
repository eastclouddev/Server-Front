<template>
  <v-container class="d-flex mb-3">
    <v-row class="align-center flex-column-sm">
      <div
        class="sp_width mb-3"
        style="width: 200px; display: flex; align-items: center"
      >
        <label class="sp_label" style="font-size: 1em; font-weight: bold">{{
          label
        }}</label>

        <span v-if="showSpan" class="required-mark">必須</span>
      </div>
      <v-card flat class="sp_field d-flex flex-column ml-3" width="25rem">
        <v-sheet class="my-0 pr-4 pb-4 pl-4" color="#EBEBEB">
          <v-text-field
            hide-details="auto"
            :placeholder="placeholder"
            variant="plain"
            full-width
            v-model="inputValue"
            @input="emitCreateEvent"
          ></v-text-field>
        </v-sheet>
      </v-card>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, onMounted, defineProps, defineEmits, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showRequiredMark = ref(true)

onMounted(() => {
  // 特定のページでは必須マークを表示しない
  if (route.name === 'billingInformation') {
    showRequiredMark.value = false
  }
})
const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  showSpan: {
    type: Boolean,
    default: true
  }
})

const emits = defineEmits(['create'])

const inputValue = ref(props.modelValue)

watch(inputValue, (newValue) => {
  emits('create', newValue)
})

function emitCreateEvent() {
  emits('create', inputValue.value)
}
</script>
<style lang="scss" scoped>
.error {
  border: 1px solid red;
  border-radius: 5px;
}

.error_message {
  color: #ff0000;
  font-size: 0.75em;
}
.required-mark {
  color: #ffff;
  background-color: #ff5a36;
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

    &_width {
      width: 100% !important;
    }
  }

  .error_message {
    font-size: 1.5em;
  }
}
</style>
