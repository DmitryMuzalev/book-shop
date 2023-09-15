import { SectionTitle } from "../SectionTitle/SectionTitle";

function Order() {
  return (
    <section className="order">
      <div className="container">
        <div className="order__wrap">
          <div className="order__content-wrap">
            <SectionTitle isLeft={true}>
              <h2 style={{ color: "var(--white)" }}>get book copy today!</h2>
              <p style={{ color: "var(--blue-middle)" }}>
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers.
              </p>
            </SectionTitle>
            <button type="button" className="btn btn_transparent order__btn">
              Order Today
            </button>
          </div>
          <div className="order__image-wrap">
            <img src="./images/other/book_and_cup.png" alt="Book and cup" />
          </div>
        </div>
      </div>
    </section>
  );
}
export { Order };
