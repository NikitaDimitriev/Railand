<template>
    <header class="header">
        <div class="header__in header-inner">
          <div class="header__top">
            <div class="header__top-left">
              <div class="tselect" :class="isActiveTselect ? 'is-active': null">
                <div class="tselect__current">
                  <a href="tel:+ 66 81 737 1687" class="tselect__current-link">+ 66 81 737 1687</a>
                  <i class="tselect__arrow" @click="toogleSlectTelehone()"></i>
                </div>
                <ul class="tselect__list">
                  <li class="tselect__item">+ 66 81 737 1687</li>
                  <li class="tselect__item">+ 66 81 737 1687</li>
                </ul>
              </div>
              <ul class="header__messengers messengers">
                <li class="messengers__item">
                  <a href="https://wa.me/+66817371687'" class="messengers__links messengers__whatsapp"></a>
                </li>
                <li class="messengers__item">
                  <a href="viber://add?number=+66817371687" class="messengers__links messengers__viber"></a>
                </li>
                <li class="messengers__item">
                  <a href="tg://resolve?domain=nikname" class="messengers__links messengers__telegram"></a>
                </li>
              </ul>
            </div>
            <div class="header__top-rigth">
              <div class="cselect" :class="isActiveLselect ? 'is-active': null" @click="toogleSlectLanguage()">
                <div class="cselect__current">
                  <img src="../../../static/rus.svg" width="23" height="15" alt="Russian flag">
                </div>
                <ul class="cselect__list">
                  <li class="cselect__item"><img src="../../../static/gbr.svg" width="23" height="15" alt="Great Britain flag"></li>
                </ul>
              </div>
              <div class="pselect" :class="isActiveCselect ? 'is-active': null" @click="toogleSlectCurrency()">
                <div class="pselect__current">$</div>
                <ul class="pselect__list">
                  <li class="pselect__item">&#8381; rub</li>
                  <li class="pselect__item">&#3647; thb</li>
                  <li class="pselect__item">$ usd</li>
                  <li class="pselect__item">&#8364; eur</li>
                </ul>
              </div>
              <div class="form-links">
                <a href="#" class="form-links__item">Регистрация</a>
                <div class="form-links__separator">|</div>
                <a href="#" class="form-links__item">Войти</a>
              </div>
            </div>
          </div>
          <div class="header__bottom">
            <div class="header__bottom-left">
              <nav class="nav">
                <router-link to="/" class="nav__link">Главная</router-link>
                <router-link to="/" class="nav__link">недвижимость</router-link>
                <router-link to="/" class="nav__link">Владельцам</router-link>
                <router-link to="/live-in-phuket" class="nav__link">жизнь на Пхукете</router-link>
              </nav>
            </div>
            <div class="header__bottom-center">
              <router-link to="/" class="header__logo">Raйland</router-link>
            </div>
            <div class="header__bottom-right">
              <nav class="nav">
               <router-link to="/faq" class="nav__link">faq</router-link>
               <router-link to="/about" class="nav__link">О нас</router-link>
               <router-link to="/contact" class="nav__link">контакты</router-link>
              </nav>
              <button type="button" class="header__btn btn btn_primary">
                <span>Заполнить заявку</span>
              </button>
            </div>
          </div>
        </div>
      </header>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      isActiveTselect: false,
      isActiveLselect: false,
      isActiveCselect: false
    };
  },
  methods:{
    toogleSlectTelehone(){
      this.isActiveTselect = !this.isActiveTselect;
    },
    toogleSlectLanguage(){
      this.isActiveLselect = !this.isActiveLselect;
    },
    toogleSlectCurrency(){
      this.isActiveCselect = !this.isActiveCselect;
    },
  }
};
</script>
<style>
.pselect.is-active .pselect__list{
  display: block
}
.register-panel{
    display: inline-flex;
}
.header-inner{
  padding: 10px 125px;
}
</style>
