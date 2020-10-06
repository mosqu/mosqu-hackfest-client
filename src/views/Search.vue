<template>
  <v-container>
    <h1>Cari Masjid</h1>
    <v-text-field
      v-model="message4"
      label="Cari"
      outlined
      clearable
      single-line
      append-icon="mdi-magnify"
    ></v-text-field>
    <v-row no-gutters>
      <v-col cols="4">
        <CardMasjid></CardMasjid>
      </v-col>
      <v-col cols="4">
        <CardMasjid></CardMasjid>
      </v-col>
      <v-col cols="4">
        <CardMasjid></CardMasjid>
      </v-col>
      <v-col cols="4">
        <CardMasjid></CardMasjid>
      </v-col>
      <v-col cols="4">
        <CardMasjid></CardMasjid>
      </v-col>
      <v-col cols="4">
        <CardMasjid></CardMasjid>
      </v-col>
      <v-col cols="4">
        <CardMasjid></CardMasjid>
      </v-col>
      <v-col cols="4">
        <CardMasjid></CardMasjid>
      </v-col>
    </v-row>
    <router-view />
  </v-container>
</template>

<script>
// @ is an alias to /src
import CardMasjid from "@/components/CardMasjid.vue";

export default {
  name: "Home",
  components: {
    CardMasjid,
  },
};
</script>
