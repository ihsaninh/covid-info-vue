<template>
  <div class="container mt-5">
    <b-card-group deck>
      <b-card>
        <div>
          <h6 class="mb-3 info-title">Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h6>
          <b-table :items="dataDetailId" :busy="isLoading" :fields="fieldsId" bordered sticky-header="700px">
            <template v-slot:cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template v-slot:cell(Kasus_Posi)="data">
              {{ thousandFormatter(data.item.Kasus_Posi) }}
            </template>
            <template v-slot:cell(Kasus_Semb)="data">
              {{ thousandFormatter(data.item.Kasus_Semb) }}
            </template>
            <template v-slot:cell(Kasus_Meni)="data">
              {{ thousandFormatter(data.item.Kasus_Meni) }}
            </template>
          </b-table>
          <div class="text-center text-danger my-2" v-if="isLoading">
            <b-spinner label="Loading..." class="align-middle" variant="dark"></b-spinner>
          </div>
        </div>
      </b-card>
    </b-card-group>
    <b-card-group deck class="mt-5">
      <b-card>
        <div>
          <h6 class="mb-3 info-title">Kasus Coronavirus Global (Data by JHU)</h6>
          <b-table :items="dataDetailGlobal" :busy="isLoading" :fields="fieldsGlobal" bordered sticky-header="700px">
            <template v-slot:cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template v-slot:cell(Confirmed)="data">
              {{ thousandFormatter(data.item.Confirmed) }}
            </template>
            <template v-slot:cell(Recovered)="data">
              {{ thousandFormatter(data.item.Recovered) }}
            </template>
            <template v-slot:cell(Deaths)="data">
              {{ thousandFormatter(data.item.Deaths) }}
            </template>
          </b-table>
          <div class="text-center text-danger my-2" v-if="isLoading">
            <b-spinner label="Loading..." class="align-middle" variant="dark"></b-spinner>
          </div>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { fieldsId, fieldsGlobal } from '../utils/constant'
import { thousandFormatter } from '../utils/helper';

export default {
  name: 'Table',
  data() {
    return {
      fieldsId,
      fieldsGlobal,
   }
  },
  mounted () {
    this.$store.dispatch('getDetailDataGlobal');
    this.$store.dispatch('getDetailDataId');
  },
  methods: {
    thousandFormatter,
  },
  computed: {
    dataDetailGlobal() {
     return this.$store.state.dataDetailGlobal;
    },
    dataDetailId() {
     return this.$store.state.dataDetailId;
    },
    isLoading() {
      return this.$store.state.tableLoading
    }
  }
}
</script>

<style scoped>
.card {
   box-shadow: 0 0 4px 0 rgba(0,0,0,.05), 0 4px 24px 0 rgba(0,0,0,.1);
   border: none;
}
.info-title {
  line-height: 25px;
}
</style>