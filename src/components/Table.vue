<template>
  <div class="container mt-5">
    <b-card-group deck>
      <b-card>
        <div>
          <h6 class="mb-3">Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h6>
          <b-table :items="itemsId" :fields="fieldsId" bordered sticky-header="700px"></b-table>
        </div>
      </b-card>
    </b-card-group>
    <b-card-group deck class="mt-5">
      <b-card>
        <div>
          <h6 class="mb-3">Kasus Coronavirus Global (Data by JHU)</h6>
          <b-table :items="itemsGlobal" :fields="fieldsGlobal" bordered sticky-header="700px"></b-table>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from 'axios';

import { fieldsId, fieldsGlobal } from '../utils/helper'

export default {
  name: 'Table',
  data() {
    return {
      fieldsId,
      itemsId: [],
      itemsGlobal: [],
      fieldsGlobal
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

<style scoped>
th {
  font-weight: 500;
  font-size: 15px;
}
td {
  font-size: 15px;
}
.card {
   box-shadow: 0 0 4px 0 rgba(0,0,0,.05), 0 4px 24px 0 rgba(0,0,0,.1);
   border: none;
}
</style>