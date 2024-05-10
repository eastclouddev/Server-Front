<template>
  <v-sheet class="mt-9 mb-3">
      <p>学習進捗</p>
      <div class="ms-4 picker" ref="picker">
        <span ref="percentage">{{ Math.floor((progressValue / 24) * 100) }}</span>
        <span style="font-size:0.7em;">%</span>
      </div>
    <v-progress-linear
      ref="progressBar"
      :location="false"
      bg-color="#EAEAEA"
      buffer-color="#10BED2"
      buffer-opacity="1"
      buffer-value="20"
      color="#242424"
      height="18"
      max="24"
      min="0"
      v-model="progressValue"
      style="border-radius: 5px; position: relative;"
    ></v-progress-linear>
    <div class="d-flex align-center justify-end">
  <v-icon class="status-icon" :color="status === '完了' ? '#10BED2' : '#FF0000'">{{ statusIcon }}</v-icon>
    <span class="status">{{ status }}</span>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      progressValue: 9,
      status: '',
      statusIcon: ''
    };
  },
  watch: {
    progressValue(newValue) {
      this.updatePickerPosition(newValue);
      this.updateStatus(newValue);
    }
  },
  methods: {
    updatePickerPosition(value) {
      const progressBarWidth = this.$refs.progressBar.$el.offsetWidth;
      const pickerWidth = this.$refs.picker.offsetWidth;
      const maxProgressValue = 24;
      const leftPosition = (value / maxProgressValue) * (progressBarWidth - pickerWidth);
      this.$refs.picker.style.left = leftPosition + 'px';
    },
    updateStatus(value) {
      if (value < 0) {
        this.status = '遅延状況';
        this.statusIcon = 'mdi-alert';
      } else if (value >= 0 && value < 50) {
        this.status = 'その調子！';
        this.statusIcon = 'mdi-fire';
      } else {
        this.status = '完了';
        this.statusIcon = 'mdi-check-circle';
      }
    }
  },
  mounted() {
    this.updatePickerPosition(this.progressValue);
    this.updateStatus(this.progressValue);
  }
};
</script>

<style>
.picker {
  position: absolute;
  top: 40%;
  left: 0;
  transform: translateX(15%);
  width: 45px;
  height: 45px;
  color: #FFFFFF;
  font-size: 1.2em;
  background-color: #FF5A36;
  border-radius: 50%;
  z-index: 1;
  text-align: center;
  line-height: 45px;
}
.picker:before {
  content: "";
  position: absolute;
  bottom: -18px;
  left: 50%;
  margin-left: -15px;
  border: 15px solid transparent;
  border-top: 15px solid #FF5A36;
  z-index: 0;
  transition: left 0.3s ease;
}
</style>