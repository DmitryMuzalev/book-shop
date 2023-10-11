function PreviewBookDetails({ details }) {
  const detailsList = Object.keys(details);

  return (
    <div className="preview-book-details-wrap">
      {detailsList.map((item, i) => (
        <div className="book-details-item" key={i}>
          <span className="marker book-details-item__marker"></span>
          <div className="book-details-item__content-wrap">
            <h2 className="book-details-item__title title title_big">
              {item}:
            </h2>
            <p className="book-details-item__content">{details[item]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { PreviewBookDetails };
