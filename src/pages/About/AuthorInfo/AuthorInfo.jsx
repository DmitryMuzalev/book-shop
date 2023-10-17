import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Button } from "../../../components/Button/Button";
import { author } from "../../../data/author";

function AuthorInfoSocialNetwork() {
  return (
    <div className="author-info-social-network">
      <h2 className="author-info-details-item__title title title_big">
        Follow Me On:
      </h2>
      <div className="author-info-social-links">
        {author.socialNetwork.map((item) => (
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
  const info = author.info;
  const parameters = Object.keys(info);
  return parameters.map((parameter) => (
    <div className="author-info-details-item">
      <h2 className="author-info-details-item__title title title_big">
        {parameter}:
      </h2>
      <p className="author-info-details-item__info">{info[parameter]}</p>
    </div>
  ));
}

function AuthorInfo() {
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
              <AuthorInfoSocialNetwork />
            </div>
            <div className="author-info-bio">
              <SectionTitle isLeft={true}>
                <h2>{author.name}</h2>
                <p>{author.bio}</p>
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
