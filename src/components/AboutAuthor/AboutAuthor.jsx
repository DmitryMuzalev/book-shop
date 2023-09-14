import { SectionTitle } from "../SectionTitle/SectionTitle";

function AboutAuthor() {
  return (
    <section className="about-author section-wrap">
      <div className="container">
        <div className="about-author__wrap section-grid">
          <div className="about-author__image">
            <div className="about-author__image-border image-border">
              <img
                src="./images/photos/avatar_about_author.jpg"
                alt="Author name"
              />
            </div>
          </div>
          <div className="about-author__content-wrap">
            <SectionTitle isLeft={true}>
              <h2>About the Author</h2>
              <p>
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers, where we
                discover new writers, where children get hooked on the thrill of
                reading that can last a lifetime.
              </p>
            </SectionTitle>
            <div className="about-author__details">
              <div className="about-author__details-item">
                <div className="about-author-detail">
                  <div className="about-author-detail__content">02</div>
                  <h3 className="about-author-detail__title">
                    Books Published
                  </h3>
                </div>
              </div>
              <div className="about-author__details-item">
                <div className="about-author-detail">
                  <div className="about-author-detail__content">4.5</div>
                  <h3 className="about-author-detail__title">User Reviews</h3>
                </div>
              </div>
              <div className="about-author__details-item">
                <div className="about-author-detail">
                  <div className="about-author-detail__content">04</div>
                  <h3 className="about-author-detail__title">
                    Best Seller Awards
                  </h3>
                </div>
              </div>
            </div>
            <div className="about-author__business-card business-card">
              <div className="business-card__qr-code">
                <img src="./images/other/qr_code.svg" alt="QR-code" />
              </div>
              <div className="business-card__content-wrap">
                <h3 className="business-card__title">John Abraham , Ph.d</h3>
                <div className="business-card__contact">
                  <p>
                    Mail:
                    <a href="mailto:johnabraham@gmail.com">
                      johnabraham@gmail.com
                    </a>
                  </p>
                </div>
                <div className="business-card__contact">
                  <p>
                    Phone: <a href="tel:(+2) 123 545 9000">(+2) 123 545 9000</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { AboutAuthor };
