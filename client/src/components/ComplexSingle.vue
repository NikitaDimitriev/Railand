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
                    <h3 class="options__title">Rang Hill Residence</h3>
                  </div>
                  <div class="options__body">
                    <dl class="options-list">
                      <dt class="options-list__title">Район:</dt>
                      <dd class="options-list__description">{{object.location}}</dd>
                      <dt class="options-list__title">Тип предложения:</dt>
                      <dd class="options-list__description">{{object.typeOfObject}}</dd>
                      <dt class="options-list__title">Растояние до пляжа:</dt>
                      <dd class="options-list__description">{{object.distanceToBitch}}</dd>
                      <dt class="options-list__title">Растояние до аэропорта:</dt>
                      <dd class="options-list__description">{{object.distanсeToAiroport}}</dd>
                    </dl>
                  </div>
                </div>
                <!-- <div class="small-map">
                  <div class="small-map__title">Объект на карте:</div>
                  <div class="aside__toggle js-toggle">Объекты на карте:</div>
                  <div class="small-map__container">
                    <GmapMap
                      style="width: 100%; height: 500px;"
                      :zoom="12"
                      :center="{lat: object.coordinat.x, lng: object.coordinat.y}"
                    >
                      <GmapMarker
                        :position="{
                          lat: object.coordinat.x,
                          lng: object.coordinat.y,
                        }"
                      />
                    </GmapMap>
                  </div>
                </div> -->
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
                <div class="topper__name">комплекс №{{object.code}}</div>
              </div>
              <!-- END topper -->
              <!-- BEGIN slideshow -->
              <div class="slideshow">
                <div class="slideshow__preview">
                  <img
                    :src="mainPhoto || 'http://localhost:8080/'+this.object.mainPhoto"
                    width="730"
                    height="450"
                    alt
                  >
                </div>
                <div class="slideshow__thumbs">
                  <button type="button" class="slideshow__arrow-left">prev</button>
                  <button type="button" class="slideshow__arrow-right">next</button>
                  <div class="thumbs-list">
                    <div
                      class="thumbs-list__item"
                      v-for="(photo, index) of 4"
                      :key="index"
                      :class="{'is-active' : activePhoto === index}"
                      @click="clicked = true, setPhoto(index) "
                    >
                      <img
                        :src="'http://localhost:8080/'+object.photo[index]"
                        width="160"
                        height="100"
                        alt
                      >
                    </div>
                    <!-- <div class="thumbs-list__item ">
                      <img :src="'http://rl-property.ru/upload/'+object.photo[1]" width="160" height="100" alt="">
                    </div>
                    <div class="thumbs-list__item ">
                      <img :src="'http://rl-property.ru/upload/'+object.photo[2]" width="160" height="100" alt="">
                    </div>
                    <div class="thumbs-list__item ">
                      <img :src="'http://rl-property.ru/upload/'+object.photo[3]" width="160" height="100" alt="">
                    </div>-->
                  </div>
                </div>
              </div>
              <div class="icons">
                <p style="font-size: 20px">Включено в стоимость:</p>
                <!-- <div class="icons_block">
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
                </div> -->
              </div>
              <!-- END slideshow -->
              <div class="columns">
                <div class="columns__left">
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
              </div>
          <h3>Объекты в комплексе</h3>
          <ul class="cards__list cards__list-tab js-content is-active" data-tab="0">
            <li
              class="cards__item"
              v-for="(object, index) of object.objects"
              :key="index"
            >
              <div class="card">
                <div class="card__top">
                  <div class="card__slider">
                    <div class="card__slider-item">
                      <img :src="'http://localhost:8080/'+object[0].mainPhoto" alt="аппартамены">
                    </div>
                  </div>
                </div>
                <div class="card__content">
                  <div class="card__body">
                    <h3 class="card__title">{{object[0].titleRu}}</h3>
                    <ul class="card__l">
                      <li>Living area: {{object[0].lifeArea}}</li>
                      <li>Badroom: {{object[0].badroom}}</li>
                      <li>Distance to beatch: {{object[0].distanceToBitch}}</li>
                    </ul>
                  </div>
                  <div class="card__footer">
                    <button
                      type="button"
                      class="card__btn btn btn_danger"
                      @click="route(object[0]._id)"
                    >Show</button>
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
    };
  },
  mounted() {
    this.getObjectById();
  },
  methods: {
    route(id){
      let pathToObject = `/catalog/sales/${id}`
      this.$router.push({path:pathToObject})
    },
    async getObjectById() {
      let id = this.$route.params.id;
      console.log(this.$route.params);
      await this.$axios
        .get(`http://localhost:8080/api/get-complex-by-id/${id}`)
        .then(response => {
          this.object = response.data;
          console.log(this.object);
        });
    },
    setPhoto(index) {
      this.activePhoto = index;
      if (!this.clicked) {
        this.mainPhoto = "http://localhost:8080/" + this.object.mainPhoto;
      } else if (this.clicked) {
        this.mainPhoto = "http://localhost:8080/" + this.object.photo[index];
      }
    },
    scrollTo() {
      this.$router.push({ path: "/", hash: "#order" });
    },
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