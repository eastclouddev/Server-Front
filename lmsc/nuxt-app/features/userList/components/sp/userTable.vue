<script setup lang="ts">
import { userData } from '../../table_sampleData'
import type { UserData } from '../../table_sampleData'

// 仮データ
const users: UserData[] = userData

const props = defineProps<{
  role: string
}>()

const isVisible = ref<{
  [key: string]: boolean[]
}>({
  法人: [true, false, true, true, true],
  法人代行: [true, false, true, true, false],
  管理者: [true, true, true, true, true],
})
</script>

<template>
  <v-row class="sp">
    <v-col v-for="(user, index) in users">
      <div class="row">
        <div class="col" :class="{ full: props.role !== '管理者' }">
          <div class="header">名前</div>
          <div class="item">
            <NuxtLink to="" class="NuxtLink">
              {{ user.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="col" v-if="props.role === '管理者'">
          <div class="header">所属会社</div>
          <div class="item">{{ user.company }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col full">
          <div class="header">メールアドレス</div>
          <div class="item">{{ user.email }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="header">ユーザーロール</div>
          <div class="item">{{ user.role }}</div>
        </div>
        <div class="col">
          <div class="header">アカウント状態</div>
          <div class="item">{{ user.status }}</div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  max-width: none;
  min-width: none;
}

.centerText {
  text-align: center;
}

.center {
  display: flex;
  justify-content: center;
}

.sp {
  width: 646px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 42px;
  .v-col {
    display: flex;
    flex-direction: column;
    .row {
      height: 140px;
      display: flex;
      gap: 10px;
      .col {
        width: 318px;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        &.full {
          width: 646px;
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50%;
          &.header {
            background-color: #dfeef6;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.14px;
          }
          &.item {
            background-color: #fff;
            font-size: 24px;
            font-weight: 400;
            line-height: 32.69px;
            .NuxtLink {
              &:visited {
                color: #242424;
              }
            }
          }
        }
      }
    }
  }
}
</style>
