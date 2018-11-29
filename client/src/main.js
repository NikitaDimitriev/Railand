import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as VueGoogleMaps from "vue2-google-maps";
import axios from 'axios';
import VueCarousel from 'vue-carousel';
import VueScrollTo from 'vue-scrollto';



Vue.use(VueScrollTo);
Vue.config.productionTip = false
Vue.use(VueCarousel);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(Element);
Vue.prototype.$axios = axios
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB8tBd9ZPhS9UOWhG3Y9aS-1Y0DY_e7TGc",
    libraries: "places" // necessary for places input
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
