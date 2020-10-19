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
          width="60"
        />
        <v-btn text :ripple="true" to="/home" exact>Beranda</v-btn>
        <v-btn text :ripple="true" to="/home/about">Tentang</v-btn>
        <v-btn text :ripple="true" to="/cari/masjid">Cari Masjid</v-btn>
        <v-btn text :ripple="true" to="/cari/event">Cari Event</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="!this.$store.getters.isLoggedIn"
        color="teal white--text"
        :ripple="true"
        href="/home/daftar"
        >Daftar</v-btn
      >
      <v-btn
        v-if="!this.$store.getters.isLoggedIn"
        text
        color="white--text"
        :ripple="true"
        href="/home/masuk"
        >Masuk</v-btn
      >

      <div v-if="this.$store.getters.isLoggedIn">
        Selamat datang,
        <span style="font-weight: bold">
          {{ this.$store.getters.getUser }}
        </span>
        <v-icon @click="logout">mdi-logout</v-icon>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="mt-8 pa-6 d-flex align-stretch" color="primary">
      <v-card
        color="primary"
        flat
        class="mr-16 d-flex align-self-center flex-column align-center"
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
      </v-card>

      <v-card color="primary" flat class="mx-16 d-flex flex-column align-left">
        <h3 class="teal--text text--lighten-4 mb-2">MosQu</h3>
        <a class="white--text" style="text-decoration: none" href="/home"
          >Beranda</a
        >
        <a class="white--text" style="text-decoration: none" href="/home/about"
          >Tentang</a
        >
        <a class="white--text" style="text-decoration: none" href="/home/signin"
          >Daftar</a
        >
        <a class="white--text" style="text-decoration: none" href="/home/signin"
          >Masuk</a
        >
      </v-card>

      <v-card color="primary" flat class="mx-16 d-flex flex-column align-left">
        <h3 class="teal--text text--lighten-4 mb-2">Cari</h3>
        <a class="white--text" style="text-decoration: none" href="/cari/masjid"
          >Cari Masjid</a
        >
        <a class="white--text" style="text-decoration: none" href="/cari/event"
          >Cari Event</a
        >
      </v-card>

      <v-spacer />

      <v-card
        color="primary"
        flat
        class="mr-8 py-4 d-flex flex-column align-left justify-space-around"
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
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    isHome: function () {
      return this.$route.path.includes("home");
    },
    logout: function(){
      this.$store.dispatch('logout');
    }
  },
};
</script>