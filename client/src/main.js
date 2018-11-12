import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Slick from 'vue-slick';
import * as VueGoogleMaps from "vue2-google-maps";
import axios from 'axios';


Vue.config.productionTip = false
Vue.use(Element);
Vue.use(Slick);
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
