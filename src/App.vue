<template>
  <div id="app">
    <Navbar />
    <Card />
    <Table />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Card from './components/Card';
import Table from './components/Table';

export default {
  name: 'App',
  components: {
    Navbar,
    Card,
    Table
  },
}
</script>
<style>
#app {
  font-family: 'IBM Plex Sans';
}
</style>
