import { dateFormat } from "../../../../data/articles";
function ArticlesItem({ banner, title, description, date }) {
  return (
    <div className="article-item">
      <a href="#!" className="article-item__banner">
        <img src={banner} alt={title} />
      </a>
      <div className="article-item__content-wrap">
        <a href="#!" className="article-item__title title">
          {title}
        </a>
        <p className="article-item__description">{description}</p>
        <div className="article-item__readmore-wrap">
          <a href="#!" className="article-item__readmore-link">
            Readmore
          </a>
          <p className="article-item__date">{dateFormat(date)}</p>
        </div>
      </div>
    </div>
  );
}

export { ArticlesItem };
