<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(item, i) in items.slice(1)" :key="i">
          <v-card>
            <v-card-title primary-title>
              <v-icon class="mr-2">{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-card-title>
            <v-card-actions>
              <v-btn text :to="item.link">Lihat</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Beranda", icon: "mdi-view-dashboard", link: "/admin/home" },
        { title: "Jamaah", icon: "mdi-account-box", link: "/admin/jamaah" },
        { title: "Keuangan", icon: "mdi-cart", link: "/admin/keuangan" },
        { title: "Kegiatan", icon: "mdi-calendar", link: "/admin/kegiatan" },
      ],
    };
  },
};
</script>
