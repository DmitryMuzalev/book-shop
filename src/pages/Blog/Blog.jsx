import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Articles } from "../../components/Articles/Articles";
import { useSelector } from "react-redux";

function Blog() {
  const { articlesList } = useSelector((state) => state.articles);

  return (
    <>
      <section className="page-description">
        <SectionTitle>
          <h2 className="page-description__title">Articles</h2>
          <p className="page-description__text">
            Every single details in the book store like offers latest news about
            the events <br /> has more attractive and provide a seamless user
            experience.
          </p>
        </SectionTitle>
      </section>

      <section className="blog section-wrap">
        <div className="container">
          <Articles articles={articlesList} withFilter={true} />
        </div>
      </section>
    </>
  );
}
export { Blog };
