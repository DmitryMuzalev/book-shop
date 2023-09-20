import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

function HomeBlog() {
  return (
    <section className="home-blog section-wrap">
      <div className="container">
        <div className="home-blog__wrap">
          <SectionTitle>
            <h2>Articles & Resources</h2>
          </SectionTitle>
          <div className="home-blog__content-wrap">
            <div className="articles-item">
              <a href="#!" className="articles-item__image">
                <img src="./images/articles/article_3.jfif" alt="article_3" />
              </a>
              <div className="articles-item__content-wrap">
                <a href="#!" className="articles-item__title title">
                  Significant reading has more info number
                </a>
                <p className="articles-item__intro">
                  Override the digital divide with additional clickthroughs from
                  DevOps for real-time schemas.
                </p>
                <div className="articles-item__readmore-wrap">
                  <a href="#!" className="articles-item__readmore-link">
                    Readmore
                  </a>
                  <p className="articles-item__date">October 6, 2021</p>
                </div>
              </div>
            </div>
            <div className="articles-item">
              <a href="#!" className="articles-item__image">
                <img src="./images/articles/article_1.jfif" alt="article_3" />
              </a>
              <div className="articles-item__content-wrap">
                <a href="#!" className="articles-item__title title">
                  Significant reading has more info number
                </a>
                <p className="articles-item__intro">
                  Override the digital divide with additional clickthroughs from
                  DevOps for real-time schemas.
                </p>
                <div className="articles-item__readmore-wrap">
                  <a href="#!" className="articles-item__readmore-link">
                    Readmore
                  </a>
                  <p className="articles-item__date">October 6, 2021</p>
                </div>
              </div>
            </div>
            <div className="articles-item">
              <a href="#!" className="articles-item__image">
                <img src="./images/articles/article_5.jfif" alt="article_3" />
              </a>
              <div className="articles-item__content-wrap">
                <a href="#!" className="articles-item__title title">
                  Significant reading has more info number
                </a>
                <p className="articles-item__intro">
                  Override the digital divide with additional clickthroughs from
                  DevOps for real-time schemas.
                </p>
                <div className="articles-item__readmore-wrap">
                  <a href="#!" className="articles-item__readmore-link">
                    Readmore
                  </a>
                  <p className="articles-item__date">October 6, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { HomeBlog };
