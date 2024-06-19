<template>
  <div>
    <input type="file" @change="onFileChange" ref="fileInput" style="display: none;" />
    <Button
      @click="triggerFileInputOnce"
      color="#FF5A36"
      style="background-color: #FFFFFF;"
      variant="outlined"
      width="10rem"
      buttonText="ファイル選択"
      icon="mdi-paperclip"
      iconPosition="left"
    />
    <p v-if="fileName" class="mt-2">{{ fileName }}</p>
  </div>
</template>

<script>
import Button from '~/components/Button.vue';

export default {
  components: {
    Button
  },
  data() {
    return {
      file: null,
      fileName: '',
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    triggerFileInputOnce() {
      if (!this.triggered) {
        this.triggerFileInput();
        this.triggered = true;
        setTimeout(() => {
          this.triggered = false;
        }, 1000);
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
        this.fileName = file.name;
        this.$emit('file-selected', file);
      }
    },
    resetFile() {
      this.file = null;
      this.fileName = '';
      this.$refs.fileInput.value = '';
    },
  },
  data() {
    return {
      triggered: false,
      file: null,
      fileName: '',
    };
  },
};
</script>