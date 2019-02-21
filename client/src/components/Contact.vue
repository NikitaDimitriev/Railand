<template>
    <div class="contact-page">
        <Menu></Menu>
        <div class="contact-top" style="background-image: url(img/contact-bg.jpg)">
        <h2 class="contact-top__title">Контакты</h2>
      </div>
      <div class="contact-layout">
        <div class="contact-layout__in inner">
          <div class="contact-layout__left">
            <div class="location">
              <div class="location__top">
                <div class="location__company">Railand Property <br /> International Co., Ltd.</div>
                <div class="location__country">47 Lagoon Road, Cherngtalay, Thalang, <br> Phuket 83110, Thailand</div>
                <div class="location__info">
                  <span>Регистрационный номер: 0835554000013</span>
                  <span> Тел/факс: 8-10-66-7632-44-48; +66-84-84-55-111. </span>
                  <a href="mailto:info@localhost:8080" class="location__email">info@localhost:8080</a>
                </div>
              </div>
              <div class="location__body">
                <!-- BEGIN form -->
                <div class="location__form form">
                  <h2 class="form__title">Связаться с нами</h2>
                  <form action="">
                    <div class="form__row">
                      <input type="text" class="form__field" placeholder="Имя*" />
                    </div>
                    <div class="form__row">
                      <input type="email" class="form__field" placeholder="E-mail*" />
                    </div>
                    <div class="form__row">
                      <textarea class="form__textarea" placeholder="Комментарий"></textarea>
                    </div>
                    <div class="form__footer">
                      <button type="button" class="form__btn btn">
                        <span>отправить</span>
                      </button>
                    </div>
                  </form>
                </div>
                <!-- END form -->
              </div>
            </div>
          </div>
          <div class="contact-layout__right">
            <Map></Map>
          </div>
        </div>
      </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
import Map from "./shared/Map";
export default {
  components: {
    Menu,
    Footer,
    Map
  }
};
</script>
