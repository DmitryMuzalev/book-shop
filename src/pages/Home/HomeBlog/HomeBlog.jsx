import { useSelector } from "react-redux";
import { Articles } from "../../../components/Articles/Articles";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

function HomeBlog() {
  const { articlesList } = useSelector((state) => state.articles);

  return (
    <section className="home-blog section-wrap">
      <div className="container">
        <div className="home-blog__wrap">
          <SectionTitle>
            <h2>Articles & Resources</h2>
          </SectionTitle>
          <Articles articles={articlesList.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
}
export { HomeBlog };
