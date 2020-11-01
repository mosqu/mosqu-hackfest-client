<template>
  <div>
    <v-container fluid pa-0 class="teal fill-height">
        <v-flex
        class="my-4 mr-4 d-flex align-self-center flex-column align-center"
      >
        <v-img
          alt="MosQu Logo"
          class="shrink"
          contain
          :src="require('../assets/mosqu-logo.png')"
          transition="scale-transition"
          width="60"
        />
        <p class="text-caption white--text">&copy; {{new Date().getFullYear()}} MosQu</p>
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
    </v-container>
  </div>
</template>
<script>
    export default {
        
    }
</script>
