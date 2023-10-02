function ShopTrust() {
  return (
    <section className="shop-trust">
      <div className="container">
        <div className="shop-trust__wrap">
          <div className="shop-trust-item">
            <div className="shop-trust-item__icon">
              <img src="./images/icons/safety.svg" alt="safety" />
            </div>
            <h2 className="shop-trust-item__title">secure payments</h2>
            <p className="shop-trust-item__content">
              Fully secured SSL technology for safer Checkout option.
            </p>
          </div>
          <div className="shop-trust-item">
            <div className="shop-trust-item__icon">
              <img src="./images/icons/cube.svg" alt="cube" />
            </div>
            <h2 className="shop-trust-item__title">free shipping</h2>
            <p className="shop-trust-item__content">
              Fully safe and fast delivery as soon as possible without any cost.
            </p>
          </div>
          <div className="shop-trust-item">
            <div className="shop-trust-item__icon">
              <img src="./images/icons/lightning.svg" alt="lightning" />
            </div>
            <h2 className="shop-trust-item__title">100% Satisfactions</h2>
            <p className="shop-trust-item__content">
              We're responsible for provide fully satisfied products to our
              customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export { ShopTrust };
