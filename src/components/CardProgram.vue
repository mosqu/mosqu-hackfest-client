<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="my-4 mx-auto"
      wrap
      hover
      outlined
      width="300"
      :elevation="hover ? 6 : 0"
      :to="{ path: '/detail/program/' + program.masjid_program_uid }"
      height="380"
    >
      <v-carousel
        v-if="program.images && program.images.length"
        cycle
        interval="4000"
        hide-delimiters
        :show-arrows="false"
        height="200px"
      >
        <v-carousel-item
          v-for="(img, i) in program.images"
          :key="i"
          class="white--text align-end"
          :src="img.url"
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
        </v-carousel-item>
      </v-carousel>

      <v-img
        v-else
        class="mx-4"
        contain
        :src="require('../assets/program-noimage.png')"
        height="200px"
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

      <v-card-title><v-clamp autoresize :max-lines="1">{{ program.name }}</v-clamp></v-card-title>

      <v-card-subtitle class="pb-0 text--primary">
        {{ program.city }}
      </v-card-subtitle>

      <v-card-text class="text--secondary">
        <div>{{ program.address }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" text> Lihat Program </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import VClamp from "vue-clamp";

export default {
  components: {
    VClamp,
  },
  data() {
    return {
      timeout: false,
    };
  },
  props: ["program"],
};
</script>