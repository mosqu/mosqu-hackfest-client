<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="my-4 mx-auto align-self-center"
      hover
      max-width="300"
      :elevation="hover ? 16 : 2"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="event.imgUrl"
      >
      </v-img>
      <v-card-title>{{ event.title}}</v-card-title>

      <v-card-subtitle class="pb-0 text--primary"> {{ event.schedule }} </v-card-subtitle>
      <v-card-subtitle class="pb-0 text--primary"> {{ event.masjid.name }} </v-card-subtitle>

      <v-card-text class="text--secondary">
        <div> {{ event.masjid.city }} </div>
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