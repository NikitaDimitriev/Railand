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
                      <dd class="options-list__description">$ {{object.price.priceSales}}</dd>
                      <dt class="options-list__title">Цена за м2</dt>
                      <dd class="options-list__description">от {{Math.floor(object.priceSales / object.area)}} $</dd>
                      <dt class="options-list__title">Расположение</dt>
                      <dd class="options-list__description">{{object.address}}</dd>
                      <dt class="options-list__title">Стадия готовности</dt>
                      <dd class="options-list__description">На этапе строительства</dd>
                    </dl>
                  </div>
                  <div class="options__bottom">
                    <button type="button" class="options__btn btn"><span>Отправить запрос</span></button>
                  </div>
                </div>
                <div class="small-map">
                  <div class="small-map__title">Объекты на карте:</div>
                  <div class="aside__toggle js-toggle"> Объекты на карте:</div>
                  <div class="small-map__container">
                    <img src="img/map-xs.jpg" alt="">
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
                  <li class="breadcrumb__item"><a href="#">главная</a></li>
                  <li class="breadcrumb__separator">/</li>
                  <li class="breadcrumb__item"><a href="#">каталог</a></li>
                  <li class="breadcrumb__separator">/</li>
                  <li class="breadcrumb__item"><span>карточка комплекса</span></li>
                </ul>
                <div class="topper__name">комплекс №14</div>
              </div>
              <!-- END topper -->
              <!-- BEGIN slideshow -->
              <div class="slideshow">
                <div class="slideshow__preview">
                  <img src="../../static/1.jpg" width="730" height="450" alt="">
                </div>
                <div class="slideshow__thumbs">
                  <button type="button" class="slideshow__arrow-left">prev</button>
                  <button type="button" class="slideshow__arrow-right">next</button>
                  <div class="thumbs-list">
                    <div class="thumbs-list__item is-active ">
                      <img src="../../static/1.jpg" width="160" height="100" alt="">
                    </div>
                    <div class="thumbs-list__item ">
                      <img src="../../static/1.jpg" width="160" height="100" alt="">
                    </div>
                    <div class="thumbs-list__item ">
                      <img src="../../static/1.jpg" width="160" height="100" alt="">
                    </div>
                    <div class="thumbs-list__item ">
                      <img src="../../static/1.jpg" width="160" height="100" alt="">
                    </div>
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
                        <div class="info-object__val">{{object.floor.substring(0, 1)}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Количество спален</div>
                        <div class="info-object__val">{{object.badroom.substring(0, 1)}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Количество ванных комнат</div>
                        <div class="info-object__val">{{object.bathroom.substring(0, 1)}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Растояние до пляжа</div>
                        <div class="info-object__val">{{object.distanceToBitch.substring(0, 4)}}km</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Растояние до аэропорта</div>
                        <div class="info-object__val">{{object.distanceToAiroport.substring(0, 5)}}km</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Общая площадь</div>
                        <div class="info-object__val">{{object.area.substring(0, 5)}}m2</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Площать земельного участка</div>
                        <div class="info-object__val">{{object.landArea.substring(0, 5)}}m2</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Жилая площадь</div>
                        <div class="info-object__val">{{object.lifeArea.substring(0, 5)}}m2</div>
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
                <div class="columns__right">
                  <div class="similar">
                    <div class="similar__top">Rang Hill Residence</div>
                    <div class="similar__pic"><img src="https://via.placeholder.com/225x140" width="225" height="140" alt=""></div>
                    <div class="similar__txt">Владельцев недвижимости комплекса ожидает ряд привилегий и вознаграждений Бесплатное участие в программе SANCTUARY CLUB предлагает следующие бонусы: - Скидки и льготы в отелях, курортах, спа и торговых галереях Banyan </div>
                    <button type="button" class="similar__btn btn btn_primary">
                      <span>Задать вопрос о комплексе</span>
                    </button>
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
      isShort: true
    }
  },
  mounted(){
    this.getObjectById();
  },
  methods:{
      getObjectById(){
          let id = this.$route.params.id;
          console.log(id);
          this.$axios.get(`https://railand-front.herokuapp.com/api/get-object-by-id/${id}`).then(response=>{
            this.object = response.data;
            console.log(this.object);
          })
      }
  }
};
</script>
<style>
</style>
