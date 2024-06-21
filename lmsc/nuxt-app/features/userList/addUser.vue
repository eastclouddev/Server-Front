<script setup lang="ts">
import Headline from '~/features/userList/components/headline.vue'
import PosInfo from '~/features/userList/components/posInfo.vue'
import Form from '~/features/userList/components/addForm.vue'

const title = {
  title: 'ユーザー追加',
  img: '',
}

const props = defineProps<{
  role: string
}>()

const roles = computed(() => {
  return props.role === '法人'
    ? ['受講生', '法人代行']
    : ['受講生', '法人', 'メンター', '管理者']
})
</script>

<template>
  <div class="PosInfo">
    <PosInfo pos="ユーザー一覧" />
  </div>
  <main>
    <div class="main center">
      <Headline :item="title" />
      <p>
        登録するお名前とメールアドレスを入力ください。<br />
        対象のユーザーロールを下記より選択してください。
      </p>
      <Form :role="props.role" :roles="roles" />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  height: auto;
  font-family: 'Noto Sans';
}
.main {
  display: flex;
  flex-direction: column;
  max-width: 620px;
  p {
    width: 100%;
    text-align: left;
    margin-top: -20px;
    margin-bottom: 60px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.07px;
  }
}

.PosInfo {
  position: absolute;
  top: 126px;
  left: 180px;
}

.center {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 548px;
    p {
      width: 620px;
      font-size: 30px;
      line-height: 40.86px;
      margin-top: 20px;
      margin-bottom: 80px;
    }
  }

  .PosInfo {
    position: absolute;
    top: 160px;
    left: 24px;
  }
}
</style>
