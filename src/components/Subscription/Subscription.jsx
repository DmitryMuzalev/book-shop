import { useForm } from "react-hook-form";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useAddSubscribeMutation } from "../../store/api/dbApi";
const { v4: uuidv4 } = require("uuid");

function Subscription() {
  const { register, handleSubmit, reset } = useForm();
  const [addSubscribe, { status }] = useAddSubscribeMutation();

  const onSubmit = async (data) => {
    if (data) {
      addSubscribe({ id: uuidv4(), ...data })
        .unwrap()
        .catch((error) => console.error("rejected", error));

      reset();
    }
  };

  return (
    <section className="subscription section-wrap">
      <div className="container">
        <div className="subscription__wrap">
          <SectionTitle classes="section-title_b">
            <h2>Get The Best Updates</h2>
            <p style={{ color: "var(--blue)", textAlign: "center" }}>
              Subscribe with your mail id to know the current update in book
              edition at your fingertip with in a minute.
            </p>
          </SectionTitle>

          <div className="subscription__content-wrap">
            {status === "rejected" || status === "fulfilled" ? (
              <p className="subscription-form__success-message">
                {status === "fulfilled"
                  ? "Thank you! Your submission has been received!"
                  : "Oops! Something went wrong while submitting the form."}
              </p>
            ) : (
              <div className="subscription__form">
                <form
                  id="subscription-form"
                  autoComplete="off"
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
                    value={
                      status === "pending" ? "Please wait..." : "Subscribe"
                    }
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Subscription };
