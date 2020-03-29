<template>
  <div>
    <Card />
    <Table />
    <News />
    <Footer />
  </div>
</template>

<script>
import Card from '../components/Card';
import Table from '../components/Table';
import News from '../components/News';
import Footer from '../components/Footer';

export default {
  name: 'Home',
  components: {
    Card,
    Table,
    News,
    Footer
  },
}
</script>

<style>

</style>