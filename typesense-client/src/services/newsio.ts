export const newsIo = {
  BASE_URL: 'https://newsdata.io',
  API_KEY: process.env.REACT_APP_NEWSIO_APIKEY,
  VERSION: '/1',
  END_POINT: {
    latest: '/news',
    archive: '/archive',
    sources: '/sources',
  },
  COUNTRY: 'us',
};
