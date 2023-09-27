import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

function MyStory() {
  return (
    <section className="my-story section-wrap">
      <div className="container">
        <div className="my-story__wrap">
          <div className="my-story__content-wrap">
            <SectionTitle isLeft={true}>
              <h2>My story</h2>
              <p>
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers, where we
                discover new writers, where children get hooked on the thrill of
                reading.
              </p>
            </SectionTitle>
            <div className="story-steps-wrap">
              <div className="story-steps-item">
                <div className="story-steps-item__icon-wrap">
                  <h3 className="story-steps-item__number">01</h3>
                </div>
                <div className="story-steps-item__content-wrap">
                  <h3 className="story-steps-item__title  title_big">
                    Great Author Awards - 2006
                  </h3>
                  <p className="story-steps-item__content">
                    Won a best author of the year for my second & fourth book
                    about the science fiction.
                  </p>
                </div>
              </div>
              <div className="story-steps-item">
                <div className="story-steps-item__icon-wrap">
                  <h3 className="story-steps-item__number">02</h3>
                </div>
                <div className="story-steps-item__content-wrap">
                  <h3 className="story-steps-item__title  title_big">
                    Highest Rating For a Book - 2008
                  </h3>
                  <p className="story-steps-item__content">
                    All of my books are rated highly from the book publisher and
                    also from the readers.
                  </p>
                </div>
              </div>
              <div className="story-steps-item">
                <div className="story-steps-item__icon-wrap">
                  <h3 className="story-steps-item__number">03</h3>
                </div>
                <div className="story-steps-item__content-wrap">
                  <h3 className="story-steps-item__title  title_big">
                    Highest Paid Author- 2014
                  </h3>
                  <p className="story-steps-item__content">
                    Highest paid author for the decade based on the number of
                    selling books and novels.
                  </p>
                </div>
              </div>
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
