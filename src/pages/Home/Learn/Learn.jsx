import { useSelector } from "react-redux";
import { Frame } from "../../../components/Frame/Frame";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

function LearnStep({ number, description }) {
  return (
    <div className="learn-step title_big">
      <div className="learn-step__number">
        <h3>{number < 10 ? `0${number}` : number}</h3>
      </div>
      <h4 className="learn-step__description">{description}</h4>
    </div>
  );
}

function Learn() {
  const { learnSteps } = useSelector((state) => state.learn);
  return (
    <section className="learn section-wrap">
      <div className="container">
        <SectionTitle>
          <h2>what will you learn?</h2>
        </SectionTitle>
        <div className="learn__wrap">
          <div className="learn__content-wrap">
            {learnSteps.map((step) => (
              <LearnStep {...step} key={step.number} />
            ))}
          </div>
          <div className="learn__image-wrap">
            <Frame
              image="./images/other/woman_and_book.jpg"
              label="Woman and book"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export { Learn };
