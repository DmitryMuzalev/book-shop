import { clsx } from "clsx";
import { Button } from "../../components/Button/Button";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Subscription } from "../../components/Subscription/Subscription";
import { useSelector } from "react-redux";

function ProductItem({ title, cover, price, format, annotationMin }) {
  const productItemStyles = clsx(
    "product-item",
    format === "audio" && "product-item_audio",
    format === "audio CD + printed book" && "product-item_cd"
  );

  return (
    <div className={productItemStyles}>
      <a href="#!" className="product-item__image-wrap">
        <div className="product-item__image">
          <img src={cover} alt={title} />
        </div>
      </a>
      <div className="product-item__listing">
        <div className="product-item__detail">
          <a href="#!" className="product-item__title title">
            {title}
          </a>
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

function OurStore() {
  const { booksList } = useSelector((store) => store.books);

  return (
    <>
      <section className="page-description">
        <SectionTitle>
          <h2 className="page-description__title">Our Store</h2>
          <p className="page-description__text">
            We believe that bookstores are essential to a healthy <br />
            culture around readers & authors.
          </p>
        </SectionTitle>
      </section>

      <section className="product-store">
        <div className="container">
          <div className="product-store__wrap">
            {booksList.map((book) => (
              <ProductItem {...book} key={book.id} />
            ))}
          </div>
        </div>
      </section>

      <Subscription />
    </>
  );
}
export { OurStore };
