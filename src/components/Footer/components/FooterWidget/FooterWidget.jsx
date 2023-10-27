import { CustomLink } from "../../../CustomLink/CustomLink";

function FooterWidget({ title, linksPages }) {
  return (
    <div className="footer-widget">
      <h3 className="footer__title title title_big">{title}</h3>
      <div className="footer-widget__links-wrap">
        {linksPages.map((page, i) => (
          <CustomLink to={page.url} className="footer-widget__link" key={i}>
            {page.label}
          </CustomLink>
        ))}
      </div>
    </div>
  );
}
export { FooterWidget };
