<template>
  <div>
    <v-container fluid pa-0 class="teal fill-height" style="min-height: 600px">
        <div class="content ma-16">
            <div class="display-1 mb-6 white--text font-weight-bold">
                FAQ
            </div>
            <v-row no-gutters wrap align="start">
                <v-col sm="12" md="8" lg="6">
                    <div class="faq white--text mb-5">
                        <div class="question text-justify title white--text ">
                            Apa yang dimaksud dengan QRIS?
                        </div>
                        <div class="question text-justify body-2 white--text">
                            QRIS memiliki kepanjangan Quick Response Code Indonesian Standard. QRIS ini adalah standarisasi pembayaran menggunakan metode QR Code dari Bank Indonesia agar proses transaksi dengan QR Code yang kalian lakukan lebih mudah, cepat, dan terjaga keamanannya
                        </div>
                    </div>
                    <div class="faq white--text mb-5">
                        <div class="question text-justify title white--text">
                            Apa yang membedakan QRIS dengan QR Code pembayaran yang telah digunakan selama ini?
                        </div>
                        <div class="question text-justify body-2 white--text">
                            Dengan adanya QRIS, maka sekarang seluruh transaksi pembayaran yang menggunakan QR Code hanya memerlukan satu QRIS aja.. karena kode QRIS itu sudah terintegrasi dengan seluruh aplikasi yang menyediakan dan/atau menerima pembayaran dengan QR code
                        </div>
                    </div>
                    <div class="faq white--text mb-5">
                        <div class="question text-justify title white--text">
                            Darimana sajakah sumber dana yang digunakan pada transaksi QRIS?
                        </div>
                        <div class="question text-justify body-2 white--text">
                            Sumber dana pada transaksi QRIS adalah kartu debet, kartu kredit, dan/atau uang elektronik dari lembaga-lembaga yang disetujui oleh Bank Indonesia
                        </div>
                    </div>
                    <div class="faq white--text mb-5">
                        <div class="question text-justify title white--text">
                            Berapakah batas nominal transaksi menggunakan QRIS?
                        </div>
                        <div class="question text-justify body-2 white--text">
                           Nominal transaksi QRIS dibatasi paling banyak sebesar Rp 2.000.000,00 (dua juta rupiah) per transaksi
                        </div>
                    </div>
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
