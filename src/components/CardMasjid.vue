<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="my-4 mx-auto"
      wrap
      hover
      width="300"
      :elevation="hover ? 16 : 2"
      :to="{ path: '/detail/masjid', query: { id: masjid.masjid_uid } }"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="timeout ? require('../assets/mosque-noimage.png') : masjid.imgUrl"
        contain
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <v-card-title>{{ masjid.name }}</v-card-title>

      <v-card-subtitle class="pb-0 text--primary">
        {{ masjid.city }}
      </v-card-subtitle>

      <v-card-text class="text--secondary">
        <div>{{ masjid.address }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" text> Lihat Event </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data() {
    return {
      timeout: false,
    };
  },
  props: ["masjid"],
  mounted() {
    setTimeout(() => {
      if(!this.masjid.imgUrl){
        this.timeout = true
      }
    }, 5000);
  },
};
</script>