import Vue from 'vue';
import Router from 'vue-router';
import {sync} from 'vuex-router-sync';
// import store from '../store';
import route from './route';

Vue.use(Router);

const routes = route;

const router = new Router({
    // mode: 'history',
    routes,
});

sync(router);

export default router;