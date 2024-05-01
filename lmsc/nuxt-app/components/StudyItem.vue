
<template>
  <v-container class="mx-aout">
    <v-card flat color="#FFF7EC" class="d-flex align-center pt-2 pb-2 pl-6" width="16rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/study.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">学習記録</label>
    </v-card>
    <v-card flat class="pt-2 pb-2 pl-6" color="#FFF7EC"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    	<v-sheet class="d-flex justify-space-between mx-auto mt-8 mb-8" width="60rem" color="#FFF7EC">
        <div style="background-color:#FFFFFF; font-weight: bold; width:14rem; padding:20px 30px 0 30px;">
          <span  style="display: flex; align-items: center;">
            <p style="margin-right: 10px;">総合学習時間</p><img src="/assets/clock.svg" alt="">
          </span>
          <span  style="display: flex; align-items: flex-end;">
            <p style="margin: 0; padding: 0; font-size: 6em;">38</p>
            <p style="padding:0 10px 35px;">時間</p>
          </span>
        </div>
        <v-sheet  color="#FFF7EC" class="pa-4" width="27rem" style="display:flex; flex-direction: column; justify-content: space-between;">
          <div>
          <span  style="display: flex; align-items: flex-end; padding-bottom:10px;">
          <v-label text="前回学習時間"></v-label><p style="font-weight: bold;">2024/3/22(金)</p>
          </span>
          <span  style="display: flex; align-items: flex-end;">
          <v-label text="連続隔週時間"></v-label><p style="font-weight: bold;">７日間継続中！</p>
          </span>
        </div>
        <div>
          <a href="">学習記録詳細</a>
        </div>
        </v-sheet>
        <v-sheet color="#FFF7EC" class="d-flex" style="align-items: flex-end;">
          <Button type="submit" color="#FF5A36" style="font-size: 1em;" buttonText="報告する" width="13rem"></Button>
        </v-sheet>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script setup>
</script>