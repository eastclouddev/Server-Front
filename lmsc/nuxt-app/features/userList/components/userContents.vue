<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import Options from '~/features/userList/components/userOptions.vue'
import Table from '~/features/userList/components/userTable.vue'
import Options_sp from '~/features/userList/components/sp/userOptions.vue'
import Table_sp from '~/features/userList/components/sp/userTable.vue'

const props = defineProps<{
  role: string
}>()

const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <v-container>
    <template v-if="isMobile && props.role !== '法人代行'">
      <Options_sp :role="props.role" />
      <Table_sp :role="props.role" />
    </template>
    <template v-else>
      <Options :role="props.role" />
      <Table :role="props.role" />
    </template>
  </v-container>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  max-width: none;
}

.v-container {
  background-color: #f5f5f5;
  box-shadow: 3px 3px 10px 0 #d8d8d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  gap: 18px;
  padding: 60px 0 80px;
}
</style>
