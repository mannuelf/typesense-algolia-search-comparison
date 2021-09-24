export const API_BASE_URL: string = 'https://newsapi.org';
export const API_KEY: string = process.env.REACT_APP_API_KEY!;
export const API_VERSION: string = '/v2';
export const API_END_POINT: string = '/everything';
export const COUNTRY: string = 'us';
export const URL: string = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;
