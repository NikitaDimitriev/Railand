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
      path: '/сooperation',
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
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/live-in-phuket',
      name: 'Journal',
      component: Journal
    }
  ]
})
