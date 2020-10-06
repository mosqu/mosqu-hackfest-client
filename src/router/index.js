import Vue from 'vue'
import VueRouter from 'vue-router'

import Search from '../views/Search.vue'
import CariMasjid from '../components/CariMasjid.vue'
import CariEvent from '../components/CariEvent.vue'

import Detail from '../views/Detail.vue'
import DetailEvent from '../components/DetailEvent.vue'
import DetailMasjid from '../components/DetailMasjid.vue'

import Home from '../views/Home.vue'
import About from '../components/About.vue'
import SignIn from '../components/SignIn.vue'

import ErrorPage from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'about',
        name: 'About',
        component: About
      },
      {
        path: 'signin',
        name: 'SignIn',
        component: SignIn
      }
    ]
  },
  {
    path: '/cari',
    name: 'Cari',
    redirect: '/cari/masjid',
    component: Search,
    children: [
      {
        path: 'masjid',
        name: 'CariMasjid',
        component: CariMasjid
      },
      {
        path: 'event',
        name: 'CariEvent',
        component: CariEvent
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    redirect: '/home',
    component: Detail,
    children: [
      {
        path: 'masjid',
        name: 'DetailMasjid',
        component: DetailMasjid
      },
      {
        path: 'event',
        name: 'DetailEvent',
        component: DetailEvent
      }
    ]
  },
  {
    path: '*',
    component: ErrorPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
