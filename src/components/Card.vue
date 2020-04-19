<template>
  <b-container class="text-center martop">
    <b-row class="justify-content-md-center">
      <b-col col lg="12">
        <h1 class="mt-3">COVID-19 INFO</h1>
        <h5 class="mt-4">Informasi COVID-19 di Indonesia dan Global</h5>
      </b-col>
    </b-row>
    <div class="mt-5">
      <b-card-group deck>
        <b-card bg-variant="kuning" v-if="!isLoading">
          <b-card-text class="card-text-header">Positif COVID-19</b-card-text>
          <b-row>
            <b-col col lg="8">
              <b-card-text>Indonesia</b-card-text>
              <b-card-text class="card-text">Global</b-card-text>
            </b-col>
            <b-col col lg="4">
              <b-card-text class="text-right">{{ thousandFormatter(dataId.jumlahKasus) }}</b-card-text>
              <b-card-text
                class="card-text text-right"
              >{{ thousandFormatter(dataGlobal.confirmed.value) }}</b-card-text>
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
          <b-card-text class="card-text-header text-white">Sembuh</b-card-text>
          <b-row>
            <b-col col lg="8">
              <b-card-text class="text-white">Indonesia</b-card-text>
              <b-card-text class="card-text text-white">Global</b-card-text>
            </b-col>
            <b-col col lg="4">
              <b-card-text class="text-right text-white">{{ thousandFormatter(dataId.sembuh) }}</b-card-text>
              <b-card-text
                class="card-text text-right text-white"
              >{{ thousandFormatter(dataGlobal.recovered.value) }}</b-card-text>
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
              <b-card-text>Indonesia</b-card-text>
              <b-card-text class="card-text">Global</b-card-text>
            </b-col>
            <b-col col lg="4">
              <b-card-text class="text-right">{{ thousandFormatter(dataId.meninggal) }}</b-card-text>
              <b-card-text
                class="card-text text-right"
              >{{ thousandFormatter(dataGlobal.deaths.value) }}</b-card-text>
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
      <h6 class="pt-4 lastUpdate">SUpdate Terakhir: {{formatDate(dataGlobal.lastUpdate)}} WIB</h6>
    </div>
    <!-- Chart Section -->
    <b-row>
      <b-col>
        <b-card-group deck class="mt-5">
          <b-card>
            <h4 class="daily-title pb-3 mb-3">Diagram Kasus Komulatif COVID-19 di Indonesia</h4>
            <line-chart v-if="loaded" :chartData="dataKomulatif" :chartLabels="dataTanggal"></line-chart>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col>
        <b-card-group deck class="mt-5">
          <b-card>
            <h4 class="daily-title pb-3 mb-3">Diagram Kasus Harian COVID-19 di Indonesia</h4>
            <bar-chart v-if="loaded" :chartData="dataperDay" :chartLabels="dataTanggal"></bar-chart>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import { ContentLoader } from "vue-content-loader";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";

import { thousandFormatter, dateOnly, formatDate } from "@/utils/helper";
import { totalDataId, totalDataGlobal, dailyCasesId } from "@/utils/endpoints";

export default {
  name: "Card",
  components: {
    ContentLoader,
    LineChart,
    BarChart,
  },
  data: () => ({
    dataId: [],
    isLoading: false,
    dataGlobal: {},
    dataKomulatif: [],
    dataperDay: [],
    dataTanggal: [],
    loaded: false
  }),
  mounted() {
    this.getIdCases();
    this.getDailyCases();
    this.getGlobalCases();
  },
  methods: {
    formatDate,
    thousandFormatter,
    async getIdCases() {
      try {
        this.isLoading = true;
        const response = await axios.get(totalDataId);
        this.dataId = response.data;
        this.isLoading = false;
      } catch (err) {
        console.log(err);
      }
    },
    async getDailyCases() {
      this.loaded = false;
      try {
        const response = await axios.get(dailyCasesId);
        const result = response.data.data;
        result.forEach(el => {
          this.dataKomulatif.push(el.jumlahKasusKumulatif);
          this.dataperDay.push(el.jumlahKasusBaruperHari);
          this.dataTanggal.push(dateOnly(el.tanggal));
        });
        this.loaded = true;
      } catch (err) {
        console.log(err);
      }
    },
    async getGlobalCases() {
      try {
        const response = await axios.get(totalDataGlobal);
        this.dataGlobal = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
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
  background-color: #f2a365 !important;
  border: none !important;
  border-radius: 10px;
  color: white;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
}
.bg-hijau {
  background-color: #1cc88a !important;
  border: none !important;
  border-radius: 10px;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
}
.bg-oren {
  background-color: #ff6384 !important;
  border: none !important;
  color: white;
  border-radius: 10px;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
}
.card-text-header {
  font-size: 19px;
  margin-top: -5px;
  font-weight: 500;
}
.card-text {
  text-align: left;
}
.card {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.01), 0 4px 24px 0 rgba(0, 0, 0, 0.05);
  border: none;
}
.martop {
  margin-top: 100px;
}
.daily-title {
  font-size: 17px;
  border-bottom: 1px solid #f1f1f1;
}
.lastUpdate {
  font-weight: 300;
  font-size: 14px;
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
  .lastUpdate {
    display: none;
  }
}
</style>
