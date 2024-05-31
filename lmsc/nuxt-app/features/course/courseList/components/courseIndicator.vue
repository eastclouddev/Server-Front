<script setup lang="ts">
import { ref, defineProps, watch, onMounted } from 'vue'
import type { ComponentPublicInstance } from 'vue'

const props = defineProps<{
  length: number
  completed: number
}>()

const progressValue = ref(props.completed)
const sectionLength = ref(props.length)
const percentage = ref(0)
const bufferValue = ref(15)
const status = ref('')
const statusIcon = ref('')

const progressBar = ref<ComponentPublicInstance | null>(null)
const picker = ref<HTMLElement | null>(null)
const updatePickerPosition = (value: number) => {
  if (progressBar.value && picker.value) {
    const progressBarElement = progressBar.value.$el as HTMLElement
    const progressBarWidth = progressBarElement.offsetWidth
    console.log(progressBarWidth)
    if (progressBarWidth !== undefined) {
      const leftPosition = (value / sectionLength.value) * progressBarWidth
      console.log(leftPosition)
      if (picker.value) {
        picker.value.style.left = `${leftPosition}px`
      }
    }
  }
}

const remaining_time = 5
const updateStatus = (value: number) => {
  if (bufferValue.value > value) {
    status.value = '遅延状況: 残り学習時間 ' + remaining_time + '時間'
    statusIcon.value = 'mdi-alert'
  } else if (value >= bufferValue.value && value < sectionLength.value) {
    status.value = 'その調子！'
    statusIcon.value = 'mdi-fire'
  } else {
    status.value = '完了'
    statusIcon.value = 'mdi-check-circle'
  }
}

const increaseProgressValue = () => {
  if (progressValue.value !== sectionLength.value) {
    progressValue.value += 1
  }
  console.log('progressValue: ' + progressValue.value)
}

const decreaseProgressValue = () => {
  if (progressValue.value !== 0) {
    progressValue.value -= 1
  }
  console.log('progressValue: ' + progressValue.value)
}

watch(progressValue, newValue => {
  percentage.value = Math.floor((newValue / sectionLength.value) * 100)
  updatePickerPosition(newValue)
  updateStatus(newValue)
})

onMounted(() => {
  percentage.value = Math.floor(
    (progressValue.value / sectionLength.value) * 100
  )
  updatePickerPosition(progressValue.value)
  updateStatus(progressValue.value)
})
</script>

<template>
  <v-sheet>
    <div class="picker-pos">
      <div class="picker" ref="picker">
        <span>
          {{ percentage }}
        </span>
        <span style="font-size: 0.7em">%</span>
      </div>
    </div>
    <v-progress-linear
      class="mt-1"
      ref="progressBar"
      bg-color="#222222"
      buffer-color="#10BED2"
      buffer-opacity="1"
      :buffer-value="bufferValue"
      color="#242424"
      height="18"
      :max="sectionLength"
      min="0"
      v-model="progressValue"
      style="border-radius: 5px; position: relative"
    />
    <div class="d-flex align-center justify-end">
      <v-icon
        class="status-icon"
        :color="status === '完了' ? '#10BED2' : '#FF0000'"
      >
        {{ statusIcon }}
      </v-icon>
      <span class="status">{{ status }}</span>
    </div>
  </v-sheet>
</template>

<style scoped>
.picker-pos {
  position: relative;
  width: 100%;
  height: 43px;
}

.picker {
  position: absolute;
  transform: translateX(-20px) translateY(-5px);
  width: 43px;
  height: 43px;
  left: 0;
  color: #ffffff;
  font-size: 20px;
  background-color: #ff5a36;
  border-radius: 50%;
  text-align: center;
  line-height: 43px;
}
.picker:before {
  content: '';
  position: absolute;
  bottom: -18px;
  left: 50%;
  margin-left: -15px;
  border: 15px solid transparent;
  border-top: 15px solid #ff5a36;
  z-index: 0;
  transition: left 0.3s ease;
}
@media (max-width: 768px) {
  .picker {
    top: 33%;
    left: 0;
    transform: translateX(15%);
  }
}
</style>
