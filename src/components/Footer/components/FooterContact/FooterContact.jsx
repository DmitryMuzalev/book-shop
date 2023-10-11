function FooterContact() {
  const contacts = [
    {
      title: "address",
      label: "24A Kingston St, Las Vegas NC 28202, USA.",
      url: "#!",
    },
    {
      title: "mail",
      label: "support@pages.com",
      url: "mailto: support@pages.com",
    },
    {
      title: "phone",
      label: "(+22) 123 - 4567 - 900",
      url: "tel:+221234567900",
    },
  ];

  return (
    <div className="footer-contact">
      <h3 className="footer__title title title_big">Keep in Touch</h3>
      <div className="footer-contact__wrap">
        {contacts.map((item, i) => (
          <div className="footer-contact-item" key={i}>
            <div className="footer-contact-item__label title">
              {item.title} :
            </div>
            <div className="footer-contact-item__content">
              <a href={item.url}>{item.label}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export { FooterContact };
