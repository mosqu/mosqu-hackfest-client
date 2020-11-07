import Vue from 'vue';
import VueRouter from 'vue-router';

import Search from '../views/Search.vue';
import CariMasjid from '../components/CariMasjid.vue';
import CariEvent from '../components/CariEvent.vue';

import Detail from '../views/Detail.vue';
import DetailEvent from '../components/DetailEvent.vue';
import DetailMasjid from '../components/DetailMasjid.vue';

import Home from '../views/Home.vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';

import Main from '../views/Main.vue';
import Admin from '../views/Admin.vue';

import ErrorPage from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
    redirect: '/',
    children: [
        {
          path: '/',
          name: 'LandingPage',
          component: Home
        },
        {
          path: '/daftar',
          name: 'Daftar',
          component: SignUp
        },
        {
          path: '/masuk',
          name: 'Masuk',
          component: SignIn
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
              path: 'masjid/:masjid_uid',
              name: 'DetailMasjid',
              component: DetailMasjid,
              props: true
            },
            {
              path: 'event',
              name: 'DetailEvent',
              component: DetailEvent
            }
          ]
        },
    ]
  },
  {
    path: '*',
    component: ErrorPage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: []
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
