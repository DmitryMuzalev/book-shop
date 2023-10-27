import { useSelector } from "react-redux";
import { ProductInformation } from "./ProductInformation";
import { ProductSingleCart } from "./ProductSingleCart";
import { ProductSingleParameters } from "./ProductSingleParameters";
import { ShopTrust } from "./ShopTrust";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductSingle() {
  const { booksList } = useSelector((state) => state.books);
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState(booksList[0]);

  useEffect(() => {
    const product = booksList.find((p) => p.id === +id);
    setCurrentProduct(product);
  }, [id]);

  const {
    title,
    cover,
    price,
    annotation,
    details,
    description,
    format,
    "additional info": additionalInfo,
  } = currentProduct;

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
