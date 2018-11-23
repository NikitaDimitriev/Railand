<template>
    <div class="journal">
        <Menu/>
        <div class="magazine out">
        <div class="magazine__in inner">
          <h2 class="title-primary"><span>Жизнь на Пхукете</span></h2>
          <div class="magazine__rubs rubs">
            <div class="rubs__txt">Выбрать рубрику: </div>
            <div class="rubs__item is-active">Все рубрики</div>
            <div class="rubs__item ">Еда и рестораны</div>
            <div class="rubs__item ">Развлечения</div>
            <div class="rubs__item ">Спорт</div>
            <div class="rubs__item ">Путешествия</div>
            <div class="rubs__item ">Здоровье и красота</div>
          </div>
          <div class="magazine__list rubs-list">
            <div class="rubs-list__item rubs-list__item_x2">
              <div class="nlarge-item" style="background-image: url(https://reallifephuket.com/wp-content/uploads/2018/10/Screenshot_4-Custom.jpg)">
                <div class="nlarge-item__content">
                  <div class="nlarge-item__date">23 апреля 2018</div>
                  <div class="nlarge-item__title">750 лет гастрономической традиции</div>
                  <div class="nlarge-item__txt"> Более 750 лет истории, почти 25000 членов и представительство в 80 странах – все это делает французскую гильдию гастрономов и рестораторов La Chaine de Rotisseurs силой, которую сложно не учитывать, даже если вы живете на Пхукете. Однако в чем смысл этого объединения и почему его деятельность актуальна и для нас с вами? </div>
                </div>
              </div>
            </div>
            <div class="rubs-list__item ">
              <div class="nlarge-item" style="background-image: url(https://reallifephuket.com/wp-content/uploads/2018/11/KRSR.jpg)">
                <div class="nlarge-item__content">
                  <div class="nlarge-item__date">23 апреля 2018</div>
                  <div class="nlarge-item__title">Kata Rocks Superyacht Rendezvous возвращается</div>
                  <div class="nlarge-item__txt"> Kata Rocks Superyacht Rendezvous (KRSR) возвращается на Пхукет, и с 6 по 9 декабря 2018 года владельцы самых роскошных яхт в мире будут вновь наслаждаться пхукетским гостеприимством.</div>
                </div>
              </div>
            </div>
            <div class="rubs-list__item">
              <div class="nlarge-item" style="background-image: url(https://reallifephuket.com/wp-content/uploads/2018/10/RPM-Condo-6-Custom.jpg)">
                <div class="nlarge-item__content">
                  <div class="nlarge-item__date">23 апреля 2018</div>
                  <div class="nlarge-item__title">Престижная жизнь в RPM</div>
                  <div class="nlarge-item__txt"> Если вы ищете недвижимость на Пхукете, то причин обратить внимание на Royal Phuket Marina целое множество.</div>
                </div>
              </div>
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
