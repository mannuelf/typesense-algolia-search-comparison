export const NEWS_API = {
  BASE_URL: 'https://newsapi.org',
  API_KEY: process.env.REACT_APP_NEWS_API_KEY,
  VERSION: 'v2',
  END_POINT: {
    everything: 'everything',
    top_headlines: 'top-headlines',
    sources: 'top-headlines/sources',
  },
  COUNTRY: 'US',
};
