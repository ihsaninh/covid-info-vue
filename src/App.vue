<template>
  <div id="app">
    <Navbar />
    <Card />
    <Table />
    <News />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Card from './components/Card';
import Table from './components/Table';
import News from './components/News';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Card,
    Table,
    News,
    Footer
  },
}
</script>
<style>
#app {
  font-family: 'IBM Plex Sans';
}
</style>
