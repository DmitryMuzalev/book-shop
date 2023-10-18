import { Frame } from "../../../components/Frame/Frame";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

import { BusinessCard } from "./components/BusinessCard/BusinessCard";
import { AboutAuthorDetails } from "./components/AboutAuthorDetails/AboutAuthorDetails";
import { useSelector } from "react-redux";

function AboutAuthor() {
  const { name, photos, contacts, aboutMe, details } = useSelector(
    (state) => state.author
  );

  return (
    <section className="about-author section-wrap">
      <div className="container">
        <div className="about-author__wrap section-grid">
          <Frame
            classes="about-author__image-wrap"
            image={photos[0]}
            label={name}
          />
          <div className="about-author__content-wrap">
            <SectionTitle classes="section-title_left">
              <h2>About the Author</h2>
              <p>{aboutMe}</p>
            </SectionTitle>
            <AboutAuthorDetails {...details} />
            <BusinessCard
              classes="about-author__business-card"
              name={name}
              {...contacts}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export { AboutAuthor };
