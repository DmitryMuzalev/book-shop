import { Frame } from "../../../components/Frame/Frame";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

import { BusinessCard } from "./components/BusinessCard/BusinessCard";
import { AboutAuthorDetails } from "./components/AboutAuthorDetails/AboutAuthorDetails";

function AboutAuthor() {
  const authorData = {
    name: "John Abraham , Ph.d",
    avatar: "./images/photos/avatar_about_author.jpg",
    contacts: {
      email: "johnabraham@gmail.com",
      phone: "(+2) 123 545 9000",
      qrCode: "./images/other/qr_code.svg",
    },
    details: {
      quantityBooks: 2,
      rating: 4.5,
      awards: 4,
    },
  };

  return (
    <section className="about-author section-wrap">
      <div className="container">
        <div className="about-author__wrap section-grid">
          <Frame
            classes="about-author__image-wrap"
            image={authorData.avatar}
            label={authorData.name}
          />
          <div className="about-author__content-wrap">
            <SectionTitle classes="section-title_left">
              <h2>About the Author</h2>
              <p>
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers, where we
                discover new writers, where children get hooked on the thrill of
                reading that can last a lifetime.
              </p>
            </SectionTitle>
            <AboutAuthorDetails {...authorData.details} />
            <BusinessCard
              classes="about-author__business-card"
              name={authorData.name}
              {...authorData.contacts}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export { AboutAuthor };
