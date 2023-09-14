import { SectionTitle } from "../SectionTitle/SectionTitle";

const books = [
  {
    id: 1,
    image: "./images/books/book_1.svg",
    title: "atomic one’s",
    price: 13.84,
    annotation:
      "As the book contains theoretical content as well as solved questions.",
    format: "printed book",
  },
  {
    id: 2,
    image: "./images/books/book_2.svg",
    title: "the dark light",
    price: 86.11,
    annotation:
      "As the book contains theoretical content as well as solved questions.",
    format: "printed book",
  },
];

function BookCollectionItem({ image, title, price, annotation, format }) {
  return (
    <div className="book-collection-item">
      <a href="#!" className="book-collection-item__image">
        <img src={image} alt={title} />
      </a>
      <div className="book-collection-item__listing">
        <div className="book-collection-item__detail">
          <a href="#!" className="book-collection-item__title">
            {title}
          </a>
          <div className="book-collection-item__price">{`$ ${price} USD`}</div>
        </div>
        <div className="book-collection-item__content">
          <p className="book-collection-item__annotation">{annotation}</p>
          <div className="book-collection-item__format">
            <span className="marker"></span>
            <h3>{format}</h3>
          </div>
          <button className="btn btn_transparent book-collection-item__btn">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

function AuthorsBook() {
  return (
    <section className="authors-book section-wrap">
      <div className="container">
        <div className="authors-book__wrap">
          <SectionTitle>
            <h2>the author’s book</h2>
          </SectionTitle>
          <ul className="book-collection authors-book__content">
            {books.map((book) => {
              return (
                <li key={book.id}>
                  <BookCollectionItem {...book} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
export { AuthorsBook };
