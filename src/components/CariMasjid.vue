<template>
  <v-row no-gutters>
    <v-col v-for="masjid in masjids" :key="masjid._id" lg="4" md="6" sm="12">
      <CardMasjid v-bind:masjid="masjid"></CardMasjid>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import CardMasjid from "@/components/CardMasjid.vue";

export default {
  name: "Home",
  components: {
    CardMasjid,
  },
  data() {
    return {
      masjids: []
    };
  },
  mounted () {
    this.axios
      .get('https://masjid-fd6e.restdb.io/rest/data-masjid.json', {
        headers: {
          'x-apikey' : '5f804fe65799e648a5a8ee4d'
        }
      })
      .then(response => {
        console.log(response.data)
        this.masjids = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
};
</script>
