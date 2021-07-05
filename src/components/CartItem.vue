<template>
    <div class="cart-items">
  <div class="cart-items__body">
    <div class="cart-item"><img class="cart-item__img" src="../img/xiaomi.png" alt=""/>
      <div class="cart-item__content">
        <div class="cart-item__price">{{cart_item_data.price}}₽</div>
        <h4 class="cart-item__brand">{{cart_item_data.brand}}</h4>
        <div class="cart-item__amount">Количество: {{cart_item_data.amount}} </div>
        <div class="cart-item__control">
          <button class="cart-item__btn" @click="incrementCartItem">+</button>
          <button class="cart-item__btn" @click="decrementCartItem">-</button>
        </div>
      </div>
      <button class="cart-item__delete" @click="deleteFromCart"></button>
    </div>
  </div>
</div>
</template>

<script>

export default ({
    name: 'CartItem',
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {

      }
    },
    methods: {
      deleteFromCart() {
        this.$emit('deleteFromCart')
      },
      incrementCartItem() {
        this.$emit('increment')
      },
      decrementCartItem() {
        this.$emit('decrement')
      }
    },
    mounted() {

    }
})
</script>

<style lang="scss">
</style>