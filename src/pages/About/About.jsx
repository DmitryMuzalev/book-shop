import { Partners } from "../../components/Partners/Partners";
import { PreviewAuthorsBook } from "../../components/PreviewAuthorsBook/PreviewAuthorsBook";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Subscription } from "../../components/Subscription/Subscription";
import { AuthorInfo } from "./AuthorInfo/AuthorInfo";
import { MyStory } from "./MyStory/MyStory";

function About() {
  return (
    <>
      <section className="page-description">
        <div className="container">
          <SectionTitle>
            <h1 className="page-description__title">About Author</h1>
            <p className="page-description__text">
              Here you can discover how Pages reach this boundary and having{" "}
              <br /> a grown on the principles of writing and the reading.
            </p>
          </SectionTitle>
        </div>
      </section>
      <AuthorInfo />
      <MyStory />
      <PreviewAuthorsBook classes="bg_bl" title="author’s book includes" />
      <Partners />
      <Subscription />
    </>
  );
}
export { About };
