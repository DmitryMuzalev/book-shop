import { contacts } from "../../../../data/contacts";

function FooterContact() {
  const contactsKeys = Object.keys(contacts);

  return (
    <div className="footer-contact">
      <h3 className="footer__title title title_big">Keep in Touch</h3>
      <div className="footer-contact__wrap">
        {contactsKeys.map((item, i) => (
          <div className="footer-contact-item" key={i}>
            <div className="footer-contact-item__label title">{item} :</div>
            <div className="footer-contact-item__content">
              <a href={contacts[item].url}>{contacts[item].label}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export { FooterContact };
