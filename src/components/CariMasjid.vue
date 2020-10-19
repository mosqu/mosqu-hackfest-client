<template>
  <v-row v-if="!isError" no-gutters wrap>
    <v-col v-if="isLoading" lg="4" md="6" sm="12">
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-col>
    <v-col v-if="isLoading" lg="4" md="6" sm="12">
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-col>
    <v-col v-if="isLoading" lg="4" md="6" sm="12">
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
  <v-row v-else >
    <v-col align="center">
      <div>Maaf terjadi kesalahan dalam pengambilan data</div>
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
      isLoading: true,
      isError: false
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
        this.isLoading = false;
        this.isError = true;
        console.log(error);
      });
  },
};
</script>
