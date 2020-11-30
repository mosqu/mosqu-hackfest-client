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
          <v-list-item-subtitle v-if="!!masjidList">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                  {{ getActiveMasjidName }}
                  <v-icon>mdi-menu-down</v-icon>
                </div>
              </template>
              <v-list>
                <v-list-item v-for="(masjid, index) in masjidList" :key="index" link>
                  <v-list-item-title v-if="!!masjid" @click="activeMasjidIdx = index">{{ masjid.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item-subtitle>
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
      masjidList: [],
      activeMasjidIdx: 0,
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
            { title: "Submit Data Jamaah", link: "/admin/jamaah/submit" },
            { title: "Lihat Data Jamaah", link: "/admin/jamaah/list" },
            { title: "Lihat Statistik Jamaah", link: "/admin/jamaah/statistik" },
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
  mounted() {
    var masjidIdList = this.$store.getters.getMasjid.split(';');
    masjidIdList.pop();
    console.log(masjidIdList);
    for (var masjidId of masjidIdList) {
      this.addMasjidById(masjidId);
    }
  },
  computed: {
    getActiveMasjidName() {
      if(this.masjidList.length > 0){
        if(this.masjidList[this.activeMasjidIdx] !== undefined){
          return this.masjidList[this.activeMasjidIdx].name;
        } else {
          return "";
        }
      } else {
        return "";
      }
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout");
    },
    addMasjidById: function (masjidId) {
      this.axios("masjid/detail/" + masjidId)
        .then((response) => {
          if(response.data.data !== null){
            this.masjidList.push(response.data.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>