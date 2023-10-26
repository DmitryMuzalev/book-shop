import { dateFormat } from "../../../../functions";
import { CustomLink } from "../../../CustomLink/CustomLink";

function ArticlesItem({ id, banner, title, description, date }) {
  return (
    <div className="article-item">
      <CustomLink to={`/blog/${id}`} className="article-item__banner">
        <img src={banner} alt={title} />
      </CustomLink>
      <div className="article-item__content-wrap">
        <CustomLink to={`/blog/${id}`} className="article-item__title title">
          {title}
        </CustomLink>
        <p className="article-item__description">{description}</p>
        <div className="article-item__readmore-wrap">
          <CustomLink
            to={`/blog/${id}`}
            className="article-item__readmore-link"
          >
            Readmore
          </CustomLink>
          <p className="article-item__date">{dateFormat(date)}</p>
        </div>
      </div>
    </div>
  );
}

export { ArticlesItem };
