import { SectionTitle } from "../SectionTitle/SectionTitle";

function Learn() {
  return (
    <section className="learn section-wrap">
      <div className="container">
        <SectionTitle>
          <h2>what will you learn?</h2>
        </SectionTitle>
        <div className="learn__wrap">
          <div className="learn__content-wrap">
            <div className="learn-step">
              <div className="learn-step__number">
                <span>01</span>
              </div>
              <h4 className="learn-step__description">
                Use HDFS & Map Reduce for storing & analyzing data at scale.
              </h4>
            </div>
            <div className="learn-step">
              <div className="learn-step__number">
                <span>02</span>
              </div>
              <h4 className="learn-step__description">
                Consume streaming data using Spark Streaming, Flink, and Storm.
              </h4>
            </div>
            <div className="learn-step">
              <div className="learn-step__number">
                <span>03</span>
              </div>
              <h4 className="learn-step__description">
                Choose an appropriate data storage technology for your
                application.
              </h4>
            </div>
            <div className="learn-step">
              <div className="learn-step__number">
                <span>04</span>
              </div>
              <h4 className="learn-step__description">
                Analyze non-relational data using HBase, Cassandra, and MongoDB.
              </h4>
            </div>
          </div>
          <div className="learn__image-wrap">
            <div className="learn__image-border image-border">
              <img
                src="./images/other/woman_and_book.jpg"
                alt="Woman and book"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Learn };
