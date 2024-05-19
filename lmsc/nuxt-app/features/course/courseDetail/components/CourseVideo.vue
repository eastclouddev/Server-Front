<template>
  <div ref="videoContainer" class="video-container" style="margin-bottom: 20px;">
    <div v-if="!isVideoLoaded" class="thumbnail-container">
      <img
        :src="video.thumbnail_url"
        alt="Video Thumbnail"
        class="video-thumbnail"
        @click="loadVideo"
      />
      <button class="play-button" @click="loadVideo">
        ▶
      </button>
    </div>
    <div v-if="isVideoLoaded" class="video-wrapper">
      <video
        ref="videoElement"
        :src="video.video_url"
        class="video-element"
        controls
        @loadedmetadata="setVideoAspectRatio"
      ></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  video: {
    type: Object as () => { video_url: string; thumbnail_url: string },
    required: true,
  },
});

const videoContainer = ref<HTMLElement | null>(null);
const videoElement = ref<HTMLVideoElement | null>(null);
const isVideoLoaded = ref(false);

const setVideoAspectRatio = () => {
  if (videoContainer.value) {
    const width = videoContainer.value.clientWidth;
    const height = (width / 16) * 9;
    videoContainer.value.style.height = `${height}px`;
  }
};

const loadVideo = () => {
  isVideoLoaded.value = true;
  // ビデオがロードされたら自動再生
  nextTick(() => {
    if (videoElement.value) {
      videoElement.value.play();
    }
  });
};

onMounted(() => {
  setVideoAspectRatio();
  window.addEventListener("resize", setVideoAspectRatio);

  onUnmounted(() => {
    window.removeEventListener("resize", setVideoAspectRatio);
  });
});

watch(
  () => props.video,
  () => {
    setVideoAspectRatio();
  },
  { immediate: true }
);
</script>

<style scoped>
.video-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 アスペクト比のため */
}

.thumbnail-container,
.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
