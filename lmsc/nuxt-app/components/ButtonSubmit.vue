<template>
  <button class="button" :style="buttonStyle" type="submit">
    <slot></slot>
  </button>
</template>
<script>
export default {
  computed: {
    buttonStyle: {
      get() {
        let buttonBgColor = "#FF5A36";
        let buttonColor = "#FFFFFF";
        let buttonBorder = "none";
        if (this.colorWhite) {
          buttonBgColor = "#FFFFFF";
          buttonColor = "#FF5A36";
          buttonBorder = "2px solid #FF5A36"
        }

        return `background-color: ${buttonBgColor}; color: ${buttonColor};
                border: ${buttonBorder}; `;
      },
    },
  },
  name: "Button",
  props: {
    colorOrange: {
      type: Boolean,
      required: false,
      default: false,
    },
    colorWhite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  display: inline-block;
  width: 400px;
  text-align: center;
  box-shadow: 3px 3px 5px #D8D8D8;
  border-radius: 5px;
  display: block;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  padding: 1em 1em;
  &:hover {
    background-color: #FF8573;
  }
  }

</style>