<template>
  <div class="home">
    <Menu></Menu>
    <div class="main out">
        <div class="inner">
          <div class="main__content">
            <h1 class="main__title">Аренда и продажа <br> недвижимости на Пхукете</h1>
            <div class="main__subtitle">Первое русское агентство недвижимости на Пхукете.</div>
            <div class="main__buttons-wrap">
              <button type="button" class="main__btn btn">
                <span>Покупка</span>
              </button>
              <button type="button" class="main__btn btn">
                <span>Aренда</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="icons">
        <div class="icons__in inner">
          <ul class="icons__list">
            <li class="icons__list-item">
              <div class="iblock">
                <div class="iblock__icon">
                  <svg class="icon icon-iblock-1">
                    <use xlink:href="../../static/sprite.svg#icon-iblock-1"></use>
                  </svg>
                </div>
                <div class="iblock__text">12 лет опыта работы на рынке <br /> недвижимости Пхукета</div>
              </div>
            </li>
            <li class="icons__list-item">
              <div class="iblock">
                <div class="iblock__icon">
                  <svg class="icon icon-iblock-1">
                    <use xlink:href="../../static/sprite.svg#icon-iblock-1"></use>
                  </svg>
                </div>
                <div class="iblock__text">Лучшие объекты на этапе <br /> строительства и вторичном рынке</div>
              </div>
            </li>
            <li class="icons__list-item">
              <div class="iblock">
                <div class="iblock__icon">
                  <svg class="icon icon-iblock-1">
                    <use xlink:href="../../static/sprite.svg#icon-iblock-1"></use>
                  </svg>
                </div>
                <div class="iblock__text">Большой выбор объектов <br /> и широкий диапазон цен</div>
              </div>
            </li>
            <li class="icons__list-item">
              <div class="iblock">
                <div class="iblock__icon">
                  <svg class="icon icon-iblock-1">
                    <use xlink:href="../../static/sprite.svg#icon-iblock-1"></use>
                  </svg>
                </div>
                <div class="iblock__text">Полное сопровождение сделок <br /> на русском и английском языках</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="apartments">
        <div class="apartments__in inner">
          <h2 class="title-primary title-primary__left"><span>Топ Объектов на </span></h2>
          <div class="apartments__tab-links tab-links">
            <button type="button" class="tab-links__item js-tab-apartments-link is-active" data-tab="0"><span>продажу</span></button>
            <button type="button" class="tab-links__item js-tab-apartments-link" data-tab="1"><span>Аренду</span></button>
          </div>
          <ul class="alist js-tab-apartments-content is-active" data-tab="0" v-for="(object, index) of objects" :key="index">
            <li class="alist__item">
              <div class="aitem">
                <div class="aitem__pic">
                  <img src="https://via.placeholder.com/255x300" width="255" height="300" alt="">
                </div>
                <div class="aitem__content">
                  <div class="aitem__title"> {{object.title}} </div>
                  <ul class="aitem__list">
                    <li class="aitem__list-item">Жилая площадь: {{object.lifeArea}}</li>
                    <li class="aitem__list-item">Спален: {{object.rooms}}</li>
                    <li class="aitem__list-item">До пляжа: {{object.distanceToBitch}}</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div class="aitem__price">$ 95 000</div>
        </div>
      </div>

    <router-link to="/catalog">
      <button type="button" class="apartments__btn btn">
        <span>Показать весь список <svg class="icon icon-arr">
            <use xlink:href="../../static/sprite.svg#icon-arr"></use>
          </svg>
        </span>
      </button>
    </router-link>

    <div class="order">
    <div class="order__in inner">
      <h2 class="title-primary"><span>Заявка на подбор недвижимости</span></h2>
      <div class="order-form">
        <div class="order-form__top">
          <div class="order-tabs">
            <button type="button" class="order-tabs__btn js-order-tab-link is-active" data-tab="0"><span>Покупка</span></button>
            <button type="button" class="order-tabs__btn js-order-tab-link" data-tab="1"><span>Аренда</span></button>
          </div>
        </div>
        <div class="order-form__body js-order-tab-content is-active" data-tab="0">
          <div class="order-form__left">
            <div class="order-options">
              <div class="order-options__row">
                <div class="select-l">
                  <select class="select-l__el">
                    <option value selected>Расположение</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <div class="select-l">
                  <select class="select-l__el">
                    <option value selected>Количество спален</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
              <div class="order-options__row order-options__row-justify">
                <div class="checkbox checkbox_right">
                  <input name="" id="apart" type="checkbox" class="checkbox__field">
                  <label for="apart" class="checkbox__label"><span class="checkbox__title">Апартаменты</span></label>
                </div>
                <div class="checkbox checkbox_right">
                  <input name="" id="villa" type="checkbox" class="checkbox__field">
                  <label for="villa" class="checkbox__label"><span class="checkbox__title">Вилла</span></label>
                </div>
                <div class="checkbox checkbox_right">
                  <input name="" id="house" type="checkbox" class="checkbox__field">
                  <label for="house" class="checkbox__label"><span class="checkbox__title">Дом</span></label>
                </div>
                <div class="checkbox checkbox_right">
                  <input name="" id="region" type="checkbox" class="checkbox__field">
                  <label for="region" class="checkbox__label"><span class="checkbox__title">Земельный участок</span></label>
                </div>
              </div>
              <div class="order-options__row">
                <div class="select-l">
                  <select class="select-l__el">
                    <option value selected>Цель</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <div class="select-l">
                  <select class="select-l__el">
                    <option value selected>Статус объекта</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
              <div class="order-options__row">
                <div class="order-options__range">
                  <div class="range-slider">
                    <h5 class="range-slider__title"> Стоимость: </h5>
                    <div class="range-slider__controls">
                      <div class="range-slider__col">
                        <input type="text" class="range-slider__input js-from" placeholder="От $" />
                      </div>
                      <div class="range-slider__col">
                        <input type="text" placeholder="До $" class="range-slider__input js-to" />
                      </div>
                    </div>
                    <div class="range-slider__output">
                      <input type="text" class="js-range-slider" value="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-send">
              <div class="order-send__row">
                <div class="input-field"><input type="text" class="input-field__el" placeholder="Имя*"></div>
                <div class="input-field"><input type="email" class="input-field__el" placeholder="E-mail*"></div>
              </div>
              <div class="order-send__row">
                <div class="input-area">
                  <textarea class="input-area__el" placeholder="Комментарий"></textarea>
                </div>
              </div>
              <div class="order-send__bottom">
                <div class="order-send__bottom-in">
                  <button type="submit" class="btn">
                    <span> Искать</span>
                  </button>
                  <button type="button" class="btn-close js-close">
                    <svg class="icon icon-cancel">
                      <use xlink:href="../../static/sprite.svg#icon-cancel"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="order-form__right">
            <div class="order-form__title">
              <span>48 ЧАСОВ</span> <br /> НА ИЗУЧЕНИЕ ВСЕГО <br /> КАТАЛОГА </div>
            <div class="order-form__txt">
              <p> Потратьте минуту и опишите критерии "той самой" идеальной виллы, которую Вы хотите арендовать или
                купить. В течении 20 минут с Вами свяжется менеджер и приступит к подбору вариантов. Для этого
                заполните поля формы и укажите свои предпочтения. </p>
              <p> В нашей базе недвижимости 2000+ вилл. Мы обязательно найдем подходящий вариант. Достаточно заполнить
                форму, и мы приступим к поиску! </p>
            </div>
          </div>
        </div>
        <div class="order-form__body js-order-tab-content" data-tab="1">
          <div class="order-form__left">
            <div class="order-options">
              <div class="order-options__row">
                <div class="select-l">
                  <select class="select-l__el">
                    <option value selected>Расположение</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <div class="select-l">
                  <select class="select-l__el">
                    <option value selected>Количество спален</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
              <div class="order-options__row">
                <div class="order-options__range">
                  <div class="range-slider">
                    <h5 class="range-slider__title"> Стоимость: </h5>
                    <div class="range-slider__controls">
                      <div class="range-slider__col">
                        <input type="text" class="range-slider__input js-from" placeholder="От $" />
                      </div>
                      <div class="range-slider__col">
                        <input type="text" placeholder="До $" class="range-slider__input js-to" />
                      </div>
                    </div>
                    <div class="range-slider__output">
                      <input type="text" class="js-range-slider" value="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-send">
              <div class="order-send__row">
                <div class="input-field"><input type="text" class="input-field__el" placeholder="Имя*"></div>
                <div class="input-field"><input type="email" class="input-field__el" placeholder="E-mail*"></div>
              </div>
              <div class="order-send__row">
                <div class="input-area">
                  <textarea class="input-area__el" placeholder="Комментарий"></textarea>
                </div>
              </div>
              <div class="order-send__bottom">
                <div class="order-send__bottom-in">
                  <button type="submit" class="btn">
                    <span> Искать</span>
                  </button>
                  <button type="button" class="btn-close js-close">
                    <svg class="icon icon-cancel">
                      <use xlink:href="../../static/sprite.svg#icon-cancel"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="order-form__right">
            <div class="order-form__title">
              <span>48 ЧАСОВ</span> <br /> НА ИЗУЧЕНИЕ ВСЕГО <br /> КАТАЛОГА </div>
            <div class="order-form__txt">
              <p> Потратьте минуту и опишите критерии "той самой" идеальной виллы, которую Вы хотите арендовать или
                купить. В течении 20 минут с Вами свяжется менеджер и приступит к подбору вариантов. Для этого
                заполните поля формы и укажите свои предпочтения. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="reviews">
    <div class="reviews__in inner">
      <h2 class="title-primary"><span>честные отзывы о нас </span></h2>
      <div class="reviews-slider js-reviews-slider">
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
      </div>
    </div>
  </div>

  <div class="news">
    <div class="news__in inner">
      <h2 class="title-primary"><span>Лучшее на Пхукете: Мероприятия</span></h2>
      <ul class="news__list">
        <li class="news__list-item">
          <div class="n-item">
            <div class="n-item__top">
              <img src="img/news-item.jpg" alt="">
            </div>
            <div class="n-item__body">
              <div class="n-item__data">23 апреля 2018</div>
              <h3 class="n-item__title">Эволюционируя вместе <br /> с Пхукетом</h3>
              <div class="n-item__txt">Счастливое ли число семь? Для Пола Роппа определенно да, поскольку всего лишь
                семь лет ему потребовалась на то, чтобы превратить Пхукет в жемчужину свой розничной сети.</div>
              <a href="#" class="n-item__link">
                <span>читать далее <svg class="icon icon-arr">
                    <use xlink:href="../../static/sprite.svg#icon-arr"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </li>
        <li class="news__list-item">
          <div class="n-item">
            <div class="n-item__top">
              <img src="img/news-item.jpg" alt="">
            </div>
            <div class="n-item__body">
              <div class="n-item__data">23 апреля 2018</div>
              <h3 class="n-item__title">6 способов встряхнуть свою жизнь на Пхукете</h3>
              <div class="n-item__txt">Как и в других уголках мира, быт местных жителей и туристов значительно
                отличаются. С понедельника по пятницу мы ходим на работу, на выходных занимаемся домашними делами,
                иногда выбираемся на пляж или на бранч.</div>
              <a href="#" class="n-item__link">
                <span>читать далее <svg class="icon icon-arr">
                    <use xlink:href="../../static/sprite.svg#icon-arr"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </li>
        <li class="news__list-item">
          <div class="n-item">
            <div class="n-item__top">
              <img src="img/news-item.jpg" alt="">
            </div>
            <div class="n-item__body">
              <div class="n-item__data">23 апреля 2018</div>
              <h3 class="n-item__title">Каникулы на Пхукете: Идеальные выходные на Най-Харне</h3>
              <div class="n-item__txt">Mачек Климович Бывает ли у вас иногда ощущение, что все вокруг только и делают,
                что отдыхают, пока вы трудитесь в поте лица? У жителей Пхукета это распространенный синдром, поскольку
                каждый год миллионы…</div>
              <a href="#" class="n-item__link">
                <span>читать далее <svg class="icon icon-arr">
                    <use xlink:href="../../static/sprite.svg#icon-arr"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <a href="#" class="news__btn btn">
        <span>Жизнь на Пхукете <svg class="icon icon-arr">
            <use xlink:href="../../static/sprite.svg#icon-arr"></use>
          </svg>
        </span>
      </a>
    </div>
  </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
export default {
  name: "Home",
  components: {
    Menu,
    Footer
  },
  data() {
    return {
      objects:{}
    };
  },
  mounted() {
    this.getObjects();
  },
  methods: {
    getObjects(){
      this.$axios.get('http://localhost:3000/api/get-objects').then(response=>{
        this.objects = response.data;
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
