<template>
  <v-container fluid pa-0>
    <h1 class="ma-8">Cari {{ $route.name.substring(4) }}</h1>
    <v-text-field
      class="mx-8"
      label="Cari"
      v-model="search"
      outlined
      clearable
      single-line
      append-icon="mdi-magnify"
      @click:append="filter"
    ></v-text-field>
    <router-view />

    <section class="mt-16" id="footer">
      <HomeFooter />
    </section>
  </v-container>
</template>

<script>
import HomeFooter from "../components/HomeFooter";

export default {
  components: {
    HomeFooter
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    filter: function () {},
  },
};
</script>