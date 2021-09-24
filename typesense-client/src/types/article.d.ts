interface IResponse {
  articles: IArticle[];
  status: string;
  totalResults: number;
}

interface ISource {
  id: string;
  name: string;
}

interface IArticle {
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
}

interface INewsIoResponse {
  status: string;
  totalResults: number;
  results: array;
  nextPage: number;
}
