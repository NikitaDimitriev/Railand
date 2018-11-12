<template>
    <div class="personal_area">
        <Menu></Menu>
        <div class="out">
            <section class="personal-area">
        <div class="personal-area__in inner">
          <h2 class="title-secondary"> Личный кабинет </h2>
          <!-- BEGIN panel -->
          <div class="panel">
            <div class="panel__tabs">
              <button type="button" class="panel__btn js-tab is-active" data-tab="0">
                <span>Профиль</span>
              </button>
              <button type="button" class="panel__btn js-tab" data-tab="1">
                <span>Список добавленных обьектов</span>
              </button>
              <button type="button" class="panel__btn js-tab" data-tab="2">
                <span>Настройки профиля</span>
              </button>
              <button type="button" class="panel__btn js-tab" data-tab="3">
                <span>Изменить пароль</span>
              </button>
            </div>
            <div class="panel__main">
              <div class="panel__content js-content is-active" data-tab="0">
                <div class="panel__header">
                  <div class="user__pic user__pic-sm">
                    <img src="https://via.placeholder.com/36x36" alt="Наташа" />
                  </div>
                  <div class="user__title"> Наташа </div>
                </div>
                <div class="panel__body">
                  <div class="user">
                    <div class="user__header">
                      <div class="user__in">
                        <div class="user__pic user__pic-lg">
                          <img src="https://via.placeholder.com/90x90" alt="Наташа" />
                        </div>
                        <div class="user__row">
                          <div class="user__col">
                            <div class="user__title">Имя </div>
                          </div>
                          <div class="user__col">
                            <div class="user__info">Наташа </div>
                          </div>
                        </div>
                        <div class="user__row">
                          <div class="user__col">
                            <div class="user__title">Email </div>
                          </div>
                          <div class="user__col">
                            <div class="user__info">natasha.rostova@gmail.com </div>
                          </div>
                        </div>
                        <div class="user__row">
                          <div class="user__col">
                            <div class="user__title">Статус </div>
                          </div>
                          <div class="user__col">
                            <div class="user__info">Владелец </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form action="#">
                      <div class="user__body">
                        <div class="user__in">
                          <div class="user__row">
                            <div class="user__col">
                              <div class="user__title"> Телефон </div>
                            </div>
                            <div class="user__col user__col-fl">
                              <div class="user__fields">
                                <div class="user__select select-l">
                                  <select class="select-l__el">
                                    <option value="" selected="selected"> +380 </option>
                                    <option value="1">+380</option>
                                    <option value="2">+380</option>
                                    <option value="3">+380</option>
                                  </select>
                                </div>
                                <input type="text" class="user__input" placeholder="Ваш номер" />
                              </div>
                              <div class="user__checkboxes">
                                <div class="checkbox checkbox_right">
                                  <input name="WhatsApp" id="WhatsApp" type="checkbox" class="checkbox__field" />
                                  <label for="WhatsApp" class="checkbox__label"><span class="checkbox__title">WhatsApp</span></label>
                                </div>
                                <div class="checkbox checkbox_right">
                                  <input name="viber" id="Viber" type="checkbox" class="checkbox__field" />
                                  <label for="Viber" class="checkbox__label"><span class="checkbox__title">Viber</span></label>
                                </div>
                                <div class="checkbox checkbox_right">
                                  <input name="telegram" id="Telegram" type="checkbox" class="checkbox__field" />
                                  <label for="Telegram" class="checkbox__label"><span class="checkbox__title">Telegram</span></label>
                                </div>
                              </div>
                              <div class="user__btns">
                                <button type="submit" class="user__btn">
                                  <span> Сохранить </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="user__footer">
                      <div class="user__in">
                        <div class="user__row">
                          <div class="user__col">
                            <div class="user__title"> Добавить объект </div>
                          </div>
                          <div class="user__col user__col-fl">
                            <form action="#">
                              <div class="user__field">
                                <input type="text" class="user__input" placeholder="ID объекта" />
                              </div>
                              <div class="user__field">
                                <input type="text" class="user__input" placeholder="Название объекта" />
                              </div>
                              <div class="user__btns">
                                <button type="submit" class="btn">
                                  <span> добавить объект</span>
                                </button>
                                <button type="button" class="btn-close js-close">
                                  <svg class="icon icon-cancel">
                                    <use xlink:href="img/sprite.svg#icon-cancel"></use>
                                  </svg>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel__content js-content" data-tab="1">
                <div class="panel__header panel__header-c">
                  <div class="user__pic user__pic-sm">
                    <img src="https://via.placeholder.com/36x36" alt="Наташа" />
                  </div>
                  <div class="user__title"> Наташа </div>
                </div>
                <div class="object">
                  <ul class="object__list">
                    <li class="object__item">
                      <div class="object__catalog">
                        <div class="object__pic">
                          <img src="img/card/1.jpg" alt="">
                        </div>
                        <div class="object__content">
                          <h3 class="object__title"> Резиденция в Laguna Phuket </h3>
                          <ul class="object__description">
                            <li>Жилая площадь: от 200 м2 </li>
                            <li>Спален: 2 </li>
                            <li>До пляжа: 600 м </li>
                          </ul>
                        </div>
                      </div>
                      <div class="object__col">
                        <button type="button" class="object__btn btn btn_primary">
                          <span> Смотреть </span>
                        </button>
                      </div>
                    </li>
                    <li class="object__item">
                      <div class="object__catalog">
                        <div class="object__pic">
                          <img src="img/card/1.jpg" alt="">
                        </div>
                        <div class="object__content">
                          <h3 class="object__title"> Резиденция в Laguna Phuket </h3>
                          <ul class="object__description">
                            <li>Жилая площадь: от 200 м2 </li>
                            <li>Спален: 2 </li>
                            <li>До пляжа: 600 м </li>
                          </ul>
                        </div>
                      </div>
                      <div class="object__col">
                        <button type="button" class="object__btn btn btn_primary">
                          <span> Смотреть </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="panel__content js-content" data-tab="2">
                <div class="panel__header panel__header-c">
                  <div class="user__pic user__pic-sm">
                    <img src="https://via.placeholder.com/36x36" alt="Наташа" />
                  </div>
                  <div class="user__title"> Наташа </div>
                </div>
                <div class="object">
                  <dl class="options-list options-list__object">
                    <dt class="options-list__title">Логин:</dt>
                    <dd class="options-list__description">Larchik88</dd>
                    <dt class="options-list__title">E-mail:</dt>
                    <dd class="options-list__description">Larchik888@gmail.com </dd>
                    <dt class="options-list__title">Дата создания:</dt>
                    <dd class="options-list__description">2018-08-09 16:10 (2 месяца назад)</dd>
                    <dt class="options-list__title">Дата обновления:</dt>
                    <dd class="options-list__description">2018-08-09 16:10 (2 месяца назад) </dd>
                  </dl>
                </div>
              </div>
              <div class="panel__content js-content" data-tab="3">
                <div class="panel__header panel__header-c">
                  <div class="user__pic user__pic-sm">
                    <img src="https://via.placeholder.com/36x36" alt="Наташа" />
                  </div>
                  <div class="user__title"> Наташа </div>
                </div>
                <div class="object object-maxw">
                  <form action="#">
                    <div class="user__row">
                      <div class="user__grid-4">
                        <div class="user__title"> Введите старый пароль </div>
                      </div>
                      <div class="user__grid-6">
                        <div class="user__field">
                          <input type="password" class="user__input" placeholder="Введите старый пароль">
                        </div>
                      </div>
                    </div>
                    <div class="user__row">
                      <div class="user__grid-4">
                        <div class="user__title"> Новый пароль </div>
                      </div>
                      <div class="user__grid-6">
                        <div class="user__field">
                          <input type="password" class="user__input" placeholder="Новый пароль">
                        </div>
                      </div>
                    </div>
                    <div class="user__row">
                      <div class="user__grid-4">
                        <div class="user__title"> Подтвердите пароль </div>
                      </div>
                      <div class="user__grid-6">
                        <div class="user__field">
                          <input type="password" class="user__input" placeholder="Подтвердите пароль">
                        </div>
                      </div>
                    </div>
                    <div class="user__btns">
                      <div class="user__grid-12">
                        <button type="submit" class="btn">
                          <span> Изменить пароль </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- BEGIN panel -->
          <!-- BEGIN objects -->
          <div class="personal-area__objects">
            <h2 class="title-secondary"> Список добавленных обьектов </h2>
            <!-- BEGIN cards-list -->
            <ul class=" cards__list cards__list-col3">
              <li class="cards__item">
                <div class="card">
                  <div class="card__top">
                    <div class="price-wrp">
                      <div class="price price__wh"> $ 761 000 </div>
                    </div>
                    <div class="card__slider">
                      <div class="card__slider-item">
                        <img src="img/card/1.jpg" alt="аппартамены" />
                      </div>
                      <div class="card__slider-item">
                        <img src="img/card/1.jpg" alt="аппартамены" />
                      </div>
                      <div class="card__slider-item">
                        <img src="img/card/1.jpg" alt="аппартамены" />
                      </div>
                      <div class="card__slider-item">
                        <img src="img/card/1.jpg" alt="аппартамены" />
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
                        <img src="img/card/1.jpg" alt="аппартамены" />
                      </div>
                      <div class="card__slider-item">
                        <img src="img/card/1.jpg" alt="аппартамены" />
                      </div>
                      <div class="card__slider-item">
                        <img src="img/card/1.jpg" alt="аппартамены" />
                      </div>
                      <div class="card__slider-item">
                        <img src="img/card/1.jpg" alt="аппартамены" />
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
                        <img src="img/card/1.jpg" alt="аппартамены" />
                      </div>
                      <div class="card__slider-item">
                        <img src="img/card/1.jpg" alt="аппартамены" />
                      </div>
                      <div class="card__slider-item">
                        <img src="img/card/1.jpg" alt="аппартамены" />
                      </div>
                      <div class="card__slider-item">
                        <img src="img/card/1.jpg" alt="аппартамены" />
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
            <!-- END cards-list -->
          </div>
          <!-- END objects -->
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
  }
};
</script>
<style>
</style>
