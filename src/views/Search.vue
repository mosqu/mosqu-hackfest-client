<template>
  <v-container>
    <h1>Cari {{$route.name.substring(4)}}</h1>
    <v-text-field
      label="Cari"
      outlined
      clearable
      single-line
      append-icon="mdi-magnify"
    ></v-text-field>
    <router-view />
  </v-container>
</template>