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
    <v-col v-for="(program, i) in programs" :key="i" lg="4" md="6" sm="12">
      <CardProgram v-bind:program="program"></CardProgram>
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
import CardProgram from "@/components/CardProgram.vue";

export default {
  name: "Home",
  components: {
    CardProgram,
  },
  data() {
    return {
      programs: [],
      isLoading: true,
      isError: false
    };
  },
  mounted() {
    this.axios('program/list')
      .then((response) => {
        console.log(response.data);
        this.programs = response.data.data;
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
