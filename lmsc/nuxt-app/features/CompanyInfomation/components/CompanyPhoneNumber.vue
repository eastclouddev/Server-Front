<template>
    <v-container class="d-flex justify-space-between mb-3">
      <v-row class="align-center justify-space-between flex-column-sm">
        <label class="sp_label" style="font-size: 1em; font-weight: bold;">{{ label }}</label>
        <span class="required-mark">必須</span>
        <v-card flat class="sp_field d-flex flex-column" width="25rem">
          <v-sheet class="my-0 pr-4 pb-4 pl-4" color="#EBEBEB">
            <!-- TODO: 入力フォーム背景色　調整 -->
            <v-text-field  hide-details="auto" :placeholder="placeholder" variant="plain" full-width ></v-text-field>
          </v-sheet>
        </v-card>
      </v-row>
    </v-container>
  </template>
  <script setup>
  import { useField, useForm } from 'vee-validate';
  // import { object, string, setLocale } from 'yup';
  
  const props = defineProps({
    modelValue: String,
    label: String,
    placeholder: String
  });
  </script>
  <style lang="scss" scoped>
  .error {
    border: 1px solid red;
    border-radius: 5px;
  }
  
  .error_message {
    color: #FF0000;
    font-size: 0.75em;
  }
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
        padding-bottom: 2;
      }
      &_field {
        width: 100% !important;
      }
    }
    .error_message {
        font-size: 1.5em;
      }
  }
  </style>