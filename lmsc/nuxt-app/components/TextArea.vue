<template>
    <div class="inner">
      <label class="inner_item mb-2" style="font-weight: bold;" v-if="label">
        {{ label }}
        <span v-if="required" class="required-tooltip">必須</span>
      </label>
      <div>
        <textarea
          :id="id"
          :value="value"
          @input="$emit('update:value', $event.target.value)"
          :class="['outlined', { 'error-border': error }]"
          :placeholder="placeholder"
        ></textarea>
        <p class="errorMessage" v-if="error">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextArea',
    props: {
      value: {
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
    },
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
  
  textarea {
    height: 100px;
    width: 100%;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 10px;
    background-color: #FFFFFF;
    outline: none;
    border: 1px solid #ccc;
    resize: vertical;
  }
  
  textarea.outlined {
    border: 1px solid #ccc;
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
  