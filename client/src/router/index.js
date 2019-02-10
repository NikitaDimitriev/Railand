import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Cooperation from '@/components/Cooperation'
import About from '@/components/About'
import Admin from '@/components/Admin'
import Catalog from '@/components/Catalog'
import Journal from '@/components/Journal'
import Admin_Objects from '@/components/Admin_Objects'
import Admin_Articles from '@/components/Admin_Articles'
import Admin_Users from '@/components/Admin_Users'
import Admin_Reviews from '@/components/Admin_Reviews'
import ObjectSingle from '@/components/ObjectSingle'
import ComplexSingle from '@/components/ComplexSingle'
import Article from '@/components/Article'
import Kata from '@/components/Kata'
import Botanica from '@/components/Botanica'
import RPM from '@/components/RPM'
import Personal_Area from '@/components/Personal_Area'
import Complex from '@/components/Complex';
import NotFound from '@/components/NotFound';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/cooperation',
      name: 'Cooperation',
      component: Cooperation
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/articles',
      name: 'Admin_Articles',
      component: Admin_Articles
    },
    {
      path: '/admin/reviews',
      name: 'Admin_Reviews',
      component: Admin_Reviews
    },
    {
      path: '/admin/users',
      name: 'Admin_Users',
      component: Admin_Users
    },
    {
      path: '/admin/objects',
      name: 'Admin_Objects',
      component: Admin_Objects
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog,
      props: true
    },
    {
      path: '/live-in-phuket',
      name: 'Journal',
      component: Journal
    },
    {
      path: '/catalog/:type/:id',
      name: 'ObjectSingle',
      component: ObjectSingle
    },
    {
      path: '/complex/:id',
      name: 'ComplexSingle',
      component: ComplexSingle
    },
    {
      path: '/live-in-phuket/Botanica',
      name: 'Botanica',
      component: Botanica
    },
    {
      path: '/live-in-phuket/Kata',
      name: 'Kata',
      component: Kata
    },
    {
      path: '/live-in-phuket/RPM',
      name: 'RPM',
      component: RPM
    },
    {
      path: '/live-in-phuket/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/personal-area',
      name: 'Personal_Area',
      component: Personal_Area
    },
    {
      path: '/admin/complex',
      name: 'Complex',
      component: Complex
    },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    }
    else {
      return { x: 0, y: 0 }
    }
  }
})
