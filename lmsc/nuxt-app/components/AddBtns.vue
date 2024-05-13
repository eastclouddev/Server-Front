<template>
  <div class="btns">
    <div class="addCategory">
      <NuxtLink to="" class="NuxtLink">カテゴリ追加</NuxtLink>
    </div>
    <div class="addArticle">
      <NuxtLink to="" class="NuxtLink">新規投稿</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btns {
  display: flex;
  gap: 10px;
  width: 858px;
  text-align: center;
  justify-content: right;
}
.NuxtLink {
  font-size: 18px;
  font-weight: 700;
  line-height: 24.52px;
  font-family: 'Noto Sans';
  &:hover {
    cursor: pointer;
  }
}
.addCategory {
  border: 2px solid #ff5a36;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  .NuxtLink {
    color: #ff5a36;
  }
}
.addArticle {
  background-color: #ff5a36;
  padding: 10px 24px;
  border-radius: 5px;
  width: 148px !important;
  align-items: center;
  .NuxtLink {
    color: #fff;
  }
}

@media screen and (max-width: 860px) {
  .btns {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .btns {
    width: 629px;
    gap: 0;
    justify-content: space-between;
  }
  .addCategory {
    width: 305px;
    padding: 25.5px 0;
    .NuxtLink {
      font-size: 32px;
      line-height: 43.58px;
    }
  }
  .addArticle {
    width: 305px !important;
    padding: 23px 0;
    .NuxtLink {
      font-size: 35px;
      line-height: 47.67px;
    }
  }
}
</style>
