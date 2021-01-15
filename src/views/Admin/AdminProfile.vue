<template>
  <div>
    <v-container>
      <v-card flat outlined>
        <v-card-title primary-title>
          <v-icon class="mr-2">mdi-account</v-icon>
          Profil
        </v-card-title>
        <v-row>
          <v-col cols="4">
            <v-card flat outlined class="ml-4 pa-4 fill-height">
              <v-img class="rounded-circle mx-auto" src="https://randomuser.me/api/portraits/men/85.jpg" max-height="200" max-width="200" contain></v-img>
              <div class="text-center mt-2 text-subtitle-1"> {{"username_placeholder"}} </div>
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card flat outlined class="mr-4">
              <v-toolbar flat color="primary white--text">
                <v-toolbar-title>{{"mosque_name_placeholder"}}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-text-field outlined label="Nama Lengkap"></v-text-field>
                <v-text-field outlined label="Email"></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
