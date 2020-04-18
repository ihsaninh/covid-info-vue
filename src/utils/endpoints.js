export const totalDataId = 'https://indonesia-covid-19.mathdro.id/api';
export const totalDataGlobal = 'https://covid19.mathdro.id/api/';
export const dailyCasesId = 'https://indonesia-covid-19.mathdro.id/api/harian';
export const newsData = (page = 1) =>
  `https://newsapi.org/v2/everything?q=corona+covid&apiKey=6566df4437f94a3bb6e92809f06f46e8&language=id&sortBy=publishedAt&pageSize=5&page=${page}`;
export const detailDataId =
  'https://indonesia-covid-19.mathdro.id/api/provinsi';
export const detailDataGlobal = 'https://api.kawalcorona.com/';
