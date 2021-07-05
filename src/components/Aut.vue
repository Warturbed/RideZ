<template>
<section class="autorization">
  <div class="container">
    <div class="autorization__body">
      <img class="header__logo" src="https://insider-cache.cdnvideo.ru/insider/images/iconssvg/logo/spinner.svg" alt=""/>
      <h3 class="header__title">RideZ</h3>
      <div class="autorization__control">
        <button class="autorization__btn btn" v-on:click="loginBtn" v-if="loginRegState === true">Войти</button>
        <button class="autorization__btn btn" v-on:click="registerBtn" v-else >Регистрация</button>
      </div>
      <div class="line-break"></div>
      <form class="sign-in" action="#" v-if="loginRegState === false" @submit.prevent="autFormSubmit">
        <div class="sign-in__user">
          <label class="sign-in__label" for="sign-user"></label>
          <input class="sign-in__input" type="sign-user" required="required" placeholder="My name is"/>
        </div>
        <div class="sign-in__password">
          <label class="sign-in__label" for="sign-password"></label>
          <input class="sign-in__input" type="sign-password" required="required" placeholder="My password"/>
        </div>
        <button class="sign-in__submit btn" type="submit">Войти</button>
      </form>
      <form class="register" action="#" v-if="loginRegState === true" @submit.prevent="autFormSubmit">
        <div class="register__email">
          <label class="register__label" for="register-email"></label>
          <input class="register__input" type="register-email" required="required" placeholder="Your Email"/>
        </div>
        <div class="register__user">
          <label class="register__label" for="register-user"></label>
          <input class="register__input" type="register-user" required="required" placeholder="Your name"/>
        </div>
        <div class="register__password">
          <label class="register__label" for="register-password"></label>
          <input class="register__input" type="register-password" required="required" placeholder="New password"/>
        </div>
        <button class="sign-in__submit btn" type="submit">Зарегистрироваться</button>
        <div class="policy">Регистрируясь, вы даетё право доступа к части <a class="policy__link" href="#">вашего сердечка</a></div>
      </form>
    </div>
  </div>
  <div class="popup" v-if="isPopupIndevVisible===true">
          <div class="popup__overlay"></div>
          <div class="popup__container">
            <span class="popup__close" v-on:click="closePopupIndev"></span>
            <h2 class="popup__title">Oooops!</h2>
            <p class="popup__text">Этот раздел находится в процессе разработки, проведуйте нас позднее :)</p>
            <img src="@/img/pop-indev-img.png" class="popup__img" alt="">
          </div>
        </div>
</section>
</template>


<script>

export default ({
    name: 'Aut',
    data() {
        return {
            loginRegState: true,
            isPopupIndevVisible: false
        }
    },
    methods: {
        loginBtn() {
            this.loginRegState = false
        },
        registerBtn() {
            this.loginRegState = true
        },
        closePopupIndev() {
          this.isPopupIndevVisible = !this.isPopupIndevVisible
        },
        autFormSubmit() {
          this.isPopupIndevVisible = true
        }
        
    }
})
</script>

<style lang="scss">
@import '@/styles/aut.scss';
</style>