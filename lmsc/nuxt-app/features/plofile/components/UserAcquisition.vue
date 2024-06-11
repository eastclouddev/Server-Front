<template>
  <v-container>
    <v-row class="align-center justify-space-between pb-4" v-for="item in items" :key="item.label">
      <label class="sp_label" style="font-size: 1em; font-weight: bold;">{{ item.label }}</label>
      <v-card flat class="sp_field d-flex flex-column" width="25rem">
        <v-sheet class="my-0 pr-4 pb-4 pl-4" color="#EBEBEB">
          <v-text-field hide-details="auto" variant="plain"
            v-model="item.data" full-width disabled></v-text-field>
        </v-sheet>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useUserStore } from '~/store/user.ts'
import { useGetUser } from '~/features/plofile/api/getProfile.ts'

export default {
  setup() {
    const userId = 1; // 実際のユーザーIDを使用してください
    const { data, error, status } = useGetUser(userId)
    const userStore = useUserStore()

    const items = ref([
      { label: "お名前", data: "" },
      { label: "フリガナ", data: "" },
      { label: "メールアドレス", data: "" }
    ])

    onMounted(() => {
      if (data.value) {
        const user = data.value
        userStore.setUser({ user, isAuthenticated: true })
        items.value[0].data = `${user.last_name} ${user.first_name}`
        items.value[1].data = `${user.last_name_kana} ${user.first_name_kana}`
        items.value[2].data = user.email
      }
    })

    return { items, error, status }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
.sp {
  &_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
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