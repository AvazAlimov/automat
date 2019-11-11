<template lang="pug">
  v-container
    v-img(:src="require('@/assets/banner.png')" height="640")
      v-container(align-center fill-height)
        v-row.text-center
          v-col(sm="12")
            img.mr-3(:src="require('@/assets/logo2x.png')" height="100" contain)
          v-col(sm="12")
            .display-3.white--text.font-weight-bold КОВРИКИ НА ВЕСЬ СПЕКТР
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
    v-row(no-gutters)
      v-col(sm="12" md="6" cols="12")
        v-img(:src="require('@/assets/1.jpg')" height="320")
          v-container(fill-height align-end)
            v-col.text-end.white--text
              .headline ДЛЯ
              .headline.font-weight-bold АВТОМОБИЛЯ
              p.body-2.mt-2
                | Двухслойные коврик из основных ПВХ<br>
                | обеспечивает чистотуи уют в салоне<br>
                | в автомобиля. Верхний ворсистый слой<br>
                | создает мягкость и удобство для ног,<br>
                | при этом специальная накладка для<br>
                | места шофера защищает от притирания<br>
                | и обрезок острых каблуков, что<br>
                | способствует изнашивание коврика.
      v-col(sm="12" md="6" cols="12")
        v-img(:src="require('@/assets/2.jpg')" height="320")
          v-container(fill-height align-end)
            v-col
              .headline ДЛЯ
              .headline.font-weight-bold БЫТОВОГО НАЗНАЧЕНИЯ
              p.body-2.mt-2
                | Двухслойные коврики из основы ПВХ<br>
                | обеспечивающее чистоту в доме,<br>
                | офисах и других помещений.<br>
                | Верхний слой создает мягкость и<br>
                | удобства для ног, рисунки и надписи<br>
                | на верхним слою разработаны<br>
                | специально учитывая национальные<br>
                | орнаменты.

      v-col(sm="12" md="6" cols="12")
        v-img(:src="require('@/assets/3.jpg')" height="320")
          v-container(fill-height align-center)
            v-col.text-end
              .headline.font-weight-bold ЗВУКОИЗОЛЯЦИЯ
              p.body-2.mt-2
                | Благодаря структуре материала и<br>
                | особенностям волокон, слой обладает<br>
                | высокой степенью звукопоглощения,<br>
                | а гибкость и упругость гарантируют<br>
                | наиболее плотное прилегание коврика<br>
                | к полу автомобиля. При использовании<br>
                | наших автоковриков, шум во время<br>
                | движения будет значительно ниже,<br>
                | и дальняя поездка пройдет<br>
                | намного комфортнее.

      v-col(sm="12" md="6" cols="12")
        v-img(:src="require('@/assets/4.jpg')" height="320")
          v-container(fill-height align-center)
            v-col.white--text
              .headline.font-weight-bold ГИДРОИЗОЛЯЦИЯ
              p.body-2.mt-2
                | Верхний слой не позволяет любой<br>
                | попавшей на коврик жидкости<br>
                | (грязь, вода или растаявший снег)<br>
                | проникать вглубь и защищает родное<br>
                | покрытие автомобиля от проникновения<br>
                | влаги. Ворс коврика не портится и не<br>
                | гниет даже при длительном нахождении<br>
                | во влажной среде. Поэтому исключены<br>
                | любые процессы гниения и<br>
                | распространения неприятного запаха.

      v-col(sm="12" md="6" cols="12")
        v-img(:src="require('@/assets/5.jpg')" height="320")
          v-container
            v-col.text-end.white--text
              .headline.font-weight-bold ПРОТИВОСКОЛЬЗЯЩЕЕ
              .headline ПОКРЫТИЕ
              p.body-2.mt-2
                | Нижний слой представляет собой<br>
                | прочную и шипованную поверхность,<br>
                | благодаря которой коврик<br>
                | легко цепляется за покрытие<br>
                | пола в автомобиле и надежно<br>
                | фиксируется в этом положении.

      v-col(sm="12" md="6" cols="12")
        v-img(:src="require('@/assets/6.jpg')" height="320")
          v-container
            v-col
              .headline.font-weight-bold ДИЗАЙН
              p.body-2.mt-2
                | В компании разработаны коврики для<br>
                | всех видов автомашин отечественного<br>
                | производства таких как:<br>
                | Mlibu, Captiva, Orlando, Epica, Gentra,<br>
                | Cobalt, Nexia, Aveo, Spark, Matiz,<br>
                | Man, Izuzu, Damaz а также иномарок.<br>
                | Помимо этого, изготавливаются<br>
                | коврики-дорожки для бассейнов,<br>
                | ванных комнат и других использующееся<br>
                | для бытового назначения.
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
