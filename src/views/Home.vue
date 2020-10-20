<template>
  <v-container fluid pa-0>
    <v-row no-gutters wrap align="start">
      <v-col sm="12" md="12" lg="6">
        <v-card flat class="ma-16">
          <v-flex v-if="$route.name == 'Home'" align-self-center>
            <h1 class="ma-2">Platform Masjid Online</h1>
            <p class="ma-2">
              Urusan masjid jadi mudah! Platform pertama untuk digitalisasi
              masjid di Indonesia!
            </p>
            <v-btn
              class="ma-2"
              color="teal white--text"
              elevation="2"
              to="/cari/masjid"
              >Cari Masjid</v-btn
            >
            <v-btn
              class="ma-2"
              color="deep-orange lighten-1 white--text"
              elevation="2"
              >Cari Event</v-btn
            >
          </v-flex>
          <router-view />
        </v-card>
      </v-col>
      <v-col>
        <v-card
          id="mosque-image"
          class="d-flex align-end teal lighten-3 fill-height"
          :class="$vuetify.breakpoint.lgAndUp ? 'rounded-l-xl' : 'rounded-t-xl'"
          tile
          ripple
          app
        >
          <v-img
            :src="require('../assets/masjid-landingpage.png')"
            contain
            max-height="560"
            transition="scale-transition"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>