<template>
  <div class="object_single">
    <Menu/>
    <div class="out">
      <section class="cards">
        <div class="cards__in inner">
          <!-- BEGIN cards-main -->
          <div class="cards__main">
            <!-- BEGIN cards-aside -->
            <aside class="cards__aside aside">
              <div class="aside__body">
                <div class="options">
                  <div class="options__top">
                    <h3 class="options__title">{{object.titleRu}}</h3>
                  </div>
                  <div class="options__body">
                    <dl class="options-list">
                      <dt class="options-list__title">Цена объекта:</dt>
                      <dd class="options-list__description">&#3647; {{setPrice()}}</dd>
                      <dt class="options-list__title" v-if="makePriceForMetr()">Цена за м2</dt>
                      <dd
                        class="options-list__description"
                        v-if="makePriceForMetr()"
                      >от {{makePriceForMetr()}} &#3647;</dd>
                      <dt class="options-list__title">Расположение</dt>
                      <dd class="options-list__description">{{object.address}}</dd>
                      <dt class="options-list__title">Стадия готовности</dt>
                      <dd
                        class="options-list__description"
                        v-if="object.stage !== 'none'"
                      >{{object.stage === "underconstruction" ? "На этапе строительства" : "Вторичный рынок"}}</dd>
                      <dd
                        class="options-list__description"
                        v-if="object.stage === 'none'"
                      >{{"Сдан в эксплуатацию"}}</dd>
                    </dl>
                  </div>
                  <div class="aside__col" v-if="$route.params.type === 'rent'">
                    <el-date-picker
                      style="max-width: 272px"
                      v-model="dateRange"
                      type="daterange"
                      start-placeholder="From"
                      end-placeholder="To"
                    ></el-date-picker>
                  </div>
                  <div class="aside__col" v-if="$route.params.type === 'rent'">
                    <div class="select-l">
                      <select class="select-l__el" v-model="countOfGuest">
                        <option value="all">Количество гостей</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7+">7+</option>
                      </select>
                    </div>
                  </div>
                  <div class="options__bottom" v-if="$route.params.type !== 'rent'">
                    <button type="button" class="options__btn btn" @click="scrollTo">
                      <span>Отправить запрос</span>
                    </button>
                  </div>
                  <div class="options__bottom" v-if="$route.params.type === 'rent'">
                    <button type="button" class="options__btn btn" @click="order()">
                      <span>Забронировать</span>
                    </button>
                  </div>
                </div>
                <div class="small-map">
                  <div class="small-map__title">Объект на карте:</div>
                  <div class="aside__toggle js-toggle">Объекты на карте:</div>
                  <div class="small-map__container">
                    <GmapMap
                      style="width: 100%; height: 500px;"
                      :zoom="12"
                      :center="{lat: object.coordinat.x, lng: object.coordinat.y}"
                    >
                      <!-- <GmapMarker v-for="(marker, index) in markers"
                        :key="index"
                        :position="marker.position"
                      />-->
                      <GmapMarker
                        :position="{
                          lat: object.coordinat.x,
                          lng: object.coordinat.y,
                        }"
                      />
                    </GmapMap>
                  </div>
                </div>
              </div>
            </aside>
            <!-- END cards-aside -->
            <!-- BEGIN cards-body -->
            <div class="cards__body card-main">
              <h2 class="card-main__title title-large">
                <span>{{object.titleRu}}</span>
              </h2>
              <!-- BEGIN topper -->
              <div class="topper">
                <ul class="topper__breadcrumb breadcrumb">
                  <li class="breadcrumb__item">
                    <router-link to="/">главная</router-link>
                  </li>
                  <li class="breadcrumb__separator">/</li>
                  <li class="breadcrumb__item">
                    <router-link to="/catalog">каталог</router-link>
                  </li>
                  <!-- <li class="breadcrumb__separator">/</li> -->
                  <!-- <li class="breadcrumb__item"><span>карточка комплекса</span></li> -->
                </ul>
                <div class="topper__name">объект №{{object.code}}</div>
              </div>
              <!-- END topper -->
              <!-- BEGIN slideshow -->
              <div class="slideshow">
                <div class="slideshow__preview">
                  <img
                    :src="mainPhoto || 'http://rl-property.com/'+this.object.mainPhoto"
                    width="730"
                    height="450"
                    alt
                  >
                </div>
                <div class="slideshow__thumbs">
                  <button
                    type="button"
                    class="slideshow__arrow-left"
                    @click="clicked = true,setPhoto(activePhoto-1)"
                  >prev</button>
                  <button
                    type="button"
                    class="slideshow__arrow-right"
                    @click="clicked = true, setPhoto(activePhoto+1)"
                  >next</button>
                  <div class="thumbs-list">
                    <div
                      class="thumbs-list__item"
                      v-for="(photo, index) of carouselPhoto"
                      :key="index"
                      :class="{'is-active' : activePhoto === index}"
                      @click="clicked = true, setPhoto(index) "
                    >
                      <img
                        :src="'http://rl-property.com/'+object.photo[index]"
                        min-width="160"
                        height="100"
                        alt
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="icons">
                <p style="font-size: 20px">Включено в стоимость:</p>
                <div class="icons_block">
                  <img
                    src="../../static/pool.svg"
                    width="50"
                    height="50"
                    v-if="object.features.includes('pool')"
                  >
                  <img
                    src="../../static/security.svg"
                    width="50"
                    height="50"
                    v-if="object.features.includes('security')"
                  >
                  <img
                    src="../../static/balcony.svg"
                    width="50"
                    height="50"
                    v-if="object.features.includes('balcony')"
                  >
                  <img
                    src="../../static/terace.svg"
                    width="50"
                    height="50"
                    v-if="object.features.includes('terrace')"
                  >
                  <img
                    src="../../static/wifi.svg"
                    width="50"
                    height="50"
                    v-if="object.features.includes('wifi')"
                  >
                  <img
                    src="../../static/tv.svg"
                    width="50"
                    height="50"
                    v-if="object.features.includes('tv')"
                  >
                  <img
                    src="../../static/condition.svg"
                    width="50"
                    height="50"
                    v-if="object.features.includes('conditioning')"
                  >
                  <img
                    src="../../static/householdappliances.svg"
                    width="50"
                    height="50"
                    v-if="object.features.includes('householdappliances')"
                  >
                  <img
                    src="../../static/furniture.svg"
                    width="50"
                    height="50"
                    v-if="object.features.includes('furniture')"
                  >
                  <img
                    src="../../static/parking.svg"
                    width="50"
                    height="50"
                    v-if="object.features.includes('parking')"
                  >
                </div>
              </div>-->
              <!-- END slideshow -->
              <div class="columns">
                <div class="columns__left">
                  <div class="info-object">
                    <div class="info-object__in">
                      <div class="info-object__row" v-if="object.floor">
                        <div class="info-object__name">Этажность</div>
                        <div class="info-object__val">{{object.floor}}</div>
                      </div>
                      <div class="info-object__row" v-if="object.badroom">
                        <div class="info-object__name">Количество спален</div>
                        <div class="info-object__val">{{object.badroom}}</div>
                      </div>
                      <div class="info-object__row" v-if="object.bathroom">
                        <div class="info-object__name">Количество ванных комнат</div>
                        <div class="info-object__val">{{object.bathroom}}</div>
                      </div>
                      <div class="info-object__row" v-if="object.distanceToBitch">
                        <div class="info-object__name">Растояние до пляжа</div>
                        <div class="info-object__val">{{object.distanceToBitch}}km</div>
                      </div>
                      <div class="info-object__row" v-if="object.distanceToAiroport">
                        <div class="info-object__name">Растояние до аэропорта</div>
                        <div class="info-object__val">{{object.distanceToAiroport}}km</div>
                      </div>
                      <div class="info-object__row" v-if="object.area">
                        <div class="info-object__name">Общая площадь</div>
                        <div class="info-object__val">{{object.area}}m2</div>
                      </div>
                      <div class="info-object__row" v-if="object.landArea">
                        <div class="info-object__name">Площать земельного участка</div>
                        <div class="info-object__val">{{object.landArea}}m2</div>
                      </div>
                      <div class="info-object__row" v-if="object.lifeArea">
                        <div class="info-object__name">Жилая площадь</div>
                        <div class="info-object__val">{{object.lifeArea}}m2</div>
                      </div>
                      <div class="info-object__row" v-if="object.areaOfPool">
                        <div class="info-object__name">Размеры басейна</div>
                        <div class="info-object__val">{{object.areaOfPool}}</div>
                      </div>
                    </div>
                  </div>
                  <h4 class="columns__title">Описание:</h4>
                  <div class="columns__content-wrp">
                    <div
                      class="columns__content js-collapse-content"
                      :class="{'is-short': isShort}"
                    >{{object.descriptionRu}}</div>
                    <button
                      type="button"
                      class="columns__btn-more btn-more js-collapse-link"
                      @click="isShort = !isShort"
                    >
                      <span>Больше описания</span>
                    </button>
                  </div>
                </div>
                <!-- <div class="columns__right" v-if="complex">
                  <div class="similar">
                    <div class="similar__top">{{complex.titleRu}}</div>
                    <div class="similar__pic">
                      <img
                        :src="'http://rl-property.com/'+complex.mainPhoto"
                        width="225"
                        height="140"
                        alt
                      >
                    </div>
                    <div class="similar__txt">{{complex.descriptionRu}}</div>
                    <router-link :to="`/complex/${complex._id}`">
                      <button type="button" class="similar__btn btn btn_primary">
                        <span>Задать вопрос о комплексе</span>
                      </button>
                    </router-link>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- END cards-body -->
          </div>
          <!-- END cards-main -->
        </div>
      </section>
    </div>
    <Footer/>
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
      object: {},
      isShort: true,
      activePhoto: 0,
      clicked: false,
      mainPhoto: "",
      dateRange: "",
      countOfGuest: "all",
      carouselPhoto: [],
      complex: {}
    };
  },
  mounted() {
    this.getObjectById();
  },
  methods: {
    getComplex() {
      this.$axios
        .get(
          `http://rl-property.com/api/get-complex-by-id/${this.object.complexId}`
        )
        .then(response => {
          this.complex = response.data;
        });
    },
    setPrice() {
      if (this.$route.params.type === "rent") {
        return "По запросу";
      } else {
        return this.object.price.priceSales;
      }
    },
    getObjectById() {
      let id = this.$route.params.id;
      console.log(this.$route.params);
      this.$axios
        .get(`http://rl-property.com/api/get-object-by-id/${id}`)
        .then(response => {
          this.object = response.data;
          this.carouselPhoto = this.object.photo;
          if (this.object.complexId) {
            this.getComplex();
          }
          console.log(this.object);
        });
    },
    setPhoto(index) {
      console.log(index);
      if (index === -1) {
        index = this.object.photo.length - 1;
      }
      if (index > this.object.photo.length - 1) {
        index = 0;
      }
      this.activePhoto = index;
      if (!this.clicked) {
        this.mainPhoto = "http://rl-property.com/" + this.object.mainPhoto;
      } else if (this.clicked) {
        this.mainPhoto = "http://rl-property.com/" + this.object.photo[index];
      }
    },
    scrollTo() {
      this.$router.push({ path: "/", hash: "#order" });
    },
    makePriceForMetr() {
      if (this.$route.params.type === "rent") return false;
      if (!this.object.area) return false;
      let metrPrice = Math.floor(
        parseInt(this.object.price.priceSales.replace(/\./g, "")) /
          this.object.area
      );
      metrPrice = metrPrice
        .toString()
        .split("")
        .reverse();
      metrPrice
        .splice(3, 0, ".")
        .reverse()
        .join();
      metrPrice = metrPrice.reverse().join("");
      return metrPrice;
    },
    order() {
      let data = {
        date: this.dateRange,
        countOfGuest: this.countOfGuest,
        nameOfObject: this.object.titleRu,
        id: this.object._id
      };
      console.log(data);
      this.$axios
        .post("http://rl-property.com/api/send-reserv-mail", { data })
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>
<style>
.icons_block {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>