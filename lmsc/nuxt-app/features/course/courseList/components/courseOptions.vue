<!-- ドロップダウンメニュー、検索欄 -->
<script setup lang="ts">
import { reactive } from 'vue'
import Dropdown from '~/features/course/courseList/components/dropDown.vue'

const category = reactive({
  label: 'カテゴリ',
  items: ['Python', 'PHP', 'Obj-c'],
})

const sort = reactive({
  label: '並び替え',
  items: ['よく受講されている', '受講時間: 短', '受講時間: 長'],
})

const inputText = ref('')
const dev_text = () => {
  console.log(inputText.value)
}
</script>

<template>
  <v-container class="menu">
    <div class="dd">
      <Dropdown v-bind="category" />
      <Dropdown v-bind="sort" />
    </div>
    <v-card class="search" flat>
      <v-text-field
        v-model="inputText"
        variant="plain"
        hide-details
        density="compact"
      />
      <v-btn @click="dev_text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-card>
  </v-container>
</template>

<style lang="scss">
.v-input--density-compac {
  .v-field--variant-plain {
    --v-input-control-height: 18px;
  }
}
@media screen and (max-width: 768px) {
  .v-field {
    font-size: 24px;
  }
}
</style>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.menu {
  display: flex;
  margin-top: 80px;
  gap: 80px;
  .dd {
    display: flex;
    gap: 80px;
  }
  .search {
    display: flex;
    width: 440px;
    height: 60px;
    .v-input {
      border: 1px solid #ff5a36;
      border-radius: 5px 0 0 5px;
      padding-left: 15px;
      align-items: center;
    }
    .v-btn {
      background-color: #ff5a36;
      border-radius: 0 5px 5px 0;
      min-width: 60px;
      height: 100%;
      .v-icon {
        color: #fff;
        width: 27.5px;
        height: 27.5px;
        &::before {
          font-size: 36px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .menu {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
    .dd {
      gap: 40px;
    }
    .search {
      width: 520px;
      height: 80px;
      .v-btn {
        width: 73px;
        .v-icon {
          &::before {
            font-size: 48px;
          }
        }
      }
    }
  }
}
</style>
