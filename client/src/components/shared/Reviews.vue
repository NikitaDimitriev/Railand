<template>
      <div class="reviews out">
    <div class="reviews__in inner">
      <h2 class="title-primary"><span>честные отзывы о нас </span></h2>
      <div class="reviews-slider js-reviews-slider">
        <!-- <button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">Previous</button> -->
        <div class="carousel_box">
        <carousel :per-page="1" :mouse-drag="false" :autoplay="true" :autoplayTimeout="3000" :loop="true" style="max-width: 710px">
          <slide>
            <div class="reviews-slider__item r-item">
                  <div class="r-item__pic">
                    <img src="../../../static/profile-icon-300x300.png" width="160" height="160" alt="Семья Литвиненко">
                  </div>
                  <div class="r-item__name">Владимир 43 года, Москва</div>
                  <div class="r-item__txt"> Занимаюсь недвижимостью в России уже более 10 лет, поэтому могу объективно оценить работу агентства. 
                    Я купил виллу на Пхукете на нулевом этапе строительства. 
                    Агентство выполнило свои обязательства в полном объеме и в установленные сроки.
                    Задумываюсь о продаже уже готовой виллы и покупке нового объекта с помощью Railand. Благодарю Раису
                    за квалифицированную работу, плодотворное сотрудничество и такт. К агентству претензий нет. Работой полностью доволен.
                    Желаю агентству удачных сделок и хороших клиентов.  </div>
                  <div class="r-item__date">22.04.2015</div>
                </div>
          </slide>
          <slide>
            <div class="reviews-slider__item r-item">
                  <div class="r-item__pic">
                    <img src="../../../static/profile-icon-300x300.png" width="160" height="160" alt="Семья Литвиненко">
                  </div>
                  <div class="r-item__name">Мария и Виктор, Киев</div>
                  <div class="r-item__txt"> Делая такую серьёзную покупку впервые, шли с опаской в агентство. У нас маленький ребенок, что значительно усложняло наши поиски. 
Хотелось хороший район, близость моря и адекватные цены. Но все наши сомнения развеяла риелтор Алена. 
Внимательная к деталям, порядочная, понимала нас с полуслова и не навязывала нам варианты, если мы сомневались. 
Отдельная благодарность агентству за няню нашей малышке! 
Спасибо за дом нашей мечты. Мы так долго его визуализировали и нашли благодаря вам! Успехов и процветания! </div>
                  <div class="r-item__date">7.12.2016</div>
                </div>
          </slide>
          <slide>
            <div class="reviews-slider__item r-item">
                  <div class="r-item__pic">
                    <img src="../../../static/profile-icon-300x300.png" width="160" height="160" alt="Семья Литвиненко">
                  </div>
                  <div class="r-item__name">Юлия</div>
                  <div class="r-item__txt"> Мы с мужем влюблены в Пхукет уже давно, но решение о покупке дома для сдачи в аренду пришло спонтанно. 
С агентством Railand у нас была любовь с первого слова. Команда сделала процесс выбора и покупки удовольствием. 
Было внутреннее ощущение, что мы в надежных руках. Спасибо Наташе, она учла все наши пожелания, подобрала много хороших вариантов за короткий срок.  </div>
                  <div class="r-item__date">19.04.2018</div>
                </div>
          </slide>
          <slide>
            <div class="reviews-slider__item r-item">
                  <div class="r-item__pic">
                    <img src="../../../static/profile-icon-300x300.png" width="160" height="160" alt="Семья Литвиненко">
                  </div>
                  <div class="r-item__name">Сергей</div>
                  <div class="r-item__txt"> Спасибо агентству за быструю и успешную работу!

Арендовали дом для родителей и это казалось непосильной задачей. Нам нужен был риелтор и хороший психолог в одном лице.

Порадовало человеческое отношение к клиенту и непринужденная обстановка в офисе.

Сделка прошла успешно, все остались довольны.

Команда оказывала содействие по всем вопросам. Сервис был на высоте. Удачи Вам!!! </div>
                  <div class="r-item__date">19.04.2018</div>
                </div>
          </slide>
          <slide>
            <div class="reviews-slider__item r-item">
                  <div class="r-item__pic">
                    <img src="../../../static/profile-icon-300x300.png" width="160" height="160" alt="Семья Литвиненко">
                  </div>
                  <div class="r-item__name">Ольга</div>
                  <div class="r-item__txt"> Впервые решили сдавать свой дом. По совету друзей, обратились за помощью в Railand. И не ошиблись. 
Агентство превысило все ожидания. Быстро нашли арендатора, оформили все документы и провели сделку. 
Тактичность и внимательность риелтора выше всех похвал.
  Алена, спасибо вам за терпение! 
Успехов в ваших начинаниях и ежедневных сделок! 
 </div>
                  <div class="r-item__date">4.06.2018</div>
                </div>
          </slide>
        </carousel>
        </div>
        <!-- <button class="slick-next slick-arrow" aria-label="Next" type="button" style="">Next</button> -->
      </div>
    </div>
  </div>    
</template>
<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 5
      }
    };
  }
};
</script>
<style>
.carousel_box{
  display: flex;
  justify-content: center;
}
</style>
