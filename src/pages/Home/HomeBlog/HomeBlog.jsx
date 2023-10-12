import { Articles } from "../../../components/Articles/Articles";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { articles } from "../../../data/articles";

function HomeBlog() {
  const articlesList = articles.slice(0, 3);

  return (
    <section className="home-blog section-wrap">
      <div className="container">
        <div className="home-blog__wrap">
          <SectionTitle>
            <h2>Articles & Resources</h2>
          </SectionTitle>
          <Articles articles={articlesList} />
        </div>
      </div>
    </section>
  );
}
export { HomeBlog };
