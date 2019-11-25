<template lang="pug">
  v-app
    v-app-bar.border(flat app fixed height="80")
      v-toolbar-title
        v-img(:src="require('@/assets/logo_black.png')" width="60" contain)
      v-spacer
      v-btn(text @click="$router.push('/#main')") Главная
      v-btn(text @click="$router.push('/#products')") Продукты
      v-btn(text @click="$router.push('/#contacts')") Контакты
    v-content.pa-0
      router-view
    v-footer(padless)
      v-container
        v-row.text-center
          v-col(sm="12" md="4" cols="12")
            .subtitle-1.font-weight-bold Разделы
            a(
              href="#main"
              style="text-decoration: none; color: #333"
            )
              .body-2.mt-2 Главная
            a(
              href="#products"
              style="text-decoration: none; color: #333"
            )
              .body-2.mt-2 Продукты
            a(
              href="#contacts"
              style="text-decoration: none; color: #333"
            )
              .body-2.mt-2 Контакты
          v-col#contacts(sm="12" md="4" cols="12")
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
              a(
                href="//www.facebook.com/AutoMatuz-109201373863566/"
                target="_blank"
                style="text-decoration: none; color: #333"
              )
                v-icon.mr-2(small) mdi-facebook
                span.body-2 fb.com/AutoMatuz
            .mt-2
              a(
                href="//www.instagram.com/automat.uz/"
                target="_blank"
                style="text-decoration: none; color: #333"
              )
                v-icon.mr-2(small) mdi-instagram
                span.body-2 instagram.com/automat.uz
            .mt-2
              a(
                href="//t.me/automatuz"
                target="_blank"
                style="text-decoration: none; color: #333"
              )
                v-icon.mr-2(small) mdi-telegram
                span.body-2 t.me/automatuz
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
