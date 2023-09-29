import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Subscription } from "../../components/Subscription/Subscription";

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
        <div className="container">
          <div className="product-store__wrap">
            <div className="product-item ">
              <a href="#!" className="product-item__image-wrap">
                <div className="product-item__image">
                  <img src="./images/books/book_1.svg" alt="book_1" />
                </div>
              </a>
              <div className="product-item__listing">
                <div className="product-item__detail">
                  <a href="#!" className="product-item__title title">
                    Atomic One’s
                  </a>
                  <div className="product-item__price">{`$ ${13.84} USD`}</div>
                </div>
                <div className="product-item__content">
                  <p className="product-item__annotation">
                    As the book contains theoretical content as well as solved
                    questions.
                  </p>
                  <div className="product-item__format">
                    <span className="marker"></span>
                    <h3 className="title title_big">Printed Book</h3>
                  </div>
                  <button className="btn btn_transparent product-item__btn">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="product-item product-item_audio">
              <a href="#!" className="product-item__image-wrap">
                <div className="product-item__image">
                  <img src="./images/books/book_1.svg" alt="book_1" />
                </div>
              </a>
              <div className="product-item__listing">
                <div className="product-item__detail">
                  <a href="#!" className="product-item__title title">
                    Atomic One’s
                  </a>
                  <div className="product-item__price">{`$ ${13.84} USD`}</div>
                </div>
                <div className="product-item__content">
                  <p className="product-item__annotation">
                    As the book contains theoretical content as well as solved
                    questions.
                  </p>
                  <div className="product-item__format">
                    <span className="marker"></span>
                    <h3 className="title title_big">Printed Book</h3>
                  </div>
                  <button className="btn btn_transparent product-item__btn">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="product-item product-item_cd">
              <a href="#!" className="product-item__image-wrap">
                <div className="product-item__image">
                  <img src="./images/books/book_1.svg" alt="book_1" />
                </div>
              </a>
              <div className="product-item__listing">
                <div className="product-item__detail">
                  <a href="#!" className="product-item__title title">
                    Atomic One’s
                  </a>
                  <div className="product-item__price">{`$ ${13.84} USD`}</div>
                </div>
                <div className="product-item__content">
                  <p className="product-item__annotation">
                    As the book contains theoretical content as well as solved
                    questions.
                  </p>
                  <div className="product-item__format">
                    <span className="marker"></span>
                    <h3 className="title title_big">Printed Book</h3>
                  </div>
                  <button className="btn btn_transparent product-item__btn">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="product-item ">
              <a href="#!" className="product-item__image-wrap">
                <div className="product-item__image">
                  <img src="./images/books/book_1.svg" alt="book_1" />
                </div>
              </a>
              <div className="product-item__listing">
                <div className="product-item__detail">
                  <a href="#!" className="product-item__title title">
                    Atomic One’s
                  </a>
                  <div className="product-item__price">{`$ ${13.84} USD`}</div>
                </div>
                <div className="product-item__content">
                  <p className="product-item__annotation">
                    As the book contains theoretical content as well as solved
                    questions.
                  </p>
                  <div className="product-item__format">
                    <span className="marker"></span>
                    <h3 className="title title_big">Printed Book</h3>
                  </div>
                  <button className="btn btn_transparent product-item__btn">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="product-item product-item_audio">
              <a href="#!" className="product-item__image-wrap">
                <div className="product-item__image">
                  <img src="./images/books/book_1.svg" alt="book_1" />
                </div>
              </a>
              <div className="product-item__listing">
                <div className="product-item__detail">
                  <a href="#!" className="product-item__title title">
                    Atomic One’s
                  </a>
                  <div className="product-item__price">{`$ ${13.84} USD`}</div>
                </div>
                <div className="product-item__content">
                  <p className="product-item__annotation">
                    As the book contains theoretical content as well as solved
                    questions.
                  </p>
                  <div className="product-item__format">
                    <span className="marker"></span>
                    <h3 className="title title_big">Printed Book</h3>
                  </div>
                  <button className="btn btn_transparent product-item__btn">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="product-item product-item_cd">
              <a href="#!" className="product-item__image-wrap">
                <div className="product-item__image">
                  <img src="./images/books/book_1.svg" alt="book_1" />
                </div>
              </a>
              <div className="product-item__listing">
                <div className="product-item__detail">
                  <a href="#!" className="product-item__title title">
                    Atomic One’s
                  </a>
                  <div className="product-item__price">{`$ ${13.84} USD`}</div>
                </div>
                <div className="product-item__content">
                  <p className="product-item__annotation">
                    As the book contains theoretical content as well as solved
                    questions.
                  </p>
                  <div className="product-item__format">
                    <span className="marker"></span>
                    <h3 className="title title_big">Printed Book</h3>
                  </div>
                  <button className="btn btn_transparent product-item__btn">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscription />
    </>
  );
}
export { OurStore };
