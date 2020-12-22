<template>
  <div>
    <v-container>
      <v-card flat outlined>
        <v-card-title primary-title>
          <v-icon class="mr-2">mdi-calendar</v-icon>
          Kegiatan
        </v-card-title>
        <router-view></router-view>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
