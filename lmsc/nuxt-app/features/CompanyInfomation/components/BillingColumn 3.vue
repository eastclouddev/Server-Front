<template>
  <v-container class="d-flex justify-space-between mb-3">
    <v-row class="justify-space-between flex-column-sm">
      <label class="sp_label" style="font-size: 1em; font-weight: bold;padding-top: 10px;">{{ label }}</label>
      <v-card flat class="sp_field d-flex flex-column" width="25rem">
        <v-sheet class="my-0 pr-4 pl-4" style="padding-bottom: 100px" color="#EBEBEB">
          <v-text-field hide-details="auto" :placeholder="placeholder" variant="plain" full-width ></v-text-field>
        </v-sheet>
      </v-card>
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
  }
}
</style>