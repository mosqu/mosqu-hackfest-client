<template>
  <v-app>
    <v-app-bar app flat>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawer = !drawer"
      />
      <div class="d-flex align-center">
        <v-img
          alt="MOSQU Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/mosqu-logo.png')"
          width="50"
        />
        {{ $route.name }}
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      :permanent="!$vuetify.breakpoint.smAndDown"
      :width="320"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ this.$store.getters.getUser }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ masjidName }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item to="/admin/home">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Beranda</v-list-item-title>
        </v-list-item>
        <v-list-item to="/admin/profile">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Profil</v-list-item-title>
        </v-list-item>
        <v-list-group
          v-for="item in $store.getters.getMenus"
          :key="item.title"
          :to="item.link"
          link
          :prepend-icon="item.icon"
          no-action
          ><template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            link
            v-for="child in item.childs"
            :key="child.title"
            :to="child.link"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-divider></v-divider>

      <template v-slot:append>
        <v-list-item link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        <div class="pa-2"></div>
      </template>
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
  data() {
    return {
      drawer: false,
      masjidName: "",
      activeMasjidIdx: 0,
      mini: false,
    };
  },
  mounted() {
    var masjidId = this.$store.getters.getMasjid;
    this.axios("masjid/detail/" + masjidId)
      .then((response) => {
        if (response.data.data !== null) {
          this.masjidName = response.data.data.name;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout");
    },
  },
};
</script>