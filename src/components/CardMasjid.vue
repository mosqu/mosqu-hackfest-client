<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="my-4 mx-auto"
      wrap
      hover
      width="300"
      :elevation="hover ? 16 : 2"
      to="/detail/masjid"
    >
      <v-img class="white--text align-end" height="200px" :src="masjid.imgUrl">
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

      <v-card-subtitle class="pb-0 text--primary"> {{ masjid.city }} </v-card-subtitle>

      <v-card-text class="text--secondary">
        <div>{{ masjid.address }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" text> Lihat Event </v-btn>
        <v-btn color="primary" text> Lihat Program </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["masjid"],
};
</script>