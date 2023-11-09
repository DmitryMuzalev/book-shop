import { useForm } from "react-hook-form";
import { useAddMessageMutation } from "../../../../store/api/dbApi";
import { onSubmitForm } from "../../../../functions";
import { FormMessage } from "../../../../components/Form/FormMessage/FormMessage";

import { parsePhoneNumberFromString } from "libphonenumber-js";
import { Input } from "../../../../components/Form/Input/Input";

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const [addMessage, { status }] = useAddMessageMutation();

  const onSubmit = async (data) => {
    onSubmitForm(data, addMessage);
    status === "fulfilled" && reset();
  };

  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber) {
      return value;
    }
    return phoneNumber.formatInternational();
  };

  return (
    <div className="contact-us__form-wrap">
      {status === "rejected" || status === "fulfilled" ? (
        <FormMessage status={status} />
      ) : (
        <div className="contact-us__form">
          <form
            action=""
            className="contact-form"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="contact-form__row">
              <div className="contact-form-field">
                <div className="contact-form-field__icon">
                  <img src="./images/icons/user.svg" alt="user" />
                </div>
                <input
                  type="text"
                  className="contact-form-field__item input-field"
                  placeholder="Name"
                  {...register("name", { required: true })}
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
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <Input
              type="text"
              placeholder="Phone"
              register={register}
              name="test"
              error={true}
            />
            <div className="contact-form-field">
              <div className="contact-form-field__icon">
                <img src="./images/icons/phone.svg" alt="phone" />
              </div>
              <input
                type="tel"
                className="contact-form-field__item input-field"
                placeholder="Phone"
                {...register("phone", {
                  required: true,
                  onChange: (e) =>
                    (e.target.value = normalizePhoneNumber(e.target.value)),
                })}
              />
            </div>

            <div className="contact-form-field">
              <div className="contact-form-field__icon textarea-field-icon">
                <img src="./images/icons/edit.svg" alt="edit" />
              </div>
              <textarea
                className="contact-form-field__item input-field textarea-field"
                placeholder="Message"
                {...register("body", { required: true })}
              />
            </div>
            <label className="checkbox-field">
              <input
                type="checkbox"
                name="subscription"
                className="checkbox-field__checkbox"
                {...register("subscription")}
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
              value={status === "pending" ? "Please wait..." : "send a message"}
            />
          </form>
        </div>
      )}
    </div>
  );
}
export { ContactForm };
