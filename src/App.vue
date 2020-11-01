<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/mosqu-logo.png')"
          transition="scale-transition"
          width="50"
        />
        <div class="menu ml-10">
          <a href="/#home" style="text-decoration: none;">
            <v-btn text :ripple="true" exact>Beranda</v-btn>
          </a>
          <a href="/#about" style="text-decoration: none;">
            <v-btn text :ripple="true" >Tentang</v-btn>
          </a>
          <a href="/#feature" style="text-decoration: none;">
            <v-btn text :ripple="true">Fitur</v-btn>
          </a>
        </div>
      </div>

      <v-app-bar-nav-icon
        v-else
        @click.stop="drawer = !drawer"
      />

      <v-flex v-if="$vuetify.breakpoint.xsOnly" class="d-flex" align-center>
        <v-img
          alt="MosQu Logo"
          class="mr-2 shrink align-self-center"
          contain
          :src="require('./assets/mosqu-logo.png')"
          transition="scale-transition"
          width="50"
        />
        <h4>MosQu</h4>
      </v-flex>

      <v-spacer></v-spacer>

      <a href="/#register" style="text-decoration: none;">
        <v-card
          class="px-4 text-button"
          v-if="!this.$store.getters.isLoggedIn && $vuetify.breakpoint.smAndUp"
          color="teal white--text"
          :ripple="true"
          style="text-decoration: none; background-color: inherit"
          elevation="0"
          >DAFTAR</v-card
        >
      </a>
      <v-card
        flat
        class="px-4 text-button"
        v-if="!this.$store.getters.isLoggedIn && $vuetify.breakpoint.smAndUp"
        text
        color="grey--text text--darken-2"
        :ripple="true"
        style="text-decoration: none; background-color: inherit"
        to="/masuk"
        >MASUK</v-card
      >

      <div v-if="this.$store.getters.isLoggedIn">
        Selamat datang,
        <span style="font-weight: bold">
          {{ this.$store.getters.getUser }}
        </span>
        <v-icon @click="logout">mdi-logout</v-icon>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-flex class="ma-2 d-flex" align-center>
        <v-img
          alt="Vuetify Logo"
          class="mr-2 shrink align-self-center"
          contain
          :src="require('./assets/mosqu-logo.png')"
          transition="scale-transition"
          width="50"
        />MosQu
      </v-flex>
      <v-list nav>
        <v-list-item-group>
          <v-list-item to="/" exact> Beranda </v-list-item>

          <v-list-item to="#about"> Tentang </v-list-item>

          <v-list-item to="/cari/masjid"> Cari Masjid </v-list-item>

          <v-list-item to="/daftar"> Daftar </v-list-item>

          <v-list-item to="/masuk"> Masuk </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  
  export default {
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      isHome: function () {
        return this.$route.path.includes("home");
      },
      logout: function () {
        this.$store.dispatch("logout");
      },
    },
  };
</script>