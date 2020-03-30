<template>
  <div>
    <b-container class="martop">

      <div v-if="!loading">
        <b-card v-for="news in allNews" v-bind:key="news.id">
          <b-row class="mt-2">
            <b-col col md="8" xs="12">
              <h5 class="title"><a href='#' target="_blank">{{ news.title }}</a></h5>
              <h6 class="mt-3 timestamp">{{ formatDate(news.publishedAt) }}</h6>
              <p class="mt-4 description">{{ `${news.source.name} - ${limitCharacter(news.content, 200)}`}}</p>
            </b-col>
            <b-col col md="4" xs="12">
              <b-img rounded :src="news.urlToImage" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div v-else v-for="index in 5" :key="index">
        <b-card>
          <b-row class="mt-2">
            <b-col>
              <div class="mb-3">
                <content-loader :speed="10" :height="15" :animate="true"></content-loader>
              </div>
              <div class="mb-3">
                <content-loader :speed="10" :height="15" :animate="true"></content-loader>
              </div>
              <div class="mb-3">
                <content-loader :speed="10" :height="15" :animate="true"></content-loader>
              </div>
              <div class="mb-3">
                <content-loader :speed="10" :height="15" :animate="true"></content-loader>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </div>
     <b-button block variant="outline-success" @click="loadMore" class="mt-5">Load Berita Lainnya</b-button>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import { ContentLoader } from 'vue-content-loader'

import { limitCharacter, formatDate, slug } from '../utils/helper';
import Footer from '../components/Footer';

export default {
  data () {
    return {
      allNews: [],
      loading: false,
      page: 1
    }
  },
  components: {
    Footer,
    ContentLoader
  },
  mounted () {
    this.getNews();
  },
  methods: {
    limitCharacter,
    formatDate,
    slug,
    async getNews () {
      try {
        this.loading = true;
        const response = await axios.get(`https://newsapi.org/v2/everything?q=corona+covid&apiKey=6566df4437f94a3bb6e92809f06f46e8&language=id&sortBy=publishedAt&pageSize=5&page=${this.page}`);
        this.allNews = [...this.allNews, ...response.data.articles];
        this.loading = false;
      } catch (error) {
        // error
      }
    },
    loadMore () {
      this.page++;
      this.getNews();      
    },
  }
}
</script>

<style>
.martop {
  margin-top: 100px
}
.news-title {
  font-size: 25px;
}
.timestamp {
  font-size: 15px;
}
.title {
  line-height: 32px;
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
.card {
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
  border: none;
  margin-bottom: 10px;
  border-radius: .5rem;
}
.img-fluid {
  width: 400px;
  height: 230px;
}
.rounded {
  border-radius: .3rem !important;
}
.btn-outline-success {
  font-weight: 400;
  border-width: 2px;
}
.btn {
  border-radius: .5rem
}
.btn-outline-success:hover {
  background-color: #c6f6d5;
  color: #28a745;
}
</style>