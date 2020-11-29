import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/auth'

import Main from "../views/Main.vue";

import Search from "../views/Search.vue";
import CariMasjid from "../components/CariMasjid.vue";
import CariProgram from "../components/CariProgram.vue";

import Detail from "../views/Detail.vue";
import DetailProgram from "../components/DetailProgram.vue";
import DetailMasjid from "../components/DetailMasjid.vue";

import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

import Admin from "../views/Admin.vue";
import AdminHome from "../components/Admin/AdminHome.vue";
import AdminJamaah from "../components/Admin/AdminJamaah.vue";
import AdminJamaahSubmit from "../components/Admin/AdminJamaahSubmit.vue";
import AdminJamaahList from "../components/Admin/AdminJamaahList.vue";
import AdminJamaahStatistik from "../components/Admin/AdminJamaahStatistik.vue";
import AdminKeuangan from "../components/Admin/AdminKeuangan.vue";
import AdminKegiatan from "../components/Admin/AdminKegiatan.vue";

import ErrorPage from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
    children: [
      {
        path: "/",
        name: "LandingPage",
        component: Home,
      },
      {
        path: "/daftar",
        name: "Daftar",
        component: SignUp,
      },
      {
        path: "/masuk",
        name: "Masuk",
        component: SignIn,
      },
      {
        path: "/cari",
        name: "Cari",
        redirect: "/cari/masjid",
        component: Search,
        children: [
          {
            path: "masjid",
            name: "CariMasjid",
            component: CariMasjid,
          },
          {
            path: "program",
            name: "CariProgram",
            component: CariProgram,
          },
        ],
      },
      {
        path: "/detail",
        name: "detail",
        redirect: "/home",
        component: Detail,
        children: [
          {
            path: "masjid/:masjid_uid",
            name: "DetailMasjid",
            component: DetailMasjid,
            props: true,
          },
          {
            path: "program/:masjid_program_uid",
            name: "DetailProgram",
            component: DetailProgram,
            props: true,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    component: ErrorPage,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    redirect: "/admin/home",
    meta: { requiresAuth: true },
    children: [
      {
        path: "home",
        name: "Beranda",
        component: AdminHome,
      },
      {
        path: "jamaah",
        name: "Jamaah",
        component: AdminJamaah,
        redirect: "/admin/jamaah/submit",
        children: [
          {
            path: "submit",
            name: "Submit Data Jamaah",
            component: AdminJamaahSubmit,
          },
          {
            path: "list",
            name: "List Data Jamaah",
            component: AdminJamaahList,
          },
          {
            path: "statistik",
            name: "statistik-jamaah",
            component: AdminJamaahStatistik,
          },
        ],
      },
      {
        path: "keuangan",
        name: "Keuangan",
        component: AdminKeuangan,
      },
      {
        path: "kegiatan",
        name: "Kegiatan",
        component: AdminKegiatan,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/masuk')
  } else {
    next()
  }
})

export default router;
