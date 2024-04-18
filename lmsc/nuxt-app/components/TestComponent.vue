<template>
  <div class="content">
    <h1 class="content_title">test component</h1>
    <div class="content_item"><img src="/assets/logo.png" alt="logo"></div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  text-align: center;
  &_title {
    font-size: 35px;
    color: blue;
  }
  &_item {
    img {
      width: 150px;
    }
  }
}
</style>

