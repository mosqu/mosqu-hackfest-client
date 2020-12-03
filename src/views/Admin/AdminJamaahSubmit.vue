<template>
  <v-container>
    <form class="pa-4" v-on:keyup.enter="submit">
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Kepala Keluarga</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field outlined v-model="jamaah.name" label="Nama"></v-text-field>
          <v-text-field outlined v-model="jamaah.address" label="Alamat"></v-text-field>
          <v-text-field outlined v-model="jamaah.age" label="Umur"></v-text-field>
          <v-text-field outlined v-model="jamaah.nomor_hp" label="Nomor HP"></v-text-field>
          <v-text-field outlined v-model="jamaah.occupation" label="Pekerjaan"></v-text-field>
          <v-text-field outlined v-model="jamaah.salary" label="Penghasilan"></v-text-field>
          <v-text-field outlined v-model="jamaah.status_mukim" label="Status Mukim"></v-text-field>
          <v-text-field outlined v-model="jamaah.keahlian_khusus" label="Keahlian Khusus"></v-text-field>
        </v-card-text>
      </v-card>
      <v-card v-for="(memberId, index) in members" :key="memberId" flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Anggota {{ memberId }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field outlined v-model="jamaah.member[index].name" label="Nama"></v-text-field>
          <v-text-field outlined v-model="jamaah.member[index].age" label="Umur"></v-text-field>
          <v-text-field outlined v-model="jamaah.member[index].status" label="Status Dalam Keluarga"></v-text-field>
          <v-text-field outlined v-model="jamaah.member[index].nomor_hp" label="Nomor HP"></v-text-field>
          <v-text-field outlined v-model="jamaah.member[index].occupation" label="Pekerjaan"></v-text-field>
          <v-text-field outlined v-model="jamaah.member[index].salary" label="Penghasilan"></v-text-field>
          <v-text-field outlined v-model="jamaah.member[index].status_mukim" label="Status Mukim"></v-text-field>
          <v-text-field outlined v-model="jamaah.member[index].keahlian_khusus" label="Keahlian Khusus"></v-text-field>
        </v-card-text>
      </v-card>
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Aktivitas</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field outlined v-model="jamaah.sholat" label="Sholat"></v-text-field>
          <v-text-field outlined v-model="jamaah.zakat" label="Zakat"></v-text-field>
          <v-text-field outlined v-model="jamaah.pengajian" label="Pengajian"></v-text-field>
          <v-text-field outlined v-model="jamaah.catatan" label="Catatan"></v-text-field>
        </v-card-text>
      </v-card>
      <v-btn @click="addMember" color="primary">
        Tambahkan Anggota
      </v-btn>
      <v-btn @click="submitJamaah" color="primary">
        Submit!
      </v-btn>
    </form>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      jamaah: {
        member: [{}]
      },
      members: []
    }
  },
  methods:{
    submitJamaah(){
      console.log(this.jamaah.member[0].name)
    },
    addMember(){
      this.members.push(this.members.length + 1);
      console.log(this.members);
    }
  }
};
</script>
