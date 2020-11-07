<template>
  <v-app>
    <v-app-bar app flat>
      <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex align-center">
        <v-img
          alt="MOSQU Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/mosqu-logo.png')"
          width="50"
        />
        <div class="menu ml-10">
          <a href="/#home" style="text-decoration: none;">
            <v-btn text :ripple="true" exact>Beranda</v-btn>
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
          :src="require('@/assets/mosqu-logo.png')"
          width="50"
        />
        <h4>MOSQU</h4>
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
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Account', icon: 'mdi-account-box' },
          { title: 'Admin', icon: 'mdi-gavel' },
        ],
      }
    },
  }
</script>