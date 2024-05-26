<template>
  <v-sheet class="mt-5 mb-5">
    <p>学習進捗</p>
    <div class="indicator" @mousemove="updateTooltip($event)" >
      <v-progress-linear
        :location="false"
        bg-color="#EAEAEA"
        buffer-color="#10BED2"
        buffer-opacity="1"
        buffer-value="15"
        color="#242424"
        height="18"
        :max="max"
        min="0"
        :model-value="progressValue"
        style="border-radius: 5px; position: relative;"
        class="mb-3"
      >
      </v-progress-linear>
      <div class="indicator_label" :style="{ left: tooltipLeft }">{{ tooltipValue }}%</div>
    </div>
    <!-- ステータス -->
    <div class="ms-4 text-h6 d-flex align-center justify-end">
      <v-icon color="#FF0000">{{ status.icon }}</v-icon>
      <p style="font-size:0.8em;">{{ status.text }} : 残り時間表示</p>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      progressValue:  10, // 初期値
      max: 24, // 最大値
      tooltipLeft: '0px',
    }
  },
  computed: {
    tooltipValue() {
      return Math.round((this.progressValue / this.max) * 100);
    },
    status() {
      if (this.progressValue < 10) {
        return { text: "遅延状況", icon: "mdi-alert" };
      } else if (this.progressValue >= 10 && this.progressValue < 50) {
        return { text: "その調子！", icon: "mdi-fire" };
      } else if (this.progressValue >= 50 && this.progressValue < 100) {
        return { text: "完了", icon: "mdi-check-circle" };
      }
    }
  },
  methods: {
    updateTooltip(event) {
      const progressContainer = document.querySelector('.indicator');
      const rect = progressContainer.getBoundingClientRect();
      const maxValue = rect.width; // 要素の幅を取得//APIでデータ取得する
      const x = event.clientX - rect.left;
      this.progressValue = Math.round((x / maxValue) * this.max);
      this.tooltipLeft = `${x}px`;
    },
  }
}
</script>

<style  lang="scss" scoped>
.indicator {
  display: flex;
  align-items: center;
  position: relative;

  &_label {
    font-size: 16px;
    position: absolute;
    bottom: calc(100% + 10px);
    transform: translateX(-50%);
    color: #FFF;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-weight: bold;
    background: #FF5A36;
    border-radius: 50%;
    padding: 0 5px;
    white-space: nowrap;
    display: block;
    z-index: 1;
  }
}

.indicator_label:before {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -15px;
  border: 15px solid transparent;
  border-top: 20px solid #FF5A36;
  z-index: 0;
}

</style>