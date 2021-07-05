<template>
    <div class="catalog-item">
      <div class="product">
            <span class="product__description-toggle" @click="toggleDescription">
              <img class="product__img" src="../img/xiaomi.png" alt=""/>
            </span>
            <div class="product__content">
              <div class="product__text">
                <h4 class="product__brand">{{product_data.brand}}</h4>
                <div class="product__price">{{product_data.price}}₽</div>
              </div>
              <div class="product__buy">
                <p class="product__desc">{{product_data.desc}}</p>
                <button class="product__btn btn"
                @click="addToCart"
                >Добавить в корзину</button>
              </div>
            </div>
      </div>
      <ul class="feature" v-if="isDescriptionVisible === true">
              <li class="feature__item title">Характеристики</li>
              <li class="feature__items"><span class="feature__item underline">Максимальная скорость, км/ч</span><span class="feature__item">{{product_data.maxspeed}}</span></li>
              <li class="feature__items"><span class="feature__item underline">Максимальная нагрузка, кг</span><span class="feature__item">{{product_data.maxweight}}</span></li>
              <li class="feature__items"><span class="feature__item underline">Мощность, Вт</span><span class="feature__item">{{product_data.power}}</span></li>
              <li class="feature__items"><span class="feature__item underline">Материал рамы</span><span class="feature__item">{{product_data.frametype}}</span></li>
              <li class="feature__items"><span class="feature__item underline">Тип привода</span><span class="feature__item">передний</span></li>
              <li class="feature__item title">Питание</li>
              <li class="feature__items"><span class="feature__item underline">Ёмкость аккумулятора, мАч</span><span class="feature__item">{{product_data.batarycapacity}}</span></li>
              <li class="feature__items"><span class="feature__item underline">Пробег на одном заряде, км</span><span class="feature__item">{{product_data.oncharge}}</span></li>
              <li class="feature__item title">Вес и габариты</li>
              <li class="feature__items"><span class="feature__item underline">Вес самоката, кг</span><span class="feature__item">{{product_data.weight}}</span></li>
              <li class="feature__items"><span class="feature__item underline">Ширина, мм</span><span class="feature__item">{{product_data.width}}</span></li>
              <li class="feature__items"><span class="feature__item underline">Высота, мм</span><span class="feature__item">{{product_data.height}}</span></li>
              <li class="feature__items"><span class="feature__item underline">Толщина, мм</span><span class="feature__item">{{product_data.thickness}}</span></li>
            </ul>
    </div>
</template>

<script>

export default {
  name: 'CatalogItem',
  components: {
  },
  data() {
      return {
        isDescriptionVisible: false,
      }
    },
  props: {
      product_data: {
        type: Object,
        default() {
            return {}
        }
      },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
    toggleDescription() {
      !this.isDescriptionVisible
      console.log(this.isDescriptionVisible = !this.isDescriptionVisible)
    }
  },
}
</script>

<style lang="scss">
</style>