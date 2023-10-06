import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

function ContactUs() {
  return (
    <>
      <section className="page-description">
        <div className="container">
          <SectionTitle>
            <h1 className="page-description__title">contact us</h1>
            <p className="page-description__text">
              Whether you have a question about features, pricing or anything
              else about the books,our team is ready to answer all your
              questions.
            </p>
          </SectionTitle>
        </div>
      </section>
      <section className="contact-us section-wrap">
        <div className="container">
          <div className="contact-us__wrap">
            <div className="contact-us__content-wrap">
              <SectionTitle isLeft={true}>
                <h2>Keep in touch</h2>
                <p>
                  We believe that bookstores are essential to a healthy culture.
                  They’re where authors can connect with readers. You can
                  connect with us with these details.
                </p>
              </SectionTitle>
              <div className="keep-touch-detail">
                <div className="keep-touch-detail-item">
                  <div className="keep-touch-detail-item__icon">
                    <img src="./images/icons/home.svg" alt="home" />
                  </div>
                  <div className="keep-touch-detail-item__content-wrap">
                    <h3 className="keep-touch-detail-item__title title_big">
                      visit us:
                    </h3>
                    <p>24A Kingston St, Las Vegas NC 28202, USA.</p>
                  </div>
                </div>
                <div className="keep-touch-detail-item">
                  <div className="keep-touch-detail-item__icon">
                    <img src="./images/icons/envelope.svg" alt="envelope" />
                  </div>
                  <div className="keep-touch-detail-item__content-wrap">
                    <h3 className="keep-touch-detail-item__title title_big">
                      drop us:
                    </h3>
                    <a href="mailto:support@pages.com">support@pages.com</a>
                  </div>
                </div>
                <div className="keep-touch-detail-item">
                  <div className="keep-touch-detail-item__icon">
                    <img src="./images/icons/phone-call.svg" alt="phone-call" />
                  </div>
                  <div className="keep-touch-detail-item__content-wrap">
                    <h3 className="keep-touch-detail-item__title title_big">
                      call us:
                    </h3>
                    <a href="tel:+221234567900">(+22) 123 - 4567 - 900</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-us__form">
              <form action="" className="contact-form">
                <div className="contact-form__row">
                  <div className="contact-form-field">
                    <div className="contact-form-field__icon">
                      <img src="./images/icons/user.svg" alt="user" />
                    </div>
                    <input
                      type="text"
                      className="contact-form-field__item input-field"
                      placeholder="Name"
                    />
                  </div>
                  <div className="contact-form-field">
                    <div className="contact-form-field__icon">
                      <img src="./images/icons/mail.svg" alt="mail" />
                    </div>
                    <input
                      type="email"
                      className="contact-form-field__item input-field"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="contact-form-field">
                  <div className="contact-form-field__icon">
                    <img src="./images/icons/phone.svg" alt="phone" />
                  </div>
                  <input
                    type="tel"
                    className="contact-form-field__item input-field"
                    placeholder="Phone"
                  />
                </div>
                <div className="contact-form-field">
                  <div className="contact-form-field__icon textarea-field-icon">
                    <img src="./images/icons/edit.svg" alt="edit" />
                  </div>
                  <textarea
                    className="contact-form-field__item input-field textarea-field"
                    placeholder="Message"
                  />
                </div>
                <label className="checkbox-field">
                  <input
                    type="checkbox"
                    name="subscription"
                    className="checkbox-field__checkbox"
                  />
                  <div className="checkbox-field__custom-checkbox"></div>
                  <span>
                    Keep me up to date with news and offers from time to time by
                    email
                  </span>
                </label>
                <input
                  type="submit"
                  className="btn contact-form__btn"
                  value="send a message"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container">
          <SectionTitle>
            <h2>frequent questions?</h2>
          </SectionTitle>
        </div>
      </section>
    </>
  );
}
export { ContactUs };
