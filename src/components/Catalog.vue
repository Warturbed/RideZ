
<template>
    <div class="catalog"> 
  <div class="catalog__body">
    <div class="catalog__header"><img class="header__logo" src="https://insider-cache.cdnvideo.ru/insider/images/iconssvg/logo/spinner.svg" alt=""/>
      <h3 class="header__title">RideZ</h3>
    </div>
    <div class="catalog__content">
      <div class="catalog__cards">
        <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.key"
        :product_data="product"
        @addToCart="addToCart"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CatalogItem from '@/components/CatalogItem'

export default ({
    name: 'Catalog',
    components: {
      CatalogItem,
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ]),
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data)
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
    }
})
</script>

<style lang="scss">
@import '@/styles/catalog.scss';
</style>