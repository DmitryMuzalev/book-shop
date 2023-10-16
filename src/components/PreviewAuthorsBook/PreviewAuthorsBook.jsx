import { clsx } from "clsx";

import { books } from "../../data/books";

import { AuthorsBook } from "./components/AuthorsBook/AuthorsBook";
import { SectionTitle } from "../SectionTitle/SectionTitle";

function PreviewAuthorsBook({ title, classes }) {
  const previewAuthorsBookStyles = clsx(
    "preview-authors-book",
    "section-wrap",
    classes
  );

  return (
    <section className={previewAuthorsBookStyles}>
      <div className="container">
        <div className="preview-authors-book__wrap">
          <SectionTitle>
            <h2>{title}</h2>
          </SectionTitle>
          <AuthorsBook books={books} />
        </div>
      </div>
    </section>
  );
}
export { PreviewAuthorsBook };
