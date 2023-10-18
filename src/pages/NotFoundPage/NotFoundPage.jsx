import { Button } from "../../components/Button/Button";

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="not-found-page__wrap">
        <h2 className="not-found-page__title">404</h2>
        <h3 className="not-found-page__subtitle">page not found!!!</h3>
        <p className="not-found-page__content">
          The page you are looking for doesn't exist. Please try searching for
          some other page, or return to the website's homepage to find what
          you're looking for.
        </p>
        <Button classes="not-found-page__btn">back to home</Button>
      </div>
    </section>
  );
}
export { NotFoundPage };
