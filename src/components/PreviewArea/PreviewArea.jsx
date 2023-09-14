function PreviewArea() {
  return (
    <section className="preview-area section-wrap">
      <div className="preview-area__wrap">
        <div className="preview-area__content-wrap">
          <p className="preview-area__subtitle">Welcome to Pages!!!</p>
          <div className="preview-area__title-wrap">
            <h1 className="preview-area__title">
              Books are uniquely <br /> portable magic
            </h1>
            <div className="preview-area__content">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="preview-area__buttons-wrap">
            <button type="button" className="btn preview-area__btn">
              order today
            </button>
            <a href="#!" className="dowland-link">
              read free demo
            </a>
          </div>
          <div className="preview-book-details-wrap">
            <div className="book-details-item">
              <span className="marker book-details-item__marker"></span>
              <div className="book-details-item__content-wrap">
                <h2 className="book-details-item__title">Pages:</h2>
                <p className="book-details-item__content">250pages</p>
              </div>
            </div>
            <div className="book-details-item">
              <span className="marker book-details-item__marker"></span>
              <div className="book-details-item__content-wrap">
                <h2 className="book-details-item__title">Length:</h2>
                <p className="book-details-item__content">10 Hours</p>
              </div>
            </div>
            <div className="book-details-item">
              <span className="marker book-details-item__marker"></span>
              <div className="book-details-item__content-wrap">
                <h2 className="book-details-item__title">Rating:</h2>
                <p className="book-details-item__content">
                  4.5/5 (305 ratings)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="preview-area__image-wrap">
          <img src="./images/books/book_2.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
export { PreviewArea };
