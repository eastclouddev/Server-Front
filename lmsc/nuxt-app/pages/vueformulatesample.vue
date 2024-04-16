<template>
  <NuxtLayout>
    <div>
      <p>フォーム</p>
      <FormulateInput type="text" label="名前" v-model="name" />
    </div>
  </NuxtLayout>
</template>

<script>
import { FormulateInput } from '@braid/vue-formulate';

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