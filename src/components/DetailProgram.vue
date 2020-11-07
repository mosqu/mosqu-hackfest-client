<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ program.name }}</h1>
        <v-carousel
          class="mt-4"
          v-if="program.images && program.images.length > 1"
          cycle
          height="75vh"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(img, i) in program.images"
            contain
            :key="i"
            :src="img.url"
          ></v-carousel-item>
        </v-carousel>
        <v-img
          v-else
          class="mt-4"
          contain
          :src="program.images && program.images.length ? program.images[0].url : require('../assets/program-noimage.png')"
          height="75vh"
        />
      </v-col>
    </v-row>
    <v-row align="stretch">
      <v-col sm="6" lg="6">
        <h2>Deskripsi</h2>
        <p>{{ program.description }}</p>
        <h2>Lokasi</h2>
        <v-img
          class="mb-2"
          src="https://www.google.com/maps/d/u/0/thumbnail?mid=1XvQTdZtePT9HENbbQoTBZcXJXhU"
          height="300"
          width="300"
        ></v-img>
        <p>
          {{ program.location }}
        </p>
      </v-col>
      <v-col sm="6" lg="6">
        <h2>Waktu</h2>
        <p>{{ programTime }}</p>
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
  props: ["masjid_program_uid"],
  data() {
    return {
      isLoading: true,
      isError: false,
      program: {},
    };
  },
  computed:{
    programTime(){
      if(this.program !== null){
        var startDate = this.$moment(startDate).format("dddd, D MMMM YYYY")
        var endDate = this.$moment(endDate).format("dddd, D MMMM YYYY")
        if(this.program.type == "routine"){
          return "Setiap " + this.program.day + ", pukul " + this.program.start_time.substring(0,5) + (this.program.end_time !== null ? " - " + this.program.end_time.substring(0,5) : "")
        } else {
          if(this.program.start_date === this.program.end_date){
            return startDate + "\n" + this.program.start_time.substring(0,5) + (this.program.end_time !== null ? " - " + this.program.end_time.substring(0,5) : "")
          } else {
            return startDate + " - " + endDate + "\n" + this.program.start_time.substring(0,5) + (this.program.end_time !== null ? " - " + this.program.end_time.substring(0,5) : "")
          }
        }
      } else {
        return ""
      }
    }
  },
  mounted() {
    this.axios("program/detail/" + this.masjid_program_uid)
      .then((response) => {
        console.log(response.data);
        this.program = response.data.data;
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