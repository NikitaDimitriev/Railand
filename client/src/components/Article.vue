<template>
  <div class="article">
    <Menu></Menu>
    <div class="out">
      <section class="subjects">
        <div class="subjects__in inner">
          <h1 class="subjects__promo">{{article.name}}</h1>
          <div class="hero">
            <div class="hero__top">
              <div class="author">
                <div class="author__pic">
                  <img src="https://via.placeholder.com/70x70" alt="Виктор Шапилов">
                </div>
                <div class="author__col">
                  <h4 class="author__name">{{article.author}},</h4>
                  <div class="author__date">23 апреля 2018,</div>
                </div>
              </div>
              <div class="rubs">
                <div class="rubs__item is-active">Рубрика:</div>
                <div class="rubs__item">Развлечения</div>
              </div>
            </div>
            <div
              class="hero__footer"
            >{{article.text[0]}}</div>
          </div>
          <div class="subjects-l">
            <div class="subjects-l__item">
              <!-- <h3 class="subjects-l__title">Современная Дзен-вилла с басейном на Най-харне</h3> -->
              <figure class="subjects-l__figure">
                <img
                  class="subjects-l__pic"
                  :src="'http://localhost:8080/'+this.article.photo[0]"
                >
                <figcaption class="subjects-l__desc">Фотография взята с Shatterstock</figcaption>
              </figure>
              <div class="subjects-l__content">
                <p>{{article.text[1]}}</p>
              </div>
            </div>
            <div class="subjects-l__item">
              <!-- <h3 class="subjects-l__title">Современная Дзен-вилла с басейном на Най-харне</h3> -->
              <figure class="subjects-l__figure">
                <img
                  class="subjects-l__pic"
                  :src="'http://localhost:8080/'+this.article.photo[1]"
                >
                <figcaption class="subjects-l__desc">Фотография взята с Shatterstock</figcaption>
              </figure>
              <div class="subjects-l__content">
                <p>{{article.text[2]}}</p>
              </div>
            </div>
            <div class="subjects-l__item">
              <!-- <h3 class="subjects-l__title">Современная Дзен-вилла с басейном на Най-харне</h3> -->
              <figure class="subjects-l__figure">
                <img
                  class="subjects-l__pic"
                  :src="'http://localhost:8080/'+this.article.photo[2]"
                >
                <figcaption class="subjects-l__desc">Фотография взята с Shatterstock</figcaption>
              </figure>
              <div class="subjects-l__content">
                <p>{{article.text[3]}}</p>
              </div>
            </div>
          </div>
          <!-- BEGIN tags -->
          <div class="subjects__tags tags">
            <div class="tags__txt">Теги:</div>
            <div class="tags__item">PENTHOUSE,</div>
            <div class="tags__item">POOL VILLA,</div>
            <div class="tags__item">REAL ESTATE</div>
          </div>
          <!-- BEGIN tags -->
          <!-- BEGIN articles-news -->
          <div class="articles-news">
            <h2 class="title-primary">
              <span>похожие статьи</span>
            </h2>
            <ul class="news__list">
              <li class="news__list-item">
                <div class="n-item">
                  <div class="n-item__top">
                    <img src="img/news-item.jpg" alt>
                  </div>
                  <div class="n-item__body">
                    <div class="n-item__data">23 апреля 2018</div>
                    <h3 class="n-item__title">Эволюционируя вместе
                      <br>с Пхукетом
                    </h3>
                    <div
                      class="n-item__txt"
                    >Счастливое ли число семь? Для Пола Роппа определенно да, поскольку всего лишь семь лет ему потребовалась на то, чтобы превратить Пхукет в жемчужину свой розничной сети.</div>
                    <a href="#" class="n-item__link">
                      <span>читать далее
                        <svg class="icon icon-arr">
                          <use xlink:href="img/sprite.svg#icon-arr"></use>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="news__list-item">
                <div class="n-item">
                  <div class="n-item__top">
                    <img src="img/news-item.jpg" alt>
                  </div>
                  <div class="n-item__body">
                    <div class="n-item__data">23 апреля 2018</div>
                    <h3 class="n-item__title">6 способов встряхнуть свою жизнь на Пхукете</h3>
                    <div
                      class="n-item__txt"
                    >Как и в других уголках мира, быт местных жителей и туристов значительно отличаются. С понедельника по пятницу мы ходим на работу, на выходных занимаемся домашними делами, иногда выбираемся на пляж или на бранч.</div>
                    <a href="#" class="n-item__link">
                      <span>читать далее
                        <svg class="icon icon-arr">
                          <use xlink:href="img/sprite.svg#icon-arr"></use>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="news__list-item">
                <div class="n-item">
                  <div class="n-item__top">
                    <img src="img/news-item.jpg" alt>
                  </div>
                  <div class="n-item__body">
                    <div class="n-item__data">23 апреля 2018</div>
                    <h3 class="n-item__title">Каникулы на Пхукете: Идеальные выходные на Най-Харне</h3>
                    <div
                      class="n-item__txt"
                    >Mачек Климович Бывает ли у вас иногда ощущение, что все вокруг только и делают, что отдыхают, пока вы трудитесь в поте лица? У жителей Пхукета это распространенный синдром, поскольку каждый год миллионы..</div>
                    <a href="#" class="n-item__link">
                      <span>читать далее
                        <svg class="icon icon-arr">
                          <use xlink:href="img/sprite.svg#icon-arr"></use>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- END articles-news -->
        </div>
      </section>
    </div>
    <Footer></Footer>
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
      article: {}
    };
  },
  methods: {
    getArticleById() {
      let id = this.$route.params.id;
      this.$axios
        .get(`http://localhost:8080/api/get-article-by-id/${id}`)
        .then(response => {
          console.log(response);
          this.article = response.data;
        });
    }
  },
  mounted() {
    this.getArticleById();
  }
};
</script>
<style>
</style>
