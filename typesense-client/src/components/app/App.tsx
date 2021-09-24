import { useSelector } from 'react-redux';
import { getArticles } from 'store/reducers/ArticlesReducer';
import ArticleCard from '../article-card/ArticleCard';
import SearchForm from '../search-form/SearchForm';
import Header from '../header/Header';

function App() {
  const { articles } = useSelector(getArticles);
  return (
    <>
      <Header />
      <section className="container mx-auto">
        <SearchForm />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4">
          {articles &&
            articles.length &&
            articles.map((article: IArticle, index: number) => (
              <ArticleCard key={index} {...article} />
            ))}
        </div>
      </section>
    </>
  );
}

export default App;
