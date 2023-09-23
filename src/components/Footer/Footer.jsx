import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__column footer-widget">
            <a href="!#">
              <img src="./images/logo.svg" alt="logo" />
            </a>
            <div className="footer-social-links">
              <div className="social-links">
                <a
                  href="#!"
                  className="social-links__item social-links__item_b"
                >
                  <FaFacebookF />
                </a>
              </div>
              <div className="social-links">
                <a
                  href="#!"
                  className="social-links__item social-links__item_b"
                >
                  <FaTwitter />
                </a>
              </div>
              <div className="social-links">
                <a
                  href="#!"
                  className="social-links__item social-links__item_b"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="social-links">
                <a
                  href="#!"
                  className="social-links__item social-links__item_b"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__column footer-widget">
            <h3 className="footer-widget__title title title_big">Explore</h3>
            <div className="footer-widget__links-wrap">
              <a href="#!" className="footer-widget__link">
                Home
              </a>
              <a href="#!" className="footer-widget__link">
                About
              </a>
              <a href="#!" className="footer-widget__link">
                Articles
              </a>
              <a href="#!" className="footer-widget__link">
                Our Store
              </a>
              <a href="#!" className="footer-widget__link">
                Contact Us
              </a>
            </div>
          </div>
          <div className="footer__column footer-widget">
            <h3 className="footer-widget__title title title_big">
              Utility Pages
            </h3>
            <div className="footer-widget__links-wrap">
              <a href="#!" className="footer-widget__link">
                Style Guide
              </a>
              <a href="#!" className="footer-widget__link">
                404 Not Found
              </a>
              <a href="#!" className="footer-widget__link">
                Password Protected
              </a>
            </div>
          </div>
          <div className="footer__column footer-widget">
            <h3 className="footer-widget__title title title_big">
              Keep in Touch
            </h3>
            <div className="footer-contact-wrap">
              <div className="footer-contact-item">
                <div className="footer-contact-item__label title">
                  Address :
                </div>
                <div className="footer-contact-item__content">
                  <p>
                    24A Kingston St, Los Vegas <br />
                    NC 28202, USA.
                  </p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-item__label title">Mail :</div>
                <div className="footer-contact-item__content">
                  <a href="mailto: support@pages.com">support@pages.com</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-item__label title">Phone :</div>
                <div className="footer-contact-item__content">
                  <a href="tel:+221234567900">(+22) 123 - 4567 - 900</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="copyright__text">
            © Drafted by <a href="#!">VictorFlow</a> - Powered by{' '}
            <a href="#!">Webflow</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
