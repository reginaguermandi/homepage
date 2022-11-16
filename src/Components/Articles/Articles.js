import articles from '../../data';
import './Articles.css';

export default function Articles() {
  return (
    <section className='article-container'>

      {articles.map((article, key) =>
        <article className='articles-card' key={key}>

          <div className='image-container'>
            <img
              src={article.image}
              alt='tech devices'
              width='130px'
            ></img>
          </div>

          <div className='article-content'>
            <span>{article.id}</span>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>

        </article>
      )}

    </section>
  )
}