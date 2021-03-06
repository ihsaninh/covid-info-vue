<template>
  <div>
    <b-container class="martop">
      <div v-if="!loading">
        <b-card v-for="news in allNews" v-bind:key="news.id">
          <b-row class="mt-2">
            <b-col sm="8">
              <h5 class="title">
                <a :href="news.url" target="_blank">{{ news.title }}</a>
              </h5>
              <h6 class="mt-3 timestamp">{{ formatDate(news.publishedAt) }}</h6>
              <p class="mt-4 description">
                {{
                `${news.source.name} - ${limitCharacter(news.content, 200)}`
                }}
              </p>
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
              <div class="mb-3" style="maxwidth: 80%;">
                <content-loader :speed="2" :height="15" :animate="true"></content-loader>
              </div>
              <div class="mb-3" style="maxwidth: 60%;">
                <content-loader :speed="2" :height="17" :animate="true"></content-loader>
              </div>
              <div class="mb-3">
                <content-loader :speed="2" :height="12" :animate="true"></content-loader>
              </div>
              <div class="mb-3" style="maxwidth: 90%;">
                <content-loader :speed="10" :height="13" :animate="true"></content-loader>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </b-container>
    <b-container>
      <b-button block variant="outline-success" @click="loadMore" class="mt-5">Load Berita Lainnya</b-button>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { ContentLoader } from "vue-content-loader";

import { limitCharacter, formatDate, slug } from "@/utils/helper";
import { newsData } from "@/utils/endpoints";

export default {
  data() {
    return {
      allNews: [],
      loading: false,
      page: 1
    };
  },
  components: {
    ContentLoader
  },
  mounted() {
    this.getNews();
  },
  methods: {
    limitCharacter,
    formatDate,
    slug,
    async getNews() {
      try {
        this.loading = true;
        const response = await axios.get(newsData(this.page));
        this.allNews = [...this.allNews, ...response.data.articles];
        this.loading = false;
      } catch (error) {
        // error
      }
    },
    loadMore() {
      this.page++;
      this.getNews();
    }
  }
};
</script>

<style scoped>
.martop {
  margin-top: 100px;
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
  color: #5c6c7a;
}
.card {
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: none;
  margin-bottom: 10px;
  border-radius: 0.5rem;
}
.img-fluid {
  width: 400px;
  height: 230px;
}
.rounded {
  border-radius: 0.3rem !important;
}
.btn-outline-success {
  font-weight: 400;
  border-width: 2px;
}
.btn {
  border-radius: 0.5rem;
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
