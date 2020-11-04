<template>
  <div>
    <v-container fluid pa-0 class="d-flex align-start">
      <div class="content pa-lg-16 pa-8">
        <div class="display-1 mb-3 font-weight-bold">
          Fitur
        </div>
        <v-row no-gutters wrap align="start" >
          <v-col md="6" lg="3">
            <v-card class="mx-auto mb-8" max-width="300" elevation="0" tile>
              <v-img
                :src="require('../assets/order.png')"
                max-height="150px"
                contain
                transition="scale-transition"
              ></v-img>

              <v-card-title> Donasi Online </v-card-title>

              <v-card-subtitle>
                Kami menyediakan donasi online dengan menggunakan kode QRIS yang
                bisa digunakan hampir semua media pembayaran
              </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col md="6" lg="3">
            <v-card class="mx-auto mb-8" max-width="300" elevation="0" tile>
              <v-img
                :src="require('../assets/pack.png')"
                max-height="150px"
                contain
                transition="scale-transition"
              ></v-img>

              <v-card-title> Manajemen Donasi </v-card-title>

              <v-card-subtitle>
                Kami menyediakan manajemen donasi untuk mengelola persebaran dan
                track donasi
              </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col md="6" lg="3">
            <v-card class="mx-auto mb-8" max-width="300" elevation="0" tile>
              <v-img
                :src="require('../assets/jigsaw.png')"
                max-height="150px"
                contain
                transition="scale-transition"
              ></v-img>

              <v-card-title> Pelatihan Desain </v-card-title>

              <v-card-subtitle>
                Kami menyediakan pelatihan desain untuk mendukung Masjid memiliki
                publikasi yang menarik
              </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col md="6" lg="3">
            <v-card class="mx-auto mb-8" max-width="300" elevation="0" tile>
              <v-img
                :src="require('../assets/contract.png')"
                max-height="150px"
                contain
                transition="scale-transition"
              ></v-img>

              <v-card-title> Jasa Desain </v-card-title>

              <v-card-subtitle>
                Kami menyediakan jasa desain untuk mendukung Masjid memiliki
                publikasi yang menarik
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
    </div>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
