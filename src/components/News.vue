<template>
  <b-container class="mt-5">
    <b-card-group deck>
      <b-card>
        <h3 class="news-title">Berita Terkini</h3>
        <b-row class="mt-5" v-for="news in allNews" v-bind:key="news.id">
          <b-col sm="8">
            <h5 class="title">
              <a :href="news.url" target="_blank">{{ news.title }}</a>
            </h5>
            <h6 class="mt-3 timestamp">{{ formatDate(news.publishedAt) }}</h6>
            <p
              class="mt-4 description"
              v-if="news.source.name !== 'Youtube.com'"
            >{{ `${news.source.name} - ${limitCharacter(news.content, 180)}` }}</p>
            <a
              :href="news.url"
              v-else
              class="btn btn-custom link-ku"
              target="_blank"
            >Lihat di Youtube</a>
          </b-col>
          <b-col sm="4" class="d-none d-sm-block">
            <b-img rounded :src="news.urlToImage" fluid alt="Responsive image"></b-img>
          </b-col>
        </b-row>
        <b-row class="justify-content-center mt-4">
          <router-link to="/news" class="btn btn-outline-success">Lihat Selengkapnya</router-link>
        </b-row>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import axios from "axios";

import { limitCharacter, formatDate, slug } from "@/utils/helper";
import { newsData } from "@/utils/endpoints";

export default {
  name: "News",
  data() {
    return {
      allNews: []
    };
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
        const response = await axios.get(newsData());
        this.allNews = response.data.articles;
      } catch (error) {
        // error
      }
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.01), 0 4px 24px 0 rgba(0, 0, 0, 0.05);
  padding: 25px;
  border: none;
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
.link-ku {
  margin-top: 30px;
}
.btn-custom {
  background-color: #4d9143;
  color: #ffffff;
}
.btn-custom:hover {
  color: #eee;
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
  .card {
    padding: 5px;
  }
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
