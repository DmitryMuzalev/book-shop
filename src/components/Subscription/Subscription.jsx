import { useForm } from "react-hook-form";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useState } from "react";

function Subscription() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubscribe, setIsSubscribe] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubscribe((prev) => !prev);
    reset();
  };

  return (
    <section className="subscription section-wrap">
      <div className="container">
        <div className="subscription__wrap">
          <SectionTitle isBlue={true}>
            <h2>Get The Best Updates</h2>
            <p style={{ color: "var(--blue)", textAlign: "center" }}>
              Subscribe with your mail id to know the current update in book
              edition at your fingertip with in a minute.
            </p>
          </SectionTitle>
          <div className="subscription__content-wrap">
            {!isSubscribe ? (
              <div className="subscription__form">
                <form
                  id="subscription-form"
                  className="subscription-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    className="subscription-form__input-email"
                    type="email"
                    placeholder="Your Email ID..."
                    {...register("email", { required: true })}
                  />
                  <input
                    className="subscription-form__btn btn btn_large"
                    type="submit"
                    value="Subscribe"
                  />
                </form>
              </div>
            ) : (
              <p className="subscription-form__success-message">
                Thank you! Your submission has been received!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Subscription };
