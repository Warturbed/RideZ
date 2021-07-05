<template>
    <div class="main">
        <router-view></router-view>

        <div class="control">
            <router-link class="control__home" to="/"></router-link>
            <router-link class="control__cart" :to="{name: 'cart', params: {cart_data: CART}}">
              <div class="control__cart--counter">{{CART.length}}</div>
            </router-link>
        </div>
    </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default ({
    name: 'MainWrapper',
    components: {
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'CART'
      ]),
    },
})
</script>

<style lang="scss">
</style>