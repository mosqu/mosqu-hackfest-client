const route = [

  {
    path: "/admin",
    name: "Admin",
    component: require("@/views/Admin.vue").default,
    redirect: "/admin/home",
    meta: { 
      requiresAuth: true 
    },
    children: [

      {
        path: "home",
        name: "Beranda",
        component: require("@/views/Admin/AdminHome.vue").default,
      },

      {
        path: "jamaah",
        name: "Jamaah",
        component: require("@/views/Admin/AdminJamaah.vue").default,
        redirect: "/admin/jamaah/submit",
        children: [

          {
            path: "submit",
            name: "Submit Data Jamaah",
            component: require("@/views/Admin/AdminJamaahSubmit.vue").default,
          },

          {
            path: "list",
            name: "List Data Jamaah",
            component: require("@/views/Admin/AdminJamaahList.vue").default,
          },

          {
            path: "statistik",
            name: "statistik-jamaah",
            component: require("@/views/Admin/AdminJamaahStatistik.vue").default,
          },

          {
            path: "blast",
            name: "blast-wa",
            component: require("@/views/Admin/AdminJamaahBlast.vue").default,
          },

        ],
      },

      {
        path: "keuangan",
        name: "Keuangan",
        component: require("@/views/Admin/AdminKeuangan.vue").default,
      },

      {
        path: "kegiatan",
        name: "Kegiatan",
        component: require("@/views/Admin/AdminKegiatan.vue").default,
      },
      
    ],
  },

]

export default route;