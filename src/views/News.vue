<template>
  <div>
    <b-container class="martop">

      <div v-if="!isLoading">
        <b-card v-for="news in dataNewsPaging" v-bind:key="news.id">
          <b-row class="mt-2">
            <b-col sm="8">
              <h5 class="title"><a :href='news.url' target="_blank">{{ news.title }}</a></h5>
              <h6 class="mt-3 timestamp">{{ formatDate(news.publishedAt) }}</h6>
              <p class="mt-4 description">{{ `${news.source.name} - ${limitCharacter(news.content, 200)}`}}</p>
            </b-col>
            <b-col sm="4" class="d-none d-sm-block">
              <b-img rounded :src="news.urlToImage" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div v-else v-for="index in 5" :key="index">
        <b-card>
          <b-row class="mt-2">
            <b-col>
              <div class="mb-3" style="maxWidth: 80%">
                <content-loader :speed="2" :height="15" :animate="true"></content-loader>
              </div>
              <div class="mb-3" style="maxWidth: 60%">
                <content-loader :speed="2" :height="17" :animate="true"></content-loader>
              </div>
              <div class="mb-3">
                <content-loader :speed="2" :height="12" :animate="true"></content-loader>
              </div>
              <div class="mb-3" style="maxWidth: 90%">
                <content-loader :speed="10" :height="13" :animate="true"></content-loader>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </div>

    </b-container>
    <b-container>
       <b-button block variant="outline-success" @click="loadMore()" class="mt-5">Load Berita Lainnya</b-button>
     </b-container>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

import { limitCharacter, formatDate, slug } from '../utils/helper';

export default {
  data () {
    return {
      page: 1
    }
  },
  components: {
    ContentLoader,
  },
  mounted () {
    this.$store.dispatch('getNewsPaging', {
      page: this.page
    });
  },
  computed: {
    dataNewsPaging() {
     return this.$store.state.dataNewsPaging;
    },
    isLoading() {
      return this.$store.state.newsLoading;
    }
  },
  methods: {
    limitCharacter,
    formatDate,
    slug,
    loadMore () {
      this.$store.dispatch('getNewsPaging', {
        page: this.page + 1
      });     
    },
  }
}
</script>

<style scoped>
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
@media only screen and (max-width: 768px) {
  .news-title {
    font-size: 22px;
  }
  .title {
    line-height: 32px;
    font-size: 18px;
  }
  .timestamp {
    font-size: 14px;
  }
  .description {
    font-size: 14px;
  }
  .btn-outline-success {
    font-size: 14px;
  }
}
</style>