<template>
  <v-container>
    <form class="pa-4">
      <v-card flat outlined class="ma-4">
        <v-card-text>
          <v-text-field
            outlined
            v-model="jamaah.name"
            label="Nama Kegiatan"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.address"
            label="Deskripsi"
          ></v-text-field>
          <v-select
            :items="['Rutin', 'Eventual']"
            outlined
            v-model="jamaah.status_mukim"
            label="Jenis Kegiatan"
          ></v-select>
          <v-select
            :items="['Senin', 'Selasa', 'Selasa', 'Rabu', 'Jumat', 'Sabtu', 'Minggu']"
            outlined
            v-model="jamaah.status_mukim"
            label="Frekuensi Kegiatan"
          ></v-select>     
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="tanggal"
                outlined
                clearable
                label="Tanggal Kegiatan"
                readonly
                v-bind="attrs"
                v-on="on"
                @click:clear="jamaah.birthdate = null"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="tanggal"
              :max="new Date().toISOString().substr(0, 10)"
              no-title
              @change="menu = false"
            ></v-date-picker>
          </v-menu>
          <v-text-field
            outlined
            v-model="jamaah.occupation"
            label="Pembicara"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.salary"
            label="Lokasi"
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
      menu: false,
      dialog: false,
      jamaah: {},
      tanggal: "",
      isSubmitLoading: false
    }
  }
};
</script>
