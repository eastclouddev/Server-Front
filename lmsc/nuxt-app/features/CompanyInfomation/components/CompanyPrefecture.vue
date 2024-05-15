<template>
    <v-container class="d-flex justify-space-between mb-3">
      <v-row class="align-center justify-space-between flex-column-sm">
        <label class="sp_label" style="font-size: 1em; font-weight: bold;">{{ label }}</label>
        <span class="required-mark">必須</span>
        <v-card flat class="sp_field d-flex flex-column" width="25rem">
        <v-sheet class="my-0 pr-4 pb-4 pl-4" color="#EBEBEB">
            <!-- TODO: 入力フォーム背景色　調整 -->
            <v-select v-model="selected" :items="prefectures" item-title="label" item-value="value" :placeholder="placeholder"  return-object />
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
  const selected = ref()
  const prefectures= [
        { label: '北海道', value: '1' },
        { label: '青森県', value: '2' },
        { label: '岩手県', value: '3' },
        { label: '宮城県', value: '4' },
        { label: '秋田県', value: '5' },
        { label: '山形県', value: '6' },
        { label: '福島県', value: '7' },
        { label: '茨城県', value: '8' },
        { label: '栃木県', value: '9' },
        { label: '群馬県', value: '10' },
        { label: '埼玉県', value: '11' },
        { label: '千葉県', value: '12' },
        { label: '東京都', value: '13' },
        { label: '神奈川県', value: '14' },
        { label: '新潟県', value: '15' },
        { label: '富山県', value: '16' },
        { label: '石川県', value: '17' },
        { label: '福井県', value: '18' },
        { label: '山梨県', value: '19' },
        { label: '長野県', value: '20' },
        { label: '岐阜県', value: '21' },
        { label: '静岡県', value: '22' },
        { label: '愛知県', value: '23' },
        { label: '三重県', value: '24' },
        { label: '滋賀県', value: '25' },
        { label: '京都府', value: '26' },
        { label: '大阪府', value: '27' },
        { label: '兵庫県', value: '28' },
        { label: '奈良県', value: '29' },
        { label: '和歌山県', value: '30' },
        { label: '鳥取県', value: '31' },
        { label: '島根県', value: '32' },
        { label: '岡山県', value: '33' },
        { label: '広島県', value: '34' },
        { label: '山口県', value: '35' },
        { label: '徳島県', value: '36' },
        { label: '香川県', value: '37' },
        { label: '愛媛県', value: '38' },
        { label: '高知県', value: '39' },
        { label: '福岡県', value: '40' },
        { label: '佐賀県', value: '41' },
        { label: '長崎県', value: '42' },
        { label: '熊本県', value: '43' },
        { label: '大分県', value: '44' },
        { label: '宮崎県', value: '45' },
        { label: '鹿児島県', value: '46' },
        { label: '沖縄県', value: '47' }
      ]
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

    