<template>
    <footer class="footer">
    <div class="footer__top">
      <div class="footer__top-in inner">
        <div class="footer__top-left">
          <ul class="fnav">
            <li class="fnav__item"><a href="#" class="fnav__link">Покупка</a></li>
            <li class="fnav__item"><a href="#" class="fnav__link">Аренда</a></li>
            <li class="fnav__item"><router-link to="/catalog" class="fnav__link">Недвижимость</router-link></li>
            <li class="fnav__item"><router-link to="/live-in-phuket" class="fnav__link">Жизнь на Пхукете</router-link></li>
            <li class="fnav__item"><router-link to="/about" class="fnav__link">О Нас</router-link></li>
            <li class="fnav__item"><router-link to="/contact" class="fnav__link">Контакты</router-link></li>
          </ul>
        </div>
        <div class="footer__top-right">
          <a href="#" class="tel">+ 66 81 737 1687</a>
          <ul class="footer__messengers messengers">
            <li class="messengers__item">
              <a href="https://wa.me/+66817371687'" class="messengers__links messengers__whatsapp"></a>
            </li>
            <li class="messengers__item">
              <a href="viber://add?number=+66817371687" class="messengers__links messengers__viber"></a>
            </li>
            <li class="messengers__item">
              <a href="tg://resolve?domain=nikname" class="messengers__links messengers__telegram"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-in inner">
        <div class="footer__bottom-left">
          <a href="#" class="footer__logo">Raйland</a>
          <div class="copyright"> Все права защищены. <br> При использовании или копировании материалов прямая ссылка
            на сайт обязательна. </div>
        </div>
        <div class="footer__bottom-right">
          <ul class="social">
            <li class="social__item"><a href="https://www.facebook.com/railand.property.international/" target="_blank" class="social__link social__fb"></a></li>
            <li class="social__item"><a href="https://twitter.com/RailandProperty" target="_blank" class="social__link social__tw"></a></li>
            <li class="social__item"><a href="#" class="social__link social__vk"></a></li>
            <li class="social__item"><a href="https://www.instagram.com/railand_property_international/" target="_blank" class="social__link social__insta"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
    name: "Footer"
}
</script>
