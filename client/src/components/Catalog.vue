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
          <h2 class="catalog-promo__title">Лучшие объекты в нашем каталоге</h2>
          <div
            class="catalog-promo__subtitle"
          >Найдите лучшие объекты недвижимости для покупки либо аренды либо оставьте свою заявку и менеджер подберет варианты специально для вас.
            <br>Оставьте заявку, и менеджер быстро подберет варианты.
          </div>
          <button type="button" class="catalog-promo__btn btn" @click="scrollTo">
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
              <span>каталог Объектов на</span>
            </h2>
            <div class="cards__tab-links tab-links">
              <button
                type="button"
                class="tab-links__item js-tab"
                data-tab="0"
                :class="{'is-active': tab0}"
                @click="tab0 = true, tab1=false, filter.type='sales', getObjectsSales(), getInfoSales()"
              >
                <span>продажу</span>
              </button>
              <button
                type="button"
                class="tab-links__item js-tab"
                :class="{'is-active': tab1}"
                data-tab="1"
                @click="tab0 = false, tab1=true, filter.type='rent', getInfoRent(),getObjectsRent()"
              >
                <span>Аренду</span>
              </button>
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
                </div>-->
              </div>
              <div class="cards-sort__r">
                <div class="objects">
                  <div class="objects__title">Тип недвижимости :</div>
                  <div class="objects__col">
                    <span class="objects__link">Вся недвижимость</span>
                    <span
                      class="objects__link"
                      @click="activeVilla, getVillas() "
                      :class="{'is-active': activeVilla}"
                    >Вилла</span>
                    <span
                      class="objects__link"
                      @click="activeApartment, getApartments()"
                      :class="{'is-active': activeApartment}"
                    >Аппартаменты</span>
                    <span
                      class="objects__link"
                      @click="activeHouse, getHouses()"
                      :class="{'is-active': activeHouse}"
                    >Таунхаус</span>
                    <span class="objects__link" @click="getComplex()">Комплексы</span>
                  </div>
                </div>
                <!-- <div class="search">
                  <form action>
                    <input class="search__field" type="text" placeholder="Поиск" name="search">
                    <button class="search__btn" type="submit">Submit</button>
                  </form>
                </div> -->
              </div>
            </div>
            <!-- BEGIN cards-aside -->
            <aside class="cards__aside aside">
              <div class="aside__body">
                <h3 class="aside__title">Настройки фильтра:</h3>
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
                            <input
                              name
                              id="villa"
                              type="checkbox"
                              class="checkbox__field"
                              v-model="filter.typeOfObject.villa"
                            >
                            <label for="villa" class="checkbox__label">
                              <span class="checkbox__title">Вилла</span>
                            </label>
                          </div>
                        </li>
                        <li class="checkbox__item">
                          <div class="checkbox">
                            <input
                              name
                              id="appartament"
                              type="checkbox"
                              class="checkbox__field"
                              v-model="filter.typeOfObject.apartment"
                            >
                            <label for="appartament" class="checkbox__label">
                              <span class="checkbox__title">Аппартамены</span>
                            </label>
                          </div>
                        </li>
                        <li class="checkbox__item">
                          <div class="checkbox">
                            <input
                              name
                              id="hous"
                              type="checkbox"
                              class="checkbox__field"
                              v-model="filter.typeOfObject.house"
                            >
                            <label for="hous" class="checkbox__label">
                              <span class="checkbox__title">Таунхаус</span>
                            </label>
                          </div>
                        </li>
                        <li class="checkbox__item" v-if="tab0">
                          <div class="checkbox">
                            <input
                              name
                              id="as"
                              type="checkbox"
                              class="checkbox__field"
                              v-model="filter.typeOfObject.land"
                            >
                            <label for="as" class="checkbox__label">
                              <span class="checkbox__title">Земельный участок</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="aside__col">
                      <div class="select-l" v-if="tab0">
                        <select class="select-l__el" v-model="filter.statusOfObject">
                          <option value="all">Статус объекта</option>
                          <option value="underconstruction">Строительство</option>
                          <option value="secondarymarket">Сдано в эксплуатацию</option>
                        </select>
                      </div>
                    </div>
                    <!-- <div class="aside__col">
                          <div class="select-l" v-if="tab0">
                            <select class="select-l__el" v-model="filter.target">
                              <option value="all">Цель</option>
                              <option value="personal">Личное пользование</option>
                              <option value="business">Инвестиции</option>
                            </select>
                          </div>
                    </div>-->
                    <div class="range-slider">
                      <h5 class="range-slider__title">Стоимость:</h5>
                      <div class="range-slider__controls">
                        <div class="range-slider__col">
                          <input
                            type="text"
                            class="range-slider__input js-from"
                            placeholder="От $"
                            v-model="filter.priceBegin"
                          >
                        </div>
                        <div class="range-slider__col">
                          <input
                            type="text"
                            placeholder="До $"
                            class="range-slider__input js-to"
                            v-model="filter.priceEnd"
                          >
                        </div>
                      </div>
                      <div class="range-slider__output">
                        <input type="text" class="js-range-slider" value>
                      </div>
                    </div>
                    <div class="aside__btns">
                      <button class="btn" @click="filtering()">
                        <span>Искать</span>
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
                  <h5>Объекты на карте:</h5>
                  <div class="aside__toggle js-toggle">Объекты на карте:</div>
                  <div class="aside__pic">
                    <GmapMap
                      style="width: 100%; height: 500px;"
                      :zoom="12"
                      :center="{lat: 7.896892, lng: 98.298922}"
                    >
                      <GmapMarker
                        v-for="(marker, index) of objects"
                        :key="index"
                        :position="{
                              lat: marker.coordinat.x,
                              lng: marker.coordinat.y,
                            }"
                      />
                      <!-- <GmapMarker
                            :position="{
                              lat: object.coordinat.x,
                              lng: object.coordinat.y,
                      }"/>-->
                    </GmapMap>
                  </div>
                </div>
              </div>
            </aside>
            <!-- END cards-aside -->
            <!-- BEGIN cards-body -->
            <div class="cards__body">
              <div class="catalog-page">
                <div class="catalog-page__navigation">
                  <div v-for="(item, index) of pages" :key="index">
                    <span
                      class="catalog-page__link"
                      :style="{'cursor': 'pointer'}"
                      @click="page = item, getObjectsSales()"
                    >{{index +1}}</span>
                  </div>
                  <span class="catalog-page__link catalog-page__next" @click="page++">>></span>
                </div>
                <div class="catalog-page__navigation pagecount">
                  <span class="catalog-page__title">Показывать по:</span>
                  <span
                    class="catalog-page__first"
                    @click="perPage = 10, getObjectsSales(), setPages()"
                  >10</span>
                  <span
                    class="catalog-page__link"
                    @click="perPage = 20, getObjectsSales(), setPages()"
                  >20</span>
                  <span
                    class="catalog-page__link"
                    @click="perPage = 50, getObjectsSales(), setPages()"
                  >50</span>
                </div>
              </div>
              <ul
                class="cards__list cards__list-tab js-content is-active"
                data-tab="0"
                v-if="!complexList"
              >
                <li class="cards__item" v-for="(object, index) of objects" :key="index">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div
                          class="price price__wh"
                          style="font-size: 20px"
                        >{{getPriceCurrency(object) === 'THB' ? '&#3647;' : '&#3647;'}} {{getPrice(object) || "По запросу"}}</div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img :src="'http://rl-property.com/'+object.mainPhoto" alt="аппартамены">
                        </div>
                      </div>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title">{{object.titleRu}}</h3>
                        <ul class="card__l">
                          <li>Жилая площадь: {{object.lifeArea}}</li>
                          <li>Спален: {{object.badroom}}</li>
                          <li>До пляжа: {{object.distanceToBitch}}</li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <!-- <div class="price price__bl">{{getPriceCurrency(object) === 'THB' ? '&#3647;' : '$'}} {{getPrice(object)}} </div> -->
                        <router-link :to="`/catalog/${filter.type}/${object._id}`">
                          <button type="button" class="card__btn btn btn_primary">Смотреть</button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul
                class="cards__list cards__list-tab js-content is-active"
                data-tab="0"
                v-if="complexList"
              >
                <li class="cards__item" v-for="(object, index) of complex" :key="index">
                  <div class="card">
                    <div class="card__top">
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img :src="'http://rl-property.com/'+object.mainPhoto" alt="аппартамены">
                        </div>
                      </div>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title">{{object.titleRu}}</h3>
                        <ul class="card__l">
                          <!-- <li>Жилая площадь: {{object.lifeArea}}</li>
                          <li>Спален: {{object.badroom}}</li> -->
                          <li>До пляжа: {{object.distanceToBitch}}</li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <!-- <div class="price price__bl">{{getPriceCurrency(object) === 'THB' ? '&#3647;' : '$'}} {{getPrice(object)}} </div> -->
                        <router-link :to="`/complex/${object._id}`">
                          <button type="button" class="card__btn btn btn_primary">Смотреть</button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
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
      perPage: 10,
      pages: 0,
      objects: [],
      info: {},
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
      },
      activeVilla: false,
      activeApartment: false,
      activeHouse: false,
      dateRange: "",
      complex: [],
      complexList: false
    };
  },
  methods: {
    getComplex() {
      this.$axios
        .get("http://rl-property.com/api/get-complex")
        .then(response => {
          this.complex = response.data;
          this.complexList = true;
          console.log(this.complex);
        });
    },
    filtering() {
      this.$axios
        .post("http://rl-property.com/api/get-objects-filters", {
          filter: this.filter
        })
        .then(response => {
          this.objects = response.data;
          this.complexList = false;
          console.log(response);
        });
    },
    setPages() {
      this.pages = Math.ceil(this.info / this.perPage);
    },
    getInfoSales() {
      this.$axios
        .get("http://rl-property.com/api/get-info-sales")
        .then(response => {
          this.info = response.data;
          this.setPages();
          this.complexList = false;
        });
    },
    getInfoRent() {
      this.$axios
        .get("http://rl-property.com/api/get-info-rent")
        .then(response => {
          this.info = response.data;
          this.setPages();
          this.complexList = false;
        });
    },
    getObjectsSales() {
      let data = {
        page: this.page,
        items: this.perPage
      };
      this.$axios
        .get(
          `http://rl-property.com/api/get-objects-pagination-sales/${
            this.page
          }/${this.perPage}`
        )
        .then(response => {
          this.objects = response.data.reverse();
          this.complexList = false;
        });
    },
    getObjectsRent() {
      let data = {
        page: this.page,
        items: this.perPage
      };
      this.$axios
        .get(
          `http://rl-property.com/api/get-objects-pagination-rent/${
            this.page
          }/${this.perPage}`
        )
        .then(response => {
          this.objects = response.data.reverse();
          this.complexList = false;
        });
    },
    setFilter() {
      if (!!this.$route.query.filter) {
        this.filter = this.$route.query.filter;
      }
    },
    scrollTo() {
      this.$router.push({ path: "/", hash: "#order" });
    },
    getPrice(object) {
      if (this.tab0) {
        return object.price.priceSales;
      } else {
        return "По запросу";
      }
    },
    getPriceCurrency(object) {
      if (this.tab0) {
        return object.price.currencySales;
      } else {
        return " ";
      }
    },
    getVillas() {
      this.activeVilla = true;
      this.activeApartment = false;
      this.activeHouse = false;
      this.filter = {
        type: "sales",
        location: "all",
        rooms: "all",
        typeOfObject: {
          apartment: false,
          villa: true,
          house: false,
          land: false
        },
        target: "all",
        statusOfObject: "all",
        priceBegin: "",
        priceEnd: ""
      };
      this.filtering();
    },
    getApartments() {
      this.activeVilla = false;
      this.activeApartment = true;
      this.activeHouse = false;
      this.filter = {
        type: "sales",
        location: "all",
        rooms: "all",
        typeOfObject: {
          apartment: true,
          villa: false,
          house: false,
          land: false
        },
        target: "all",
        statusOfObject: "all",
        priceBegin: "",
        priceEnd: ""
      };
      this.filtering();
    },
    getHouses() {
      this.activeVilla = false;
      this.activeApartment = false;
      this.activeHouse = true;
      this.filter = {
        type: "sales",
        location: "all",
        rooms: "all",
        typeOfObject: {
          apartment: false,
          villa: false,
          house: true,
          land: false
        },
        target: "all",
        statusOfObject: "all",
        priceBegin: "",
        priceEnd: ""
      };
      this.filtering();
    }
  },
  mounted() {
    if (this.$route.query.to === "sales") {
      this.tab0 = true;
      this.tab1 = false;
      this.getInfoSales();
      this.getObjectsSales();
    } else if (this.$route.query.to === "rent") {
      this.tab0 = false;
      this.tab1 = true;
      this.getInfoRent();
      this.getObjectsRent();
    }
    if (this.tab0 === true) {
      this.getInfoSales();
      this.getObjectsSales();
    } else {
      this.getInfoRent();
      this.getObjectsRent();
    }
    this.setFilter();
  }
};
</script>
