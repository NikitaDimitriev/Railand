<template>
      <div class="reviews out">
    <div class="reviews__in inner">
      <h2 class="title-primary"><span>честные отзывы о нас </span></h2>
      <div class="reviews-slider js-reviews-slider">
        <button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">Previous</button>
        <div class="carousel_box">
        <carousel :per-page="1" :mouse-drag="false" :autoplay="true" :autoplayTimeout="3000" :loop="true" style="max-width: 710px">
          <slide>
            <div class="reviews-slider__item r-item">
                  <div class="r-item__pic">
                    <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
                  </div>
                  <div class="r-item__name">Семья Литвиненко</div>
                  <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и
                    опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над
                    экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень
                    здорово. Обнимаем, до новых встреч! </div>
                  <div class="r-item__date">4.02.2018</div>
                </div>
          </slide>
          <slide>
            <div class="reviews-slider__item r-item">
                  <div class="r-item__pic">
                    <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
                  </div>
                  <div class="r-item__name">Семья Литвиненко</div>
                  <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и
                    опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над
                    экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень
                    здорово. Обнимаем, до новых встреч! </div>
                  <div class="r-item__date">4.02.2018</div>
                </div>
          </slide>
          <slide>
            <div class="reviews-slider__item r-item">
                  <div class="r-item__pic">
                    <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
                  </div>
                  <div class="r-item__name">Семья Литвиненко</div>
                  <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и
                    опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над
                    экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень
                    здорово. Обнимаем, до новых встреч! </div>
                  <div class="r-item__date">4.02.2018</div>
                </div>
          </slide>
          <slide>
            <div class="reviews-slider__item r-item">
                  <div class="r-item__pic">
                    <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
                  </div>
                  <div class="r-item__name">Семья Литвиненко</div>
                  <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и
                    опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над
                    экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень
                    здорово. Обнимаем, до новых встреч! </div>
                  <div class="r-item__date">4.02.2018</div>
                </div>
          </slide>
          <slide>
            <div class="reviews-slider__item r-item">
                  <div class="r-item__pic">
                    <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
                  </div>
                  <div class="r-item__name">Семья Литвиненко</div>
                  <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и
                    опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над
                    экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень
                    здорово. Обнимаем, до новых встреч! </div>
                  <div class="r-item__date">4.02.2018</div>
                </div>
          </slide>
        </carousel>
        </div>
        <button class="slick-next slick-arrow" aria-label="Next" type="button" style="">Next</button>
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
