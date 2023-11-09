import { useForm } from "react-hook-form";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useAddSubscribeMutation } from "../../store/api/dbApi";
import { onSubmitForm } from "../../functions";
import { FormMessage } from "../Form/FormMessage/FormMessage";

function Subscription() {
  const { register, handleSubmit, reset } = useForm();

  const [addSubscribe, { status }] = useAddSubscribeMutation();

  const onSubmit = async (data) => {
    onSubmitForm(data, addSubscribe);
    status === "fulfilled" && reset();
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
              <FormMessage status={status} />
            ) : (
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
                  value={status === "pending" ? "Please wait..." : "Subscribe"}
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Subscription };
