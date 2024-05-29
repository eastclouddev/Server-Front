<template>
    <v-container class="" fill-height>
      <v-row justify="center">
        <span class="sp_a" style="color: #000000DE; font-size: 17px;">個人情報は</span>
        <a class="sp_a" style="color: #000000DE; font-size: 17px;"  href="http://localhost:3000/privasypolisy" target="_blank">プライバシーポリシー</a>
        <span class="sp_a" style="color: #000000DE; font-size: 17px;">に従って取り扱いします。</span>
      </v-row>
      <v-row justify="center">
        <v-checkbox class="sp_checkbox"></v-checkbox>
        <div style="padding-top: 16px">
          <a class="sp_a" style="color: #000000DE; font-size: 17px;"  href="http://localhost:3000/teamofuse" target="_blank">利用規約</a>
          <span class="sp_a" style="color: #000000DE; font-size: 17px;" >に同意する</span>
        </div>
      </v-row>
    </v-container>
  </template>
  <script setup>
  
  const props = defineProps({
    modelValue: String,
    label: String,
    placeholder: String
  });
  </script>
  <style lang="scss" scoped>
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
      padding-bottom: 2%;
    }

    &_field {
      width: 100% !important;
    }
    &_checkbox{
      font-size: 20px !important;
    }
    &_a{
    color: #000000DE;
    font-size: 20px !important;
  }
  }
}
  </style>