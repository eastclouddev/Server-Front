<template>
  <v-container class="justify-space-between ml-3" style="max-width: 100%">
    <v-row class="align-center mb-4" style="width: 100%">
      <div
        style="width: 200px; display: flex; align-items: center; flex-shrink: 0"
      >
        <label
          class="sp_label"
          style="font-size: 1em; font-weight: bold; margin-right: 10px"
          >郵便番号</label
        >
        <span v-if="showSpan" class="required-mark">必須</span>
      </div>
      <v-card
        flat
        class="d-flex"
        style="flex: 1; display: flex; align-items: center"
      >
        <v-sheet
          class="my-0 pb-4 pl-4 d-flex"
          color="#EBEBEB"
          style="
            flex: 1;
            padding-right: 15px;
            border-radius: 5px;
            max-width: 80px;
          "
        >
          <v-text-field
            hide-details="auto"
            placeholder="000"
            v-model="postalCodePart1"
            variant="plain"
            full-width
          ></v-text-field>
        </v-sheet>
        <span class="post-number-hypen">ー</span>
        <v-sheet
          class="my-0 pb-4 pl-4 d-flex"
          color="#EBEBEB"
          style="
            flex: 1;
            padding-right: 15px;
            border-radius: 5px;
            max-width: 100px;
          "
        >
          <v-text-field
            hide-details="auto"
            placeholder="0000"
            v-model="postalCodePart2"
            variant="plain"
            full-width
          ></v-text-field>
        </v-sheet>
        <v-btn
          flat
          class="search-mark"
          @click="searchAddress"
          style="margin-left: 15px"
          >住所検索</v-btn
        >
      </v-card>
    </v-row>

    <v-row class="align-center mb-4">
      <div
        style="width: 200px; display: flex; align-items: center; flex-shrink: 0"
      >
        <label class="sp_label" style="font-size: 1em; font-weight: bold"
          >都道府県</label
        >
        <span v-if="showSpan" class="required-mark">必須</span>
      </div>
      <v-card flat class="d-flex flex-column" width="25rem">
        <v-select
          flat
          class="sp_field"
          variant="solo-filled"
          bg-color="#EBEBEB"
          style="height: 64px; width: 200px; border-radius: 5px"
          v-model="selected"
          :items="prefectures"
          item-title="label"
          item-value="value"
          placeholder="選択してください"
          return-object
          hide-details="auto"
          :menu-props="{ maxHeight: '500px' }"
        ></v-select>
      </v-card>
    </v-row>
    <v-row class="align-center mb-4">
      <div
        style="width: 200px; display: flex; align-items: center; flex-shrink: 0"
      >
        <label class="sp_label" style="font-size: 1em; font-weight: bold"
          >市区町村</label
        >
        <span v-if="showSpan" class="required-mark">必須</span>
      </div>
      <v-card flat class="sp_label sp_field d-flex flex-column" width="25rem">
        <v-sheet
          class="sp_field my-0 pr-4 pb-4 pl-4"
          color="#EBEBEB"
          style="width: 200px; border-radius: 5px"
        >
          <v-text-field
            hide-details="auto"
            placeholder="〇〇市"
            variant="plain"
            v-model="city"
            full-width
          ></v-text-field>
        </v-sheet>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { getAddressByPostalCode } from '~/libs/useZipCloud'
import type { ZipCloudAddress } from '~/libs/useZipCloud'
import { prefectures } from '~/constants/service'

const props = defineProps({
  showSpan: {
    type: Boolean,
    default: true,
  },
})

const postalCodePart1 = ref('')
const postalCodePart2 = ref('')
const selected = ref<{ label: string; value: string } | null>(null)
const city = ref('')

const searchAddress = async () => {
  const postalCode = `${postalCodePart1.value}${postalCodePart2.value}`
  const address: ZipCloudAddress | null =
    await getAddressByPostalCode(postalCode)
  if (address) {
    selected.value = prefectures.find(p => p.label === address.address1) || null
    city.value = address.address2
  }
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
.search-mark {
  color: #ff5136;
  background-color: #ffff;
  border: 1px solid #ff5136;
  border-radius: 5px;
  padding: 0 1%;
  margin: 0 3%;
}
.post-number-hypen {
  padding-top: 20px;
  margin-right: 15px;
  margin-left: 15px;
}
@media screen and (max-width: 768px) {
  .sp {
    &_label {
      font-size: 2em !important;
    }

    &_field {
      width: 100% !important;
    }
    &_post_left {
      width: 20%;
    }
    &_post_right {
      width: 30%;
    }
  }
}
</style>
