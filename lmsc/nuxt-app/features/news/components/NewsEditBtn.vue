<template>
  <div class="btn">
    <NuxtLink to="/news/manager/edit/editNews" class="NuxtLink"
      >編集する</NuxtLink
    >
  </div>
</template>

<style scoped lang="scss">
// Variables
$main_color: #242424;
$accent_color: #ff5a36;

.btn {
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: $accent_color;
  border-radius: 5px;
  box-shadow:
    3px 3px 10px 0 rgba(242, 238, 238, 0.25),
    3px 3px 5px 0 rgb(195, 195, 195);

  .NuxtLink {
    padding: 11.75px 164px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24.52px;
    color: #fff;
    text-decoration: none;
  }
}

@media screen and (max-width: 768px) {
  .btn {
    box-shadow: 3px 3px 5px 0 rgb(195, 195, 195);

    .NuxtLink {
      font-size: 35px;
      line-height: 47.67px;
      padding: 23.67px 204px;
    }
  }
}
</style>
