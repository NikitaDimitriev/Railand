<template>
    <div class="faq">
        <Menu></Menu>
        <section class="info">
        <div class="info__in inner">
          <div class="info__header">
            <h2 class="title-secondary"> Найдите ответы на самые популярные вопросы </h2>
            <p class="info__subtitle"> Найдите ответы на самые популярные вопросы о momondo, нашем сайте и о том, как мы работаем. Если вы не нашли здесь ответа на свой вопрос, напишите нам через форму обратной связи </p>
          </div>
          <div class="info__body">
            <h3 class="info__title">Аренда недвижимости в Пхукете</h3>
            <!-- BEGIN info-list -->
            <ul class="info__list">
              <li class="info__list-item" @click="acordionItem0 = !acordionItem0" :class="{'is-active': acordionItem0}"  >
                <h4 class="info__list-title js-toggle"> Когда на острове Пхукет туристический сезон? Когда пик сдачи в аренду, когда спад? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem0}">
                  Аренда востребована на Пхукете круглый год, так как туристов тут много в любое время года.

Высокий сезон приходится на период с ноября по апрель. Сезон дождей на Пхукете — с мая по октябрь. Соответственно, в высокий период, особенно в дни новогодних и рождественских праздников, спрос на аренду самый больший, в сезон дождей — меньший.
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem1 = !acordionItem1" :class="{'is-active': acordionItem1}">
                <h4 class="info__list-title js-toggle"> Как наладить сдачу недвижимости в аренду, не находясь на острове Пхукет? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem1}">
                  Вы можете передать свою недвижимость на управление Raйland. Мы будем следить за её состоянием, а также регулярно находить арендаторов по выгодной цене. Вам будет предоставлять подробный отчёт обо всех затратах и прибыли.
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem2 = !acordionItem2" :class="{'is-active': acordionItem2}">
                <h4 class="info__list-title js-toggle"> Как проверить достоверность фотографий? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem2}">
                  Raйland предоставляет только достоверные фото объектов. Мы регулярно связываемся с владельцами и посещаем виллы. Если у вас возникли сомнения, можете попросить нас специально отправить менеджера и предоставить вам актуальный фото- или видеоотчёт.
                </div>
              </li>
              <!-- <li class="info__list-item" @click="acordionItem3 = !acordionItem3" :class="{'is-active': acordionItem3}">
                <h4 class="info__list-title js-toggle"> Когда бронироватние считаеться подтвержденным? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem3}">
                  <h5>На стоимость аренды влияют следующие факторы: </h5>
                  <ul>
                    <li>
                      <p> сезонность: в высокий и летний сезон цена может отличаться более чем в 3 раза. Периодичность изменения цен устанавливают собственники недвижимости, ориентируясь на спрос и туристический поток; </p>
                    </li>
                    <li>
                      <p> срок аренды: чем продолжительнее отдых, тем ниже стоимость аренды за сутки. На виллы, расположенные на территориях отелей, это правило не распространяется; </p>
                    </li>
                    <li>
                      <p> даты заезда: вероятность дополнительных скидок на даты, удобные для владельца виллы, очень высока; </p>
                    </li>
                    <li>
                      <p> акции: максимальное количество выгодных предложений приходится на летний и средний сезоны. </p>
                    </li>
                  </ul>
                  <p> Предварительно рассчитать затраты на аренду можно с помощью калькулятора на странице </p>
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem4 = !acordionItem4" :class="{'is-active': acordionItem4}">
                <h4 class="info__list-title js-toggle"> Как проверить достоверность фотографий? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem4}">
                  <h5>На стоимость аренды влияют следующие факторы: </h5>
                  <ul>
                    <li>
                      <p> сезонность: в высокий и летний сезон цена может отличаться более чем в 3 раза. Периодичность изменения цен устанавливают собственники недвижимости, ориентируясь на спрос и туристический поток; </p>
                    </li>
                    <li>
                      <p> срок аренды: чем продолжительнее отдых, тем ниже стоимость аренды за сутки. На виллы, расположенные на территориях отелей, это правило не распространяется; </p>
                    </li>
                    <li>
                      <p> даты заезда: вероятность дополнительных скидок на даты, удобные для владельца виллы, очень высока; </p>
                    </li>
                    <li>
                      <p> акции: максимальное количество выгодных предложений приходится на летний и средний сезоны. </p>
                    </li>
                  </ul>
                  <p> Предварительно рассчитать затраты на аренду можно с помощью калькулятора на странице </p>
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem5 = !acordionItem5" :class="{'is-active': acordionItem5}">
                <h4 class="info__list-title js-toggle"> Ценообразование на недвижимость? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem5}">
                  <h5>На стоимость аренды влияют следующие факторы: </h5>
                  <ul>
                    <li>
                      <p> сезонность: в высокий и летний сезон цена может отличаться более чем в 3 раза. Периодичность изменения цен устанавливают собственники недвижимости, ориентируясь на спрос и туристический поток; </p>
                    </li>
                    <li>
                      <p> срок аренды: чем продолжительнее отдых, тем ниже стоимость аренды за сутки. На виллы, расположенные на территориях отелей, это правило не распространяется; </p>
                    </li>
                    <li>
                      <p> даты заезда: вероятность дополнительных скидок на даты, удобные для владельца виллы, очень высока; </p>
                    </li>
                    <li>
                      <p> акции: максимальное количество выгодных предложений приходится на летний и средний сезоны. </p>
                    </li>
                  </ul>
                  <p> Предварительно рассчитать затраты на аренду можно с помощью калькулятора на странице </p>
                </div>
              </li> -->
            </ul>
            <!-- END info-list -->
            <h3 class="info__title">Покупка недвижимости в Пхукете</h3>
            <!-- BEGIN info-list -->
            <ul class="info__list">
              <li class="info__list-item" @click="acordionItem6 = !acordionItem6" :class="{'is-active': acordionItem6}">
                <h4 class="info__list-title js-toggle"> Как выбрать виллу? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem6}">
                  На острове Пхукет широкий выбор недвижимости. Вы можете рассматривать варианты и ждать, когда ёкнет сердце. Вы можете определиться с важными для вас параметрами и искать виллу под них.


Площадь, количество спален, особенности дизайна, пожелания по цене, близость и доступность пляжей, инфраструктура — сообщите нам о ваших предпочтениях. Мы подбираем объекты под них и отправляем вам фото и подробные описания.
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem7 = !acordionItem7" :class="{'is-active': acordionItem7}">
                <h4 class="info__list-title js-toggle"> Как формируется цена недвижимости на Пхукете?<svg class="icon icon-arrd">
                    <use xlink:href="img/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem7}">
                  У нас широкий диапазон цен на недвижимость в Таиланде. Цена зависит от площади, типа строения, стоимости внутренней отделки, наличия или отсутствия мебели и техники. А ещё — если уж вы решили купить жильё на Пхукете — важно расположение недвижимости и инфраструктура. На берегу океана, в пешей доступности от берега, с видом на море, на горном склоне с собственным трансфером к пляжу, в середине острова с собственным бассейном — все детали влияют на цену. Важно понимать, какие условия принципиальны для вас, а какие менее важны. Тогда мы поможем найти оптимальный вариант. 
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem8 = !acordionItem8" :class="{'is-active': acordionItem8}">
                <h4 class="info__list-title js-toggle"> Можно ли получить право собственности на жильё на острове Пхукет иностранцу? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem8}">
                  Все иностранцы могут стать законными владельцами недвижимости в Таиланде. Иначе дело обстоит с землёй — её можно получить только в долгосрочную аренду на 30 лет с возможностью трёхкратного продления. То есть всего на 90 лет. Значит, купленная вилла, например, будет принадлежать вам, а земля под ней формально будет в вашей аренде.


На квартиры в кондоминиумах государством установлена квота. 49% от общей площади дома владелец может продавать в полное владение иностранцам, остальные 51% — только на условиях долгосрочной аренды. Так что покупая квартиру, нужно проверять, входит ли она в эту 49% квоту.
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem9 = !acordionItem9" :class="{'is-active': acordionItem9}">
                <h4 class="info__list-title js-toggle"> Какими сборами облагается покупка недвижимости? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem9}">
                  При оформлении покупки недвижимости в Таиланде нужно оплатить единоразовые сборы. Регистрационный сбор на оформление сделки составляет 2% от оценочной стоимости объекта. Гербовый сбор составляет 0,5% от оценочной стоимости или контрактной цены. Удерживаемый налог — 1% от оценочной стоимости или контрактной цены. Рассчитывается процент от более высокой цены.


При оформлении долгосрочной аренды регистрационный сбор составляет 1% от оценочной стоимости объекта, гербовый сбор — 0,1% от оценочной стоимости или контрактной цены — более высокой из них.
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem10 = !acordionItem10" :class="{'is-active': acordionItem10}">
                <h4 class="info__list-title js-toggle"> Сколько времени займёт процедура покупки? Какие документы нужны для сделки? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem10}">
                  <p>Процедура покупки недвижимости на Пхукете может занять от 10 дней до 3-х месяцев. Срок может растягиваться в таком диапазоне по двум причинам. Первая — время согласования всех деталей договора купли-продажи между клиентом и продавцом. Вторая — время согласования недвижимости в Архитектурном и Земельном комитетах Таиланда. </p>
                  <h5>В целом же процедура состоит из таких этапов: </h5>
                  <ul>
                    <li>
                      <p> Внесение депозита. </p>
                    </li>
                    <li>
                      <p> Составление, согласование и подписание договора купли-продажи. </p>
                    </li>
                    <li>
                      <p> Оформление прав собственности. </p>
                    </li>
                    <li>
                      <p> Внесение второй части оплаты — а затем получение покупателем документов на собственность. </p>
                    </li>
                  </ul>
                  <p> Из документов от покупателя требуется только заграничный паспорт и его заверенная копия. При покупке вторичного жилья необходима также справка ТТ3 из тайского банка — она подтверждает, что перевод денег поступил из-за рубежа в иностранной валюте и был легально конвертирован в тайские баты. Можно также перевезти деньги наличными, указав на границе их предназначение.  </p>
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem11 = !acordionItem11" :class="{'is-active': acordionItem11}">
                <h4 class="info__list-title js-toggle"> Каким налогом будет облагаться недвижимость после покупки? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem11}">
                  В Таиланде нет регулярного налога на недвижимость. Если вы владеете квартирой, нужно платить только за содержание комплекса, сумма зависит от конкретного владельца кондоминиума.


Налог на землю в Таиланде составляет несколько десятков батов на за 1 рай (1 600 м²). Это такие незначительные суммы, что счёт выставляется раз в несколько лет. 


Если вы сдаёте недвижимость в аренду, нужно выплачивать налог в 12,5% от оценочной арендной стоимости объекта.
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem12 = !acordionItem12" :class="{'is-active': acordionItem12}">
                <h4 class="info__list-title js-toggle"> Каковы перспективы возврата инвестиций при покупке недвижимости на острове Пхукет? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem12}">
                  Таиланд — перспективный вариант с точки зрения инвестиций в недвижимость. Возврат денег происходит за счёт сдачи жилья в аренду. На Пхукете есть спрос на жильё круглый год, ведь туристический сезон здесь не заканчивается. Рентабельность сдачи в аренду составляет до 40%.


В Raйland мы проводим due diligence экспертизу объектов, так что вы получаете информацию об инвестиционных перспективах и рисках конкретных вариантов недвижимости на острове.
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem3 = !acordionItem3" :class="{'is-active': acordionItem3}">
                <h4 class="info__list-title js-toggle"> Какие виды деятельности можно вести в приобретённом объекте недвижимости? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem3}">
                  Законодательство Таиланда предоставляет широкие возможности деятельности. Недвижимость можно перепродавать и сдавать в аренду. Иностранцы также могут легально заниматься другими видами предпринимательской деятельности — открывать магазины, офисы, заведения питания, салоны, организовать фермерские или животноводческие хозяйства. 
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem4 = !acordionItem4" :class="{'is-active': acordionItem4}">
                <h4 class="info__list-title js-toggle"> Как проверить надёжность таиландского застройщика? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem4}">
                  При выборе застройщика нужно обращать внимание на наличие у него всех необходимых документов. Проверьте финансовые и разрешительные документы на строительство. Узнайте о прошлом компании — сколько проектов она реализовала и на каком уровне. 


Raйland работает с проверенными опытом застройщиками, в их надёжности мы уверены. Наши юристы требуют все необходимые документы и могут компетентно улаживать возникающие споры и сложности.
                </div>
              </li>
              <li class="info__list-item" @click="acordionItem5 = !acordionItem5" :class="{'is-active': acordionItem5}">
                <h4 class="info__list-title js-toggle"> Насколько выгоднее покупать недвижимость на этапе строительства в Таиланде? <svg class="icon icon-arrd">
                    <use xlink:href="../../static/sprite.svg#icon-arrd"></use>
                  </svg>
                </h4>
                <div class="info__list-content" :class="{'activate-item' : acordionItem5}">
                  На начальном этапе строительства недвижимость обычно дешевле на 40-50%. Конечно, конкретные условия зависят от застройщика. При покупке на стадии строительства можно вносить платежи по схеме 20% — первый взнос, 30% — во время строительства и 50% при получении ключей.
                </div>
              </li>
            </ul>
            <!-- END info-list -->
            <!-- END info-list -->
          </div>
          <div class="info__footer form">
            <h2 class="title-secondary"> Задайте нам вопрос </h2>
            <div class="form__in">
              <div class="form__col">
                <p class="form__text"> Если у вас возникли вопросы о работе Rайland, о рынке недвижимости в Таиланде, юридических деталях, напишите нам. </p>
                <p class="form__text"> Заполните форму и укажите ваши контактные данные. Наши специалисты рассмотрят вопрос и оперативно дадут на него ответ. </p>
              </div>
              <div class="form__col">
                <!-- BEGIN form -->
                <form action="">
                  <div class="form__row">
                    <input type="text" class="form__field" placeholder="Имя*" />
                  </div>
                  <div class="form__row">
                    <input type="email" class="form__field" placeholder="E-mail*" />
                  </div>
                  <div class="form__row">
                    <textarea class="form__textarea" placeholder="Комментарий"></textarea>
                  </div>
                  <div class="form__footer">
                    <button type="button" class="form__btn btn">
                      <span>отправить</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
</template>
<script>
import Menu from './shared/Menu';
import Footer from './shared/Footer';
    export default {
        name: 'Faq',
        components:{
            Menu,
            Footer
        },
        data(){
          return{
            acordionItem0: false,
            acordionItem1: false,
            acordionItem2: false,
            acordionItem3: false,
            acordionItem4: false,
            acordionItem5: false,
            acordionItem6: false,
            acordionItem7: false,
            acordionItem8: false,
            acordionItem9: false,
            acordionItem10: false,
            acordionItem11: false,
            acordionItem12: false,
            acordionItem13: false,
            acordionItem14: false,
            acordionItem15: false,
            acordionItem16: false,
          }
        }
    }

</script>
<style>
.activate-item{
  max-height: inherit;
}
</style>
