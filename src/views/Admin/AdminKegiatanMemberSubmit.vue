<template>
  <v-container>
    <form class="pa-4" v-on:keyup.enter="submit">
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Tambahkan Anggota Kegiatan</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            outlined
            v-model="jamaah.name"
            label="Nama Anggota"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.address"
            label="Nomor HP"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.salary"
            label="Alamat"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.salary"
            label="Catatan"
          ></v-text-field>
        </v-card-text>
      </v-card>
      <v-btn @click="dialog = true" color="primary">
        Submit!
        <v-progress-circular
          v-if="this.isSubmitLoading == true"
          class="ml-2"
          indeterminate
          color="secondary"
          size="16"
          width="2"
        ></v-progress-circular>
      </v-btn>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline"> Info </v-card-title>

          <v-card-text>
            Submit sukses!
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </form>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      isSubmitLoading: false,
      dialog: false,
      jamaah: {}
    }
  }
};
</script>
