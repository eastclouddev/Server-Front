<script setup lang="ts">
import { ref } from 'vue'
import DropDown from '~/features/news/components/dropDown.vue'
import Form from '~/features/news/components/TextForm.vue'
import Btn from '~/features/news/components/FormBtn.vue'

const DD_Items = ref({
  date: new Date('2024-05-19'),
  category: 1,
})

const Contents = ref({
  title: 'テストタイトル',
  text: 'これは、テストです。これは、テストです。これは、テストです。\nこれは、テストです。これは、テストです。\n\nこれは、テストです。これは、テストです。',
})

const Path = ref({
  path: 'editNews',
  label: '確認',
})
</script>

<template>
  <div class="framework">
    <div class="contents">
      <DropDown :item="DD_Items" />
      <Form :item="Contents" />
      <Btn :item="Path" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.framework {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1000px;
  margin-top: 30px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 3px 3px 10px 0 #d8d8d8;
  .contents {
    width: 760px;
    margin-top: 43px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
}

.center {
  margin: 0 auto;
}

@media screen and (max-width: 1000px) and (min-width: 768px) {
  .framework {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .framework {
    width: 708px;
  }
  .contents {
    width: 638px !important;
  }
}
</style>
