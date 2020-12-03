const route = [

  {
    path: "/",
    name: "Home",
    component: require("@/views/Main.vue").default,
    children: [

      {
        path: "/",
        name: "LandingPage",
        component: require("@/views/Home.vue").default,
      },

      {
        path: "/daftar",
        name: "Daftar",
        component: require("@/components/SignUp.vue").default,
      },

      {
        path: "/masuk",
        name: "Masuk",
        component: require("@/components/SignIn.vue").default,
      },

      {
        path: "/cari",
        name: "Cari",
        redirect: "/cari/masjid",
        component: require("@/views/Search.vue").default,
        children: [

          {
            path: "masjid",
            name: "CariMasjid",
            component: require("@/components/CariMasjid.vue").default,
          },

          {
            path: "program",
            name: "CariProgram",
            component: require("@/components/CariProgram.vue").default,
          },
          
        ],
      },

      {
        path: "/detail",
        name: "detail",
        redirect: "/home",
        component: require("@/views/Detail.vue").default,
        children: [

          {
            path: "masjid/:masjid_uid",
            name: "DetailMasjid",
            component: require("@/components/DetailMasjid.vue").default,
            props: true,
          },

          {
            path: "program/:masjid_program_uid",
            name: "DetailProgram",
            component: require("@/components/DetailProgram.vue").default,
            props: true,
          },

        ],
      },

      {
        path: "*",
        component: require("@/views/Error.vue").default,
      },

    ],
  },

]

export default route;