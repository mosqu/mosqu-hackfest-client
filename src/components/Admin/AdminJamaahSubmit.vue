<template>
  <v-container>
    <form class="pa-4" v-on:keyup.enter="submit">
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Kepala Keluarga</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field outlined label="Nama"></v-text-field>
          <v-text-field outlined label="Nama Panggilan"></v-text-field>
          <v-text-field outlined label="Alamat"></v-text-field>
          <v-text-field outlined label="Umur"></v-text-field>
          <v-text-field outlined label="Nomor HP"></v-text-field>
          <v-text-field outlined label="Pekerjaan"></v-text-field>
          <v-text-field outlined label="Penghasilan"></v-text-field>
          <v-text-field outlined label="Status Mukim"></v-text-field>
          <v-text-field outlined label="Keahlian Khusus"></v-text-field>
        </v-card-text>
      </v-card>
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Istri</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field outlined label="Nama"></v-text-field>
          <v-text-field outlined label="Nama Panggilan"></v-text-field>
          <v-text-field outlined label="Alamat"></v-text-field>
          <v-text-field outlined label="Umur"></v-text-field>
          <v-text-field outlined label="Nomor HP"></v-text-field>
          <v-text-field outlined label="Pekerjaan"></v-text-field>
          <v-text-field outlined label="Penghasilan"></v-text-field>
          <v-text-field outlined label="Status Mukim"></v-text-field>
          <v-text-field outlined label="Keahlian Khusus"></v-text-field>
        </v-card-text>
      </v-card>
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Anak 1</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field outlined label="Nama"></v-text-field>
          <v-text-field outlined label="Nama Panggilan"></v-text-field>
          <v-text-field outlined label="Alamat"></v-text-field>
          <v-text-field outlined label="Umur"></v-text-field>
          <v-text-field outlined label="Nomor HP"></v-text-field>
        </v-card-text>
      </v-card>
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Anak 2</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field outlined label="Nama"></v-text-field>
          <v-text-field outlined label="Nama Panggilan"></v-text-field>
          <v-text-field outlined label="Alamat"></v-text-field>
          <v-text-field outlined label="Umur"></v-text-field>
          <v-text-field outlined label="Nomor HP"></v-text-field>
        </v-card-text>
      </v-card>
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Anak 3</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field outlined label="Nama"></v-text-field>
          <v-text-field outlined label="Nama Panggilan"></v-text-field>
          <v-text-field outlined label="Alamat"></v-text-field>
          <v-text-field outlined label="Umur"></v-text-field>
          <v-text-field outlined label="Nomor HP"></v-text-field>
        </v-card-text>
      </v-card>
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Anak 4</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field outlined label="Nama"></v-text-field>
          <v-text-field outlined label="Nama Panggilan"></v-text-field>
          <v-text-field outlined label="Alamat"></v-text-field>
          <v-text-field outlined label="Umur"></v-text-field>
          <v-text-field outlined label="Nomor HP"></v-text-field>
        </v-card-text>
      </v-card>
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Aktivitas</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field outlined label="Sholat"></v-text-field>
          <v-text-field outlined label="Zakat"></v-text-field>
          <v-text-field outlined label="Pengajian"></v-text-field>
        </v-card-text>
      </v-card>
      <v-btn @click="submitJamaah" color="primary">
        Submit!
        <v-progress-circular
          v-if="this.$store.getters.authStatus === 'loading'"
          class="ml-2"
          indeterminate
          color="secondary"
          size="16"
          width="2"
        ></v-progress-circular>
      </v-btn>
    </form>
  </v-container>
</template>
<script>
export default {
  methods:{
    submitJamaah(){
      
    }
  }
};
</script>
