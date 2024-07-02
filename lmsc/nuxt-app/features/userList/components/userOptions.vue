<!-- ドロップダウンメニュー、検索欄 -->
<script setup lang="ts">
import { reactive, ref, defineEmits, watch } from 'vue'
import Dropdown from '~/features/userList/components/dropDown.vue'

const props = defineProps<{
  role: string
}>()

const status = reactive({
  label: 'アカウント状態',
  items: ['有効', '無効'],
})

const roles = reactive({
  label: 'ロール絞り込み',
  items: ['受講生', '法人', '法人代行'],
})

const selectedStatus = ref('')
const selectedRole = ref('')
const inputText = ref('')

const setText = () => {
  emit('updateKeyword', inputText.value)
}

const emit = defineEmits(['updateStatus', 'updateRole', 'updateKeyword'])
watch(selectedStatus, newVal => {
  emit('updateStatus', newVal)
})

watch(selectedRole, newVal => {
  emit('updateRole', newVal)
})
</script>

<template>
  <v-row v-if="props.role === '法人代行'" class="proxy_menu">
    <v-col class="form">
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
    </v-col>
    <v-col class="dd">
      <Dropdown :role="props.role" v-bind="roles" v-model="selectedStatus" />
    </v-col>
  </v-row>

  <v-row v-else class="menu">
    <v-col class="form">
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
      <v-btn class="addUser">
        <NuxtLink to="/userList/addUser" class="NuxtLink">
          ユーザー追加
        </NuxtLink>
      </v-btn>
    </v-col>

    <v-col class="dd">
      <Dropdown :role="props.role" v-bind="roles" v-model="selectedStatus" />
      <Dropdown :role="props.role" v-bind="status" v-model="selectedRole" />
    </v-col>
  </v-row>
</template>

<style lang="scss">
.v-input--density-compact {
  .v-field--variant-plain {
    --v-input-control-height: 18px;
  }
}
@media screen and (max-width: 768px) {
  .v-field * {
    font-size: 24px;
    letter-spacing: 1em;
  }
}
</style>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  max-width: none;
  min-width: none;
}

.proxy_menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .form {
    display: flex;
    gap: 40px;
    .search {
      display: flex;
      width: 760px;
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
  .dd {
    display: flex;
    gap: 20px;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .form {
    display: flex;
    gap: 40px;
    .search {
      display: flex;
      width: 552px;
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
    .addUser {
      background-color: #ff5a36;
      color: #fff;
      height: 59px;
      .NuxtLink {
        height: 100%;
        padding: 17.24px 26px;
        font-size: 18px;
        font-weight: 700;
        line-height: 24.52px;
        text-decoration: none;
        color: #fff;
        &:visited {
          color: #fff;
        }
      }
    }
  }
  .dd {
    display: flex;
    gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .proxy_menu {
    width: 594px;
    .form {
      .search {
        height: 80px;
        .v-btn {
          min-width: 72px;
        }
      }
    }
  }
}
</style>
