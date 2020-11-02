<template>
  <div>
    <v-container fluid pa-0 class=" fill-height" style="min-height: 600px">
        <v-row no-gutters wrap align="start" heigh="900px">
          <v-col sm="12" md="6" lg="4">
            <div class="content ma-16">
                <div class="display-1 mb-3 font-weight-bold">
                    Daftarkan Sekarang
                </div>
                <div class="text-justify subtitle-1">
                    Dengan melakukan pendaftaran maka Masjidmu akan mendapatkan kode QRIS dimana dapat digunakan untuk donasi online
                </div>
                <div class="mt-4">
                    <a href="https://bit.ly/PendaftaranMosqu" target="_blank" style="text-decoration: none;">
                        <v-btn
                            elevation="0"
                            x-large
                            outlined
                            color="teal"
                        >
                            Daftar
                        </v-btn>
                    </a>
                </div>
            </div>
          </v-col>
          <v-col sm="12" md="6" lg="8">
            <v-img
                :src="require('../assets/landingpage1.svg')"
                max-height="360"
                contain
                class="mb-10"
              />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>
<script>
    export default {
        
    }
</script>
