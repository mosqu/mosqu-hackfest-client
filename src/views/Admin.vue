<template>
  <v-app>
    <v-app-bar app flat>
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

    <v-navigation-drawer app :mini-variant.sync="mini" permanent :width="320">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ this.$store.getters.getUser }}
          </v-list-item-title>
          <v-list-item-subtitle> Masjid Nurul Huda </v-list-item-subtitle>
        </v-list-item-content>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item to="/admin/home">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Beranda</v-list-item-title>
        </v-list-item>
        <v-list-group
          v-for="item in items.slice(1)"
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

          <v-list-item link v-for="child in item.childs" :key="child.title">
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-divider></v-divider>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="logout" color="primary" block> Logout </v-btn>
        </div>
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
      items: [
        {
          title: "Beranda",
          icon: "mdi-view-dashboard",
          link: "/admin/home",
          childs: [],
        },
        {
          title: "Jamaah",
          icon: "mdi-account-box",
          link: "/admin/jamaah",
          childs: [
            { title: "Submit Data Jamaah", link: "" },
            { title: "Lihat Data Jamaah", link: "" },
            { title: "Lihat Statistik Jamaah", link: "" },
          ],
        },
        {
          title: "Keuangan",
          icon: "mdi-cart",
          link: "/admin/keuangan",
          childs: [],
        },
        {
          title: "Kegiatan",
          icon: "mdi-calendar",
          link: "/admin/kegiatan",
          childs: [],
        },
      ],
      mini: false,
    };
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout");
    },
  },
};
</script>