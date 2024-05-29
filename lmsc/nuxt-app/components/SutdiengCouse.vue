<template>
  <v-container class="mx-auto">
    <v-sheet color="#F5F5F5" class="mx-auto mt-8 mb-8 "  width="60rem">
      <v-sheet color="#F5F5F5" class="mx-auto d-flex justify-space-between">
      <v-card flat class="pa-8 mb-8" width="27rem" v-for="(item, index) in items" :key="index">
        <!-- <img :src="item.image" :alt="item.title"> -->
        <div style="display: flex; align-items: flex-start; height:7em;">
          <img src="/assets/python.svg" alt="" style="padding:0 10px;">
          <div style="margin-bottom:15px;">
            <h3 style="font-size:1.5em;">{{ limitText(item.title) }}</h3>
            <p  style="margin-bottom:15px;">{{ limitText(item.summary)  }}</p>
            <h4>{{ item.session }} / 24セッション</h4>
          </div>
        </div>
          <indicator />
        <div style="display: flex; justify-content:center; align-items: flex-end;">
          <Button color="#FF5A36" style="font-size: 1em;" buttonText="学習を再開する" width="27rem" :to="'/' + item.id"></Button>
        </div>
      </v-card>
      </v-sheet>
      <a href="" style="display: flex; justify-content: flex-end; color:#222222;">一覧をみる</a>
    </v-sheet>
      
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Python 3 入門 + 応用 ①',
          summary: 'Unittestのsetupとteardownの',
          image: '/assets/python.svg',
          session:'24'
        },
        {
          title: 'ECMAScriptとバージョン',
          summary: 'JSエンジンによる挙動の違いを理解しましょう',
          image: '/assets/jquery.svg',
          session:'1',
        },
      ]
    }
  },
  methods: {
    limitText(value) {
      if (!value) return '';
      if (value.length > 20) {
        return value.slice(0, 20) + '...';
      } else {
        return value;
      }
    }
  }
}
</script>