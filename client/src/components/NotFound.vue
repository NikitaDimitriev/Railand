<template>
  <div class="not-found-page">
    <Menu/>
    <div class="out">
      <div class="b-404">
        <div class="b-404__inner inner">
          <div class="b-404__header">
            <div class="b-404__col">
              <div class="b-404__title">
                Oops..
                <span>404</span>
              </div>
              <div class="b-404__subtitle">Не нашли то, что искали?
                <br>Воспользуйтесь нашим удобным поиском
              </div>
              <div class="search">
                <form action>
                  <input class="search__field" type="text" placeholder="Поиск" name="search">
                  <button class="search__btn" type="submit">Submit</button>
                </form>
              </div>
            </div>
            <div class="b-404__col">
              <img src="img/error-photo.png" alt>
            </div>
          </div>
          <div class="b-404__footer form">
            <h2 class="title-secondary">Задайте нам вопрос</h2>
            <div class="form__in">
              <div class="form__col">
                <p
                  class="form__text"
                >Если вы хотите поделиться с нами опытом использования сервиса Райленд или задать вопрос, связанный с сайтом momondo, пожалуйста, заполните эту форму обратной связи.</p>
                <p
                  class="form__text"
                >Работаем с 2012 года. Ответим на любые вопросы по отдыху и недвижимости на Пхукете, Самуи и Бали</p>
              </div>
              <div class="form__col">
                <!-- BEGIN form -->
                <form action>
                  <div class="form__row">
                    <input type="text" class="form__field" placeholder="Имя*">
                  </div>
                  <div class="form__row">
                    <input type="email" class="form__field" placeholder="E-mail*">
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
                <!-- END form -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  <!-- END 404 -->
</template>
<script>
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
export default {
  components: {
    Menu,
    Footer
  }
};
</script>
<style lang="css">
</style>
