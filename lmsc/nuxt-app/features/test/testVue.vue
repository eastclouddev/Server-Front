<script setup lang="ts">
import Test from '~/features/test/components/TestContents.vue'
import Result from '~/features/test/components/ResultContents.vue'
</script>

<template>
  <main>
    <div class="main center">
      <Test />
      <Result />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  height: auto;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1209px;
  width: auto;
}

.center {
  margin: 0 auto;
}
.space {
  width: 100%;
  height: 1500px;
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 702px;
  }
}
</style>
