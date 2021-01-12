<template>
  <div>
    <v-container>
      <v-card flat outlined>
        <v-card-title primary-title>
          <v-icon class="mr-2">mdi-account</v-icon>
          Profil
        </v-card-title>
        <v-card flat outlined class="ma-4">
          <v-toolbar flat color="primary white--text">
            <v-toolbar-title>Masjid Nur Mudrikah</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              outlined
              label="Nama"
            ></v-text-field>
            <v-text-field
              outlined
              label="Alamat"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
