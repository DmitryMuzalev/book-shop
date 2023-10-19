import { useSelector } from "react-redux";
import { Button } from "../../../Button/Button";

function AuthorsBookItem({ cover, title, price, annotationMin, format }) {
  return (
    <div className="authors-book-item">
      <a href="#!" className="authors-book-item__image">
        <img src={cover} alt={title} />
      </a>
      <div className="authors-book-item__listing">
        <div className="authors-book-item__detail">
          <a href="#!" className="authors-book-item__title title">
            {title}
          </a>
          <div className="authors-book-item__price">{`$ ${price} USD`}</div>
        </div>
        <div className="authors-book-item__content">
          <p className="authors-book-item__annotation">{annotationMin}</p>
          <div className="authors-book-item__format">
            <span className="marker"></span>
            <h3 className="title title_big">{format}</h3>
          </div>
          <Button classes="btn_transparent authors-book-item__btn">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}

function AuthorsBook() {
  const { booksList } = useSelector((state) => state.books);

  const printedBooks = booksList.filter(
    (book) => book.format === "printed book"
  );

  return (
    <div className="authors-book">
      <ul className="authors-book__content">
        {printedBooks.map((book) => {
          return (
            <li key={book.id}>
              <AuthorsBookItem {...book} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { AuthorsBook };
