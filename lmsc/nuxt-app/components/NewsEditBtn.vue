<template>
  <div class="btn">
    <p>編集する</p>
  </div>
</template>

<style scoped lang="scss">
// Variables
$main_color: #242424;
$accent_color: #ff5a36;

.btn {
  margin: 0 auto;
  margin-top: 40px;
  justify-content: center;
  text-align: center;
  background-color: $accent_color;
  border-radius: 5px;
  box-shadow:
    3px 3px 10px 0 rgba(242, 238, 238, 0.25),
    3px 3px 5px 0 rgb(195, 195, 195);
  width: 400px;
  height: 48px;
  padding: 11.5px;
  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 24.52px;
    color: #fff;
  }
}

@media screen and (max-width: 768px) {
  .btn {
    width: 548px;
    height: 95px;
    padding: 23.5px;
    box-shadow: 3px 3px 5px 0 rgb(195, 195, 195);

    p {
      font-size: 35px;
      line-height: 47.67px;
    }
  }
}
</style>
