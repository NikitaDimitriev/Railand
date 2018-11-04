<template>
<div class="about-page">
    <Menu></Menu>
    <div class="out">
          <div class="about-bg">
        <!-- BEGIN promo -->
        <section class="promo" style="background-image: url(../../static/about-promo.jpg)">
          <h1 class="promo__title"> О нас </h1>
        </section>
        <!-- END promo -->
        <!-- BEGIN about -->
        <section class="about">
          <div class="about__in inner">
            <div class="about__col">
              <h2 class="about__title"> Компания <span> РАЙЛЕНД </span>
              </h2>
              <div class="about__subtitle"> Заботимся об отдыхе и доходе успешных людей,развивая сервисы класса люкс,в сфере курортной недвижимости </div>
            </div>
            <div class="about__col">
              <div class="about__text"> Мы сами ведем бизнес, инвестируем и путешествуем. Знаем, что большие дела требуют отдыха. Это заставляет нас ценить моменты в кругу семьи и друзей, наслаждаться каждым лучом тёплого тропического солнца. Так было принято решение организовать компанию, чтобы помогать деловым людям отдыхать, жить и вести бизнес в пальмовом раю, стране улыбок - в Таиланде. </div>
            </div>
          </div>
        </section>
        <!-- END about -->
        <!-- BEGIN advantages -->
        <section class="advantages" style="background-image: url(../../static/about-advantages.jpg)">
          <div class="advantages__in inner">
            <h2 class="advantages__title title-secondary"> Наши ценности </h2>
            <ul class="advantages__list">
              <li class="advantages__item">
                <h4> Доступно </h4>
                <p> мы упростили процесс для удобства наших клиентов </p>
              </li>
              <li class="advantages__item">
                <h4> Качественно </h4>
                <p> мы действительно гордимся качеством наших услуг </p>
              </li>
              <li class="advantages__item">
                <h4> Надежно </h4>
                <p> доказано нашими постоянными клиентами </p>
              </li>
            </ul>
          </div>
        </section>
        <!-- END advantages -->
        <!-- BEGIN team -->
        <section class="team">
          <div class="team__in inner">
            <h2 class="team__title title-secondary"> КОМАНДА </h2>
            <div class="team__col">
              <div class="team__content">
                <p class="team__text"> Наши специалисты находятся там, где вы будете арендовать или покупать недвижимость. Они проверяют владельцев вилл и соответствие объектов. Когда вы обращаетесь в Райленд, то можете бытьуверены - менеджер подберет виллу или апартаменты под любые, даже самые сложные требования </p>
                <p class="team__text"> C 2012 года Мы подбираем объекты, организуем показы, даем экспертные оценки, оказываем полное юридическое сопровождение сделки. Присоединяйтесь к более чем 8 000 довольных клиентов. Обращайтесь - готовы решать любые, даже самые сложные задачи!. </p>
              </div>
            </div>
            <div class="team__col">
              <div class="team__pic">
                <img src="../../static/about-team.jpg" alt="">
              </div>
            </div>
          </div>
        </section>
        <!-- END team -->
      </div>
      <div class="reviews reviews-about">
        <div class="reviews__in inner">
          <h2 class="title-secondary"><span>честные отзывы о нас </span></h2>
          <div class="reviews-slider slider js-reviews-slider">
            <div class="reviews-slider__item r-item" v-if="item0">
              <div class="r-item__pic">
                <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
              </div>
              <div class="r-item__name">Семья Литвиненко</div>
              <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень здорово. Обнимаем, до новых встреч! </div>
              <div class="r-item__date">0.02.2018</div>
            </div>
            <div class="reviews-slider__item r-item" v-if="item1">
              <div class="r-item__pic">
                <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
              </div>
              <div class="r-item__name">Семья Литвиненко</div>
              <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень здорово. Обнимаем, до новых встреч! </div>
              <div class="r-item__date">1.02.2018</div>
            </div>
            <div class="reviews-slider__item r-item">
              <div class="r-item__pic">
                <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
              </div>
              <div class="r-item__name">Семья Литвиненко</div>
              <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень здорово. Обнимаем, до новых встреч! </div>
              <div class="r-item__date">2.02.2018</div>
            </div>
            <div class="reviews-slider__item r-item">
              <div class="r-item__pic">
                <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
              </div>
              <div class="r-item__name">Семья Литвиненко</div>
              <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень здорово. Обнимаем, до новых встреч! </div>
              <div class="r-item__date">3.02.2018</div>
            </div>
            <div class="reviews-slider__item r-item">
              <div class="r-item__pic">
                <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
              </div>
              <div class="r-item__name">Семья Литвиненко</div>
              <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень здорово. Обнимаем, до новых встреч! </div>
              <div class="r-item__date">4.02.2018</div>
            </div>
          </div>
        </div>
      </div>
      <!-- END reviews -->
      <!-- BEGIN about-order -->
      <section class="about-order" style="background-image: url(img/about/about-form.jpg)">
        <div class="about-order__in inner">
          <div class="about-order__form form">
            <h2 class="title-secondary"> Задайте нам вопрос </h2>
            <div class="form__in">
              <div class="form__col">
                <p class="form__text"> Если вы хотите поделиться с нами опытом использования сервиса Райленд или задать вопрос, связанный с сайтом momondo, пожалуйста, заполните эту форму обратной связи. </p>
                <p class="form__text"> Работаем с 2012 года. Ответим на любые вопросы по отдыху и недвижимости на Пхукете, Самуи и Бали </p>
              </div>
              <div class="form__col">
                <!-- BEGIN form -->
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
                <!-- END form -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- END about-order -->
    </div>
    <Footer></Footer>
</div>
</template>
<script>
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
export default {
    components:{
        Menu,
        Footer
    }
}
</script>
