import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Button } from "../../../components/Button/Button";
import { useSelector } from "react-redux";

function AuthorInfoSocialNetworks() {
  const { socialNetworks } = useSelector((state) => state.author.contacts);

  return (
    <div className="author-info-social-network">
      <h2 className="author-info-details-item__title title title_big">
        Follow Me On:
      </h2>
      <div className="author-info-social-links">
        {socialNetworks.map((item) => (
          <a
            href={item.url}
            className="author-info-social-links__item"
            key={item.id}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

function AuthorInfoDetails() {
  const { info } = useSelector((state) => state.author);
  const parameters = Object.keys(info);
  return parameters.map((parameter, index) => (
    <div className="author-info-details-item" key={index}>
      <h2 className="author-info-details-item__title title title_big">
        {parameter}:
      </h2>
      <p className="author-info-details-item__info">{info[parameter]}</p>
    </div>
  ));
}

function AuthorInfo() {
  const { name, bio } = useSelector((state) => state.author);
  return (
    <section className="author-info section-wrap">
      <div className="container">
        <div className="author-info__wrap">
          <div className="author-info__image">
            <img
              src="./images/photos/avatar_about_author_2.jpg"
              alt="Dr. John Abraham"
            />
          </div>
          <div className="author-info__content-wrap">
            <div className="author-info-details">
              <AuthorInfoDetails />
              <AuthorInfoSocialNetworks />
            </div>
            <div className="author-info-bio">
              <SectionTitle classes="section-title_left">
                <h2>{name}</h2>
                <p>{bio}</p>
              </SectionTitle>
              <Button classes="author-info-bio__btn">contact now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { AuthorInfo };
