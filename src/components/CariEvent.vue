<template>
  <div class="content pa-lg-16 pa-8">
    <div class="display-1 mb-8 font-weight-bold">Cari {{$route.name.substring(4)}}</div>
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
      <div class="d-flex flex-wrap" v-if="isNotEmpty">
        <CardEvent class="mr-6" v-for="event in events" :key="event._id" v-bind:event="event"></CardEvent>
      </div>
      <div v-else>
        <p class="subtitle-1 font-italic text-center">Masjid tidak ditemukan</p>
      </div>
    </v-row>
    <v-row v-else >
      <v-col align="center">
        <div>Maaf terjadi kesalahan dalam pengambilan data</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import CardEvent from "@/components/CardEvent.vue";

export default {
  components: {
    CardEvent,
  },
  data() {
    return {
      isLoading: true,
      events: [],
      isError: false,
      isNotEmpty: true
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    filter: function(search) {
      this.getData(search);
    },
    getData: function(name) {
      this.isLoading = true;
      this.isError = false;
      this.axios(`program/list?name=${name ? name : ''}`)
        .then((response) => {
          this.events = response.data.data;
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.isError = true;
          console.log(error);
        });
    }
  },
  watch: {
    events: function(val) {
      if (val.length > 0 ) {
        this.isNotEmpty = true;
      } else {
        this.isNotEmpty = false;
      }
    }
  }
};
</script>
