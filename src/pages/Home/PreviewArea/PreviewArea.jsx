import { useSelector } from "react-redux";
import { Button } from "../../../components/Button/Button";
import { PreviewBookDetails } from "./components/PreviewBookDetails/PreviewBookDetails";

function PreviewArea() {
  const { title, cover, details } = useSelector(
    (state) => state.author.books[0]
  );

  const parameters = {
    pages: `${details.paperback} pages`,
    length: `${details.length} hours`,
    rating: `${details.rating}/5 (${details.ratingCounter} ratings)`,
  };

  return (
    <section className="preview-area">
      <div className="container">
        <div className="preview-area__wrap">
          <div className="preview-area__content-wrap">
            <p className="preview-area__subtitle title title_big">
              Welcome to Pages!!!
            </p>
            <div className="preview-area__title-wrap">
              <h1 className="preview-area__title title">
                Books are uniquely portable magic
              </h1>
              <div className="preview-area__content">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>

            <div className="preview-area__buttons-wrap">
              <Button classes="preview-area__btn">order today</Button>
              <Button classes="btn_download">read free demo</Button>
            </div>

            <PreviewBookDetails details={parameters} />
          </div>
          <div className="preview-area__image-wrap">
            <img src={cover} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
}
export { PreviewArea };
