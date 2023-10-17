function ContactForm() {
  return (
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
            Keep me up to date with news and offers from time to time by email
          </span>
        </label>
        <input
          type="submit"
          className="btn contact-form__btn"
          value="send a message"
        />
      </form>
    </div>
  );
}
export { ContactForm };
