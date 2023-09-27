import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

function AuthorInfo() {
  return (
    <section className="author-info section-wrap">
      <div className="container">
        <div className="author-info__wrap">
          <div className="author-info__image">
            <img
              src="./images/photos/avatar_about_author_2.jpg"
              alt="Dr. John Abraham"
            />
          </div>
          <div className="author-info__content-wrap">
            <div className="author-info-details">
              <div className="author-info-details-item">
                <h2 className="author-info-details-item__title title title_big">
                  Country:
                </h2>
                <p className="author-info-details-item__info">United Kingdom</p>
              </div>
              <div className="author-info-details-item">
                <h2 className="author-info-details-item__title title title_big">
                  Language:
                </h2>
                <p className="author-info-details-item__info">English</p>
              </div>
              <div className="author-info-details-item">
                <h2 className="author-info-details-item__title title title_big">
                  Genre:
                </h2>
                <p className="author-info-details-item__info">Historical</p>
              </div>
              <div className="author-info-details-item">
                <h2 className="author-info-details-item__title title title_big">
                  First Publication:
                </h2>
                <p className="author-info-details-item__info">1991</p>
              </div>
              <div className="author-info-details-item">
                <h2 className="author-info-details-item__title title title_big">
                  Follow Me On:
                </h2>
                <div className="author-info-social-links">
                  <a href="!#" className="author-info-social-links__item">
                    <FaFacebookF />
                  </a>
                  <a href="!#" className="author-info-social-links__item">
                    <FaTwitter />
                  </a>
                  <a href="!#" className="author-info-social-links__item">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            <div className="author-info-bio">
              <SectionTitle isLeft={true}>
                <h2>About Dr. John Abraham</h2>
                <p>
                  An author, a website or magazine, have a an organization that
                  wants to recommend books, or even just a book-lover with an
                  Instagram feed, you can sign up to be an affiliate, start your
                  own shop, and be rewarded for your advocacy of books.
                </p>
              </SectionTitle>
              <button type="button" className="btn author-info-bio__btn">
                contact now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { AuthorInfo };
