import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { ChaptersList } from "./components/ChaptersList/ChaptersList";
import { ChaptersFreeTrail } from "./components/ChaptersFreeTrail/ChaptersFreeTrail";

function Chapters() {
  return (
    <section className="chapter section-wrap">
      <div className="container">
        <div className="chapter__wrap">
          <SectionTitle>
            <h2>enhance knowledge & vision</h2>
          </SectionTitle>
          <ChaptersList />
          <ChaptersFreeTrail />
        </div>
      </div>
    </section>
  );
}
export { Chapters };
