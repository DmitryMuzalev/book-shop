import clsx from "clsx";

function BusinessCard({ classes, name, email, phone, qrCode }) {
  const businessCardStyles = clsx("business-card", classes);

  return (
    <div className={businessCardStyles}>
      <div className="business-card__qr-code">
        <img src={qrCode} alt="QR-code" />
      </div>
      <div className="business-card__content-wrap">
        <h3 className="business-card__title">{name}</h3>
        <div className="business-card__contact">
          <p>
            Mail:
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <div className="business-card__contact">
          <p>
            Phone: <a href={`tel:${phone}`}>{phone}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export { BusinessCard };
