import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { author } from "../../../data/author";

function AchievementsItem({ id, title, description }) {
  return (
    <div className="achievements-item">
      <div className="achievements-item__icon-wrap">
        <h3 className="achievements-item__number">{id < 10 ? `0${id}` : id}</h3>
      </div>
      <div className="achievements-item__content-wrap">
        <h3 className="achievements-item__title title_big">{title}</h3>
        <p className="achievements-item__content">{description}</p>
      </div>
    </div>
  );
}

function MyStory() {
  return (
    <section className="my-story section-wrap">
      <div className="container">
        <div className="my-story__wrap">
          <div className="my-story__content-wrap">
            <SectionTitle isLeft={true}>
              <h2>My story</h2>
              <p>{author.aboutMe}</p>
            </SectionTitle>
            <div className="achievements">
              {author.achievements.map((achievement) => (
                <AchievementsItem {...achievement} key={achievement.id} />
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
