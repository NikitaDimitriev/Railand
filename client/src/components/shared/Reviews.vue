<template>
      <div class="reviews">
    <div class="reviews__in inner">
      <h2 class="title-primary"><span>честные отзывы о нас </span></h2>
      <div class="reviews-slider js-reviews-slider">
          <slick ref="reviews" :options="slickOptions">
        <div class="reviews-slider__item r-item">
          <div class="r-item__pic">
            <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
          </div>
          <div class="r-item__name">Семья Литвиненко</div>
          <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и
            опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над
            экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень
            здорово. Обнимаем, до новых встреч! </div>
          <div class="r-item__date">0.02.2018</div>
        </div>
        <div class="reviews-slider__item r-item">
          <div class="r-item__pic">
            <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
          </div>
          <div class="r-item__name">Семья Литвиненко</div>
          <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и
            опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над
            экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень
            здорово. Обнимаем, до новых встреч! </div>
          <div class="r-item__date">1.02.2018</div>
        </div>
        <div class="reviews-slider__item r-item">
          <div class="r-item__pic">
            <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
          </div>
          <div class="r-item__name">Семья Литвиненко</div>
          <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и
            опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над
            экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень
            здорово. Обнимаем, до новых встреч! </div>
          <div class="r-item__date">2.02.2018</div>
        </div>
        <div class="reviews-slider__item r-item">
          <div class="r-item__pic">
            <img src="https://via.placeholder.com/160x160" width="160" height="160" alt="Семья Литвиненко">
          </div>
          <div class="r-item__name">Семья Литвиненко</div>
          <div class="r-item__txt"> Ребята. Спасибо!!! Все было очень хорошо. Радует оперативность, отзывчивость и
            опека! Отдельное спасибо Елизавете и Ольге, отдельно Александру и Вадиму. Думаю, стоит поработать над
            экскурсиями и маршрутами для знакомства с острово, не перегружайте гостей. У нас получилось все очень
            здорово. Обнимаем, до новых встреч! </div>
          <div class="r-item__date">3.02.2018</div>
        </div>
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
          </slick>
      </div>
    </div>
  </div>    
</template>
<script>
export default {
    data(){
        return{
            slickOptions:{
                slidesToShow:5
            }
        }
    }
};
</script>
<style>
</style>
