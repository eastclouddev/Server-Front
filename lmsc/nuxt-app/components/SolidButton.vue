<template>
    <nuxt-link
      class="button"
      :style="buttonStyle"
      :to="to"
      @click="handleClick"
    >
      <slot></slot>
    </nuxt-link>
  </template>
  
  <script>
  export default {
    name: "SolidButton",
    props: {
      color: {
        type: String,
        default: "#FF5A36"
      },
      textColor: {
        type: String,
        default: "#FFFFFF"
      },
      fullWidth: {
        type: Boolean,
        default: false
      },
      to: {
        type: [String, Object],
        default: ""
      },
      fontSize: {
        type: String,
        default: "20px"
      },
      onClick: {
        type: Function,
        default: null
      }
    },
    computed: {
      buttonStyle() {
        return {
          backgroundColor: this.color,
          color: this.textColor,
          border: this.color === "#FFFFFF" ? `2px solid ${this.textColor}` : "none",
          width: this.fullWidth ? "100%" : "400px",
          fontSize: this.fontSize
        };
      }
    },
    methods: {
      handleClick(event) {
        if (this.onClick) {
          this.onClick(event);
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .button {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    box-shadow: 3px 3px 5px #d8d8d8;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    padding: 0.8em;
  
    &:hover {
      background-color: #ff8573;
    }
  }
  </style>
  