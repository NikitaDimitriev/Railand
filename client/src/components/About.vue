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
              <div class="about__subtitle"> Первое официально зарегистрированное русское агентство недвижимости на Пхукете.
                12 лет опыта работы на рынке недвижимости Пхукета.
              </div>
            </div>
            <div class="about__col">
              <div class="about__text"> Опыт в работе агентства недвижимости даёт неоспоримые преимущества. Так, наши специалисты точно знают, в каком районе Пхукета прямой доступ к лучшим пляжам. И, кстати, разбираются в пляжах — какой для семейного отдыха, какой для шумных вечеринок. Они знают, из какого материала тут лучше строить и какой участок подойдёт для ваших целей. Они умеют следить за вашей недвижимостью, пока вы не на острове — с влажным климатом в Таиланде это необходимо. Они понимают, как найти хороших арендаторов на длительный срок. Rайland учитывает в работе тысячи мелочей — потому что со всем этим мы уже сталкивались. Никаких форс-мажоров, только надёжность. 
                  Кстати, эту надёжность подтверждают отзывы десятков наших постоянных клиентов и профессиональные награды. Компания регулярно принимает участие в престижных выставках международной недвижимости.
              </div>
            </div>
          </div>
        </section>
        <!-- END about -->
        <!-- BEGIN advantages -->
        <section class="advantages" style="background-image: url(../../static/about-advantages.jpg)">
          <div class="advantages__in inner">
            <h2 class="advantages__title title-secondary"> Почему стоит работать с нами </h2>
            <ul class="advantages__list">
              <li class="advantages__item">
                <!-- <h4> Качество </h4> -->
                <p> Лучшие объекты на этапе строительства и вторичном рынке </p>
              </li>
              <li class="advantages__item">
                <!-- <h4> Качественно </h4> -->
                <p> Полное сопровождение сделок на русском языке </p>
              </li>
              <li class="advantages__item">
                <!-- <h4> Надежно </h4> -->
                <p> Большой выбор объектов и широкий диапазон цен </p>
              </li>
            </ul>
          </div>
        </section>
        <!-- END advantages -->
        <!-- BEGIN team -->
        <section class="team">
          <div class="team__in inner">
            <h2 class="team__title title-secondary"> Учредитель и генеральный директор Railand Property International Co., Ltd. </h2>
            <div class="team__col">
              <div class="team__content">
                <p class="team__text"> Мы слишком давно работаем на Пхукете, чтобы ставить во главу угла количество новых клиентов. Наш приоритет - это качество сделки и забота
о покупателе, так как одним из ключевых моментов при выборе агентства недвижимости является репутация компании, которую надо не только заслужить, но и сохранить.

</p>
                <p class="team__text"> Единственный надежный способ стать успешным брокером — быть честным
с клиентом. Наши отношения с клиентами никогда не заканчиваются на закрытии сделки.

 </p>
              </div>
            </div>
            <div class="team__col">
              <div class="team__pic">
                <img src="../../static/about.jpg" alt="">
              </div>
            </div>
          </div>
        </section>
        <!-- END team -->
      </div>
      <Reviews></Reviews>
      <!-- END reviews -->
      <!-- BEGIN about-order -->
      <section class="about-order" style="background-image: url(img/about/about-form.jpg)">
        <div class="about-order__in inner">
          <div class="about-order__form form">
            <h2 class="title-secondary"> Задайте нам вопрос </h2>
            <div class="form__in">
              <div class="form__col">
                <p class="form__text"> Если у вас возникли вопросы о работе Rайland, о рынке недвижимости в Таиланде, юридических деталях, напишите нам. </p>
                <p class="form__text"> Заполните форму и укажите ваши контактные данные. Наши специалисты рассмотрят вопрос и оперативно дадут на него ответ. </p>
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
import Reviews from "./shared/Reviews";
export default {
    components:{
        Menu,
        Footer,
        Reviews
    }
}
</script>
