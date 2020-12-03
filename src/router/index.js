import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/auth";

import admin from "./admin";
import main from "./main";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ... admin,
    ... main
  ]
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
