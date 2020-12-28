<template>
  <v-container>
    <form class="pa-4" v-on:keyup.enter="submit">
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Upload Anggota Kegiatan</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            outlined
            v-model="form.masjid_uid"
            label="Masjid UID"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="form.masjid_program_uid"
            label="Masjid Program UID"
          ></v-text-field>
          <v-file-input
            v-model="file"
            label="Upload file excel"
            truncate-length="15"
          ></v-file-input>
        </v-card-text>
      </v-card>
      <v-btn @click="uploadFile" disabled color="primary">
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
      form: {},
      file: null
    }
  },
  methods: {
    uploadFile() {
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('masjid_uid', this.form.masjid_uid);
      formData.append('masjid_program_uid', this.form.masjid_program_uid);

      this.axios
        .post("/program/jamaah/upload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          console.log(response);
          
        })
        .catch((error) => {
          console.log(error);
          
        });
    }
  }
};
</script>
