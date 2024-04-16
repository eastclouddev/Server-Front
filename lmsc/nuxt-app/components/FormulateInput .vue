<template>
  <div>
    <FormulateInput type="text" label="名前" v-model="name" />
  </div>
</template>

<script>
import { FormulateInput } from '~/plugins/vue-formulate';
export default {
  components: {
    FormulateInput
  },
  data() {
    return {
      name: ''
    };
  }
};
</script>