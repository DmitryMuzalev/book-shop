import clsx from "clsx";
import { Button } from "../../../../components/Button/Button";
import { CustomLink } from "../../../../components/CustomLink/CustomLink";

function ProductItem({ id, title, cover, price, format, annotationMin }) {
  const productItemStyles = clsx(
    "product-item",
    format === "audio" && "product-item_audio",
    format === "audio CD + printed book" && "product-item_cd"
  );
  return (
    <div className={productItemStyles}>
      <CustomLink to={`/product/${id}`} className="product-item__image-wrap">
        <div className="product-item__image">
          <img src={cover} alt={title} />
        </div>
      </CustomLink>
      <div className="product-item__listing">
        <div className="product-item__detail">
          <CustomLink
            to={`/product/${id}`}
            className="product-item__title title"
          >
            {title}
          </CustomLink>
          <div className="product-item__price">{`$ ${price} USD`}</div>
        </div>
        <div className="product-item__content">
          <p className="product-item__annotation">{annotationMin}</p>
          <div className="product-item__format">
            <span className="marker"></span>
            <h3 className="title title_big">{format}</h3>
          </div>
          <Button classes="btn_transparent product-item__btn">Order Now</Button>
        </div>
      </div>
    </div>
  );
}
export { ProductItem };
