import { useSelector } from "react-redux";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

function TestimonialsItem({ avatar, author, title, message, rating }) {
  return (
    <div className="testimonials-list__item testimonial">
      <div className="testimonial__client-info testimonial-client-info">
        <div className="testimonial-client-info__photo">
          <img src={avatar} alt={author} />
        </div>
        <div className="testimonial-client-info__content">
          <h3 className="testimonial-client-info__name title_big">{author}</h3>
          <div className="testimonial-client-info__rating">
            <img src={rating} alt="rating" />
          </div>
        </div>
      </div>
      <div className="testimonial__content testimonial-content">
        <div className="testimonial-content__title title title_small">
          “{title}”
        </div>
        <p className="testimonial-content__message">{message}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  const { testimonialsList } = useSelector((state) => state.testimonial);

  return (
    <section className="testimonials section-wrap">
      <div className="container">
        <div className="testimonials__wrap">
          <div className="testimonials__content-wrap">
            <SectionTitle classes="section-title_left">
              <h2>words from our readers</h2>
              <p>
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers, where we
                discover new writers, where children get hooked on the thrill of
                reading that can last a lifetime.
              </p>
            </SectionTitle>
            <div className="testimonials__overall-ratings overall-ratings">
              <div className="overall-ratings__rating">
                <img src="./images/other/rating.svg" alt="rating" />
                <h3>(4.8/5)</h3>
              </div>
              <p className="overall-ratings__description">
                overall customer ratings
              </p>
            </div>
          </div>

          <div className="testimonials__review-wrap testimonials-list">
            {testimonialsList.map((testimonial) => (
              <TestimonialsItem {...testimonial} key={testimonial.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Testimonials };
