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
                      <dt class="options-list__title">Цена объекта:</dt>
                      <dd class="options-list__description">&#3647; {{object.price.priceSales}}</dd>
                      <dt class="options-list__title">Цена за м2</dt>
                      <dd class="options-list__description">от {{Math.floor(parseInt(object.priceSales) / object.area)}} &#3647;</dd>
                      <dt class="options-list__title">Расположение</dt>
                      <dd class="options-list__description">{{object.address}}</dd>
                      <dt class="options-list__title">Стадия готовности</dt>
                      <dd class="options-list__description">На этапе строительства</dd>
                    </dl>
                  </div>
                  <div class="options__bottom">
                    <button type="button" class="options__btn btn" @click="scrollTo"><span>Отправить запрос</span></button>
                  </div>
                </div>
                <div class="small-map">
                  <div class="small-map__title">Объект на карте:</div>
                  <div class="aside__toggle js-toggle"> Объекты на карте:</div>
                  <div class="small-map__container">
                    <GmapMap style="width: 100%; height: 500px;" :zoom="12" :center="{lat: object.coordinat.x, lng: object.coordinat.y}">
                      <!-- <GmapMarker v-for="(marker, index) in markers"
                        :key="index"
                        :position="marker.position"
                        /> -->
                      <GmapMarker
                        :position="{
                          lat: object.coordinat.x,
                          lng: object.coordinat.y,
                        }"/>
                    </GmapMap>
                  </div>
                </div>
              </div>
            </aside>
            <!-- END cards-aside -->
            <!-- BEGIN cards-body -->
            <div class="cards__body card-main">
              <h2 class="card-main__title title-large"><span>{{object.titleRu}}</span></h2>
              <!-- BEGIN topper -->
              <div class="topper">
                <ul class="topper__breadcrumb breadcrumb">
                  <li class="breadcrumb__item"><router-link to="/">главная</router-link></li>
                  <li class="breadcrumb__separator">/</li>
                  <li class="breadcrumb__item"><router-link to="/catalog">каталог</router-link></li>
                  <!-- <li class="breadcrumb__separator">/</li> -->
                  <!-- <li class="breadcrumb__item"><span>карточка комплекса</span></li> -->
                </ul>
                <div class="topper__name">комплекс №14</div>
              </div>
              <!-- END topper -->
              <!-- BEGIN slideshow -->
              <div class="slideshow">
                <div class="slideshow__preview">
                  <img :src="mainPhoto || 'http://rl-property.ru/upload/'+this.object.mainPhoto" width="730" height="450" alt="">
                </div>
                <div class="slideshow__thumbs">
                  <button type="button" class="slideshow__arrow-left">prev</button>
                  <button type="button" class="slideshow__arrow-right">next</button>
                  <div class="thumbs-list">
                    <div class="thumbs-list__item " v-for="(photo, index) of 4" :key="index" :class="{'is-active' : activePhoto === index}" @click="clicked = true, setPhoto(index) ">
                      <img :src="'http://rl-property.ru/upload/'+object.photo[index]" width="160" height="100" alt="">
                    </div>
                    <!-- <div class="thumbs-list__item ">
                      <img :src="'http://rl-property.ru/upload/'+object.photo[1]" width="160" height="100" alt="">
                    </div>
                    <div class="thumbs-list__item ">
                      <img :src="'http://rl-property.ru/upload/'+object.photo[2]" width="160" height="100" alt="">
                    </div>
                    <div class="thumbs-list__item ">
                      <img :src="'http://rl-property.ru/upload/'+object.photo[3]" width="160" height="100" alt="">
                    </div> -->
                  </div>
                </div>
              </div>
              <!-- END slideshow -->
              <div class="columns">
                <div class="columns__left">
                  <div class="info-object">
                    <div class="info-object__in">
                      <div class="info-object__row">
                        <div class="info-object__name">Этажность</div>
                        <div class="info-object__val">{{object.floor}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Количество спален</div>
                        <div class="info-object__val">{{object.badroom}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Количество ванных комнат</div>
                        <div class="info-object__val">{{object.bathroom}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Растояние до пляжа</div>
                        <div class="info-object__val">{{object.distanceToBitch}}km</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Растояние до аэропорта</div>
                        <div class="info-object__val">{{object.distanceToAiroport}}km</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Общая площадь</div>
                        <div class="info-object__val">{{object.area}}m2</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Площать земельного участка</div>
                        <div class="info-object__val">{{object.landArea}}m2</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Жилая площадь</div>
                        <div class="info-object__val">{{object.lifeArea}}m2</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Размеры басейна</div>
                        <div class="info-object__val">{{object.areaOfPool}}</div>
                      </div>
                    </div>
                  </div>
                  <h4 class="columns__title">Описание:</h4>
                  <div class="columns__content-wrp">
                    <div class="columns__content js-collapse-content" :class="{'is-short': isShort}">
                      {{object.descriptionRu}}  
                    </div>
                    <button type="button" class="columns__btn-more btn-more js-collapse-link" @click="isShort = !isShort"><span>Больше описания</span></button>
                  </div>
                </div>
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
  data(){
    return{
      object:{},
      isShort: true,
      activePhoto: 0,
      clicked: false,
      mainPhoto: ''
    }
  },
  mounted(){
    this.getObjectById();
  },
  methods:{
      getObjectById(){
          let id = this.$route.params.id;
          console.log(id);
          this.$axios.get(`http://localhost:80/api/get-object-by-id/${id}`).then(response=>{
            this.object = response.data;
            console.log(this.object);
          })
      },
      setPhoto(index){
        this.activePhoto = index;
        if(!this.clicked){
          this.mainPhoto = 'http://rl-property.ru/upload/'+this.object.mainPhoto;
        }else if(this.clicked){
          this.mainPhoto = 'http://rl-property.ru/upload/'+this.object.photo[index];
        }
      },
      scrollTo() {
        this.$router.push({path: '/',hash:"#order"})
      },
  }
};
</script>
<style>
</style>
