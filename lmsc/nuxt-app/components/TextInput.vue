<template>
  <div class="inner">
    <label class="inner_item mb-2" style="font-weight: bold;" v-if="label">
      {{ label }}
      <span v-if="required" class="required-tooltip">必須</span>
    </label>
    <div>
      <v-text-field
        :model-value="modelValue"
        @update:modelValue="updateValue"
        :type="type"
        :id="id"
        :class="['outlined', { 'error-border': error }]"
        :placeholder="placeholder"
        :outlined="outlined"
        :error="!!error"
        :required="required"
      />
      <p class="errorMessage" v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
}
</script>

<style scoped>
.inner {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &_item {
    color: #242424;
    margin-bottom: 8px;
  }
}

.required-tooltip {
  display: inline-block;
  background-color: #FF5A36;
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  margin-left: 8px;
  font-size: 12px;
}

.error-border {
  border: 1px solid #FF0000;
}

.errorMessage {
  font-size: 12px;
  color: #FF0000;
  margin: 0;
}
</style>
