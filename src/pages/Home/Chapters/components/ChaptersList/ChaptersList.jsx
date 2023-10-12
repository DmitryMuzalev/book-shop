import { chapters } from "../../../../../data/chapters";

function ChapterItem({ title, description, details }) {
  return (
    <div className="chapter-item">
      <h3 className="chapter-item__title title_big">{title}</h3>
      <div className="chapter-item__content">
        <p>{description}</p>
      </div>
      <ChapterItemDetails details={details} />
    </div>
  );
}

function ChapterItemDetails({ details }) {
  const detailsList = Object.keys(details);
  return (
    <div className="chapter-details">
      {detailsList.map((item, i) => (
        <div className="chapter-detail-item" key={i}>
          <div className="marker"></div>
          <p className="chapter-detail-item__content">
            <span className="chapter-detail-item__title title title_small">
              {item} :{" "}
            </span>
            {details[item]}
          </p>
        </div>
      ))}
    </div>
  );
}

function ChaptersList() {
  return (
    <div className="chapters-list">
      {chapters.map((chapter) => (
        <ChapterItem {...chapter} key={chapter.id} />
      ))}
    </div>
  );
}

export { ChaptersList };
