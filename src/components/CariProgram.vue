<template>
  <div class="content pa-lg-16 pa-8">
    <div class="display-1 mb-8 font-weight-bold">
      Cari {{ $route.name.substring(4) }}
    </div>
    <div class="search">
      <v-text-field
        label="Cari berdasarkan nama"
        outlined
        clearable
        single-line
        append-icon="mdi-magnify"
        @change="filter"
      ></v-text-field>
    </div>
    <v-row v-if="!isError && isNotEmpty" no-gutters wrap>
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
    <div v-else-if="!isNotEmpty">
      <p class="subtitle-1 font-italic text-center">Program tidak ditemukan</p>
    </div>
    <v-row v-else>
      <v-col align="center">
        <div>Maaf terjadi kesalahan dalam pengambilan data</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import CardProgram from "@/components/CardProgram.vue";

export default {
  components: {
    CardProgram,
  },
  data() {
    return {
      programs: [],
      isLoading: true,
      isError: false,
      isNotEmpty: true,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    filter: function (search) {
      this.getData(search);
    },
    getData: function (name) {
      this.axios(`program/list?name=${name ? name : ""}`)
        .then((response) => {
          this.programs = response.data.data;
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.isError = true;
          console.log(error);
        });
    },
  },
  watch: {
    programs: function (val) {
      if (val.length > 0) {
        this.isNotEmpty = true;
      } else {
        this.isNotEmpty = false;
      }
    },
  },
};
</script>
