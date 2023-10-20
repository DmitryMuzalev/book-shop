import { useSelector } from "react-redux";

function ShopTrustItem({ icon, title, description }) {
  return (
    <div className="shop-trust-item">
      <div className="shop-trust-item__icon">
        <img src={icon} alt={title} />
      </div>
      <h2 className="shop-trust-item__title">{title}</h2>
      <p className="shop-trust-item__content">{description}</p>
    </div>
  );
}

function ShopTrust() {
  const { reasonsTrustList } = useSelector((state) => state.reasonsTrust);

  return (
    <section className="shop-trust">
      <div className="container">
        <div className="shop-trust__wrap">
          {reasonsTrustList.map((trustItem, index) => (
            <ShopTrustItem {...trustItem} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
export { ShopTrust };
