<template>
  <v-flex class="d-flex flex-column align-start">
    <v-text-field outlined label="Username"></v-text-field>
    <v-text-field outlined label="Email"></v-text-field>
    <v-text-field
      outlined
      :type="showPass ? 'text' : 'password'"
      label="Password"
      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPass = !showPass"
    ></v-text-field>
    <v-btn color="primary">Daftar!</v-btn>
  </v-flex>
</template>

<style scoped>
.v-text-field{
      width: 300px;
}
</style>

<script>
export default {
  data() {
    return {
      showPass: false,
    };
  },
};
</script>