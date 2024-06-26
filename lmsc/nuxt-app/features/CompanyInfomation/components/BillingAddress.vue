<template>
  <v-container
    class="justify-space-between"
    style="max-width: 100%; padding-bottom: 0px"
  >
    <v-row class="align-center mb-5" style="width: 100%">
      <div
        class="label-container"
        :class="{ 'label-mobile': isMobile }"
        style="width: 200px"
      >
        <label
          class="sp_label"
          style="font-size: 1em; font-weight: bold; margin-right: 10px"
          >郵便番号</label
        >
        <span v-if="showSpan" class="required-mark" style="padding: 3px"
          >必須</span
        >
      </div>
      <div class="postal-container" style="flex: 1">
        <v-card
          flat
          class="d-flex postal-card ml-3"
          style="display: flex; align-items: center; width: 100%"
        >
          <v-sheet
            class="my-0 pb-4 pl-4 d-flex postal-code-part"
            color="#EBEBEB"
            style="
              padding-right: 15px;
              border-radius: 5px;
              flex: 1;
              width: 150px;
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
            class="my-0 pb-4 pl-4 d-flex postal-code-part"
            color="#EBEBEB"
            style="padding-right: 15px; border-radius: 5px; flex: 1"
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
      </div>
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
      <v-card flat class="d-flex flex-column ml-3" width="25rem">
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
      <v-card
        flat
        class="sp_label sp_field d-flex flex-column ml-3"
        width="25rem"
      >
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
import { ref, defineProps, computed, defineEmits } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { getAddressByPostalCode } from '~/libs/useZipCloud'
import type { ZipCloudAddress } from '~/libs/useZipCloud'
import { prefectures } from '~/constants/service'

const props = defineProps({
  showSpan: {
    type: Boolean,
    default: true,
  },
})

const emits = defineEmits(['create'])

const postalCodePart1 = ref('')
const postalCodePart2 = ref('')
const selected = ref<{ label: string; value: string } | null>(null)
const city = ref('')

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

const searchAddress = async () => {
  const postalCode = `${postalCodePart1.value}${postalCodePart2.value}`
  const address: ZipCloudAddress | null =
    await getAddressByPostalCode(postalCode)
  if (address) {
    selected.value = prefectures.find(p => p.label === address.address1) || null
    city.value = address.address2

    // データを親コンポーネントに送信
    emitCreateEvent()
  }
}

function emitCreateEvent() {
  if (selected.value && city.value && postalCodePart1.value && postalCodePart2.value) {
    const postal_code = `${postalCodePart1.value}-${postalCodePart2.value}`
    const prefecture = selected.value.label
    const cityValue = city.value
    emits('create', { prefecture: prefecture, city: cityValue, postal_code: postal_code})
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
.label-mobile {
  width: 100%;
  margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
  .label-container {
    width: 100%;
    margin-bottom: 10px;
  }

  .postal-container {
    width: 100%;
  }

  .postal-card {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .postal-code-part {
    max-width: 100%;
  }

  .search-mark {
    margin-left: 15px;
    width: auto;
    margin-top: 0;
  }

  .post-number-hypen {
    display: block;
  }

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
