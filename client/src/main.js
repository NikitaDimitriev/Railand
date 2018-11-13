import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as VueGoogleMaps from "vue2-google-maps";
import axios from 'axios';
import VueCarousel from 'vue-carousel';


Vue.config.productionTip = false
Vue.use(VueCarousel);
Vue.use(Element);
Vue.prototype.$axios = axios
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBUBauxRVEUYy1DRnHPd2XhkLPM5dv0FJo",
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
