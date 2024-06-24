<template>
  <v-container class="d-flex mb-3">
    <v-row class="align-center flex-column-sm">
      <label class="sp_label" style="font-size: 1em; font-weight: bold; width: 100px;">{{ label }}</label>
      <v-card flat class="sp_field" width="32rem">
        <div class="d-flex align-center flex-column-sm">
          <v-checkbox
            v-model="isChecked"
            class="sp_checkbox"
            style="padding-top: 20px; padding-left: 70px;"
            @change="handleCheck"
          ></v-checkbox>
          <span class="sp_font" style="font-size: 14.7px;">請求先の住所・連絡先は上記内容（会社情報）を使用する。</span>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const props = defineProps({
  label: String,
});

const emit = defineEmits(['create']);

const isChecked = ref(false);

function handleCheck() {
  emit('create', isChecked.value);
}
</script>

<style lang="scss" scoped>
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
      padding-bottom: 2%;
    }

    &_field {
      width: 100% !important;
    }

    &_font {
      font-size: 20px !important;
      padding-left: 22px;
    }

    &_checkbox {
      padding-left: 10px !important;
      font-size: 25px !important;
    }
  }
}
</style>
