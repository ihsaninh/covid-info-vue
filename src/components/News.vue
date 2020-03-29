<template>
  <b-container class="mt-5">
    <b-card-group deck>
      <b-card>
        <h3>Berita Terkini</h3>
        <b-row class="mt-5" v-for="news in allNews" v-bind:key="news">
          <b-col col md="8" xs="12">
            <h5 class="title"><a href="#">{{ removeSource(news.title)[0] }}</a></h5>
            <h6 class="mt-3 timestamp">{{ formatDate(news.publishedAt) }}</h6>
            <p class="mt-4 description" v-if="news.source.name !== 'Youtube.com'">{{ `${removeSource(news.title)[1]} - ${news.description}`}}</p>
            <a :href="news.url" v-else class="btn btn-custom link-ku" target="_blank">Lihat di Youtube</a>
          </b-col>
          <b-col col md="4" xs="12">
            <b-img rounded :src="news.urlToImage" fluid alt="Responsive image"></b-img>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </b-container> 
</template>

<script>
import axios from 'axios';

import { removeSource, formatDate } from '../utils/helper'

export default {
  name: 'News',
  data () {
    return {
      allNews: [],
    }
  },
  mounted () {
    this.getNews();
  },
  methods: {
    removeSource,
    formatDate,
    async getNews () {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=6566df4437f94a3bb6e92809f06f46e8&category=health&pageSize=5&page=1');
        this.allNews = response.data.articles;
        console.log(this.allNews);
      } catch (error) {
        // error
      }
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0,0,0,.05), 0 4px 24px 0 rgba(0,0,0,.1);
  padding: 25px;
  border: none;
}
.title {
  line-height: 35px;
  font-size: 23px;
}
.title a {
  text-decoration: none;
  color: #5aaa4e;
}
.title a:hover {
  color: #4d9143;
}
.description {
  line-height: 30px;
}
.link-ku {
  margin-top: 30px;
}
.btn-custom {
  background-color: #4d9143;
  color: #ffffff
}
.btn-custom:hover {
  color: #eee;
}
</style>