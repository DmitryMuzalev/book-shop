function ProductSingleCart() {
  return (
    <div className="product-single-cart">
      <form action="#" className="product-single-cart__form">
        <input
          type="number"
          defaultValue={1}
          min={1}
          className="product-single-cart__count"
        />
        <input
          type="submit"
          className="btn product-single-cart__btn"
          value={"Adding to cart"}
        />
      </form>
    </div>
  );
}
export { ProductSingleCart };
