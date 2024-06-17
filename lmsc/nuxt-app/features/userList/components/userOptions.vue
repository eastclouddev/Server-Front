<!-- ドロップダウンメニュー、検索欄 -->
<script setup lang="ts">
import { reactive, ref, defineEmits, watch } from 'vue'
import Dropdown from '~/features/userList/components/dropDown.vue'

const condition = reactive({
  label: 'アカウント状態',
  items: ['有効', '無効'],
})

const role = reactive({
  label: 'ロール絞り込み',
  items: ['受講生', '法人', '法人代行'],
})

const selectedCondition = ref('')
const selectedRole = ref('')

const inputText = ref('')
const setText = () => {
  emit('updateKeyword', inputText.value)
}

const emit = defineEmits(['updateCondition', 'updateRole', 'updateKeyword'])
watch(selectedCondition, newVal => {
  emit('updateCondition', newVal)
})

watch(selectedRole, newVal => {
  emit('updateRole', newVal)
})
</script>

<template>
  <v-container class="menu">
    <div class="form">
      <v-card class="search" flat>
        <v-text-field
          v-model="inputText"
          variant="plain"
          hide-details
          density="compact"
        />
        <v-btn @click="setText">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-card>
      <v-btn class="addUser"> ユーザー追加 </v-btn>
    </div>
    <div class="dd">
      <Dropdown v-bind="role" v-model="selectedCondition" />
      <Dropdown v-bind="condition" v-model="selectedRole" />
    </div>
  </v-container>
</template>

<style lang="scss">
.v-input--density-compact {
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
  flex-direction: column;
  margin-top: 80px;
  width: 760px;
  gap: 20px;
  .form {
    display: flex;
    width: 100%;
    .search {
      display: flex;
      width: 552px;
      height: 60px;
      margin-right: 30px;
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
      .addUser {
        background-color: #ff5a36;
        color: #fff;
      }
    }
  }
  .dd {
    display: flex;
    gap: 20px;
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
