<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ masjid.name }}</h1>
        <v-carousel
          class="mt-4"
          v-if="masjid.images && masjid.images.length > 1"
          cycle
          height="75vh"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(img, i) in masjid.images"
            contain
            :key="i"
            :src="img.url"
          ></v-carousel-item>
        </v-carousel>
        <v-img
          v-else
          class="mt-4"
          contain
          :src="masjid.images && masjid.images.length ? masjid.images[0].url : require('../assets/mosque-noimage.png')"
          height="75vh"
        />
      </v-col>
    </v-row>
    <v-row align="stretch">
      <v-col sm="6" lg="6">
        <h2>Tahun Berdiri</h2>
        <p>{{ masjid.year_built }}</p>
        <h2>Alamat</h2>
        <v-img
          class="mb-2"
          src="https://www.google.com/maps/d/u/0/thumbnail?mid=1XvQTdZtePT9HENbbQoTBZcXJXhU"
          height="300"
          width="300"
        ></v-img>
        <p>
          {{ masjid.address + ", " + masjid.city + ", " + masjid.province }}
        </p>
      </v-col>
      <v-col sm="6" lg="6">
        <h2>Kontak</h2>
        <p>+6285646434029</p>
        <h2>Donasi</h2>
        <v-img
          contain
          src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"
          height="200"
          width="200"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["masjid_uid"],
  data() {
    return {
      isLoading: true,
      isError: false,
      masjid: {},
    };
  },
  mounted() {
    this.axios("masjid/detail/" + this.masjid_uid)
      .then((response) => {
        console.log(response.data);
        this.masjid = response.data.data;
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