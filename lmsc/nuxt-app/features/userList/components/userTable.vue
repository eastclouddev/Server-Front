<script setup lang="ts">
import { userData } from '../table_sampleData'
import type { UserData } from '../table_sampleData'

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
  <v-row>
    <table :class="{ role_proxy: props.role === '法人代行' }">
      <thead>
        <tr :class="`header role-${role}`">
          <th>名前</th>
          <th>所属会社</th>
          <th>メールアドレス</th>
          <th>ユーザーロール</th>
          <th>アカウント状態</th>
        </tr>
        <tr class="spacer-row" />
      </thead>
      <tbody>
        <tr
          v-for="(user, index) in users"
          :key="index"
          :class="{ 'odd-row': index % 2 === 0, 'even-row': index % 2 !== 0 }"
        >
          <td
            v-for="(flag, i) in isVisible[props.role]"
            :key="i"
            :style="{ display: flag === false ? 'none' : '' }"
            :class="{ center: i === 3, centerText: i === 4 }"
          >
            <template v-if="i === 0">{{ user.name }}</template>
            <template v-else-if="i === 1">{{ user.company }}</template>
            <template v-else-if="i === 2">{{ user.email }}</template>
            <template v-else-if="i === 3">
              <div :class="`role-${user.role}`">{{ user.role }}</div>
            </template>
            <template v-else-if="i === 4">{{ user.status }} </template>
          </td>
        </tr>
      </tbody>
    </table>
  </v-row>
</template>

<style scoped lang="scss">
// ユーザーロールごとのスタイル設定
$widths: (
  '法人': (
    220px,
    null,
    251px,
    140px,
    140px,
  ),
  '法人代行': (
    (760 * 0.3) + px,
    null,
    (760 * 0.45) + px,
    (760 * 0.25) + px,
    null,
  ),
  '管理者': (
    160px,
    160px,
    220px,
    120px,
    120px,
  ),
);

@each $role, $widths in $widths {
  .role-#{$role} {
    @for $i from 1 through length($widths) {
      $width: nth($widths, $i);
      th:nth-child(#{$i}),
      td:nth-child(#{$i}) {
        @if $width != null {
          width: $width !important;
        } @else {
          display: none;
        }
      }
    }
  }
}

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

.v-row {
  width: 760px;
  table {
    border-collapse: separate;
    border-spacing: 3px 0;
    &.role_proxy {
      border-spacing: 0;
      .header {
        th {
          color: #292737;
          background-color: #fffaf4;
          text-align: left;
          padding: 16px;
          &:nth-child(4) {
            text-align: center;
          }
        }
      }
    }
    .header {
      th {
        color: #fff;
        background-color: #292737;
        border-radius: 5px;
        height: 42px;
        padding: 8.2px 0;
        font-size: 16px;
        font-weight: 700;
        line-height: 25.6px;
        white-space: nowrap;
      }
    }
    .spacer-row {
      height: 8px;
      td {
        padding: 0;
        border: none;
      }
    }
    td {
      font-size: 14px;
      white-space: nowrap;
      padding: 16px;
      height: 50px;
      div {
        color: #fff;
        border-radius: 5px;
        width: 80px;
        height: 24px;
        padding: 4px 10px;
        font-size: 12px;
        font-weight: 700;
        line-height: 16.34px;
        text-align: center;
      }
      .role-受講生 {
        background-color: #ff5a36;
      }
      .role-法人 {
        background-color: #292737;
      }
      .role-法人代行 {
        background-color: #5e5a77;
      }
      .role-メンター {
        background-color: #0c8593;
      }
      .role-管理者 {
        background-color: #10bed2;
      }
    }
    .odd-row {
      background-color: #fff;
    }
    .even-row {
      background-color: #eaf4f9;
    }
  }
}

@media screen and (max-width: 768px) {
  .v-row {
    width: 646px;
    th {
      font-size: 28px;
      font-weight: 700;
      line-height: 38.14px;
    }
    td {
      font-size: 24px;
      font-weight: 400;
      line-height: 32.69px;
    }
  }
}
</style>
