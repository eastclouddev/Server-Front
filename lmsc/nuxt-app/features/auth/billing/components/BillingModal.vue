<template>
  <v-dialog v-model="dialog" max-width="1040px" height="auto" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <v-card flat class="text-center sp_text" style="background-color: transparent">
        <a v-bind="activatorProps" style="cursor: pointer; text-decoration: underline; color: #ff5136">詳細</a>
      </v-card>
    </template>
    <template v-slot:default>
      <v-card class="pt-6 pb-6 pr-9 pl-9 ma-5">
        <v-card-text>
          <v-btn variant="text" class="close-button" @click="dialog = false">
            <v-icon style="color:#ff5136;" size="30">mdi-close</v-icon>
          </v-btn>
          <v-sheet class="d-flex justify-end pt-4">
            <div v-for="(item, index) in data" :key="index" class="date-display">
              <span class="pr-2">{{ formatDate(item.paymentDate).year }}</span><span style="color:#ff5136; font-weight:bold;">年</span>
              <span class="pr-2 pl-2">{{ formatDate(item.paymentDate).month }}</span><span style="color:#ff5136; font-weight:bold;">月</span>
              <span class="pr-2 pl-2">{{ formatDate(item.paymentDate).day }}</span><span style="color:#ff5136; font-weight:bold;">日</span>
            </div>
          </v-sheet>
          <v-sheet class="d-flex justify-space-between align-end">
            <div>
              <div class="d-flex">
                <p class="d-flex align-center justify-center pa-1 mb-2 mr-10"
                  style="color: #ffffff; background-color: #ff5136;
                  width: 8rem; border-radius: 5px; font-weight: bold;">
                  ご請求金額
                </p>
                <p style="font-size: 2em; font-weight: bold">￥０００００００-</p>
              </div>
              <p class="mb-10" style="border: solid 2px #ff5a36;"></p>
            </div>
            <div class="d-flex flex-column">

            </div>
          </v-sheet>

          <v-table density="compact" width="100%">
            <thead style="color: #ffffff; background-color: #ff5a36">
              <tr>
                <th class="text-center pa-0" style="font-weight: bold; border: 2px solid #ffffff; border-radius: 5px;">
                  No.
                </th>
                <th class="text-center pa-0" style="font-weight: bold; border: 2px solid #ffffff; border-radius: 5px;">
                  内訳
                </th>
                <th class="text-center pa-0" style="font-weight: bold; border: 2px solid #ffffff; border-radius: 5px;">
                  数量
                </th>
                <th class="text-center pa-0" style="font-weight: bold; border: 2px solid #ffffff; border-radius: 5px;">
                  単価
                </th>
                <th class="text-center pa-0" style="font-weight: bold; border: 2px solid #ffffff; border-radius: 5px;">
                  合計
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in items"
                :key="item.id"
                :style="{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FFFAF4' }">
                <td
                  :style="{
                    borderRight: '2px solid #FF5A36',
                    borderLeft: '2px solid #FF5A36',
                    borderTop: index === 0 ? '2px solid #FF5A36' : 'none',
                    borderBottom: index === items.length - 1 ? '2px solid #FF5A36' : 'none',
                    borderTopLeftRadius: index === 0 ? '5px' : '0',
                    borderBottomLeftRadius: index === items.length - 1 ? '5px' : '0',
                    width: '30px',
                  }"
                  class="text-center">
                  {{ index + 1 }}
                </td>
                <td
                  :style="{
                    borderRight: '2px solid #FF5A36',
                    borderTop: index === 0 ? '2px solid #FF5A36' : 'none',
                    borderBottom: index === items.length - 1 ? '2px solid #FF5A36' : 'none',
                  }">
                  {{ item.description }}
                </td>
                <td
                  :style="{
                    borderRight: '2px solid #FF5A36',
                    borderTop: index === 0 ? '2px solid #FF5A36' : 'none',
                    borderBottom: index === items.length - 1 ? '2px solid #FF5A36' : 'none',
                    width: '30px',
                  }"
                  class="text-center">
                  {{ item.order }}
                </td>
                <td
                  :style="{
                    borderRight: '2px solid #FF5A36',
                    borderTop: index === 0 ? '2px solid #FF5A36' : 'none',
                    borderBottom: index === items.length - 1 ? '2px solid #FF5A36' : 'none',
                    width: '100px',
                  }"
                  class="text-center">
                  {{ item.amount }}
                </td>
                <td
                  :style="{
                    borderRight: '2px solid #FF5A36',
                    borderTop: index === 0 ? '2px solid #FF5A36' : 'none',
                    borderBottom: index === items.length - 1 ? '2px solid #FF5A36' : 'none',
                    borderTopRightRadius: index === 0 ? '5px' : '0',
                    width: '100px',
                  }"
                  class="text-center">
                  <span v-if="item.order * item.amount">{{ item.order * item.amount }}</span>
                </td>
              </tr>
            </tbody>
          </v-table>
          <div class="d-flex justify-space-between">
            <div>
              <h4 style="color: #ff5a36" class="mt-3">備考欄</h4>
              <v-text-field
                width="600px"
                variant="plain"
                disabled
                style="border: 1px solid #ff5a36; border-radius: 5px; height: 75px;">
              </v-text-field>
            </div>
            <v-table
              class="mb-5"
              style="width: 244px; border: 2px solid #ff5a36; border-top: none; border-radius: 0 0 5px 5px;">
              <tbody>
                <tr
                  v-for="(row, index) in summaryRows"
                  :key="index"
                  :style="{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FFFAF4' }"
                  class="d-flex">
                  <th
                    class="flex-grow-1 text-center pa-2"
                    style="color: #ff5136; border-right: 2px solid #ff5a36; width: 142px; height: 36px; font-weight: bold; font-size: 0.9em;">
                    {{ row.label }}
                  </th>
                  <td class="flex-grow-1 text-center pa-2" style="width: 98px; height: 36px">
                    ¥{{ row.value }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      data: [
        {
          paymentDate: '2024/01/01'
        },
      ],
      items: [
        {
          id: 1,
          description: '担当したコースまたは内訳表示',
          order: 1,
          amount: 10200,
        },
        {
          id: 2,
          description: '担当したコースまたは内訳表示',
          order: 1,
          amount: 10200,
        },
        {
          id: 3,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 4,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 5,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 6,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 7,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 8,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 9,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 10,
          description: '',
          order: '',
          amount: '',
        },
      ],
    }
  },
  methods: {
    formatDate(date) {
      const parts = date.split('/');
      return {
        year: parts[0],
        month: parts[1],
        day: parts[2],
      };
    },
  },
  computed: {
    subtotal() {
      return this.items.reduce((sum, item) => sum + item.order * item.amount, 0)
    },
    tax() {
      return Math.round(this.subtotal * 0.1) // 消費税10%と仮定
    },
    total() {
      return this.subtotal + this.tax
    },
    summaryRows() {
      return [
        { label: '小計', value: this.subtotal },
        { label: '消費税', value: this.tax },
        { label: '合計金額', value: this.total },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.close-button {
  position: absolute;
  top: 5px;
  right: 10px;
}
</style>