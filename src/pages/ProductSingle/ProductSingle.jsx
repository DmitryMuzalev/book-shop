function ProductSingle() {
  return (
    <section className="product-single section-wrap">
      <div className="container">
        <div className="product-single__wrap">
          <div className="product-single__image-wrap">
            <div className="product-single__image">
              <img src="../images/books/book_1.svg" alt="book_1" />
            </div>
            <div className="product-single__detail">
              <h2 className="product-single__title">Atomic One’s - Audio</h2>
              <div className="product-single__cost">$ 68.97 USD</div>
              <div className="product-single__description">
                The book contains ample theoretical content as well as a number
                of solved questions, it for sure will help aspirants succeed in
                learning and writing English proficiently.
              </div>
              <ul className="product-single-parameters">
                <li>
                  <span>Book Type :</span>
                  Audio
                </li>
                <li>
                  <span>Publisher :</span>
                  Discovery Book Palace
                </li>
                <li>
                  <span>Language :</span>
                  French
                </li>
                <li>
                  <span>Paperback :</span>
                  180
                </li>
                <li>
                  <span>ISBN-10 :</span>
                  98547152365
                </li>
                <li>
                  <span>Dimension :</span>
                  20 x 14 x 4cm
                </li>
              </ul>
              <div className="product-single-cart">
                <form action="#" className="product-single-cart__form">
                  <input
                    type="number"
                    defaultValue={1}
                    className="product-single-cart__count"
                  />
                  <input
                    type="submit"
                    className="btn product-single-cart__btn"
                    value={"Adding to cart"}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { ProductSingle };
