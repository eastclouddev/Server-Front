<template>
  <div ref="videoContainer" class="video-container">
    <video
      src="https://example.com/sample-video.mp4"
      style="width: 100%; height: auto"
      controls
    ></video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const videoContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  const setVideoAspectRatio = () => {
    if (videoContainer.value) {
      const width = videoContainer.value.clientWidth;
      const height = (width / 16) * 9; // 16:9 アスペクト比
      videoContainer.value.style.height = `${height}px`;
    }
  };

  setVideoAspectRatio();
  window.addEventListener("resize", setVideoAspectRatio);

  onUnmounted(() => {
    window.removeEventListener("resize", setVideoAspectRatio);
  });
});
</script>

<style scoped>
.video-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}
</style>
