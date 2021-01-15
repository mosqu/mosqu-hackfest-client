import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: localStorage.getItem("status") || "",
    token:  localStorage.getItem("token") || "",
    user:   localStorage.getItem("user") || "",
    masjid: localStorage.getItem("masjid") || "",
    menus:  localStorage.getItem("menus") ? JSON.parse(localStorage.getItem("menus")) : ""
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, payload) {
      state.status    = "success";
      state.token     = payload.token;
      state.user      = payload.username;
      state.masjid    = payload.masjid;
      state.menus     = payload.menus;
    },
    auth_error(state) {
      state.status    = "error";
    },
    logout(state) {
      state.status    = "";
      state.token     = "";
      state.user      = "";
      state.username  = "";
      state.menus     = "";
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .post("/user/login", user)
          .then((resp) => {
            try {
              const status = resp.data.status;
              if (status) {
                const token = resp.data.data.token;
                const name  = user.username;
                localStorage.setItem("status", "success");
                localStorage.setItem("token", token);
                localStorage.setItem("user", name);
                // Add to axios header:
                axios.defaults.headers.common["Authorization"] = token;
                console.log("login success");
                // Get meta data
                axios.get("/meta_").then(resp => {
                  var masjidId  = resp.data.masjid.masjid_uid;
                  localStorage.setItem("masjid", masjidId);
                  localStorage.setItem("menus", JSON.stringify(resp.data.menus));

                  var payload   = { 
                    token: token, 
                    username: name , 
                    masjid: masjidId,
                    menus: resp.data.menus
                  };
                  commit("auth_success", payload);
                  router.push("/admin");
                  resolve(resp);
                }).catch(err => {
                  console.log("Can't get metadata, error: " + err);
                  reject(err)
                })

              } else {
                commit("auth_error");
                localStorage.removeItem("status");
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.removeItem("masjid");
                localStorage.removeItem("menus");
                reject(resp);
              }
            } catch (e) {
              commit("auth_error");
              localStorage.removeItem("status");
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("masjid");
              localStorage.removeItem("menus");
              reject(e);
            }
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("status");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("masjid");
            localStorage.removeItem("menus");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        console.log("logout success");
        commit("logout");
        localStorage.removeItem("status");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("masjid");
        localStorage.removeItem("menus");
        delete axios.defaults.headers.common["Authorization"];
        router.push("/masuk");
        resolve();
      });
    },
  },
  getters: {  
    getUser: (state) => state.user,
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    getToken: (state) => state.token,
    getMasjid: (state) => state.masjid,
    getMenus: (state) => state.menus,
  },
});
