<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>
<style>
#app {
  font-family: 'IBM Plex Sans';
}
</style>
