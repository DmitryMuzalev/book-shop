import { useState } from "react";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { articles, dateFormat } from "../../data/articles";
import { Filter } from "../../components/Filter/Filter";

function ArticlePreview({ banner, title, description, date }) {
  return (
    <div className="article-preview">
      <a href="#!" className="article-preview__banner">
        <img src={banner} alt={title} />
      </a>
      <div className="article-preview__content-wrap">
        <a href="#!" className="article-preview__title title">
          {title}
        </a>
        <p className="article-preview__description">{description}</p>
        <div className="article-preview__readmore-wrap">
          <a href="#!" className="article-preview__readmore-link">
            Readmore
          </a>
          <p className="article-preview__date">{dateFormat(date)}</p>
        </div>
      </div>
    </div>
  );
}

function Articles() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const options = ["all", "classics", "detective & mystery", "ideology"];

  return (
    <>
      <section className="page-description">
        <SectionTitle>
          <h2 className="page-description__title">Articles</h2>
          <p className="page-description__text">
            Every single details in the book store like offers latest news about
            the events <br /> has more attractive and provide a seamless user
            experience.
          </p>
        </SectionTitle>
      </section>
      <section className="articles section-wrap">
        <div className="container">
          <div className="articles__wrap">
            <div className="articles__filter">
              <Filter
                currentValue={currentCategory}
                options={options}
                onChangeCurrentValue={setCurrentCategory}
              />
            </div>
            <div className="articles__list">
              {articles
                .filter(
                  (article) =>
                    article.category === currentCategory ||
                    currentCategory === "all"
                )
                .map((article) => (
                  <ArticlePreview key={article.id} {...article} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { Articles };
