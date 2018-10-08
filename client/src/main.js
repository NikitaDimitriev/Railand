import Vue from 'vue';
import router from './router';
// import store from '../src/store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>',
});