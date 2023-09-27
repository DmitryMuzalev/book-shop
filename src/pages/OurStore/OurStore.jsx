import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Subscription } from '../../components/Subscription/Subscription';

function OurStore() {
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
        {/*      <div className="product-item">
          <a href="!#" className="product-item__image product-image">
            <img src="./images/books/book_1.svg" alt="book_1" />
          </a>
          <div className="product-item__content-wrap">
            <div className="product-item__title-wrap">
              <h3 className="product-item__title">Atomic One’s</h3>
            </div>
          </div>
        </div>*/}
      </section>
      <Subscription />
    </>
  );
}
export { OurStore };
