<template>
  <div id="app">
    <Navbar />
    <Card />
    <div class="container mt-5">
      <b-card-group deck>
        <b-card bg-variant="kuning">
          <div>
            <h6 class="mb-3">Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h6>
            <b-table :items="items" :fields="fields"></b-table>
          </div>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Navbar from './components/Navbar';
import Card from './components/Card';
import { fields } from '../src/utils/helper'

export default {
  name: 'App',
  components: {
    Navbar,
    Card
  },
  data() {
      return {
        fields: fields,
        items: []
    }
  },
  mounted () {
    this.getDetailDataId();
  },
  methods: {
    async getDetailDataId() {
      try {
        const response = await axios.get('https://api.kawalcorona.com/indonesia/provinsi/');
        response.data.forEach(el => {
          this.items.push(el.attributes); 
        });
      } catch (error) {
        // 
      }
    }
  }
}
</script>
<style>
#app {
  font-family: 'IBM Plex Sans';
}
</style>
