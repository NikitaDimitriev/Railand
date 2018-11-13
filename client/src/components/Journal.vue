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
           <router-link :to='`/live-in-phuket/13`' style="cursor: pointer"> <div class="rubs-list__item rubs-list__item_x2">
              <div class="nlarge-item" style="background-image: url(https://via.placeholder.com/730x430)">
                <div class="nlarge-item__content">
                  <div class="nlarge-item__date">23 апреля 2018</div>
                  <div class="nlarge-item__title">Эволюционируя вместе <br />с Пхукетом</div>
                  <div class="nlarge-item__txt"> Счастливое ли число семь? Для Пола Роппа определенно да, поскольку всего лишь семь лет ему <br /> потребовалась на то, чтобы превратить Пхукет в жемчужину свой розничной сети. </div>
                </div>
              </div>
            </div></router-link>
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
