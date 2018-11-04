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
                      <dd class="options-list__description">$640 000</dd>
                      <dt class="options-list__title">Цена за м2</dt>
                      <dd class="options-list__description">от $3 000</dd>
                      <dt class="options-list__title">Расположение</dt>
                      <dd class="options-list__description">ЖК Райленд</dd>
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
              <h2 class="card-main__title title-large"><span>Комплекс вилл "The Greens"</span></h2>
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
                  <img src="https://via.placeholder.com/730x450" width="730" height="450" alt="">
                </div>
                <div class="slideshow__thumbs">
                  <button type="button" class="slideshow__arrow-left">prev</button>
                  <button type="button" class="slideshow__arrow-right">next</button>
                  <div class="thumbs-list">
                    <div class="thumbs-list__item is-active ">
                      <img src="https://via.placeholder.com/160x100" width="160" height="100" alt="">
                    </div>
                    <div class="thumbs-list__item ">
                      <img src="https://via.placeholder.com/160x100" width="160" height="100" alt="">
                    </div>
                    <div class="thumbs-list__item ">
                      <img src="https://via.placeholder.com/160x100" width="160" height="100" alt="">
                    </div>
                    <div class="thumbs-list__item ">
                      <img src="https://via.placeholder.com/160x100" width="160" height="100" alt="">
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
                        <div class="info-object__val">{{object.distanceToBitch}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Растояние до аэропорта</div>
                        <div class="info-object__val">{{object.distanceToAiroport}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Общая площадь</div>
                        <div class="info-object__val">{{object.area}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Площать земельного участка</div>
                        <div class="info-object__val">{{object.landArea}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Жилая площадь</div>
                        <div class="info-object__val">{{object.lifeArea}}</div>
                      </div>
                      <div class="info-object__row">
                        <div class="info-object__name">Размеры басейна</div>
                        <div class="info-object__val">{{object.areaOfPool}}</div>
                      </div>
                    </div>
                  </div>
                  <h4 class="columns__title">Описание:</h4>
                  <div class="columns__content-wrp">
                    <div class="columns__content is-short js-collapse-content">
                      <p>Расположенный на первоклассном пляже с видом на залив Банг Тао и озера Лагуны, этот комплекс апартаментов разработан под всемирно известным брендом Banyan Tree, который оперирует на международном уровне, обеспечивает самый высокий уровень обслуживания и создает прекрасные условия для отдыха и жизни.</p>
                      <p>Ключевые особенности бренда: - Более трех десятилетий опыта на международном рынке. <br /> - Лидирующая позиция в отельном и жилом секторе.<br /> - Богатое наследие и репутация делают Banyan Tree одним из ведущих мировых брендов гостиничного бизнеса.<br /> - Более 40 отелей и курортов, более 60 спа, более 70 торговых галерей и 3 поля для гольфа в 25 странах.</p>
                      <h4>ИНВЕСТИЦИОННЫЕ ВОЗМОЖНОСТИ</h4>
                      <p>Девелопер предлагает гибкую инвестиционную схему для владельцев недвижимости комплекса. Опция «Инвестиционная программа» позволяет владельцам максимизировать прибыль благодаря тому, что управляющая компания комплекса занимается полным обслуживанием и сдачей в аренду собственности, отдавая владельцам часть генерируемого дохода. При этом владельцы могут использовать апартаменты для личного проживания 30 дней в году. Опция «Лайфстайл» обеспечивает дополнительную гибкость, предоставляя владельцам возможность использовать свои апартаменты в течение 90 дней в году, тем самым создавая баланс между рентабельностью вложения и стилем жизни.</p>
                      <h4>ПРИВИЛЕГИИ</h4>
                      <p>Владельцев недвижимости комплекса ожидает ряд привилегий и вознаграждений<br /> Бесплатное участие в программе SANCTUARY CLUB предлагает следующие бонусы: - Скидки и льготы в отелях, курортах, спа и торговых галереях Banyan Tree по всеми миру. - Участие в программе обмена, которая дает владельцам возможность бесплатно отдохнуть в апартаментах и отелях группы Banayan Tree в другой стане.<br /> - Приглашения на различные мероприятия группы Banayan Tree по всему миру.<br /> - Приглашения на бесплатное проживание в новых курортах и отелях группы Banayan Tree до открытия</p>
                    </div>
                    <button type="button" class="columns__btn-more btn-more js-collapse-link"><span>Больше описания</span></button>
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
      object:{}
    }
  },
  mounted(){
    this.getObjectById();
  },
  methods:{
      getObjectById(){
          let id = this.$route.params.id;
          console.log(id);
          this.$axios.get(`http://localhost:3000/api/get-object-by-id/${id}`).then(response=>{
            this.object = response.data;
            console.log(this.object);
          })
      }
  }
};
</script>
<style>
</style>
