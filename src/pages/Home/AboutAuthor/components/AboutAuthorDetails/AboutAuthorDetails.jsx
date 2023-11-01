function AboutAuthorDetails({ quantityBooks, rating, awards }) {
  const details = {
    "books published": quantityBooks,
    "user reviews": rating,
    "best seller awards": awards,
  };

  const detailsList = Object.keys(details);

  return (
    <div className="about-author__details">
      {detailsList.map((item, i) => (
        <div className="about-author__details-item" key={i}>
          <div className="about-author-detail">
            <div className="about-author-detail__content title">
              {details[item] < 10 && !(details[item] % 2)
                ? `0${details[item]}`
                : details[item]}
            </div>
            <h3 className="about-author-detail__title">{item}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
export { AboutAuthorDetails };
