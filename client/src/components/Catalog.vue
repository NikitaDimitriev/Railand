<template>
    <div>
        <!-- BEGIN content -->
        <div class="out">

          <!-- BEGIN header -->
          <Menu></Menu>
          <!-- END header -->

          <!-- BEGIN catalog-promo -->
          <section class="catalog-promo" style="background-image: url(../../static/about-form.jpg)">
            <div class="catalog-promo__in inner">
              <h2 class="catalog-promo__title"> Более 700 обьектов в базе </h2>
              <div class="catalog-promo__subtitle"> Чтобы изучить весь каталог, потребуется примерно 48 часов. <br /> Оставьте заявку, и менеджер быстро подберет варианты. </div>
              <button type="button" class="catalog-promo__btn btn">
                <span>Заполнить заявку</span>
              </button>
            </div>
          </section>
          <!-- END catalog-promo -->
          <!-- BEGIN card -->
          <section class="cards">
            <div class="cards__in inner">
              <div class="cards__header">
                <h2 class="title-primary title-primary__left">
                  <span> каталог Объектов на </span>
                </h2>
                <div class="cards__tab-links tab-links">
                  <button type="button" class="tab-links__item js-tab" data-tab="0" :class="{'is-active': tab0}" @click="tab0 = true, tab1=false"><span>продажу</span></button>
                  <button type="button" class="tab-links__item js-tab" :class="{'is-active': tab1}" data-tab="1" @click="tab0 = false, tab1=true" ><span>Аренду</span></button>
                </div>
              </div>
              <!-- BEGIN cards-main -->
              <!-- BEGIN cards-main -->
              <div class="cards__main">
                <div class="cards-sort">
                  <div class="cards-sort__l">
                    <!-- <div class="select-l select-l_wh">
                      <select class="select-l__el">
                        <option value="" selected="selected"> По популярности </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div> -->
                  </div>
                  <div class="cards-sort__r">
                    <div class="objects">
                      <div class="objects__title"> Тип недвижимости : </div>
                      <div class="objects__col">
                        <span class="objects__link objects__current"> Вся недвижимость </span>
                        <a href="" class="objects__link is">Вилла</a>
                        <a href="" class="objects__link is-active">Аппартаменты</a>
                        <a href="" class="objects__link">Таунхаус</a>
                        <a href="" class="objects__link">Комплексы</a>
                      </div>
                    </div>
                    <div class="search">
                      <form action="">
                        <input class="search__field" type="text" placeholder="Поиск" name="search" />
                        <button class="search__btn" type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- BEGIN cards-aside -->
                <aside class="cards__aside aside">
                  <div class="aside__body">
                    <h3 class="aside__title"> Настройки фильтра: </h3>
                    <div class="aside__content">
                      <form>
                        <div class="aside__col">
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
                        </div>
                        <div class="aside__col">
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
                        <div class="aside__col">
                          <ul class="checkbox__list">
                            <li class="checkbox__item">
                              <div class="checkbox">
                                <input name="" id="villa" type="checkbox" class="checkbox__field" v-model="filter.typeOfObject.villa"/>
                                <label for="villa" class="checkbox__label">
                                  <span class="checkbox__title"> Вилла </span>
                                </label>
                              </div>
                            </li>
                            <li class="checkbox__item">
                              <div class="checkbox">
                                <input name="" id="appartament" type="checkbox" class="checkbox__field" v-model="filter.typeOfObject.apartment"/>
                                <label for="appartament" class="checkbox__label">
                                  <span class="checkbox__title"> Аппартамены </span>
                                </label>
                              </div>
                            </li>
                            <li class="checkbox__item">
                              <div class="checkbox">
                                <input name="" id="hous" type="checkbox" class="checkbox__field" v-model="filter.typeOfObject.house"/>
                                <label for="hous" class="checkbox__label">
                                  <span class="checkbox__title"> Таунхаус </span>
                                </label>
                              </div>
                            </li>
                            <li class="checkbox__item">
                              <div class="checkbox">
                                <input name="" id="as" type="checkbox" class="checkbox__field" v-model="filter.typeOfObject.land"/>
                                <label for="as" class="checkbox__label">
                                  <span class="checkbox__title"> Земельный участок </span>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="aside__col">
                          <div class="select-l">
                            <select class="select-l__el" v-model="filter.statusOfObject">
                              <option value="all">Статус объекта</option>
                              <option value="building">Строительство</option>
                              <option value="complete">Сдано в эксплуатацию</option>
                            </select>
                          </div>
                        </div>
                        <div class="aside__col">
                          <div class="select-l">
                            <select class="select-l__el" v-model="filter.target">
                              <option value="all">Цель</option>
                              <option value="personal">Личное пользование</option>
                              <option value="business">Инвестиции</option>
                            </select>
                          </div>
                        </div>
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
                        <div class="aside__btns">
                          <button type="submit" class="btn">
                            <span> Искать</span>
                          </button>
                          <button type="button" class="btn-close js-close">
                            <svg class="icon icon-cancel">
                              <use xlink:href="../../static/sprite.svg#icon-cancel"></use>
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="aside__map">
                      <h5> Объекты на карте: </h5>
                      <div class="aside__toggle js-toggle"> Объекты на карте:</div>
                      <div class="aside__pic">
                        <img src="img/card/map.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </aside>
                <!-- END cards-aside -->
                <!-- BEGIN cards-body -->
                <div class="cards__body">
                  <div class="catalog-page">
                    <div class="catalog-page__navigation">
                      <span class="catalog-page__first catalog-page__current">1</span>
                      <a href="" class="catalog-page__link">2</a>
                      <a href="" class="catalog-page__link">3</a>
                      <a href="" class="catalog-page__link">4</a>
                      <a href="" class="catalog-page__link">5</a>
                      <a class="catalog-page__link catalog-page__line" href="">-</a>
                      <a href="" class="catalog-page__link">25</a>
                      <a class="catalog-page__link catalog-page__next" href="">>></a>
                    </div>
                    <div class="catalog-page__navigation pagecount">
                      <span class="catalog-page__title">Показывать по: </span>
                      <span class="catalog-page__first catalog-page__current">10</span>
                      <a class="catalog-page__link" href="">20</a>
                      <a class="catalog-page__link" href="">50</a>
                    </div>
                  </div>
                  <!-- <ul class="cards__list cards__list-tab js-content is-active" data-tab="0">
                    <li class="cards__item" v-for="(object, index) of objects" :key="index">
                      <div class="card">
                        <div class="card__top">
                          <div class="price-wrp">
                            <div class="price price__wh"> {{object.price}} </div>
                          </div>
                          <div class="card__slider">
                            <div class="card__slider-item">
                              <img src="https://via.placeholder.com/350x220" alt="аппартамены" />
                            </div>
                          </div>
                          <a class="card__link" href=""></a>
                        </div>
                        <div class="card__content">
                          <div class="card__body">
                            <h3 class="card__title"> {{object.title}} </h3>
                            <ul class="card__l">
                              <li> Жилая площадь: {{object.lifeArea}} </li>
                              <li> Спален: {{object.badroom}} </li>
                              <li> До пляжа: {{object.distanceToBitch}} </li>
                            </ul>
                          </div>
                          <div class="card__footer">
                            <div class="price price__bl"> {{object.price}} </div>
                            <button type="button" class="card__btn btn btn_primary">
                              <router-link :to="`/catalog/${object._id}`">Смотреть</router-link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul> -->
                  <ul class=" cards__list cards__list-col4">
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
                        <router-link :to="`/catalog/456`">Смотреть</router-link>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
                  <div class="catalog-page">
                    <div class="catalog-page__navigation">
                      <span class="catalog-page__first catalog-page__current">1</span>
                      <a href="" class="catalog-page__link">2</a>
                      <a href="" class="catalog-page__link">3</a>
                      <a href="" class="catalog-page__link">4</a>
                      <a href="" class="catalog-page__link">5</a>
                      <a class="catalog-page__link catalog-page__line" href="">-</a>
                      <a href="" class="catalog-page__link">25</a>
                      <a class="catalog-page__link catalog-page__next" href="">&gt;&gt;</a>
                    </div>
                    <div class="catalog-page__navigation pagecount">
                      <span class="catalog-page__title">Показывать по: </span>
                      <span class="catalog-page__first catalog-page__current">10</span>
                      <a class="catalog-page__link" href="">20</a>
                      <a class="catalog-page__link" href="">50</a>
                      <a class="catalog-page__link" href="">100</a>
                    </div>
                  </div>
                </div>
                <!-- END cards-body -->
              </div>
              <!-- END cards-main -->
            </div>
          </section>
          <!-- END card -->

        </div>

        <!-- BEGIN footer -->
        <Footer></Footer>
        <!-- END footer -->
    </div>
</template>
<script>
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
export default {
  components: {
    Menu,
    Footer
  },
  data() {
    return {
      page: 1,
      items: 10,
      objects: [],
      tab0: true,
      tab1: false,
      filter: {
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
  methods: {
    getObjects() {
      let data = {
        page: this.page,
        items: this.items
      };
      this.$axios
        .get("http://localhost:3000/api/get-objects-pagination", data)
        .then(response => {
          this.objects = response.data;
          console.log(response);
        });
    },
    setFilter() {
      this.filter = this.$route.query.filter;
    }
  },
  mounted() {
    this.setFilter();
    console.log(this.$route.query);
    this.getObjects();
  }
};
</script>
