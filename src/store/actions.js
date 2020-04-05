import axios from 'axios';

export const getDataGlobal = async ({ commit, state }) => {
  try {
    state.dataLoading = true;
    const response = await axios.get('https://covid19.mathdro.id/api/') 
    commit('SET_DATA_GLOBAL', response.data)
    state.dataLoading = false;
  } catch (error) {
    // error
  }
}

export const getDataId = async ({ commit, state }) => {
  try {
    state.dataLoading = true;
    const response = await axios.get('https://api.kawalcorona.com/indonesia/') 
    commit('SET_DATA_ID', response.data)
    state.dataLoading = false;
  } catch (error) {
    // error
  }
}

export const getDetailDataGlobal = async ({ commit, state }) => {
  try {
    state.tableLoading = true;
    const response = await axios.get('https://api.kawalcorona.com/');
    response.data.forEach(el => {
      state.dataDetailGlobal.push(el.attributes);
      commit('GET_DETAIL_GLOBAL', state.dataDetailGlobal) 
    });
  } catch (error) {
    // error
  }
}

export const getDetailDataId = async ({ commit, state }) => {
  try {
    state.tableLoading = true;
    const response = await axios.get('https://api.kawalcorona.com/indonesia/provinsi/');
    response.data.forEach(el => {
      state.dataDetailId.push(el.attributes);
      commit('GET_DETAIL_ID', state.dataDetailId) 
    });
    state.tableLoading = false;
  } catch (error) {
    // error
  }
}

export const getNews = async ({ commit, state }) => {
  try {
    state.newsLoading = true;
    const response = await axios.get(`https://newsapi.org/v2/everything?q=corona+covid&apiKey=6566df4437f94a3bb6e92809f06f46e8&language=id&sortBy=publishedAt&pageSize=5`);
    commit('GET_NEWS', response.data.articles)
    state.newsLoading = false;
  } catch (error) {
    // error
  }
}

export const getNewsPaging = async ({ commit, state }, { page }) => {
  try {
    state.newsLoading = true;
    console.log(page);
    const response = await axios.get(`https://newsapi.org/v2/everything?q=corona+covid&apiKey=6566df4437f94a3bb6e92809f06f46e8&language=id&sortBy=publishedAt&pageSize=5&page=${page}`);
    commit('GET_NEWS_PAGING', [...state.dataNewsPaging, ...response.data.articles])
    state.newsLoading = false;
  } catch (error) {
    // error
  }
}