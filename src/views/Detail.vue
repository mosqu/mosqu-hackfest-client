<template>
  <v-container fluid pa-0>
    <router-view />
    <section id="footer">
      <HomeFooter />
    </section>
  </v-container>
</template>

<script>
  import HomeFooter from "@/views/Home/HomeFooter";

  export default {
    components: {
      HomeFooter
    }
  }
</script>
