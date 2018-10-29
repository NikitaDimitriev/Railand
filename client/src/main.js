// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCarousel from 'vue-carousel'
import * as VueGoogleMaps from "vue2-google-maps";
import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
// import 'vue-material/dist/theme/default-dark.css'

Vue.config.productionTip = false
Vue.use(Element);
Vue.use(VueCarousel);
Vue.use(VueMaterial);
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
