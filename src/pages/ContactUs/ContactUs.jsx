import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Faq } from "./components/Faq/Faq";
import { useSelector } from "react-redux";

function ContactUs() {
  const { address, mail, phone } = useSelector((state) => state.contacts);

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
              <SectionTitle classes="section-title_left">
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
                    <img src="/images/icons/home.svg" alt="home" />
                  </div>
                  <div className="keep-touch-detail-item__content-wrap">
                    <h3 className="keep-touch-detail-item__title title_big">
                      visit us:
                    </h3>
                    <a href={address.url}>{address.label}</a>
                  </div>
                </div>
                <div className="keep-touch-detail-item">
                  <div className="keep-touch-detail-item__icon">
                    <img src="/images/icons/envelope.svg" alt="envelope" />
                  </div>
                  <div className="keep-touch-detail-item__content-wrap">
                    <h3 className="keep-touch-detail-item__title title_big">
                      drop us:
                    </h3>
                    <a href={mail.url}>{mail.label}</a>
                  </div>
                </div>
                <div className="keep-touch-detail-item">
                  <div className="keep-touch-detail-item__icon">
                    <img src="/images/icons/phone-call.svg" alt="phone-call" />
                  </div>
                  <div className="keep-touch-detail-item__content-wrap">
                    <h3 className="keep-touch-detail-item__title title_big">
                      call us:
                    </h3>
                    <a href={phone.url}>{phone.label}</a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}
export { ContactUs };
