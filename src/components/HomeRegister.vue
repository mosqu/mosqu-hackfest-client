<template>
  <div>
    <v-container fluid pa-0>
        <div class="content pa-lg-16 pa-8">
            <v-row no-gutters wrap align="start" >
                <v-col sm="12" md="6" lg="6">
                    <v-card flat>
                        <div class="display-1 mb-3 font-weight-bold">
                            Daftarkan Sekarang
                        </div>
                        <div class="subtitle-1">
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
                    </v-card>
                </v-col>
                <v-col sm="12" md="6" lg="6" class="pa-8">
                    <v-img
                        :src="require('../assets/illustration1.svg')"
                        contain
                        transition="scale-transition"
                      />
                </v-col>
            </v-row>
        </div>
    </v-container>
  </div>
</template>
<script>
    export default {
        
    }
</script>
