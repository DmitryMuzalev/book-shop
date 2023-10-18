import { useSelector } from "react-redux";
import { SectionTitle } from "../SectionTitle/SectionTitle";

function PartnersItem({ name, logo, description }) {
  return (
    <li className="partner-item">
      <div className="partner-item__logo">
        <img src={logo} alt={name} />
      </div>
      <h3 className="partner-item__name title_big">{name}</h3>
      <div className="partner-item__description">
        <p>{description}</p>
      </div>
    </li>
  );
}

function Partners() {
  const { partnersList } = useSelector((state) => state.partners);

  return (
    <section className="partners section-wrap">
      <div className="container">
        <div className="partners__wrap">
          <SectionTitle>
            <h2>trusted by the best</h2>
          </SectionTitle>
          <ul className="partners__list">
            {partnersList.map((partner) => (
              <PartnersItem {...partner} key={partner.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export { Partners };
