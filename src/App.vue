<template>
  <div id="app">
    <Navbar />
    <Card />
    <div class="container mt-5">
      <b-card-group deck>
        <b-card bg-variant="kuning">
          <div>
            <h6 class="mb-3">Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h6>
            <b-table :items="itemsId" :fields="fieldsId" bordered sticky-header="700px"></b-table>
          </div>
        </b-card>
      </b-card-group>
      <b-card-group deck class="mt-5">
        <b-card bg-variant="kuning">
          <div>
            <h6 class="mb-3">Kasus Coronavirus Global (Data by JHU)</h6>
            <b-table :items="itemsGlobal" :fields="fieldsGlobal" bordered sticky-header="700px"></b-table>
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
        fieldsId: fields,
        itemsId: [],
        itemsGlobal: [],
        fieldsGlobal: [
          {
            key: 'OBJECTID',
            label: 'ID Negara',
            sortable: true
          },
          {
            key: 'Country_Region',
            label: 'Nama Negara',
            sortable: true
          },
          {
            key: 'Confirmed',
            label: 'Positif',
            sortable: true
          },
          {
            key: 'Recovered',
            label: 'Sembuh',
            sortable: true
          },
          {
            key: 'Deaths',
            label: 'Meninggal',
            sortable: true
          },
        ]
    }
  },
  mounted () {
    this.getDetailDataId();
    this.getDetailGlobal();
  },
  methods: {
    async getDetailDataId() {
      try {
        const response = await axios.get('https://api.kawalcorona.com/indonesia/provinsi/');
        response.data.forEach(el => {
          this.itemsId.push(el.attributes); 
        });
      } catch (error) {
        // 
      }
    },
    async getDetailGlobal() {
      try {
        const response = await axios.get('https://api.kawalcorona.com/');
        response.data.forEach(el => {
          this.itemsGlobal.push(el.attributes); 
        });
        console.log(this.itemsGlobal);
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
th {
  font-weight: 500;
  font-size: 15px;
}
td {
  font-size: 15px;
}
</style>
