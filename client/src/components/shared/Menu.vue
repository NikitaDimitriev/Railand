<template>
<div>
  <header class="header">
        <div class="header__in header-inner">
          <div class="header__top">
            <div class="header__top-left">
              <div class="tselect" :class="isActiveTselect ? 'is-active': null">
                <div class="tselect__current">
                  <a href="tel:+ 66 84 845 5111" class="tselect__current-link">+ 66 84 845 5111</a>
                  <i class="tselect__arrow"></i>
                </div>
                <ul class="tselect__list">
                  <li class="tselect__item">+ 66 84 845 5111</li>
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
              <!-- <div class="form-links" v-if="!user">
                <a style="cursor: pointer" class="form-links__item" @click="toggleModalRegistration()">Регистрация</a>
                <div class="form-links__separator">|</div>
                <a style="cursor: pointer" class="form-links__item" @click="toggleModalLogin()">Войти</a>
              </div>
              <div class="form-links" v-if="user">
                <router-link to="/personal-area" class="form-links__item">{{user.login}}</router-link>
              </div> -->
            </div>
          </div>
          <div class="header__bottom">
            <div class="header__bottom-left">
              <nav class="nav">
                <router-link to="/" class="nav__link">Главная</router-link>
                <router-link to="/catalog" class="nav__link">недвижимость</router-link>
                <!-- <router-link to="/cooperation" class="nav__link">Владельцам</router-link> -->
                <router-link to="/live-in-phuket" class="nav__link">жизнь на Пхукете</router-link>
              </nav>
            </div>
            <div class="header__bottom-center">
              <router-link to="/" class="header__logo">Raйland</router-link>
            </div>
            <div class="header__bottom-right">
              <nav class="nav">
               <router-link to="/faq" class="nav__link">faq</router-link>
               <!-- <router-link to="/about" class="nav__link">О нас</router-link> -->
               <router-link to="/contact" class="nav__link">контакты</router-link>
              </nav>
              <button type="button" class="header__btn btn btn_primary" @click="scrollTo">
                <a><span>Заполнить заявку</span></a>
              </button>
            </div>
          </div>
        </div>
    <div class="popup-bg" id="popup-bg" v-if="showRegistrationModal" style="display: flex">
      <div class="popup popup_registration" id="popup_registration" style="display: block">
        <div class="cross popup-close js-close" @click="toggleModalRegistration()"></div>
        <div class="popup__in">
          <h2 class="popup__title">Введите регистрационные данные</h2>
          <form>
            <!-- BEGIN popup-form -->
            <div class="popup__form">
              <!-- BEGIN popup-body -->
              <div class="popup__body">
                <div class="form__row">
                  <input type="text" class="form__field" placeholder="Логин" v-model="login">
                </div>
                <div class="form__row">
                  <input type="email" class="form__field" placeholder="E-mail*" v-model="email">
                </div>
                <div class="form__row">
                  <input type="password" class="form__field" placeholder="Пароль*" v-model="password">
                </div>
                <div class="form__row">
                  <input type="password" class="form__field" placeholder="Подтверждения пароля*" v-model="passwordCheck">
                </div>
              </div>
              <!-- END popup-body -->
              <!-- BEGIN popup-footer -->
              <div class="popup__footer">
                <div class="popup__links">
                  <button type="button" class="popup__link btn-call-popup" data-popup="reset">
                    <span> Забыли пароль? </span>
                  </button>
                  <button type="button" class="popup__link btn-call-popup" data-popup="login">
                    <span> Уже зарегестрированы? </span>
                  </button>
                </div>
                <div class="popup__entry">
                  <button class="popup__btn btn" @click="register()"> Зарегестрироваться </button>
                </div>
              </div>
              <!-- END popup-footer -->
            </div>
            <!-- END popup-form -->
          </form>
        </div>
      </div>
    </div>
    <div class="popup-bg" id="popup-bg" v-if="showLoginModal" style="display: flex">
    <div class="popup popup_login" id="popup_login" style="display:block">
        <div class="cross popup-close js-close" @click="toggleModalLogin()"></div>
        <div class="popup__in">
          <h2 class="popup__title">Введите email и пароль указанные при регистрации</h2>
          <form>
            <!-- BEGIN popup-form -->
            <div class="popup__form">
              <!-- BEGIN popup-body -->
              <div class="popup__body">
                <div class="form__row">
                  <input type="email" class="form__field" placeholder="Введите ваш email" v-model="loginEmail">
                </div>
                <div class="form__row">
                  <input type="password" class="form__field" placeholder="Введите ваш пароль" v-model="loginPassword">
                </div>
              </div>
              <!-- END popup-body -->
              <!-- BEGIN popup-footer -->
              <div class="popup__footer">
                <div class="popup__checkbox">
                  <div class="checkbox">
                    <input name="remember" id="remember" type="checkbox" class="checkbox__field">
                    <label for="remember" class="checkbox__label"><span class="checkbox__title">Запомнить меня</span></label>
                  </div>
                </div>
                <div class="popup__links">
                  <button type="button" class="popup__link btn-call-popup" data-popup="reset">
                    <span> Забыли пароль? </span>
                  </button>
                  <button type="button" class="popup__link btn-call-popup" data-popup="registration">
                    <span> Регистрация на сайте </span>
                  </button>
                </div>
                <div class="popup__entry">
                  <button class="popup__btn btn" @click="loginUser()"> Вход </button>
                </div>
              </div>
              <!-- END popup-footer -->
            </div>
            <!-- END popup-form -->
          </form>
        </div>
      </div>
      </div>
   </header>
    <header class="header-mob">
        <div class="header-mob__top">
          <div class="header-mob__top-in inner">
            <a href="#" class="header-mob__logo">Raйland</a>
            <div class="tselect-mob">
              <div class="tselect-mob__current">
                <a href="tel:66817371687" class="tselect-mob__current-link">+ 66 81 737 1687</a>
                <i class="tselect-mob__arrow"></i>
              </div>
              <ul class="tselect-mob__list">
                <li class="tselect-mob__item">+ 66 81 737 1687</li>
                <li class="tselect-mob__item">+ 66 81 737 1687</li>
              </ul>
            </div>
            <button type="button" class="btn-burger js-menu"><span>Menu</span></button>
          </div>
        </div>
        <div class="header-mob__drop">
          <div class="header-mob__drop-in inner">
            <nav class="header-mob__nav">
              <a href="#" class="header-mob__nav-link is-active">Главная</a>
              <a href="#" class="header-mob__nav-link">Недвижимость</a>
              <a href="#" class="header-mob__nav-link">Владельцам</a>
              <a href="#" class="header-mob__nav-link">Жизнь на Пхукете</a>
              <a href="#" class="header-mob__nav-link">FAQ</a>
              <a href="#" class="header-mob__nav-link">О нас</a>
              <a href="#" class="header-mob__nav-link">Контакты</a>
              <a href="#" class="header-mob__nav-link">Other</a>
            </nav>
            <div class="select-mob">
              <div class="select-mob__current"> ЯЗЫК <span><img src="img/rus.svg" width="23" height="15" alt="Russian flag"></span>
              </div>
              <ul class="select-mob__list">
                <li class="select-mob__item"><img src="img/gbr.svg" width="23" height="15" alt="Great Britain flag"></li>
              </ul>
            </div>
            <div class="select-mob">
              <div class="select-mob__current">Валюта <span>$</span></div>
              <ul class="select-mob__list">
                <li class="select-mob__item">&#8381; rub</li>
                <li class="select-mob__item">&#3647; thb</li>
                <li class="select-mob__item">$ usd</li>
                <li class="select-mob__item">&#8364; eur</li>
              </ul>
            </div>
            <div class="header-mob__feedback">
              <ul class="header-mob__messengers messengers">
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
              <button type="button" class="header-mob__btn btn btn_primary">
                <span>Заполнить заявку</span>
              </button>
            </div>
            <div class="form-buttons">
              <button class="form-buttons__item btn-call-popup" data-popup="registration"><span>Регистрация</span></button>
              <button class="form-buttons__item form-buttons__item_red btn-call-popup" data-popup="login"><span>Войти</span></button>
            </div>
          </div>
        </div>
      </header>    
</div>
    
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      isActiveTselect: false,
      isActiveLselect: false,
      isActiveCselect: false,
      showRegistrationModal: false,
      showLoginModal: false,
      login: "",
      email: "",
      password: "",
      passwordCheck: "",
      loginEmail: "",
      loginPassword: "",
      user: false
    };
  },
  mounted() {
    this.getUserId();
  },
  methods: {
    toogleSlectTelehone() {
      this.isActiveTselect = !this.isActiveTselect;
    },
    toogleSlectLanguage() {
      this.isActiveLselect = !this.isActiveLselect;
    },
    toogleSlectCurrency() {
      this.isActiveCselect = !this.isActiveCselect;
    },
    toggleModalRegistration() {
      this.showRegistrationModal = !this.showRegistrationModal;
    },
    toggleModalLogin() {
      this.showLoginModal = !this.showLoginModal;
    },
    register() {
      if (this.password === this.passwordCheck) {
        let data = {
          login: this.login,
          email: this.email,
          password: this.password
        };
        this.$axios
          .post("http://167.99.138.90:8000/api/sign-up-user", data)
          .then(response => {
            this.showRegistrationModal = !this.showRegistrationModal;
            localStorage.setItem("auth", true);
            localStorage.setItem("id", response.data._id);
            console.log(response);
            this.getUserId();
            this.$router.push("/personal-area");
          });
      }
    },
    loginUser() {
      let data = {
        email: this.loginEmail,
        password: this.loginPassword
      };
      this.$axios
        .post("http://167.99.138.90:8000/api/log-in-user", data)
        .then(response => {
          this.showLoginModal = !this.showLoginModal;
          console.log(response.data);
          localStorage.setItem("auth", true);
          localStorage.setItem("id", response.data._id);
          this.getUserId();
          this.$router.push("/personal-area");
        });
    },
    getUserId() {
      if (localStorage.getItem("auth") === "true") {
        let id = localStorage.getItem("id");
        this.$axios
          .get(`http://167.99.138.90:8000/api/get-current-user/${id}`)
          .then(response => {
            this.user = response.data;
            console.log(response);
          });
      }
    },
    scrollTo() {
      this.$router.push({path: '/',hash:"#order"})
    },
  }
};
</script>
<style>
.pselect.is-active .pselect__list {
  display: block;
}
.register-panel {
  display: inline-flex;
}
.header-inner {
  padding: 10px 125px;
}
</style>
