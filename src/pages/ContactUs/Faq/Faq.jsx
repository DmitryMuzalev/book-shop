import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Accordion } from "../../../components/Accordion/Accordion";
import { faqList } from "../../../data/faqList";

function Faq() {
  return (
    <section className="faq section-wrap">
      <div className="container">
        <SectionTitle>
          <h2>frequent questions?</h2>
        </SectionTitle>
        <div className="faq__accordion">
          <Accordion list={faqList} />
        </div>
      </div>
    </section>
  );
}
export { Faq };
