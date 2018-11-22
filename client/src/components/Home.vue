<template>
  <div class="home">
    <Menu></Menu>
    <div class="main out">
        <div class="inner">
          <div class="main__content">
            <h1 class="main__title">Аренда и продажа <br> недвижимости на Пхукете</h1>
            <div class="main__subtitle">Первое русское агентство недвижимости на Пхукете.</div>
            <div class="main__buttons-wrap">
             <router-link to="/catalog"> <button type="button" class="main__btn btn">
                <span>Покупка</span>
              </button></router-link>
              <router-link to="/catalog"><button type="button" class="main__btn btn">
                <span>Aренда</span>
              </button></router-link>
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
            <button type="button" class="tab-links__item js-tab-apartments-link" :class="{'is-active': tab0}" data-tab="0" @click="tab0 = true, tab1=false"><span>продажу</span></button>
            <button type="button" class="tab-links__item js-tab-apartments-link" :class="{'is-active': tab1}" data-tab="1" @click="tab0 = false, tab1=true"><span>Аренду</span></button>
          </div>
          <ul class="alist is-active" data-tab="0" v-for="(object, index) of objects" :key="index">
            <!-- <router-link :to="`/catalog/${object._id}`"> -->
            <li class="alist__item">
              <div class="aitem">
                <div class="aitem__pic">
                  <img src="../../static/1.jpg" width="255" height="300" alt="">
                </div>
                <div class="aitem__content">
                  <div class="aitem__title"> {{object.titleRu || "Апартаменты с видом на море в Ката"}} </div>
                  <ul class="aitem__list">
                    <li class="aitem__list-item">Жилая площадь: {{object.lifeArea || "от 200 м2"}}</li>
                    <li class="aitem__list-item">Спален: {{object.rooms || "2"}}</li>
                    <li class="aitem__list-item">До пляжа: {{object.distanceToBitch || "600m"}}</li>
                  </ul>
                </div>
              </div>
            </li>
            <!-- </router-link> -->
          </ul> 
          <!-- <ul class=" cards__list cards__list-col4">
              <li class="cards__item" v-for="(i, index) of [1, 2, 3, 4, 5]" :key="index">
                <div class="card">
                  <div class="card__top">
                    <div class="price-wrp">
                      <div class="price price__wh"> $ 761 000 </div>
                    </div>
                    <div class="card__slider">
                      <div class="card__slider-item">
                        <img src="../../static/1.jpg" alt="аппартамены" />
                      </div>
                    </div>
                    <a class="card__link" href=""></a>
                  </div>
                  <div class="card__content">
                    <div class="card__body">
                      <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                      <ul class="card__l">
                        <li> Жилая площадь: от 200 м2 </li>
                        <li> Спален: 2 </li>
                        <li> До пляжа: 600 м </li>
                      </ul>
                    </div>
                    <div class="card__footer">
                      <div class="price price__bl"> $ 761 000 </div>
                      <button type="button" class="card__btn btn btn_primary">
                        <span>Смотреть</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul> -->
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

    <div class="order" id="order">
    <div class="order__in inner">
      <h2 class="title-primary"><span>Заявка на подбор недвижимости</span></h2>
      <div class="order-form">
        <div class="order-form__top">
          <div class="order-tabs">
            <button type="button" class="order-tabs__btn js-order-tab-link" :class="{'is-active': tabOrder0}" data-tab="0" @click="tabOrder0 = true, tabOrder1 = false, type='sales' "><span>Покупка</span></button>
            <button type="button" class="order-tabs__btn js-order-tab-link" :class="{'is-active': tabOrder1}" data-tab="1" @click="tabOrder0 = false, tabOrder1 = true, type='rent' "><span>Аренда</span></button>
          </div>
        </div>
        <div class="order-form__body" data-tab="0" :class="{'is-active': tabOrder0}">
          <div class="order-form__left">
            <div class="order-options">
              <div class="order-options__row">
                <div class="select-l">
                  <select class="select-l__el" v-model="filter.location">
                    <option value="all" selected>Расположение</option>
                    <option value="bang-tao">BANG TAO</option>
                    <option value="laguna">LAGUNA</option>
                    <option value="nai-thon">NAI THON</option>
                    <option value="maikhao">MAIKHAO</option>
                    <option value="nai-harn">NAI HARN</option>
                    <option value="rawai">RAWAI</option>
                    <option value="surin">SURIN</option>
                    <option value="kamala">KAMALA</option>
                    <option value="patong">PATONG</option>
                    <option value="kata">KATA</option>
                    <option value="cape-yamu">CAPE YAMU</option>
                  </select>
                </div>
                <div class="select-l">
                  <select class="select-l__el" v-model="filter.rooms">
                    <option value="all" selected>Количество спален</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
              </div>
              <div class="order-options__row order-options__row-justify">
                <div class="checkbox checkbox_right">
                  <input name="" id="apart" type="checkbox" class="checkbox__field" v-model="filter.typeOfObject.apartment">
                  <label for="apart" class="checkbox__label"><span class="checkbox__title">Апартаменты</span></label>
                </div>
                <div class="checkbox checkbox_right">
                  <input name="" id="villa" type="checkbox" class="checkbox__field" v-model="filter.typeOfObject.villa">
                  <label for="villa" class="checkbox__label"><span class="checkbox__title">Вилла</span></label>
                </div>
                <div class="checkbox checkbox_right">
                  <input name="" id="house" type="checkbox" class="checkbox__field" v-model="filter.typeOfObject.house">
                  <label for="house" class="checkbox__label"><span class="checkbox__title">Дом</span></label>
                </div>
                <div class="checkbox checkbox_right">
                  <input name="" id="region" type="checkbox" class="checkbox__field" v-model="filter.typeOfObject.land">
                  <label for="region" class="checkbox__label"><span class="checkbox__title">Земельный участок</span></label>
                </div>
              </div>
              <div class="order-options__row">
                <div class="select-l">
                  <select class="select-l__el" v-model="filter.target">
                    <option value="all">Цель</option>
                    <option value="personal">Личное пользование</option>
                    <option value="business">Инвестиции</option>
                  </select>
                </div>
                <div class="select-l">
                  <select class="select-l__el" v-model="filter.statusOfObject">
                    <option value="all">Статус объекта</option>
                    <option value="building">Строительство</option>
                    <option value="complete">Сдано в эксплуатацию</option>
                  </select>
                </div>
              </div>
              <div class="order-options__row">
                <div class="order-options__range">
                  <div class="range-slider">
                    <h5 class="range-slider__title"> Стоимость: </h5>
                    <div class="range-slider__controls">
                      <div class="range-slider__col">
                        <input type="text" class="range-slider__input js-from" placeholder="От $" v-model="filter.priceBegin"/>
                      </div>
                      <div class="range-slider__col">
                        <input type="text" placeholder="До $" class="range-slider__input js-to" v-model="filter.priceEnd"/>
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
                  <button type="submit" class="btn" @click="searchByFilter">
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
        <div class="order-form__body " data-tab="1" :class="{'is-active': tabOrder1}">
          <div class="order-form__left">
            <div class="order-options">
              <div class="order-options__row">
                <div class="select-l">
                  <select class="select-l__el">
                    <option value="all" selected>Расположение</option>
                    <option value="bang-tao">BANG TAO</option>
                    <option value="laguna">LAGUNA</option>
                    <option value="nai-thon">NAI THON</option>
                    <option value="maikhao">MAIKHAO</option>
                    <option value="nai-harn">NAI HARN</option>
                    <option value="rawai">RAWAI</option>
                    <option value="surin">SURIN</option>
                    <option value="kamala">KAMALA</option>
                    <option value="patong">PATONG</option>
                    <option value="kata">KATA</option>
                    <option value="cape-yamu">CAPE YAMU</option>
                  </select>
                </div>
                <div class="select-l">
                  <select class="select-l__el">
                    <option value="all" selected>Количество спален</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
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

  <Reviews/>

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
      <router-link to="/journal" class="news__btn btn">
        <span>Жизнь на Пхукете <svg class="icon icon-arr">
            <use xlink:href="../../static/sprite.svg#icon-arr"></use>
          </svg>
        </span>
      </router-link>
    </div>
  </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
import Reviews from "./shared/Reviews";
export default {
  name: "Home",
  components: {
    Menu,
    Footer,
    Reviews
  },
  data() {
    return {
      objects: {},
      tab0: true,
      tab1: false,
      tabOrder0: true,
      tabOrder1: false,
      filter:{
        type: "sales",
        location: "all",
        rooms: "all",
        typeOfObject: {
          apartment: false,
          villa: false,
          house: false,
          land: false
        },
        target: "all",
        statusOfObject: "all",
        priceBegin: "",
        priceEnd: ""
      }
    };
  },
  mounted() {
    this.getObjects();
    if(this.$route.query.redirect === "sales"){
      console.log(this.$route.query.redirect === "sales");
      var container = this.$el.querySelector("#order");
      container.scrollTop = container.scrollHeight;
    }
  },
  methods: {
    getObjects() {
      this.$axios
        .get("https://railand-front.herokuapp.com/api/get-objects")
        .then(response => {
          this.objects = response.data;
        });
    },
    searchByFilter(){
      this.$router.push({path: '/catalog', query: { filter: this.filter}});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
