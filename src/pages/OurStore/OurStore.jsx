import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Subscription } from "../../components/Subscription/Subscription";
import { useSelector } from "react-redux";
import { ProductItem } from "./components/ProductItem/ProductItem";

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
