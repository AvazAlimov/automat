<template lang="pug">
  v-container
    v-img(:src="require('@/assets/banner.png')" height="640")
      v-container(align-center fill-height)
        v-row.text-center
          v-col(sm="12")
            img.mr-3(:src="require('@/assets/logo2x.png')" height="100" contain)
          v-col(sm="12")
            .display-3.white--text.font-weight-bold КОВРИКИ НА ВЕСЬ СПЕКТР
              .headline.white--text НАСТРОЙТЕ С НАМИ!
    v-row.my-6
    v-row
      v-col(cols="12" sm="12" md="6")
        .display-1 Коврики
      v-col(cols="12" sm="12" md="6")
        v-tabs(
          v-model="type"
          slider-size="1" grow
          background-color="transparent"
          color="black"
          mobile-break-point="200")
          v-tab Автомобильные
          v-tab Для прихожей
          v-tab Прочие
    v-row
      template(v-for="(product, index) in filteredProducts")
        v-col(sm="12" md="4" cols="12")
          v-img.white(:src="product.image" height="300")
    v-row
      v-col.text-center
        v-btn(text large outlined) Показать всё
    v-row.my-6
</template>

<script>

export default {
  name: 'home',
  data: () => ({
    type: 0,
    products: [],
  }),
  computed: {
    filteredProducts() {
      return this.products
        .filter(item => parseInt(item.type, 10) === (this.type + 1))
        .slice(0, 3);
    },
  },
  created() {
    this.$db.collection('products').get().then((querySnapshot) => {
      querySnapshot.forEach(async (element) => {
        this.products.push(element.data());
      });
    });
  },
};
</script>
