<template>
  <div>
    <AppHeader/>
    <h1>Ini halaman detail</h1>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'Home',
  components: {
    AppHeader
  }
}
</script>
