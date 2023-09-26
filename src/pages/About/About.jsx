import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

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
    </>
  );
}
export { About };
