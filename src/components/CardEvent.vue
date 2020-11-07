<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="my-4 mx-auto"
      wrap
      hover
      outlined
      width="300"
      :elevation="hover ? 6 : 0"
      height="450"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="event.images.length ? event.images[0].url : require('../assets/mosque-noimage.png')"
        :lazy-src="require('../assets/mosque-noimage.png')"
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
      <v-card-title>{{ event.name.slice(0, 40)}}</v-card-title>

      <v-card-subtitle class="pb-0 text--primary"> {{ event.description.slice(0, 60) }} </v-card-subtitle>
      <v-card-subtitle class="pb-0 text--primary"> {{ event.masjid.name }} </v-card-subtitle>

      <v-card-text class="text--secondary">
        <div> {{ event.masjid.city }} - {{ event.masjid.province }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" text> Daftar </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["event"],
};
</script>