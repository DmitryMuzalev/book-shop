import { useSelector } from "react-redux";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

function AwardsItem({ id, title, description }) {
  return (
    <div className="awards-item">
      <div className="awards-item__icon-wrap">
        <h3 className="awards-item__number">{id < 10 ? `0${id}` : id}</h3>
      </div>
      <div className="awards-item__content-wrap">
        <h3 className="awards-item__title title_big">{title}</h3>
        <p className="awards-item__content">{description}</p>
      </div>
    </div>
  );
}

function MyStory() {
  const { aboutMe, awards } = useSelector((state) => state.author);

  return (
    <section className="my-story section-wrap">
      <div className="container">
        <div className="my-story__wrap">
          <div className="my-story__content-wrap">
            <SectionTitle isLeft={true}>
              <h2>My story</h2>
              <p>{aboutMe}</p>
            </SectionTitle>
            <div className="awards">
              {awards.map((achievement) => (
                <AwardsItem {...achievement} key={achievement.id} />
              ))}
            </div>
          </div>
          <div className="my-story__image">
            <img
              src="./images/photos/avatar_about_author_3.jpg"
              alt="About Dr. John Abraham"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { MyStory };
