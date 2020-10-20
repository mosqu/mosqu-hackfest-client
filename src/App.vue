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
        <v-btn text :ripple="true" to="/home" exact>Beranda</v-btn>
        <v-btn text :ripple="true" to="/home/about">Tentang</v-btn>
        <v-btn text :ripple="true" to="/cari/masjid">Cari Masjid</v-btn>
      </div>

      <v-app-bar-nav-icon
        v-else
        @click.stop="drawer = !drawer"
      />

      <v-flex v-if="$vuetify.breakpoint.xsOnly" class="d-flex" align-center>
        <v-img
          alt="Vuetify Logo"
          class="mr-2 shrink align-self-center"
          contain
          :src="require('./assets/mosqu-logo.png')"
          transition="scale-transition"
          width="50"
        />
        <h4>MosQu</h4>
      </v-flex>

      <v-spacer></v-spacer>

      <v-card
        class="px-4 text-button"
        v-if="!this.$store.getters.isLoggedIn && $vuetify.breakpoint.smAndUp"
        color="teal white--text"
        :ripple="true"
        style="text-decoration: none; background-color: inherit"
        to="/home/daftar"
        >DAFTAR</v-card
      >
      <v-card
        flat
        class="px-4 text-button"
        v-if="!this.$store.getters.isLoggedIn && $vuetify.breakpoint.smAndUp"
        text
        color="grey--text text--darken-2"
        :ripple="true"
        style="text-decoration: none; background-color: inherit"
        to="/home/masuk"
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
          <v-list-item to="/home" exact> Beranda </v-list-item>

          <v-list-item to="/home/about"> Tentang </v-list-item>

          <v-list-item to="/cari/masjid"> Cari Masjid </v-list-item>

          <v-list-item to="/home/daftar"> Daftar </v-list-item>

          <v-list-item to="/home/masuk"> Masuk </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="mt-8 d-flex align-stretch" color="primary">
      <v-flex
        class="my-4 mr-4 d-flex align-self-center flex-column align-center"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink"
          contain
          :src="require('./assets/mosqu-logo.png')"
          transition="scale-transition"
          width="60"
        />
        <p class="text-caption white--text">&copy; 2020 MosQu</p>
      </v-flex>

      <v-flex class="ma-4 d-flex flex-column align-left">
        <h3 class="teal--text text--lighten-4 mb-2">MosQu</h3>
        <v-card
          flat
          class="white--text"
          style="text-decoration: none; background-color: inherit"
          to="/home"
          >Beranda</v-card
        >
        <v-card
          flat
          class="white--text"
          style="text-decoration: none; background-color: inherit"
          to="/home/about"
          >Tentang</v-card
        >
        <v-card
          flat
          class="white--text"
          style="text-decoration: none; background-color: inherit"
          to="/home/daftar"
          >Daftar</v-card
        >
        <v-card
          flat
          class="white--text"
          style="text-decoration: none; background-color: inherit"
          to="/home/masuk"
          >Masuk</v-card
        >
      </v-flex>

      <v-flex class="ma-4 d-flex flex-column align-left">
        <h3 class="teal--text text--lighten-4 mb-2">Cari</h3>
        <v-card
          flat
          class="white--text"
          style="text-decoration: none; background-color: inherit"
          to="/cari/masjid"
          >Cari Masjid</v-card
        >
      </v-flex>

      <v-spacer />

      <v-flex
        class="my-4 ml-4 d-flex flex-column align-left justify-space-around"
      >
        <a
          text
          class="white--text"
          style="text-decoration: none"
          href="http://instagram.com"
          target="_blank"
        >
          <v-icon left style="text-decoration: none" color="white"
            >mdi-instagram</v-icon
          >
          <span>Instagram</span>
        </a>
        <a
          text
          class="white--text"
          style="text-decoration: none"
          href="http://facebook.com"
          target="_blank"
        >
          <v-icon left style="text-decoration: none" color="white"
            >mdi-facebook</v-icon
          >
          <span>Facebook</span>
        </a>
        <a
          text
          class="white--text"
          style="text-decoration: none"
          href="http://twitter.com"
          target="_blank"
        >
          <v-icon left style="text-decoration: none" color="white"
            >mdi-twitter</v-icon
          >
          <span>Twitter</span>
        </a>
      </v-flex>
    </v-footer>
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