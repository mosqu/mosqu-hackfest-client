import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

axios.defaults.baseURL = "https://mosqu-service.herokuapp.com";

export default new Vuex.Store({
  state: {
    status: localStorage.getItem("status") || "",
    token: localStorage.getItem("token") || "",
    user: localStorage.getItem("user") || "",
    username: localStorage.getItem("username") || "",
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, payload) {
      state.status = "success";
      state.token = payload.token;
      state.user = payload.username;
      state.username = "username";
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.user = "";
      state.username = "";
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
                const name = user.username;
                localStorage.setItem("status", "success");
                localStorage.setItem("token", token);
                localStorage.setItem("user", name);
                localStorage.setItem("username", "username");
                // Add to axios header:
                axios.defaults.headers.common["Authorization"] = token;
                console.log("login success");
                console.log(resp.data);
                var payload = { token: token, username: name };
                commit("auth_success", payload);
                router.push("/");
                resolve(resp);
              } else {
                console.log(resp.data);
                commit("auth_error");
                localStorage.removeItem("status");
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.removeItem("username");
                resolve(resp);
              }
            } catch (e) {
              console.log(e);
              commit("auth_error");
              localStorage.removeItem("status");
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("username");
              reject(e);
            }
          })
          .catch((err) => {
            console.log(err);
            commit("auth_error");
            localStorage.removeItem("status");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("username");
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
        localStorage.removeItem("username");
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
    getUsername: (state) => state.username,
    getToken: (state) => state.token,
  },
});
