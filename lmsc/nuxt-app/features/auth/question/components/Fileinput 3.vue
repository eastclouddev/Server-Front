<template>
  <div>
    <input type="file" @change="onFileChange" ref="fileInput" style="display: none;" />
    <Button
      @click="triggerFileInput"
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
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
        this.fileName = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.$emit('file-selected', {
            name: file.name,
            type: file.type,
            url: e.target.result
          });
        };
        reader.readAsDataURL(file);
      }
    },
    resetFile() {
      this.file = null;
      this.fileName = '';
      this.$refs.fileInput.value = '';
    },
  },
};
</script>