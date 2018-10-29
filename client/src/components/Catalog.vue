<template>
    <div>
        <Menu></Menu>
        <section class="catalog-promo" style="background-image: url(../img/about/about-form.jpg">
        <div class="catalog-promo__in inner">
          <h2 class="catalog-promo__title"> Более 700 обьектов в базе </h2>
          <div class="catalog-promo__subtitle"> Чтобы изучить весь каталог, потребуется примерно 48 часов. <br /> Оставьте заявку, и менеджер быстро подберет варианты. </div>
          <button type="button" class="catalog-promo__btn btn">
            <span>Заполнить заявку</span>
          </button>
        </div>
      </section>
      <!-- END catalog-promo -->
      <!-- BEGIN card -->
      <section class="cards">
        <div class="cards__in inner">
          <div class="cards__header">
            <h2 class="title-primary title-primary__left"><span>Топ Объектов на </span></h2>
            <!--<ul class="catalog-list">-->
            <!--<li class="catalog-list__item">-->
            <!--<a href=""  class="catalog-list__link js-tab is-active" data-tab="0">-->
            <!--продажу-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="catalog-list__item">-->
            <!--<a href=""  class="catalog-list__link js-tab" data-tab="1">-->
            <!--Аренду-->
            <!--</a>-->
            <!--</li>-->
            <!--</ul>-->
            <div class="cards__tab-links tab-links">
              <button type="button" class="tab-links__item js-tab is-active" data-tab="0"><span>продажу</span></button>
              <button type="button" class="tab-links__item js-tab" data-tab="1"><span>Аренду</span></button>
            </div>
          </div>
          <!-- BEGIN cards-main -->
          <div class="cards__main">
            <!-- BEGIN cards-aside -->
            <aside class="cards__aside aside">
              <div class="aside__top">
                <h4 class="aside__top-title">Сортировка:</h4>
                <div class="select-l select-l_wh">
                  <select class="select-l__el">
                    <option value="" selected="selected"> По популярности </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
              </div>
              <div class="aside__body">
                <h3 class="aside__title"> Настройки фильтра: </h3>
                <div class="aside__content">
                  <form>
                    <div class="aside__col">
                      <div class="select-l">
                        <select class="select-l__el">
                          <option value selected>Расположение</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div class="aside__col">
                      <div class="select-l">
                        <select class="select-l__el">
                          <option value selected>Количество спален</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div class="aside__col">
                      <ul class="checkbox__list">
                        <li class="checkbox__item">
                          <div class="checkbox">
                            <input name="" id="villa" type="checkbox" class="checkbox__field">
                            <label for="villa" class="checkbox__label">
                              <span class="checkbox__title"> Вилла </span>
                            </label>
                          </div>
                        </li>
                        <li class="checkbox__item">
                          <div class="checkbox">
                            <input name="" id="appartament" type="checkbox" class="checkbox__field">
                            <label for="appartament" class="checkbox__label">
                              <span class="checkbox__title"> Аппартамены </span>
                            </label>
                          </div>
                        </li>
                        <li class="checkbox__item">
                          <div class="checkbox">
                            <input name="" id="hous" type="checkbox" class="checkbox__field">
                            <label for="hous" class="checkbox__label">
                              <span class="checkbox__title"> Таунхаус </span>
                            </label>
                          </div>
                        </li>
                        <li class="checkbox__item">
                          <div class="checkbox">
                            <input name="" id="as" type="checkbox" class="checkbox__field">
                            <label for="as" class="checkbox__label">
                              <span class="checkbox__title"> Земельный участок </span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="aside__col">
                      <div class="select-l">
                        <select class="select-l__el">
                          <option value="" selected="selected"> Статус объекта </option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div class="aside__col">
                      <div class="select-l">
                        <select class="select-l__el">
                          <option value selected>Цель</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div class="range-slider">
                      <h5 class="range-slider__title"> Стоимость: </h5>
                      <div class="range-slider__controls">
                        <div class="range-slider__col">
                          <input type="text" class="range-slider__input js-from" placeholder="От $" />
                        </div>
                        <div class="range-slider__col">
                          <input type="text" placeholder="До $" class="range-slider__input js-to" />
                        </div>
                      </div>
                      <div class="range-slider__output">
                        <input type="text" class="js-range-slider" value="" />
                      </div>
                    </div>
                    <div class="aside__btns">
                      <button type="submit" class="btn">
                        <span> Искать</span>
                      </button>
                      <button type="button" class="btn-close js-close">
                        <svg class="icon icon-cancel">
                          <use xlink:href="img/sprite.svg#icon-cancel"></use>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="aside__map">
                  <h5> Объекты на карте: </h5>
                  <div class="aside__pic">
                    <img src="img/card/map.jpg" alt="">
                  </div>
                </div>
              </div>
            </aside>
            <!-- END cards-aside -->
            <!-- BEGIN cards-body -->
            <div class="cards__body">
              <div class="cards__top">
                <div class="objects">
                  <div class="objects__title"> Тип недвижимости : </div>
                  <div class="objects__col">
                    <span class="objects__link objects__current"> Вся недвижимость </span>
                    <a href="" class="objects__link is">Вилла</a>
                    <a href="" class="objects__link is-active">Аппартаменты</a>
                    <a href="" class="objects__link">Таунхаус</a>
                    <a href="" class="objects__link">Комплексы</a>
                  </div>
                </div>
                <div class="search">
                  <form action="">
                    <input class="search__field" type="text" placeholder="Поиск" name="search" />
                    <button class="search__btn" type="submit">Submit</button>
                  </form>
                </div>
              </div>
              <div class="catalog-page">
                <div class="catalog-page__navigation">
                  <span class="catalog-page__first catalog-page__current">1</span>
                  <a href="" class="catalog-page__link">2</a>
                  <a href="" class="catalog-page__link">3</a>
                  <a href="" class="catalog-page__link">4</a>
                  <a href="" class="catalog-page__link">5</a>
                  <a class="catalog-page__link catalog-page__line" href="">-</a>
                  <a href="" class="catalog-page__link">25</a>
                  <a class="catalog-page__link catalog-page__next" href="">>></a>
                </div>
                <div class="catalog-page__navigation pagecount">
                  <span class="catalog-page__title">Показывать по: </span>
                  <span class="catalog-page__first catalog-page__current">10</span>
                  <a class="catalog-page__link" href="">20</a>
                  <a class="catalog-page__link" href="">50</a>
                </div>
              </div>
              <ul class="cards__list js-content is-active" data-tab="0">
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="cards__list js-content" data-tab="1">
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cards__item">
                  <div class="card">
                    <div class="card__top">
                      <div class="price-wrp">
                        <div class="price price__wh"> $ 761 000 </div>
                      </div>
                      <div class="card__slider">
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                        <div class="card__slider-item">
                          <img src="img/card/1.jpg" alt="аппартамены">
                        </div>
                      </div>
                      <a class="card__link" href=""></a>
                    </div>
                    <div class="card__content">
                      <div class="card__body">
                        <h3 class="card__title"> Апартаменты с видом на море в Ката </h3>
                        <ul class="card__l">
                          <li> Жилая площадь: от 200 м2 </li>
                          <li> Спален: 2 </li>
                          <li> До пляжа: 600 м </li>
                        </ul>
                      </div>
                      <div class="card__footer">
                        <div class="price price__bl"> $ 761 000 </div>
                        <button type="button" class="card__btn btn btn_primary">
                          <span>Смотреть</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="catalog-page">
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
            <!-- END cards-body -->
          </div>
          <!-- END cards-main -->
        </div>
      </section>
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
  }
};
</script>
