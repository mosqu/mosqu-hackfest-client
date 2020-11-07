<template>
  <div>
    <section id="home">
      <v-container fluid pa-0>
        <div class="content pa-lg-16 pa-8">
          <v-row no-gutters wrap align="start">
            <v-col sm="12" md="6" lg="4">
              <v-card flat>
                <v-flex align-self-center>
                  <div class="ma-2 display-1 font-weight-bold">Ingin Donasi di Masjid Anda lebih besar dan mudah?</div>
                  <div class="ma-2 subtitle-1">
                    Kami bisa membantu Anda. Urusan masjid jadi mudah! Platform pertama untuk digitalisasi
                    masjid di Indonesia!
                  </div>
                </v-flex>
                <router-view />
              </v-card>
            </v-col>
            <v-col sm="12" md="6" lg="8" class="pa-8">
              <v-img
                  :src="require('../assets/illustration2.svg')"
                  max-height="500px"
                  contain
                />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>
    <section id="about">
      <HomeAbout />
    </section>
    <section id="feature">
      <HomeFeature />
    </section>
    <section id="register">
      <HomeRegister />
    </section>
    <section id="faq">
      <HomeFAQ />
    </section>
    <section id="footer">
      <HomeFooter />
    </section>
  </div>
</template>

<script>
  import HomeAbout from "../components/Home/HomeAbout";
  import HomeFeature from "../components/Home/HomeFeature";
  import HomeRegister from "../components/Home/HomeRegister";
  import HomeFAQ from "../components/Home/HomeFAQ";
  import HomeFooter from "../components/Home/HomeFooter";

  export default {
    components: {
      HomeAbout,
      HomeFeature,
      HomeRegister,
      HomeFAQ,
      HomeFooter
    }
  }
</script>