import Author from './Author';
import Blurb from './Blurb';
import Heading from './Heading';
import Image from './Image';
import PublishedAt from './PublishedAt';

function Article({
  author,
  description,
  publishedAt,
  title,
  urlToImage,
}: IArticle) {
  return (
    <div className="bg-white p-4">
      <Image src={urlToImage} alt={title} />
      <Heading content={title} />
      <PublishedAt time={publishedAt} />
      <Author content={author} />
      <Blurb content={description} />
    </div>
  );
}

export default Article;
