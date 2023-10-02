import { ProductInformation } from "./ProductInformation";
import { ProductSingleCart } from "./ProductSingleCart";
import { ProductSingleParameters } from "./ProductSingleParameters";
import { ShopTrust } from "./ShopTrust";

function ProductSingle() {
  return (
    <>
      <section className="product-single section-wrap">
        <div className="container">
          <div className="product-single__wrap">
            <div className="product-single__image-wrap">
              <div className="product-single__image">
                <img src="../images/books/book_1.svg" alt="book_1" />
              </div>
            </div>
            <div className="product-single__detail">
              <h2 className="product-single__title">Atomic One’s - Audio</h2>
              <div className="product-single__cost">$ 68.97 USD</div>
              <div className="product-single__description paragraph">
                The book contains ample theoretical content as well as a number
                of solved questions, it for sure will help aspirants succeed in
                learning and writing English proficiently.
              </div>

              <ProductSingleParameters />
              <ProductSingleCart />
            </div>
          </div>
          <ProductInformation />
        </div>
      </section>
      <ShopTrust />
    </>
  );
}
export { ProductSingle };
