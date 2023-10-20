function ProductSingleParameters({
  isbn10,
  format,
  publisher,
  paperback,
  language,
  dimension,
}) {
  return (
    <ul className="product-single-parameters product-single__parameters">
      <li>
        <span>Book Type :</span>
        {format}
      </li>
      <li>
        <span>Publisher :</span>
        {publisher}
      </li>
      <li>
        <span>Language :</span>
        {language}
      </li>
      <li>
        <span>Paperback :</span>
        {paperback}
      </li>
      <li>
        <span>ISBN-10 :</span>
        {isbn10}
      </li>
      <li>
        <span>Dimension :</span>
        {dimension.join(" x ") + "cm"}
      </li>
    </ul>
  );
}
export { ProductSingleParameters };
