<template>
  <div class="container mt-5">
    <b-card-group deck>
      <b-card>
        <div>
          <h6 class="mb-3 info-title">
            Data Kasus COVID-19 di Indonesia Berdasarkan Provinsi
          </h6>
          <b-table
            :items="itemsId"
            :busy="isLoading"
            :fields="fieldsId"
            striped
            head-variant="dark"
            sticky-header="700px"
          >
            <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>
            <template v-slot:cell(Kasus_Posi)="data">{{
              thousandFormatter(data.item.Kasus_Posi)
            }}</template>
            <template v-slot:cell(Kasus_Semb)="data">{{
              thousandFormatter(data.item.Kasus_Semb)
            }}</template>
            <template v-slot:cell(Kasus_Meni)="data">{{
              thousandFormatter(data.item.Kasus_Meni)
            }}</template>
          </b-table>
          <div class="text-center text-danger my-2" v-if="isLoading">
            <b-spinner
              label="Loading..."
              class="align-middle"
              variant="dark"
            ></b-spinner>
          </div>
        </div>
      </b-card>
    </b-card-group>
    <b-card-group deck class="mt-5">
      <b-card>
        <div>
          <h6 class="mb-3 info-title">
            Data Kasus COVID-19 Di Seluruh Dunia
          </h6>
          <b-table
            :items="itemsGlobal"
            :busy="isLoading"
            :fields="fieldsGlobal"
            striped
            head-variant="dark"
            sticky-header="700px"
          >
            <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>
            <template v-slot:cell(Confirmed)="data">{{
              thousandFormatter(data.item.Confirmed)
            }}</template>
            <template v-slot:cell(Recovered)="data">{{
              thousandFormatter(data.item.Recovered)
            }}</template>
            <template v-slot:cell(Deaths)="data">{{
              thousandFormatter(data.item.Deaths)
            }}</template>
          </b-table>
          <div class="text-center text-danger my-2" v-if="isLoading">
            <b-spinner
              label="Loading..."
              class="align-middle"
              variant="dark"
            ></b-spinner>
          </div>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from 'axios';

import { fieldsId, fieldsGlobal } from '../utils/constant';
import { thousandFormatter } from '../utils/helper';

export default {
  name: 'Table',
  data() {
    return {
      fieldsId,
      itemsId: [],
      itemsGlobal: [],
      fieldsGlobal,
      isLoading: false,
    };
  },
  mounted() {
    this.getDetailDataId();
    this.getDetailGlobal();
  },
  methods: {
    thousandFormatter,
    async getDetailDataId() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          'https://indonesia-covid-19.mathdro.id/api/provinsi'
        );
        this.itemsId = response.data.data;
        this.isLoading = false;
      } catch (error) {
        //
      }
    },
    async getDetailGlobal() {
      try {
        const response = await axios.get('https://api.kawalcorona.com/');
        response.data.forEach((el) => {
          this.itemsGlobal.push(el.attributes);
        });
      } catch (error) {
        //
      }
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.01), 0 4px 24px 0 rgba(0, 0, 0, 0.05);
  border: none;
}
.info-title {
  line-height: 25px;
  font-size: 19px;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 15px;
}
</style>
