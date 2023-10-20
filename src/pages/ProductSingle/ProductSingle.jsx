import { useSelector } from "react-redux";
import { ProductInformation } from "./ProductInformation";
import { ProductSingleCart } from "./ProductSingleCart";
import { ProductSingleParameters } from "./ProductSingleParameters";
import { ShopTrust } from "./ShopTrust";

function ProductSingle() {
  const { booksList } = useSelector((state) => state.books);

  const {
    title,
    cover,
    price,
    annotation,
    details,
    description,
    format,
    "additional info": additionalInfo,
  } = booksList[0];

  return (
    <>
      <section className="product-single section-wrap">
        <div className="container">
          <div className="product-single__wrap">
            <div className="product-single__image-wrap">
              <div className="product-single__image">
                <img src={cover} alt={title} />
              </div>
            </div>
            <div className="product-single__detail">
              <h2 className="product-single__title">{title}</h2>
              <div className="product-single__cost">{`$ ${price} USD`}</div>
              <div className="product-single__description paragraph">
                {annotation}
              </div>

              <ProductSingleParameters {...details} format={format} />
              <ProductSingleCart />
            </div>
          </div>
          <ProductInformation
            description={description}
            additionalInfo={additionalInfo}
          />
        </div>
      </section>
      <ShopTrust />
    </>
  );
}
export { ProductSingle };
