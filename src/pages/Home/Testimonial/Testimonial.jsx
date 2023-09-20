import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

function Testimonial() {
  return (
    <section className="testimonial section-wrap">
      <div className="container">
        <div className="testimonial__wrap">
          <div className="testimonial__content-wrap">
            <SectionTitle isLeft={true}>
              <h2>words from our readers</h2>
              <p>
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers, where we
                discover new writers, where children get hooked on the thrill of
                reading that can last a lifetime.
              </p>
            </SectionTitle>
            <div className="testimonial__overall-ratings overall-ratings">
              <div className="overall-ratings__rating">
                <img src="./images/other/rating.svg" alt="rating" />
              </div>
              <p className="overall-ratings__description">
                overall customer ratings
              </p>
            </div>
          </div>
          <div className="testimonial__review-wrap testimonial-list">
            <div className="testimonial-list__column">
              <div className="testimonial-item">
                <div className="testimonial-item__client-info testimonial-client-info">
                  <div className="testimonial-client-info__photo">
                    <img
                      src="./images/testimonial/Martin Philips.jpg"
                      alt="Martin Philips"
                    />
                  </div>
                  <div className="testimonial-client-info__content">
                    <h3 className="testimonial-client-info__name title_big">
                      James Williams
                    </h3>
                    <div className="testimonial-client-info__rating">
                      <img src="./images/other/rating.svg" alt="rating" />
                    </div>
                  </div>
                </div>
                <div className="testimonial-item__content testimonial-content">
                  <div className="testimonial-content__title title title_small">
                    “great books collections”
                  </div>
                  <p className="testimonial-content__message">
                    I was searching this book for many years and I was happy
                    that I could find it here.
                  </p>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-item__client-info testimonial-client-info">
                  <div className="testimonial-client-info__photo">
                    <img
                      src="./images/testimonial/Martin Philips.jpg"
                      alt="Martin Philips"
                    />
                  </div>
                  <div className="testimonial-client-info__content">
                    <h3 className="testimonial-client-info__name title_big">
                      James Williams
                    </h3>
                    <div className="testimonial-client-info__rating">
                      <img src="./images/other/rating.svg" alt="rating" />
                    </div>
                  </div>
                </div>
                <div className="testimonial-item__content testimonial-content">
                  <div className="testimonial-content__title title title_small">
                    “great books collections”
                  </div>
                  <p className="testimonial-content__message">
                    I was searching this book for many years and I was happy
                    that I could find it here.
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial-list__column">
              <div className="testimonial-item">
                <div className="testimonial-item__client-info testimonial-client-info">
                  <div className="testimonial-client-info__photo">
                    <img
                      src="./images/testimonial/Martin Philips.jpg"
                      alt="Martin Philips"
                    />
                  </div>
                  <div className="testimonial-client-info__content">
                    <h3 className="testimonial-client-info__name title_big">
                      James Williams
                    </h3>
                    <div className="testimonial-client-info__rating">
                      <img src="./images/other/rating.svg" alt="rating" />
                    </div>
                  </div>
                </div>
                <div className="testimonial-item__content testimonial-content">
                  <div className="testimonial-content__title title title_small">
                    “great books collections”
                  </div>
                  <p className="testimonial-content__message">
                    I was searching this book for many years and I was happy
                    that I could find it here.
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
export { Testimonial };
