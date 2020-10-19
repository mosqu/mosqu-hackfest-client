<template>
  <v-container>
    <h1>Cari {{$route.name.substring(4)}}</h1>
    <v-text-field
      label="Cari"
      v-model="search"
      outlined
      clearable
      single-line
      append-icon="mdi-magnify"
      @click:append="filter"
    ></v-text-field>
    <router-view />
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      search: ''
    }
  },
  methods: {
    filter: function(){
      
    }
  }
}
</script>