<template>
   <div class="cart">
  <div class="cart__content">
    <div class="non-card" v-if="!CART.length & CART.length < 1">
      <img class="cart__img" src="https://img.icons8.com/material-rounded/128/000000/shopping-basket-2.png" alt=""/>
      <h3 class="cart__title">Ваша корзина пуста</h3>
      <h4 class="non-card__text">Войдите, чтобы совершать покупки и проcмотреть вашу корзину!</h4>
      <router-link class="non-card__btn btn" to="/autorization">Войти</router-link>
    </div>
    <div class="empty-card"><img class="cart__img" src="https://img.icons8.com/material-rounded/128/000000/shopping-basket-2.png" alt=""/>
      <h3 class="cart__title">Ваша корзина пуста</h3>
      <h4 class="empty-card__text">Положите в меня что-нибудь!</h4>
    </div>
    <h3 class="cart__title" v-if="CART.length">Ваша корзина</h3>
    <CartItem
      v-for="(item, index) in CART"
      :key="item.key"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart-total" v-if="CART.length">
      <p class="cart-total__title">Итого к оплате:</p>
      <div class="cart-total__sum">{{cartSum}} ₽</div>
      <button class="cart-total__btn btn" @click="openPopupCart">Оплатить</button>
    </div>
    <div class="popup" v-if="isPopupCartVisible===true">
          <div class="popup__overlay"></div>
          <div class="popup__container">
            <span class="popup__close" @click="closePopupCart"></span>
            <h2 class="popup__title">Спасибо за ваш заказ</h2>
            <p class="popup__text">Менеджер свяжется с вами в ближайшее время</p>
            <img src="@/img/pop-indev-img.png" class="popup__img" alt="">
          </div>
        </div>
  </div>
</div> 
</template>

<script>
import CartItem from '@/components/CartItem'
import {mapActions,mapGetters} from 'vuex'

export default ({
    name: 'Cart',
    components: {
      CartItem,
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
        return {
          isPopupCartVisible: false
        }
    },
    computed: {
      ...mapGetters([
        'CART'
      ]),
      cartSum() {
        return this.CART.reduce((res, item) =>
        res+item.price*item.amount, 0)
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      },
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      },
      openPopupCart() {
        this.isPopupCartVisible = true
      },
      closePopupCart() {
          this.isPopupCartVisible = !this.isPopupCartVisible
          this.DELETE_FROM_CART(null)
      },
    }
})
</script>

<style lang="scss">
@import '@/styles/cart.scss';
</style>