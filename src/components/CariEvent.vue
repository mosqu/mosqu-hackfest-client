<template>
  <v-row no-gutters>
    <v-col v-for="event in events" :key="event.id" lg="4" md="6" xs="12">
      <CardEvent v-bind:event="event"></CardEvent>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import CardEvent from "@/components/CardEvent.vue";

export default {
  name: "Home",
  components: {
    CardEvent,
  },
  data() {
    return {
      isLoading: true,
      events: [
        {
          id: "E0001",
          title: "Kajian Jelang Berbuka",
          schedule: "24 Oktober 2020",
          imgUrl: "https://i.ytimg.com/vi/sYlx12WmO28/maxresdefault.jpg",
          masjid: {
            id: "M0002",
            name: "Masjid An-Nur",
            city: "Bandung",
            address: "Jl. Maju Terus",
            imgUrl:
              "https://3.bp.blogspot.com/-lLKCuXXrlyU/Wcm75wzz53I/AAAAAAAAfbA/1xyTsGcVqB4Lqrxli6c2xm3m2PK8a04zwCLcBGAs/s1600/MA%2BKota%2BTegal%2B%25287%2529.jpg",
          },
        },
        {
          id: "E0002",
          title: "Kajian Senin Kamis",
          schedule: "20 Oktober 2020",
          imgUrl:
            "https://kamilpasca.itb.ac.id/wp-content/uploads/20160417145631-300x300.jpg",
          masjid: {
            id: "M0002",
            name: "Masjid An-Nur",
            city: "Bandung",
            address: "Jl. Maju Terus",
            imgUrl:
              "https://3.bp.blogspot.com/-lLKCuXXrlyU/Wcm75wzz53I/AAAAAAAAfbA/1xyTsGcVqB4Lqrxli6c2xm3m2PK8a04zwCLcBGAs/s1600/MA%2BKota%2BTegal%2B%25287%2529.jpg",
          },
        },
        {
          id: "E0003",
          title: "Kajian Pernikahan",
          schedule: "15 November 2020",
          imgUrl:
            "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/84284593_181278186560816_2010533818288570368_o.jpg?_nc_cat=109&_nc_sid=9267fe&_nc_eui2=AeFv7V2Snp9aCZw_9cuQRnDK4VntNBHS6CvhWe00EdLoK9tgIPAabvwVl7zN6gNRnAuYOlo3JfOqEF7G8ErleNLy&_nc_ohc=1bpz4qS1jEIAX-lPOju&_nc_ht=scontent-xsp1-1.xx&oh=594949616098cfa705d96e71d1101b9f&oe=5FA48827",
          masjid: {
            id: "M0002",
            name: "Masjid An-Nur",
            city: "Bandung",
            address: "Jl. Maju Terus",
            imgUrl:
              "https://3.bp.blogspot.com/-lLKCuXXrlyU/Wcm75wzz53I/AAAAAAAAfbA/1xyTsGcVqB4Lqrxli6c2xm3m2PK8a04zwCLcBGAs/s1600/MA%2BKota%2BTegal%2B%25287%2529.jpg",
          },
        },
      ],
    };
  },
};
</script>
