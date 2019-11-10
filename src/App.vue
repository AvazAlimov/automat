<template lang="pug">
  v-app
    v-app-bar.border(flat app fixed height="80")
      v-toolbar-title
        v-img(:src="require('@/assets/logo_black.png')" width="60" contain)
      v-spacer
      v-btn(text) Главная
      v-btn(text) Продукты
      v-btn(text) Контакты
    v-content.pa-0
      router-view
    v-footer(padless)
      v-container
        v-row.text-center
          v-col(sm="12" md="4" cols="12")
            .subtitle-1.font-weight-bold Разделы
            .body-2.mt-2 Главная
            .body-2.mt-2 Продукты
            .body-2.mt-2 Контакты
          v-col(sm="12" md="4" cols="12")
            .subtitle-1.font-weight-bold Контакты
            .mt-2
              v-icon.mr-2(small) mdi-phone-outline
              span.body-2 +998 (94) 645-86-56
            .mt-2
              v-icon.mr-2(small) mdi-email-outline
              span.body-2 automat@gmail.com
            .mt-2
              v-icon.mr-2(small) mdi-map-marker-outline
              span.body-2 Ташкент, Узбекистан
          v-col(sm="12" md="4" cols="12")
            .subtitle-1.font-weight-bold Мы в соцсетях
            .mt-2
              v-icon.mr-2(small) mdi-facebook
              span.body-2 fb.com/automat
            .mt-2
              v-icon.mr-2(small) mdi-instagram
              span.body-2 @automat
            .mt-2
              v-icon.mr-2(small) mdi-telegram
              span.body-2 t.me/automat
        v-row
          v-col(sm="12")
            v-divider
        v-row
          v-col.text-center(sm="12")
            .body-2 All rights reserved. {{ (new Date()).getYear() + 1900 }}
</template>
<script>
export default {
  name: 'App',
};
</script>
<style>
.border {
  border-bottom: 1px solid rgba(0,0,0,0.12) !important;
}
</style>
