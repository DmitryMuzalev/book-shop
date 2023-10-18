import { SectionTitle } from "../../../../components/SectionTitle/SectionTitle";
import { Accordion } from "../../../../components/Accordion/Accordion";
import { useSelector } from "react-redux";

function Faq() {
  const { faqList } = useSelector((state) => state.faq);
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
