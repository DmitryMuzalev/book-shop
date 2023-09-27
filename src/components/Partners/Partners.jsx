import { SectionTitle } from "../SectionTitle/SectionTitle";

function Partners() {
  return (
    <section className="partners section-wrap">
      <div className="container">
        <div className="partners__wrap">
          <SectionTitle>
            <h2>trusted by the best</h2>
          </SectionTitle>
          <ul className="partners__list">
            <li className="partners__item partner">
              <div className="partner__logo">
                <img
                  src="./images/partners/amazen_corp_logo.svg"
                  alt="Amazen"
                />
              </div>
              <h3 className="partner__name title_big">Amazen Corp</h3>
              <div className="partner__description">
                <p>A long established fact that a who looking at its layout.</p>
              </div>
            </li>
            <li className="partners__item partner">
              <div className="partner__logo">
                <img
                  src="./images/partners/megan_books_logo.svg"
                  alt="Megan Books"
                />
              </div>
              <h3 className="partner__name title_big">Megan Books</h3>
              <div className="partner__description">
                <p>
                  We help physical bookstores manage their overstock to the book
                  inventory.
                </p>
              </div>
            </li>
            <li className="partners__item partner">
              <div className="partner__logo">
                <img src="./images/partners/los_books_logo.svg" alt="Megank" />
              </div>
              <h3 className="partner__name title_big">Megank</h3>
              <div className="partner__description">
                <p>
                  Bookstore serving up the full spectrum of Black literature and
                  wine black books.
                </p>
              </div>
            </li>
            <li className="partners__item partner">
              <div className="partner__logo">
                <img
                  src="./images/partners/urban_lib_logo.svg"
                  alt="Urban Store"
                />
              </div>
              <h3 className="partner__name title_big">Urban Store</h3>
              <div className="partner__description">
                <p>
                  We also carry the latest records, issues of all of your
                  favorite comic books.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export { Partners };
