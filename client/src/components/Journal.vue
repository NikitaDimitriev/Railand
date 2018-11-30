<template>
    <div class="journal">
        <Menu/>
        <div class="magazine out">
        <div class="magazine__in inner">
          <h2 class="title-primary"><span>Жизнь на Пхукете</span></h2>
          <!-- <div class="magazine__rubs rubs">
            <div class="rubs__txt">Выбрать рубрику: </div>
            <div class="rubs__item is-active">Все рубрики</div>
            <div class="rubs__item ">Еда и рестораны</div>
            <div class="rubs__item ">Развлечения</div>
            <div class="rubs__item ">Спорт</div>
            <div class="rubs__item ">Путешествия</div>
            <div class="rubs__item ">Здоровье и красота</div>
          </div> -->
         <div class="magazine__list rubs-list">
            <div class="rubs-list__item rubs-list__item_x2">
            <router-link :to='`/live-in-phuket/Kata`'> 
              <div class="nlarge-item" style="background-image: url(https://RealLifePhuket.com/wp-content/uploads/2018/09/Baan-Kata-Villa-2-Landscape.jpg)">
                <div class="nlarge-item__content">
                  <div class="nlarge-item__date">23 апреля 2018</div>
                  <div class="nlarge-item__title">Выдающийся дом – Baan Kata Villa</div>
                  <div class="nlarge-item__txt"> Не все виллы на Пхукете созданы равными. Но чтобы действительно выделиться из общего ряда на таком уникальном острове, дом должен отвечать некоторым критериям. </div>
                </div>
              </div>
            </router-link>
            </div>
            <div class="rubs-list__item " style="width:300px">
            <router-link :to='`/live-in-phuket/Botanica`'>
              <div class="nlarge-item" style="background-image: url(https://RealLifePhuket.com/wp-content/uploads/2018/08/Botanica-Villa-Phuket-2.jpg)">
                <div class="nlarge-item__content">
                  <div class="nlarge-item__date">23 апреля 2018</div>
                  <div class="nlarge-item__title">Kata Rocks Superyacht Rendezvous возвращается</div>
                  <div class="nlarge-item__txt"> Kata Rocks Superyacht Rendezvous (KRSR) возвращается на Пхукет, и с 6 по 9 декабря 2018 года владельцы самых роскошных яхт в мире будут вновь наслаждаться пхукетским гостеприимством.</div>
                </div>
              </div>
            </router-link>
            </div>
            <div class="rubs-list__item" style="width:300px">
            <router-link :to='`/live-in-phuket/RPM`'>
              <div class="nlarge-item" style="background-image: url(https://RealLifePhuket.com/wp-content/uploads/2018/10/RPM-Condo-4-Custom.jpg)">
                <div class="nlarge-item__content">
                  <div class="nlarge-item__date">23 апреля 2018</div>
                  <div class="nlarge-item__title">Престижная жизнь в RPM</div>
                  <div class="nlarge-item__txt"> Если вы ищете недвижимость на Пхукете, то причин обратить внимание на Royal Phuket Marina целое множество.</div>
                </div>
              </div>
            </router-link>
            </div>
              <div class="rubs-list__item" v-for="(article, index) of articles" :key="index">
                <router-link :to='`/live-in-phuket/${article._id}`'>
                <div class="n-item">
                  <div class="n-item__top">
                    <img src="https://via.placeholder.com/350x180" width="350" height="180" alt="">
                  </div>
                  <div class="n-item__body">
                    <div class="n-item__data">23 апреля 2018</div>
                    <h3 class="n-item__title">Эволюционируя вместе <br /> с Пхукетом</h3>
                    <div class="n-item__txt"> Счастливое ли число семь? Для Пола Роппа определенно да, поскольку всего лишь семь лет ему потребовалась на то, чтобы превратить Пхукет в жемчужину свой розничной сети. </div>
                    <a href="#" class="n-item__link">
                      <span>читать далее <svg class="icon icon-arr">
                          <use xlink:href="img/sprite.svg#icon-arr"></use>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                </router-link>
              </div>
            <div class="rubs-list__footer catalog-page">
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
        </div>
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
      articles: []
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      this.$axios
        .get("http://localhost:3000/api/get-all-articles")
        .then(response => {
          this.articles = response.data;
        });
    }
  }
};
</script>
