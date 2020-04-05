<template>
  <b-container class="text-center martop">
    <b-row class="justify-content-md-center">
      <b-col col lg="12">
        <h1 class="mt-3">COVID-19 INFO</h1>
        <h5 class="mt-4">Informasi Covid-19 di Indonesia dan Global</h5>
      </b-col>
    </b-row>
    <div class="mt-5">
      <b-card-group deck>
        <b-card bg-variant="kuning" v-if="!isLoading">
          <b-card-text class="card-text-header">Positif COVID-19</b-card-text>
          <b-row>
            <b-col col lg="8">
              <b-card-text class="card-text">Global</b-card-text>
              <b-card-text>Indonesia</b-card-text>
            </b-col>
            <b-col col lg="4">
              <b-card-text class="card-text text-right">{{
                thousandFormatter(dataGlobal.confirmed.value)
              }}</b-card-text>
              <b-card-text class="text-right">{{
                dataId[0].positif
              }}</b-card-text>
            </b-col>
          </b-row>
        </b-card>

        <b-card bg-variant="kuning" v-else>
          <content-loader
            :speed="2"
            :height="30"
            :animate="true"
            class="mb-3"
            primaryColor="rgba(255,255,255,0.5)"
          ></content-loader>
          <b-row>
            <b-col col>
              <content-loader
                :speed="2"
                :height="30"
                :animate="true"
                primaryColor="rgba(255,255,255,0.5)"
                class="mb-2"
              ></content-loader>
              <content-loader
                :speed="2"
                :height="30"
                :animate="true"
                primaryColor="rgba(255,255,255,0.5)"
              ></content-loader>
            </b-col>
          </b-row>
        </b-card>

        <b-card bg-variant="hijau" class="success" v-if="!isLoading">
          <b-card-text class="card-text-header">Sembuh</b-card-text>
          <b-row>
            <b-col col lg="8">
              <b-card-text class="card-text">Global</b-card-text>
              <b-card-text>Indonesia</b-card-text>
            </b-col>
            <b-col col lg="4">
              <b-card-text class="card-text text-right">{{
                thousandFormatter(dataGlobal.recovered.value)
              }}</b-card-text>
              <b-card-text class="text-right">{{
                dataId[0].sembuh
              }}</b-card-text>
            </b-col>
          </b-row>
        </b-card>

        <b-card bg-variant="hijau" v-else>
          <content-loader
            :speed="10"
            :height="30"
            :animate="true"
            class="mb-3"
            primaryColor="rgba(255,255,255,0.5)"
          ></content-loader>
          <b-row>
            <b-col col>
              <content-loader
                :speed="10"
                :height="30"
                :animate="true"
                primaryColor="rgba(255,255,255,0.5)"
                class="mb-2"
              ></content-loader>
              <content-loader
                :speed="10"
                :height="30"
                :animate="true"
                primaryColor="rgba(255,255,255,0.5)"
              ></content-loader>
            </b-col>
          </b-row>
        </b-card>

        <b-card bg-variant="oren" v-if="!isLoading">
          <b-card-text class="card-text-header">Meninggal</b-card-text>
          <b-row>
            <b-col col lg="8">
              <b-card-text class="card-text">Global</b-card-text>
              <b-card-text>Indonesia</b-card-text>
            </b-col>
            <b-col col lg="4">
              <b-card-text class="card-text text-right">{{
                thousandFormatter(dataGlobal.deaths.value)
              }}</b-card-text>
              <b-card-text class="text-right">{{
                dataId[0].meninggal
              }}</b-card-text>
            </b-col>
          </b-row>
        </b-card>

        <b-card bg-variant="oren" v-else>
          <content-loader
            :speed="10"
            :height="30"
            :animate="true"
            class="mb-3"
            primaryColor="rgba(255,255,255,0.5)"
          ></content-loader>
          <b-row>
            <b-col col>
              <content-loader
                :speed="10"
                :height="30"
                :animate="true"
                primaryColor="rgba(255,255,255,0.5)"
                class="mb-2"
              ></content-loader>
              <content-loader
                :speed="10"
                :height="30"
                :animate="true"
                primaryColor="rgba(255,255,255,0.5)"
              ></content-loader>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios';
import { ContentLoader } from 'vue-content-loader';

import { thousandFormatter } from '../utils/helper';

export default {
  name: 'Card',
  components: {
    ContentLoader,
  },

  data() {
    return {
      dataId: [],
      isLoading: false,
      dataGlobal: {},
    };
  },

  mounted() {
    this.getIdCases();
    this.getGlobalCases();
  },

  methods: {
    thousandFormatter,
    async getIdCases() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          'https://api.kawalcorona.com/indonesia/'
        );
        this.dataId = response.data;
        this.isLoading = false;
      } catch (error) {
        // error
      }
    },
    async getGlobalCases() {
      try {
        const response = await axios.get('https://covid19.mathdro.id/api/');
        this.dataGlobal = response.data;
      } catch (error) {
        // error
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500 !important;
  font-size: 34px;
}
h5 {
  font-weight: 400 !important;
  font-size: 16px;
}
.bg-kuning {
  background-color: #fcdfe0 !important;
  border-color: #ffb4b5 !important;
}
.bg-hijau {
  background-color: #d3eee3 !important;
  border-color: #91dcbd !important;
}
.bg-oren {
  background-color: #fbeadf !important;
  border-color: #fed1b1 !important;
}
.card-text-header {
  font-size: 20px;
  margin-top: -5px;
  font-weight: 500;
}
.card-text {
  text-align: left;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 4px 0px,
    rgba(0, 0, 0, 0.1) 0px 4px 24px 0px;
}
.martop {
  margin-top: 100px;
}
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 28px;
  }
  h5 {
    font-size: 14px;
  }
  .card-text {
    font-size: 15px;
  }
}
</style>
