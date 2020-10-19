<template>
  <v-row no-gutters>
    <v-col v-if="isLoading">
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-col>
    <v-col v-if="isLoading">
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-col>
    <v-col v-if="isLoading">
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-col>
    <v-col v-for="masjid in masjids" :key="masjid._id" lg="4" md="6" sm="12">
      <CardMasjid v-bind:masjid="masjid"></CardMasjid>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import CardMasjid from "@/components/CardMasjid.vue";

export default {
  name: "Home",
  components: {
    CardMasjid,
  },
  data() {
    return {
      masjids: [],
      isLoading: true
    };
  },
  mounted() {
    this.axios('masjid/list')
      .then((response) => {
        console.log(response.data);
        this.masjids = response.data.data;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
