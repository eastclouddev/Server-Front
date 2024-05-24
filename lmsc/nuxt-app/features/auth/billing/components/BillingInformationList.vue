<template>
  <v-container>
    <v-breadcrumbs :items="items" color="#FF5A36">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-card flat>
      <v-sheet width="80%" class="mx-auto mb-8 mt-8">
        <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold;" color="#242424">
        請求先情報
        </v-card-title>
        <v-divider class="#CFCFCF" thickness="1"></v-divider>
          <Button to="/billing" color="#FF5136" style="background-color: #FFFFFF;" width="15em" class="mt-5"
          variant="outlined" buttonText="戻る">
          </Button>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
import EmailForm from '~/components/EmailForm.vue';

export default {
  components: {
    EmailForm,
  },
  data() {
    return {
      items: [
        {
          title: 'ダッシュボード',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: '請求先情報',
          disabled: false,
        },
      ],
    };
  },
};
</script>

