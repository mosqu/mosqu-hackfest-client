<template>
  <v-container>
    <form class="pa-4" v-on:keyup.enter="submit">
      <v-text-field outlined label="Nama Kepala Keluarga"></v-text-field>
      <v-text-field outlined label="Alamat"></v-text-field>
      <v-text-field outlined label="Umur"></v-text-field>
      <v-text-field outlined label="Pekerjaan"></v-text-field>
      <v-text-field outlined label="Gaji"></v-text-field>
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
export default {};
</script>
